import type {
  GungnirThemeLocaleOptions,
  GungnirThemePluginsOptions,
} from "vuepress-theme-gungnir";
import { GungnirThemePagesOptionsWithCustomPages } from "./customPages";
import type { ThemeData } from "@vuepress/plugin-theme-data";

export interface GungnirThemeOptionsWithCustomPages extends GungnirThemeLocaleOptions {
  themePlugins?: GungnirThemePluginsOptions;
  pages?: null | GungnirThemePagesOptionsWithCustomPages;
}


export type GungnirThemeLocaleOptions = GungnirThemeData;

export type GungnirThemeData = ThemeData<GungnirThemeLocaleData>;