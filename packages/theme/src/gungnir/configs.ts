import { navbar } from "./navbar";
import { pages } from "./pages";
import { gungnirThemeExtended } from "../extended-theme/config";

const isProd = process.env.NODE_ENV === "production";

export const gungnirThemeConfig = gungnirThemeExtended({
  repo: "WilberC/blog.wilberc.io",
  docsDir: "blog",
  docsBranch: "main",
  personalInfo: {
    name: "wilberC",
    avatar: "/img/avatar.jpg",
    description: 'A personal blog to learn new things and remember some others.',
    sns: {
      github: 'wilberC',
      linkedin: 'wilber-carrascal-mejia',
      twitter: 'WilberCarrascal',
      email: 'wilbercarrascal@gmail.com',
    }
  },
  homeHeaderImages: [
    {
      path: "/img/home-bg/1.jpg",
      mask: "rgba(40, 57, 101, .2)"
    },
    {
      path: "/img/home-bg/2.jpg",
      mask: "rgba(40, 57, 101, .2)"
    },
    {
      path: "/img/home-bg/3.jpg",
      mask: "rgba(40, 57, 101, .2)"
    },
    {
      path: "/img/home-bg/4.jpg",
      mask: "rgba(40, 57, 101, .2)"
    }
  ],
  pages,
  navbar,
  themePlugins: {
    git: isProd,
    katex: true,
    giscus: {
      repo: "WilberC/blog-giscus-comments",
      repoId: "R_kgDOKKsi9Q",
      category: "Announcements",
      categoryId: "DIC_kwDOKKsi9c4CY0Up",
      darkTheme: "dark",
      lang: "en",
      lazyLoad: true,
    },
    mdPlus: {
      all: true
    },
  },
  footer: `
      <a href="https://github.com/wilberc" target="_blank">WilberC</a>  &copy; 2023-2024
      <br>
      Powered by <a href="https://v2.vuepress.vuejs.org" target="_blank">VuePress</a> &
      <a href="https://github.com/Renovamen/vuepress-theme-gungnir" target="_blank">Gungnir</a>
    `
})