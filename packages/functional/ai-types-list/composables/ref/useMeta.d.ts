// md5:d6d7863a500b7995e1cb70cf6073c9d1 true
import { Meta, MetaRobots } from '@dxtmisha/functional-basic';
import { Ref } from 'vue';

/** Reactive meta tag management composable with automatic DOM synchronization. @keywords useMeta, meta, seo, head, open graph */
export declare const useMeta: () => Readonly<{
    meta: Meta;
    title: Ref<string, string>;
    keyword: Ref<string, string>;
    description: Ref<string, string>;
    author: Ref<string, string>;
    image: Ref<string, string>;
    canonical: Ref<string, string>;
    robots: Ref<MetaRobots, MetaRobots>;
    siteName: Ref<string, string>;
    /** Generates HTML string for all meta tags for SSR. @keywords ssr, html, meta */
    getHtmlMeta: () => string;
    /** Synchronizes reactive state with current MetaStatic state. @keywords sync, meta */
    sync: () => void;
    /** Updates MetaStatic values with current reactive state. @keywords update, meta */
    update: () => void;
    /** Updates MetaStatic values in SSR environments. @keywords ssr, update */
    updateSsr: () => void;
    /** Sets the page title. @keywords title, seo */
    setTitle: (value: string) => void;
    /** Sets the keywords meta tag. @keywords keywords, seo */
    setKeywords: (value: string) => void;
    /** Sets the description meta tag. @keywords description, seo */
    setDescription: (value: string) => void;
    /** Sets the author meta tag. @keywords author, meta */
    setAuthor: (value: string) => void;
    /** Sets Open Graph and Twitter Card image URL. @keywords image, og, twitter */
    setImage: (value: string) => void;
    /** Sets the canonical URL. @keywords canonical, url */
    setCanonical: (value: string) => void;
    /** Sets the robots meta tag directive. @keywords robots, indexing */
    setRobots: (value: MetaRobots) => void;
    /** Sets site name for Open Graph and Twitter Card. @keywords siteName, og, twitter */
    setSiteName: (value: string) => void;
    /** Sets suffix for the page title. @keywords suffix, title */
    setSuffix: (suffix: string) => void;
}> & {
    /** Initializes meta manager instance. @keywords init, meta */
    init(): Readonly<{
        meta: Meta;
        title: Ref<string, string>;
        keyword: Ref<string, string>;
        description: Ref<string, string>;
        author: Ref<string, string>;
        image: Ref<string, string>;
        canonical: Ref<string, string>;
        robots: Ref<MetaRobots, MetaRobots>;
        siteName: Ref<string, string>;
        /** Generates HTML string for all meta tags for SSR. @keywords ssr, html, meta */
        getHtmlMeta: () => string;
        /** Synchronizes reactive state with current MetaStatic state. @keywords sync, meta */
        sync: () => void;
        /** Updates MetaStatic values with current reactive state. @keywords update, meta */
        update: () => void;
        /** Updates MetaStatic values in SSR environments. @keywords ssr, update */
        updateSsr: () => void;
        /** Sets the page title. @keywords title, seo */
        setTitle: (value: string) => void;
        /** Sets the keywords meta tag. @keywords keywords, seo */
        setKeywords: (value: string) => void;
        /** Sets the description meta tag. @keywords description, seo */
        setDescription: (value: string) => void;
        /** Sets the author meta tag. @keywords author, meta */
        setAuthor: (value: string) => void;
        /** Sets Open Graph and Twitter Card image URL. @keywords image, og, twitter */
        setImage: (value: string) => void;
        /** Sets the canonical URL. @keywords canonical, url */
        setCanonical: (value: string) => void;
        /** Sets the robots meta tag directive. @keywords robots, indexing */
        setRobots: (value: MetaRobots) => void;
        /** Sets site name for Open Graph and Twitter Card. @keywords siteName, og, twitter */
        setSiteName: (value: string) => void;
        /** Sets suffix for the page title. @keywords suffix, title */
        setSuffix: (suffix: string) => void;
    }>;
    /** Cleans up meta watchers and listeners. @keywords cleanup, destroy */
    destroyExecute?(): void;
};