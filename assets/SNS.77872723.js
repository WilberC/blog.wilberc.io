import{d as m,u,r as w,o as c,c as s,F as S,D as d,h as g,_ as L,f as l,w as b,e as v,s as N}from"./app.28880129.js";const y={class:"sns-wrapper"},x=["href"],I=m({__name:"SNS",props:{large:{type:Boolean,default:!0}},setup(p){var r;const i={github:{icon:"fa-github-alt",preLink:"https://github.com/"},linkedin:{icon:"fa-linkedin-in",preLink:"https://www.linkedin.com/in/"},facebook:{icon:"fa-facebook-f",preLink:"https://www.facebook.com/"},twitter:{icon:"fa-twitter",preLink:"https://www.twitter.com/"},zhihu:{icon:"ri-zhihu-line",preLink:"https://www.zhihu.com/people/"},weibo:{icon:"ri-weibo-fill",preLink:"http://weibo.com/u/"},email:{icon:"fa-envelope",preLink:"mailto:"},rss:{icon:"ri-rss-fill",preLink:"",iconScale:.9}},f=(r=u().value.personalInfo)==null?void 0:r.sns,_=(e,n)=>typeof e=="string"?i[n].preLink+e:e.link,h=(e,n)=>typeof e=="string"?i[n].icon:e.icon,k=(e,n)=>(typeof e=="string"?i[n].iconScale:e.iconScale)||1;return(e,n)=>{const a=w("VIcon");return c(),s("div",y,[(c(!0),s(S,null,d(g(f),(t,o)=>(c(),s("a",{key:`${o}-${t}`,href:_(t,o),target:"_blank",rel:"noopener noreferrer"},[l(a,{class:"icon-stack"},{default:b(()=>[p.large?(c(),v(a,{key:0,name:"fa-circle",scale:"2.3",class:"icon-circle"})):N("",!0),l(a,{name:h(t,o),scale:k(t,o),class:"icon-sns",inverse:""},null,8,["name","scale"])]),_:2},1024)],8,x))),128))])}}});var V=L(I,[["__file","SNS.vue"]]);export{V as S};
