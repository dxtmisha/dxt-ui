// md5:ed00e380e0ca20ef4d7a1759e978bd1a true
import type { Meta, MetaRobots } from '@dxtmisha/functional-basic';
import type { Ref } from 'vue';

/** Vue composable for reactive meta tags management with automatic DOM synchronization using a singleton state @keywords vue, meta, head, seo, composable */
export declare const useMeta: () => Readonly<{
  meta: Meta;
  /** Reactive page title without suffix @keywords title, head, seo */
  title: Ref<string>;
  /** Reactive keywords meta tag @keywords keywords, seo, meta */
  keyword: Ref<string>;
  /** Reactive description meta tag @keywords description, seo, meta */
  description: Ref<string>;
  /** Reactive author meta tag @keywords author, meta */
  author: Ref<string>;
  /** Reactive Open Graph and Twitter Card image URL @keywords image, og, twitter, meta */
  image: Ref<string>;
  /** Reactive canonical URL @keywords canonical, url, seo */
  canonical: Ref<string>;
  /** Reactive robots meta tag directive @keywords robots, crawler, seo */
  robots: Ref<MetaRobots>;
  /** Reactive site name for Open Graph and Twitter Card @keywords siteName, og, twitter */
  siteName: Ref<string>;
  /** Generates HTML string for all meta tags for SSR @keywords ssr, html, meta */
  getHtmlMeta: () => string;
  /** Synchronizes all reactive values with current MetaStatic state @keywords sync, meta, state */
  sync: () => void;
  /** Updates MetaStatic values with current reactive state @keywords update, meta, state */
  update: () => void;
  /** Updates MetaStatic values when running in SSR environment @keywords ssr, update, meta */
  updateSsr: () => void;
  /** Sets page title @keywords setTitle, title, seo */
  setTitle: (value: string) => void;
  /** Sets keywords meta tag @keywords setKeywords, keywords, seo */
  setKeywords: (value: string) => void;
  /** Sets description meta tag @keywords setDescription, description, seo */
  setDescription: (value: string) => void;
  /** Sets author meta tag @keywords setAuthor, author */
  setAuthor: (value: string) => void;
  /** Sets Open Graph and Twitter Card image URL @keywords setImage, og, twitter, image */
  setImage: (value: string) => void;
  /** Sets canonical URL @keywords setCanonical, canonical, url */
  setCanonical: (value: string) => void;
  /** Sets robots meta tag directive @keywords setRobots, robots, crawler */
  setRobots: (value: MetaRobots) => void;
  /** Sets site name for Open Graph and Twitter Card @keywords setSiteName, og, twitter */
  setSiteName: (value: string) => void;
  /** Sets suffix for page title @keywords setSuffix, title, suffix */
  setSuffix: (suffix: string) => Meta;
}>;