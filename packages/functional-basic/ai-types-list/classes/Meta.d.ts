// md5:c18f2fd4c37b8517de9f1648ddaaa681 true
/** Unified manager for standard HTML, Open Graph, and Twitter Card meta tags. @keywords meta, seo, open graph, twitter card */
export declare class Meta extends MetaManager<MetaTag[]> {
    /** Creates a Meta instance with Open Graph and Twitter Card support. @keywords constructor, init */
    constructor();
    /** Gets the author meta tag value. @keywords author, meta */
    getAuthor(): string;
    /** Gets the canonical link URL. @keywords canonical, url, link */
    getCanonical(): string;
    /** Gets the description meta tag value. @keywords description, seo */
    getDescription(): string;
    /** Gets the Open Graph image URL. @keywords og, image, url */
    getImage(): string;
    /** Gets the keywords meta tag value. @keywords keywords, seo */
    getKeywords(): string;
    /** Gets the Open Graph locale. @keywords og, locale, language */
    getLocale(): string;
    /** Gets the MetaOg instance for Open Graph management. @keywords og, open graph */
    getOg(): MetaOg;
    /** Gets the robots meta tag value. @keywords robots, crawler, indexing */
    getRobots(): MetaRobots;
    /** Gets the Open Graph site name. @keywords og, site name */
    getSiteName(): string;
    /** Gets the raw page title without suffix. @keywords title, get */
    getTitle(): string;
    /** Gets the MetaTwitter instance for Twitter Card management. @keywords twitter, card */
    getTwitter(): MetaTwitter;
    /** Sets a managed meta tag field, routing title updates through title formatting. @keywords set, tag, content */
    set(name: MetaTag, content: string): this;
    /** Sets the author meta tag. @keywords author, set */
    setAuthor(author: string): this;
    /** Sets the canonical URL and syncs it with Open Graph and Twitter Card. @keywords canonical, url, seo */
    setCanonical(canonical: string): this;
    /** Sets the description meta tag. @keywords description, seo */
    setDescription(description: string): this;
    /** Sets the image URL for Open Graph and Twitter Card tags. @keywords image, og, twitter */
    setImage(image: string): this;
    /** Sets the keywords meta tag from a string or array. @keywords keywords, seo */
    setKeywords(keywords: string | string[]): this;
    /** Sets the Open Graph locale tag. @keywords locale, og, language */
    setLocale(locale: string): this;
    /** Sets the robots meta tag directive. @keywords robots, indexing, seo */
    setRobots(robots: MetaRobots): this;
    /** Sets the site name for Open Graph and Twitter Card tags. @keywords siteName, og, twitter */
    setSiteName(siteName: string): this;
    /** Sets the suffix appended to the page title. @keywords title, suffix */
    setSuffix(suffix?: string): this;
    /** Sets the page title and synchronizes Open Graph and Twitter Card titles. @keywords title, og, twitter */
    setTitle(title: string): this;
    /** Renders the complete HTML tags string for HTML, Open Graph, and Twitter Card. @keywords html, render, tags */
    html(): string;
    /** Renders the title as an HTML-safe string. @keywords title, html, escape */
    htmlTitle(): string;
}