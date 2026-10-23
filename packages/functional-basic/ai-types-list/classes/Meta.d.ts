// md5:d7240cd52d793b7a4c6a357d4c3f2544 true
/** Unified manager for standard HTML, Open Graph, and Twitter Card meta tags. @keywords meta, seo, open graph, twitter card, head */
export declare class Meta extends MetaManager<MetaTag[]> {
    /** Initializes Meta manager with integrated Open Graph and Twitter Card support. @keywords constructor, init */
    constructor();
    /** Gets the MetaOg instance for Open Graph operations. @keywords og, open graph */
    getOg(): MetaOg;
    /** Gets the MetaTwitter instance for Twitter Card operations. @keywords twitter, twitter card */
    getTwitter(): MetaTwitter;
    /** Gets the page title without suffix. @keywords title, get title */
    getTitle(): string;
    /** Gets the keywords meta tag content. @keywords keywords, seo */
    getKeywords(): string;
    /** Gets the description meta tag content. @keywords description, seo */
    getDescription(): string;
    /** Gets the Open Graph image URL. @keywords image, og image */
    getImage(): string;
    /** Gets the canonical URL. @keywords canonical, url */
    getCanonical(): string;
    /** Gets the robots meta tag directive. @keywords robots, indexing, seo */
    getRobots(): MetaRobots;
    /** Gets the author meta tag content. @keywords author */
    getAuthor(): string;
    /** Gets the Open Graph site name. @keywords site name, og */
    getSiteName(): string;
    /** Gets the Open Graph locale. @keywords locale, og */
    getLocale(): string;
    /** Sets the page title with suffix and updates Open Graph and Twitter Card titles. @keywords set title, og title, twitter title */
    setTitle(title: string): this;
    /** Sets the keywords meta tag from a string or string array. @keywords keywords, set keywords */
    setKeywords(keywords: string | string[]): this;
    /** Sets the description meta tag. @keywords description, set description */
    setDescription(description: string): this;
    /** Sets the image URL for Open Graph and Twitter Card. @keywords image, og image, twitter image */
    setImage(image: string): this;
    /** Sets the canonical URL and updates Open Graph and Twitter Card URLs. @keywords canonical, url */
    setCanonical(canonical: string): this;
    /** Sets the robots meta directive tag. @keywords robots, indexing, crawler */
    setRobots(robots: MetaRobots): this;
    /** Sets the author meta tag. @keywords author */
    setAuthor(author: string): this;
    /** Sets the site name for Open Graph and Twitter Card. @keywords site name, og */
    setSiteName(siteName: string): this;
    /** Sets the locale for Open Graph. @keywords locale, og locale */
    setLocale(locale: string): this;
    /** Sets the suffix to append to the page title. @keywords suffix, title suffix */
    setSuffix(suffix?: string): this;
    /** Generates the complete HTML string for all meta tags. @keywords html, render, tags */
    html(): string;
    /** Generates the HTML-safe page title string. @keywords html title, render title */
    htmlTitle(): string;
}