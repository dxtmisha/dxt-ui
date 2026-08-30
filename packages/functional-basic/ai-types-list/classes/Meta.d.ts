// md5:21a81095e4f8eef8d979333c30970526 true
/** Unified manager for standard HTML, Open Graph, and Twitter Card meta tags. @keywords meta, tags, head, html, seo */
export declare class Meta extends MetaManager<MetaTag[]> {
    /** Creates an instance of Meta with integrated Open Graph and Twitter Card support. @keywords constructor, init */
    constructor();
    /** Gets the MetaOg instance for Open Graph operations. @keywords og, opengraph */
    getOg(): MetaOg;
    /** Gets the MetaTwitter instance for Twitter Card operations. @keywords twitter, card */
    getTwitter(): MetaTwitter;
    /** Gets the page title without suffix. @keywords title, get */
    getTitle(): string;
    /** Gets the keywords meta tag content. @keywords keywords, get */
    getKeywords(): string;
    /** Gets the description meta tag content. @keywords description, get */
    getDescription(): string;
    /** Gets the Open Graph image URL. @keywords image, og, get */
    getImage(): string;
    /** Gets the canonical URL. @keywords canonical, url, get */
    getCanonical(): string;
    /** Gets the robots meta tag directive. @keywords robots, crawler, get */
    getRobots(): MetaRobots;
    /** Gets the author meta tag content. @keywords author, get */
    getAuthor(): string;
    /** Gets the Open Graph site name. @keywords site_name, og, get */
    getSiteName(): string;
    /** Gets the Open Graph locale. @keywords locale, og, get */
    getLocale(): string;
    /** Sets the page title with suffix and updates Open Graph and Twitter Card titles. @keywords title, set */
    setTitle(title: string): this;
    /** Sets the keywords meta tag. @keywords keywords, set */
    setKeywords(keywords: string | string[]): this;
    /** Sets the description meta tag. @keywords description, set */
    setDescription(description: string): this;
    /** Sets the image for Open Graph and Twitter Card. @keywords image, og, twitter, set */
    setImage(image: string): this;
    /** Sets the canonical URL and updates Open Graph and Twitter Card URLs. @keywords canonical, url, set */
    setCanonical(canonical: string): this;
    /** Sets the robots meta tag directive. @keywords robots, indexing, set */
    setRobots(robots: MetaRobots): this;
    /** Sets the author meta tag. @keywords author, set */
    setAuthor(author: string): this;
    /** Sets the site name for Open Graph and Twitter Card. @keywords site_name, og, set */
    setSiteName(siteName: string): this;
    /** Sets the Open Graph locale. @keywords locale, og, set */
    setLocale(locale: string): this;
    /** Sets the suffix to append to page title. @keywords suffix, title, set */
    setSuffix(suffix?: string): void;
    /** Generates the complete HTML string for all meta tags. @keywords html, render, serialize */
    html(): string;
    /** Generates the title as an HTML-safe string. @keywords title, html, render */
    htmlTitle(): string;
}