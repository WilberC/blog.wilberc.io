import type {
  GungnirThemeLocaleData,
  GungnirThemeLocaleOptions,
  GungnirThemePluginsOptions,
} from "vuepress-theme-gungnir";
import { GungnirThemeI18nExtended, GungnirThemePagesOptionsWithCustomPages } from "./customPages";
import { ThemeLocaleDataRef } from "@vuepress/plugin-theme-data/lib/client";
import { ThemeData } from "@vuepress/plugin-theme-data";
import { LocaleData } from "@vuepress/shared";

export interface GungnirThemeOptionsWithCustomPages extends GungnirThemeLocaleOptions {
  themePlugins?: GungnirThemePluginsOptions;
  pages?: null | GungnirThemePagesOptionsWithCustomPages;
}
export interface GungnirThemeLocaleDataExtended extends GungnirThemeLocaleData {
  pages?: null | GungnirThemePagesOptionsWithCustomPages;
}
// export interface GungnirThemeLocaleDataExtended extends LocaleData, GungnirThemeI18nExtended {
//   pages?: null | GungnirThemePagesOptionsWithCustomPages;
// }

export declare type GungnirThemeDataExtended = ThemeData<GungnirThemeLocaleDataExtended>;
export declare const useThemeLocaleDataExtended: () => ThemeLocaleDataRef<GungnirThemeDataExtended>;
