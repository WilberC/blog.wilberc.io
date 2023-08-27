import { GungnirThemePageFrontmatter } from "vuepress-theme-gungnir";

interface PlaceLink {
  placeName: string;
  url?: string;
}

interface ExperienceItem {
  name: string;
  company: PlaceLink;
  year?: string
  extras?: string;
}
interface MiscellaneousItem {
  desc: string;
}
export interface GungnirThemeAboutMePageFrontmatter
  extends GungnirThemePageFrontmatter {
  title: string;
  description: string;
  cvLink?: string;
  image?: string
  experience?: Array<ExperienceItem>;
  miscellaneous?: Array<MiscellaneousItem>
}
