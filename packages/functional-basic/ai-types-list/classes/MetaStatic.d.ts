// md5:6a331ca900c5644d6d4fb327e56ffbeb true
/** Static helper for managing meta tags, Open Graph, and Twitter Cards. @keywords meta, tags, head, seo */
export declare class MetaStatic {
    /** Returns singleton instance of Meta. @keywords instance, singleton, meta */
    static getItem(): Meta;
    /** Returns MetaOg instance for Open Graph tags. @keywords og, open graph, social */
    static getOg(): MetaOg;
    /** Returns MetaTwitter instance for Twitter Card tags. @keywords twitter, twitter card, social */
    static getTwitter(): MetaTwitter;
    /** Gets page title without suffix. @keywords title, get, seo */
    static getTitle(): string;
    /** Gets keywords meta tag content. @keywords keywords, meta, seo */
    static getKeywords(): string;
    /** Gets description meta tag content. @keywords description, meta, seo */
    static getDescription(): string;
    /** Gets Open Graph image URL. @keywords image, og, preview */
    static getImage(): string;
    /** Gets canonical URL. @keywords canonical, url, link */
    static getCanonical(): string;
    /** Gets robots meta directive. @keywords robots, crawler, indexing */
    static getRobots(): MetaRobots;
    /** Gets author meta tag value. @keywords author, meta */
    static getAuthor(): string;
    /** Gets Open Graph site name. @keywords siteName, og, name */
    static getSiteName(): string;
    /** Gets Open Graph locale. @keywords locale, language, og */
    static getLocale(): string;
    /** Sets page title and synchronizes Open Graph and Twitter Card titles. @keywords setTitle, title, seo */
    static setTitle(title: string): typeof MetaStatic;
    /** Sets keywords meta tag. @keywords setKeywords, keywords, seo */
    static setKeywords(keywords: string | string[]): typeof MetaStatic;
    /** Sets description meta tag. @keywords setDescription, description, seo */
    static setDescription(description: string): typeof MetaStatic;
    /** Sets preview image for Open Graph and Twitter Card. @keywords setImage, image, og, twitter */
    static setImage(image: string): typeof MetaStatic;
    /** Sets canonical URL and updates Open Graph and Twitter Card URLs. @keywords setCanonical, canonical, url */
    static setCanonical(canonical: string): typeof MetaStatic;
    /** Sets robots meta tag directive. @keywords setRobots, robots, crawler */
    static setRobots(robots: MetaRobots): typeof MetaStatic;
    /** Sets author meta tag. @keywords setAuthor, author */
    static setAuthor(author: string): typeof MetaStatic;
    /** Sets site name for Open Graph and Twitter Card. @keywords setSiteName, siteName, og */
    static setSiteName(siteName: string): typeof MetaStatic;
    /** Sets locale for Open Graph. @keywords setLocale, locale, lang */
    static setLocale(locale: string): typeof MetaStatic;
    /** Sets suffix appended to page title. @keywords setSuffix, suffix, title */
    static setSuffix(suffix?: string): typeof MetaStatic;
    /** Renders complete HTML string for all meta, Open Graph, and Twitter Card tags. @keywords html, render, tags */
    static html(): string;
    /** Renders page title tag as HTML-safe string. @keywords htmlTitle, title, render */
    static htmlTitle(): string;
}