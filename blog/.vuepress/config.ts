import { viteBundler } from "@vuepress/bundler-vite";
import { defineUserConfig } from "vuepress";
import { gungnirThemeConfig } from "../../packages/theme/src/gungnir/configs";

export default defineUserConfig({
  title: "Wilber Carrascal",
  description: "Wilber Carrascal (wilberC) is a bug fixer of the bugs he introduce.",
  bundler: viteBundler(),
  theme: gungnirThemeConfig,
  markdown: {
    headers: {
      level: [2, 3, 4, 5]
    },
    code: {
      lineNumbers: false
    }
  }
});