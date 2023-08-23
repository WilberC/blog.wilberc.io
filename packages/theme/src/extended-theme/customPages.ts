import type {
  GungnirThemePageOptions
} from "vuepress-theme-gungnir";

export interface GungnirThemePagesOptionsWithCustomPages {
  tags?: GungnirThemePageOptions;
  links?: GungnirThemePageOptions;
  testPage?: GungnirThemePageOptions;
}