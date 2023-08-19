import {viteBundler} from "@vuepress/bundler-vite";
import {defineUserConfig} from "vuepress";
import {gungnirTheme} from "vuepress-theme-gungnir";

const isProd = process.env.NODE_ENV === "production";

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
        pages: {
            tags: {
                subtitle: "Black Sheep Wall",
                bgImage: {
                    path: "/img/pages/tags.jpg",
                    mask: "rgba(137, 29, 85, 0.3)"
                }
            }
        },

        navbar: [
            {
                text: "Home",
                link: "/",
                icon: "fa-fort-awesome"
            },
            {
                text: "Tags",
                link: "/tags/",
                icon: "fa-tag"
            }
        ],
        footer: `
      <a href="https://github.com/wilberc" target="_blank">WilberC</a>  &copy; 2023-2024
      <br>
      Powered by <a href="https://v2.vuepress.vuejs.org" target="_blank">VuePress</a> &
      <a href="https://github.com/Renovamen/vuepress-theme-gungnir" target="_blank">Gungnir</a>
    `
    }),
    markdown: {
        headers: {
            level: [2, 3, 4, 5]
        },
        code: {
            lineNumbers: false
        }
    }
});