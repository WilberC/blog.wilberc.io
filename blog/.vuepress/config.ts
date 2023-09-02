import { viteBundler } from "@vuepress/bundler-vite";
import { defineUserConfig } from "vuepress";
import { gungnirThemeConfig } from "../../packages/theme/src/gungnir/configs";
export default defineUserConfig({
  title: "Wilber Carrascal",
  description: "Wilber Carrascal (wilberC) is a bug fixer of the bugs he introduce.",
  bundler: viteBundler(),
  head: [
    [
        "link", {
      rel: "apple-touch-icon",
      link: "180x180",
      href: `/img/logo/apple-touch-icon.png`}],
    [
      "link",
      {
        rel: "icon",
        type: "image/png",
        sizes: "32x32",
        href: `/img/logo/favicon-32x32.png`
      }
    ],
    [
      "link",
      {
        rel: "icon",
        type: "image/png",
        sizes: "32x32",
        href: `/img/logo/favicon-32x32.png`
      }
    ],
    [
      "link",
      {
        rel: "manifest",
        href: `/img/logo/site.webmanifest`
      }
    ],
    [
      "link",
      {
        rel: "mask-icon",
        href: `/img/logo/safari-pinned-tab.svg`,
        color: "#5bbad5"
      }
    ],
    ["meta", { name: "application-name", content: "Wilber Carrascal" }],
    ["meta", { name: "apple-mobile-web-app-title", content: "Wilber Carrascal" }],
    [
      "meta",
      { name: "apple-mobile-web-app-status-bar-style", content: "black" }
    ],
    ["meta", { name: "theme-color", content: "#377bb5" }],
    ["meta", { name: "msapplication-TileColor", content: "#377bb5" }]
  ],
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