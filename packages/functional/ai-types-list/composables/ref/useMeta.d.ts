// md5:adc52e5029783bdf1bdb28f37bcdc4a0 true
import { MetaRobots, Meta } from '@dxtmisha/functional-basic';
import { Ref } from 'vue';

/**
 * Vue composable for reactive meta tags management.
 * @keywords use_meta meta tags management seo vue
 */
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
    /** Generates HTML string for all meta tags. @keywords get_html_meta ssr */
    getHtmlMeta: () => string;
    /** Synchronizes reactive values with MetaStatic. @keywords sync meta */
    sync: () => void;
    /** Updates MetaStatic values with current reactive state. @keywords update meta */
    update: () => void;
    /** Updates MetaStatic values in SSR environment. @keywords update ssr */
    updateSsr: () => void;
    /** Sets the page title. @keywords set title */
    setTitle: (value: string) => void;
    /** Sets the keywords meta tag. @keywords set keywords */
    setKeywords: (value: string) => void;
    /** Sets the description meta tag. @keywords set description */
    setDescription: (value: string) => void;
    /** Sets the author meta tag. @keywords set author */
    setAuthor: (value: string) => void;
    /** Sets the Open Graph / Twitter Card image URL. @keywords set image */
    setImage: (value: string) => void;
    /** Sets the canonical URL. @keywords set canonical */
    setCanonical: (value: string) => void;
    /** Sets the robots meta tag directive. @keywords set robots */
    setRobots: (value: MetaRobots) => void;
    /** Sets the site name for Open Graph and Twitter Card. @keywords set site name */
    setSiteName: (value: string) => void;
    /** Sets the suffix for the page title. @keywords set suffix */
    setSuffix: (suffix: string) => void;
} & {
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
        /** Generates HTML string for all meta tags. @keywords get_html_meta ssr */
        getHtmlMeta: () => string;
        /** Synchronizes reactive values with MetaStatic. @keywords sync meta */
        sync: () => void;
        /** Updates MetaStatic values with current reactive state. @keywords update meta */
        update: () => void;
        /** Updates MetaStatic values in SSR environment. @keywords update ssr */
        updateSsr: () => void;
        /** Sets the page title. @keywords set title */
        setTitle: (value: string) => void;
        /** Sets the keywords meta tag. @keywords set keywords */
        setKeywords: (value: string) => void;
        /** Sets the description meta tag. @keywords set description */
        setDescription: (value: string) => void;
        /** Sets the author meta tag. @keywords set author */
        setAuthor: (value: string) => void;
        /** Sets the Open Graph / Twitter Card image URL. @keywords set image */
        setImage: (value: string) => void;
        /** Sets the canonical URL. @keywords set canonical */
        setCanonical: (value: string) => void;
        /** Sets the robots meta tag directive. @keywords set robots */
        setRobots: (value: MetaRobots) => void;
        /** Sets the site name for Open Graph and Twitter Card. @keywords set site name */
        setSiteName: (value: string) => void;
        /** Sets the suffix for the page title. @keywords set suffix */
        setSuffix: (suffix: string) => void;
    }>;
    /** Destroys execution context. @keywords destroy execute */
    destroyExecute?(): void;
}>;