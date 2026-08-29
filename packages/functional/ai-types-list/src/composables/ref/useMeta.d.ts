// md5:d6d7863a500b7995e1cb70cf6073c9d1 true
import { MetaRobots } from '@dxtmisha/functional-basic';

/** Vue composable for reactive meta tags management with automatic DOM synchronization @keywords vue, composable, meta, seo, head */
export declare const useMeta: () => Readonly<{
    meta: import("@dxtmisha/functional-basic").Meta;
    /** Reactive page title without suffix @keywords title, seo */
    title: import("vue").Ref<string, string>;
    /** Reactive keywords meta tag @keywords keywords, seo */
    keyword: import("vue").Ref<string, string>;
    /** Reactive description meta tag @keywords description, seo */
    description: import("vue").Ref<string, string>;
    /** Reactive author meta tag @keywords author */
    author: import("vue").Ref<string, string>;
    /** Reactive Open Graph and Twitter Card image URL @keywords image, og, twitter */
    image: import("vue").Ref<string, string>;
    /** Reactive canonical URL @keywords canonical, url */
    canonical: import("vue").Ref<string, string>;
    /** Reactive robots meta tag directive @keywords robots, crawler */
    robots: import("vue").Ref<MetaRobots, MetaRobots>;
    /** Reactive site name for Open Graph and Twitter Card @keywords siteName, og, twitter */
    siteName: import("vue").Ref<string, string>;
    /** Generates HTML string for all meta tags for SSR @keywords ssr, html, render */
    getHtmlMeta: () => string;
    /** Synchronizes all reactive values with the current MetaStatic state @keywords sync */
    sync: () => void;
    /** Updates MetaStatic values with current reactive state @keywords update */
    update: () => void;
    /** Updates MetaStatic values if the current environment is SSR @keywords ssr, update */
    updateSsr: () => void;
    /** Sets the page title @keywords title, seo */
    setTitle: (value: string) => void;
    /** Sets the keywords meta tag @keywords keywords, seo */
    setKeywords: (value: string) => void;
    /** Sets the description meta tag @keywords description, seo */
    setDescription: (value: string) => void;
    /** Sets the author meta tag @keywords author */
    setAuthor: (value: string) => void;
    /** Sets the Open Graph and Twitter Card image URL @keywords image, og, twitter */
    setImage: (value: string) => void;
    /** Sets the canonical URL @keywords canonical, url */
    setCanonical: (value: string) => void;
    /** Sets the robots meta tag directive @keywords robots, crawler */
    setRobots: (value: MetaRobots) => void;
    /** Sets the site name for Open Graph and Twitter Card @keywords siteName, og, twitter */
    setSiteName: (value: string) => void;
    /** Sets the suffix for the page title @keywords suffix, title */
    setSuffix: (suffix: string) => void;
} & {
    /** Initializes the meta state @keywords init */
    init(): Readonly<{
        meta: import("@dxtmisha/functional-basic").Meta;
        /** Reactive page title without suffix @keywords title, seo */
        title: import("vue").Ref<string, string>;
        /** Reactive keywords meta tag @keywords keywords, seo */
        keyword: import("vue").Ref<string, string>;
        /** Reactive description meta tag @keywords description, seo */
        description: import("vue").Ref<string, string>;
        /** Reactive author meta tag @keywords author */
        author: import("vue").Ref<string, string>;
        /** Reactive Open Graph and Twitter Card image URL @keywords image, og, twitter */
        image: import("vue").Ref<string, string>;
        /** Reactive canonical URL @keywords canonical, url */
        canonical: import("vue").Ref<string, string>;
        /** Reactive robots meta tag directive @keywords robots, crawler */
        robots: import("vue").Ref<MetaRobots, MetaRobots>;
        /** Reactive site name for Open Graph and Twitter Card @keywords siteName, og, twitter */
        siteName: import("vue").Ref<string, string>;
        /** Generates HTML string for all meta tags for SSR @keywords ssr, html, render */
        getHtmlMeta: () => string;
        /** Synchronizes all reactive values with the current MetaStatic state @keywords sync */
        sync: () => void;
        /** Updates MetaStatic values with current reactive state @keywords update */
        update: () => void;
        /** Updates MetaStatic values if the current environment is SSR @keywords ssr, update */
        updateSsr: () => void;
        /** Sets the page title @keywords title, seo */
        setTitle: (value: string) => void;
        /** Sets the keywords meta tag @keywords keywords, seo */
        setKeywords: (value: string) => void;
        /** Sets the description meta tag @keywords description, seo */
        setDescription: (value: string) => void;
        /** Sets the author meta tag @keywords author */
        setAuthor: (value: string) => void;
        /** Sets the Open Graph and Twitter Card image URL @keywords image, og, twitter */
        setImage: (value: string) => void;
        /** Sets the canonical URL @keywords canonical, url */
        setCanonical: (value: string) => void;
        /** Sets the robots meta tag directive @keywords robots, crawler */
        setRobots: (value: MetaRobots) => void;
        /** Sets the site name for Open Graph and Twitter Card @keywords siteName, og, twitter */
        setSiteName: (value: string) => void;
        /** Sets the suffix for the page title @keywords suffix, title */
        setSuffix: (suffix: string) => void;
    }>;
    /** Destroys and cleans up meta state listeners @keywords destroy, cleanup */
    destroyExecute?(): void;
}>;