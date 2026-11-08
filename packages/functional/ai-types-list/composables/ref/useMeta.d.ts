// md5:2fa2b63e2ee9f4f07a80d670448d5480 true
import { type Meta, MetaRobots } from '@dxtmisha/functional-basic';
import type { Ref } from 'vue';

/** Vue composable for reactive meta tags management with automatic DOM synchronization. @keywords vue, composable, meta, seo, head */
export declare const useMeta: () => Readonly<{
  /** Underlying Meta instance. */
  meta: Meta;
  /** Reactive page title without suffix. */
  title: Ref<string>;
  /** Reactive keywords meta tag. */
  keyword: Ref<string>;
  /** Reactive description meta tag. */
  description: Ref<string>;
  /** Reactive author meta tag. */
  author: Ref<string>;
  /** Reactive Open Graph and Twitter Card image URL. */
  image: Ref<string>;
  /** Reactive canonical URL. */
  canonical: Ref<string>;
  /** Reactive robots meta tag directive. */
  robots: Ref<MetaRobots>;
  /** Reactive site name for Open Graph and Twitter Card. */
  siteName: Ref<string>;
  /** Generates HTML string for all meta tags for SSR. @keywords ssr, html, meta */
  getHtmlMeta: () => string;
  /** Synchronizes all reactive values with MetaStatic state. @keywords sync, meta */
  sync: () => void;
  /** Updates MetaStatic values with current reactive state. @keywords update, meta */
  update: () => void;
  /** Updates MetaStatic values in SSR environments. @keywords ssr, update */
  updateSsr: () => void;
  /** Sets page title. @keywords title, meta */
  setTitle: (value: string) => void;
  /** Sets keywords meta tag. @keywords keywords, meta */
  setKeywords: (value: string) => void;
  /** Sets description meta tag. @keywords description, meta */
  setDescription: (value: string) => void;
  /** Sets author meta tag. @keywords author, meta */
  setAuthor: (value: string) => void;
  /** Sets Open Graph and Twitter Card image URL. @keywords image, og, twitter */
  setImage: (value: string) => void;
  /** Sets canonical URL. @keywords canonical, url */
  setCanonical: (value: string) => void;
  /** Sets robots meta tag directive. @keywords robots, seo */
  setRobots: (value: MetaRobots) => void;
  /** Sets site name for Open Graph and Twitter Card. @keywords siteName, og */
  setSiteName: (value: string) => void;
  /** Sets suffix for page title. @keywords suffix, title */
  setSuffix: (suffix: string) => Meta;
}>;