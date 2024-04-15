---
layout: Post
title: Azure API Management (APIM)
subtitle: Quick walk through Azure apim
author: WilberC
date: 2024-04-14
useHeaderImage: true
headerImage: /img/in-post/2023-08-19/header.jpg
headerMask: rgb(14, 21, 5, .2)
permalinkPattern: /post/:year/:month/:day/:slug/
tags:
  - azure
  - apim
  - api
  - api management
---

# Creating the API Management

Well to create the APIM is really quick as in all cloud services, so I prefer you to continue with
the [official doc](https://learn.microsoft.com/en-us/azure/api-management/get-started-create-service-instance),
for that reason we will start here: <br/>

![APIM-Home-Screen](https://github.com/WilberC/blog.wilberc.io/assets/27011395/0b94555b-5f39-456d-a881-e6a63d26be82)

## Setting up the API Endpoint

Let's modify the `Echo API` endpoints.

![API-Operations](https://github.com/WilberC/blog.wilberc.io/assets/27011395/a5385ecb-b29f-4bf2-a777-20f80366dd53)

## Policies base structure

This is the base structure of a police in where we have the `Inbound` -> `Backend` -> `Output` and at the end `Error`.
Let's explain what each part is in charge of:

- `policies`:
- `inbound`: This section contains policies that are applied to incoming requests before they reach the backend service.
- `backend`: This section contains policies that are applied to requests before they are sent to the backend service.
- `outbound`: This section contains policies that are applied to responses before they are sent back to the client.
- `on-error`: This section contains policies that are applied to responses before they are sent back to the client.
- `base`:  This is a reference to default policies at the corresponding policy tag.

```xml

<policies>
    <inbound>
        <base/>
    </inbound>
    <backend>
        <base/>
    </backend>
    <outbound>
        <base/>
    </outbound>
    <on-error>
        <base/>
    </on-error>
</policies>
```

---

### Making our Policy

- Now Knowing the XML structure of a policy now we can start doing ours own custom policy. So
  let's `get the fingerprint of a cert file every we have a request`

#### V1

- Here's a simple custom policy that get fingerprint and returns it into the header in case the request is Ok, but also
  in Error

```xml

<policies>
    <!-- As we know the first step is to intercept the request inbound for this case -->
    <inbound>
        <base/>
        <!-- We get the fingerprint value and set to receivedFingerprint variable -->
        <set-variable name="receivedFingerprint" value="@(context.Request.Certificate?.Thumbprint)"/>
    </inbound>
    <backend>
        <!-- We don't do anything at the backend for this case. So let it work as expected -->
        <base/>
    </backend>
    <outbound>
        <base/>
        <!-- Let's return the fingerprint we get into the headers as Received-Fingerprint -->
        <set-header name="Received-Fingerprint" exists-action="override">
            <!-- Here we're getting the value of the variable we defined in the inbound step -->
            <value>@((string)context.Variables["receivedFingerprint"])</value>
        </set-header>
    </outbound>
    <on-error>
        <!-- We're going to return the fingerprint in the error header too, because it can be helpful, but you can omit it if you want-->
        <base/>
        <set-header name="Received-Fingerprint" exists-action="override">
            <value>@((string)context.Variables["receivedFingerprint"])</value>
        </set-header>
    </on-error>
</policies>
```

#### V2

- Now let's modify the policy a little to give us more information at the response

```xml
<policies>
    <inbound>
        <base />
        <set-variable name="receivedFingerprint" value="@(context.Request.Certificate?.Thumbprint)" />
    </inbound>
    <backend>
        <base />
    </backend>
    <outbound>
        <base />
        <!-- Here starts our conditional so the idea is to return fingerprint if it's present otherwise set default value -->
        <choose>
            <when condition="@(context.Variables["receivedFingerprint"] != null)">
                <!-- If "receivedFingerprint" variable is found and not null, set the header with its value -->
                <set-header name="Received-Fingerprint" exists-action="override">
                    <value>@((string)context.Variables["receivedFingerprint"])</value>
                </set-header>
            </when>
            <otherwise>
                <!-- If "receivedFingerprint" variable is not found or null, set a default value -->
                <set-header name="Received-Fingerprint" exists-action="override">
                    <value>finger-print-not-found</value>
                </set-header>
            </otherwise>
        </choose>
    </outbound>
    <on-error>
        <base />
        <!-- Same idea as the outbound, but in error case -->
        <choose>
            <when condition="@(context.Variables["receivedFingerprint"] != null)">
                <!-- If "receivedFingerprint" variable is found and not null, set the header with its value -->
                <set-header name="Received-Fingerprint" exists-action="override">
                    <value>@((string)context.Variables["receivedFingerprint"])</value>
                </set-header>
            </when>
            <otherwise>
                <!-- If "receivedFingerprint" variable is not found or null, set a default value -->
                <set-header name="Received-Fingerprint" exists-action="override">
                    <value>finger-print-not-found</value>
                </set-header>
            </otherwise>
        </choose>
    </on-error>
</policies>
```

#### V3

- For this third version let's make a little more interesting and let's add the possible to validate if the fingerprint
  user is sending a fingerprint that is registered at the policy and also give more context responding a JSON at the
  body too

```xml
<policies>
    <inbound>
        <base />
        <!-- Fingerprint sent by user's request-->
        <set-variable name="receivedFingerprint" value="@(context.Request.Certificate?.Thumbprint)" />
        <!-- Declare a list of strings where each value is a fingerprint value -->
        <!-- Remember that when saving the XML at APIM encode it's base to html that's why &apos; is valid -->
        <!-- and many times this type of declaration will save our lives -->
        <set-variable name="allowedFingerprints" value="[&apos;2C44ADA1234BB1EC62C8B204E95A5aAA3414674CC&apos;,&apos;2&apos;]" />
        <choose>
            <!-- First we validate that fingerprint is sent and if not, simple return the error. -->
            <when condition="@(string.IsNullOrEmpty(context.Variables["receivedFingerprint"] as string))">
                <return-response>
                    <!-- We return 400 http status code with the corresponding header that fingerprint is not sent -->
                    <!-- but also at the JSON we return a message -->
                    <set-status code="400" reason="Bad Request" />
                    <set-header name="Received-Fingerprint" exists-action="override">
                        <value>finger-print-not-found</value>
                    </set-header>
                    <set-body>@("{\"error\": \"Fingerprint is missing\"}")</set-body>
                </return-response>
            </when>
            <!-- This is hard to understand, so we will see at detail then. For now just keep in mind that if this -->
            <!-- condition is true it will continue to backend and then outbound or on-error and response will be -->
            <!-- handle at the corresponding xml tag logic -->
            <when condition="@(((List<string>)JsonConvert.DeserializeObject<List<string>>((string)context.Variables["allowedFingerprints"])).Contains(context.Variables["receivedFingerprint"]))" />
            <otherwise>
                <return-response>
                  <!-- We return 401 http status code with the corresponding header that fingerprint is sent, but -->
                  <!-- it is not allowed because it's not present at the allowedFingerprints list -->
                  <!-- and also at the JSON we return a message -->
                    <set-status code="401" reason="Unauthorized" />
                    <set-header name="Received-Fingerprint" exists-action="override">
                        <value>@((string)context.Variables["receivedFingerprint"])</value>
                    </set-header>
                    <set-body>@("{\"error\": \"Fingerprint not allowed\"}")</set-body>
                </return-response>
            </otherwise>
        </choose>
    </inbound>
    <backend>
        <base />
    </backend>
    <outbound>
        <base />
        <!-- Simple adds the header with the fingerprint value and then continues at normal flow -->
        <set-header name="Received-Fingerprint" exists-action="override">
            <value>@((string)context.Variables["receivedFingerprint"])</value>
        </set-header>
    </outbound>
    <on-error>
        <base />
        <return-response>
            <!-- In case of any error returns 500 http status code, but also returns the fingerprint sent -->
            <!-- at the header and also returns a JSON at the body with the detailed error message -->
            <set-status code="500" reason="Internal Server Error" />
            <set-header name="Received-Fingerprint" exists-action="override">
                <value>@((string)context.Variables["receivedFingerprint"])</value>
            </set-header>
            <set-body>@($"{{\"error\": \"An unexpected error occurred. Details: {context.LastError.Message}\"}}")</set-body>
        </return-response>
    </on-error>
</policies>
```
- Breaking down the main condition of the policy, for this the first to know it's that any operation the is part of 
  programing language (C# for this case) has to be enclosure by `@()` so we will have something like this:

````xml
((List<string>)JsonConvert.DeserializeObject<List<string>>((string)context.Variables["allowedFingerprints"])).Contains(context.Variables["receivedFingerprint"])
````
- Now with this let's digest each part:

1. Variable Type Casting:
   ```csharp
   (List<string>)
   ```
   This part casts the result of the `JsonConvert.DeserializeObject` method to a `List<string>`. The `DeserializeObject`
   method converts a JSON string into an object of the specified type, and in this case, it's being cast to a list of
   strings.
2. Deserialization from JSON:
   ```csharp
   JsonConvert.DeserializeObject<List<string>>(...)
   ```
   This part deserializes a JSON string into a list of strings. The `JsonConvert.DeserializeObject` method is from the
   `Json.NET` library and is used to convert `JSON-formatted` data into a `.NET object`. In this case, it's expecting
   a JSON string representing a list of strings.
3. Accessing a Value from a Dictionary:
   ```csharp
   (string)context.Variables["allowedFingerprints"]
   ```
   This part accesses a value from a dictionary named `Variables` stored within an object named context. It retrieves 
   the value associated with the key `"allowedFingerprints"` and casts it to a string.
4. Checking for String Existence in List:
   ```csharp
   .Contains(context.Variables["receivedFingerprint"])
   ```
   This part checks if the list obtained from deserialization contains a specific string. It uses the `Contains method`
   to check if the string value stored in `context.Variables["receivedFingerprint"]` is present in the list 
   obtained earlier.

- In summary, this line of code deserializes a JSON string stored in the variable `allowedFingerprints` into a list
  of strings, then checks if `receivedFingerprint` exists in that list.

---

Now with this simple example we can extrapolate and create a lot of different APIM customs policies, for more context
and functions you can go to this [doc](https://learn.microsoft.com/en-us/azure/api-management/api-management-policies). Thanks for reading and see you soon :3