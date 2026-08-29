// md5:21a81095e4f8eef8d979333c30970526 true
/** Unified manager for standard HTML, Open Graph, and Twitter Card meta tags. @keywords meta, open graph, twitter card, seo */
export declare class Meta extends MetaManager<MetaTag[]> {
    /** Creates a Meta instance with Open Graph and Twitter Card support. @keywords meta, open graph, twitter card */
    constructor();
    /** Gets the MetaOg instance for Open Graph operations. @keywords og, open graph */
    getOg(): MetaOg;
    /** Gets the MetaTwitter instance for Twitter Card operations. @keywords twitter card */
    getTwitter(): MetaTwitter;
    /** Gets the page title without suffix. @keywords title */
    getTitle(): string;
    /** Gets the keywords meta tag content. @keywords keywords */
    getKeywords(): string;
    /** Gets the description meta tag content. @keywords description */
    getDescription(): string;
    /** Gets the Open Graph image URL. @keywords image, og image */
    getImage(): string;
    /** Gets the canonical URL. @keywords canonical url */
    getCanonical(): string;
    /** Gets the robots meta tag directive. @keywords robots, seo */
    getRobots(): MetaRobots;
    /** Gets the author meta tag content. @keywords author */
    getAuthor(): string;
    /** Gets the Open Graph site name. @keywords site name, og site */
    getSiteName(): string;
    /** Gets the Open Graph locale. @keywords locale, og locale */
    getLocale(): string;
    /** Sets page title with suffix and updates Open Graph and Twitter Card titles. @keywords title, seo */
    setTitle(title: string): this;
    /** Sets the keywords meta tag. @keywords keywords */
    setKeywords(keywords: string | string[]): this;
    /** Sets the description meta tag. @keywords description */
    setDescription(description: string): this;
    /** Sets the image URL for Open Graph and Twitter Card. @keywords image, og, twitter */
    setImage(image: string): this;
    /** Sets canonical URL and updates Open Graph and Twitter Card URLs. @keywords canonical, url */
    setCanonical(canonical: string): this;
    /** Sets the robots meta tag directive. @keywords robots, indexing */
    setRobots(robots: MetaRobots): this;
    /** Sets the author meta tag. @keywords author */
    setAuthor(author: string): this;
    /** Sets the site name for Open Graph and Twitter Card. @keywords site name */
    setSiteName(siteName: string): this;
    /** Sets the Open Graph locale. @keywords locale, og */
    setLocale(locale: string): this;
    /** Sets the suffix to append to the page title. @keywords suffix, title suffix */
    setSuffix(suffix?: string): void;
    /** Generates complete HTML markup for all meta tags. @keywords html, render, meta tags */
    html(): string;
    /** Generates HTML-safe page title string. @keywords html title, render title */
    htmlTitle(): string;
}