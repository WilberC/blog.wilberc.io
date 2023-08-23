import type {
  GungnirThemeLocaleOptions,
  GungnirThemePluginsOptions,
} from "vuepress-theme-gungnir";
import { GungnirThemePagesOptionsWithCustomPages } from "./customPages";

export interface GungnirThemeOptionsWithCustomPages extends GungnirThemeLocaleOptions {
  themePlugins?: GungnirThemePluginsOptions;
  pages?: null | GungnirThemePagesOptionsWithCustomPages;
}