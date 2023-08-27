import { defineClientConfig } from "@vuepress/client";
import { addIcons } from "oh-vue-icons";
import {
  FaTag,
  FaFortAwesome,
  CoExternalLink,
  FaUser,
} from "oh-vue-icons/icons";

addIcons(
  FaTag,
  FaFortAwesome,
  CoExternalLink,
  FaUser,
);

export default defineClientConfig({});
