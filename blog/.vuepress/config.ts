import { viteBundler } from "@vuepress/bundler-vite";
import { defineUserConfig } from "vuepress";
import { gungnirTheme } from "vuepress-theme-gungnir";

export default defineUserConfig({
  title: "Wilber Carrascal",
  description: "Wilber Carrascal (wilberC) is a bug fixer of the bugs he introduce.",
  bundler: viteBundler(),

  theme: gungnirTheme({
    repo: "WilberC/blog.wilberc.io",
    docsDir: "blog",
    docsBranch: "main",
    personalInfo: {
      name: "wilberC",
      avatar: "/img/avatar.jpg",
      description: 'The more I learn, the less I know.',
      sns: {
        github: 'wilberC',
        linkedin: 'wilber-carrascal-mejia',
        twitter: 'WilberCarrascal',
        email: 'wilbercarrascal@gmail.com',
      }
    },
    homeHeaderImages: [
      {
        path: "/img/home-bg/1.png",
      }
    ],

  })
});