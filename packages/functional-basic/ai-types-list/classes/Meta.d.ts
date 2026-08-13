// md5:21a81095e4f8eef8d979333c30970526 true
/** Unified class for managing all types of meta tags. @keywords meta, seo, openGraph, twitter */
export declare class Meta extends MetaManager<MetaTag[]> {
    /** Creates an instance of Meta with integrated Open Graph and Twitter Card support. @keywords meta, constructor */
    constructor();
    /** Gets the MetaOg instance for advanced Open Graph operations. @keywords og, openGraph */
    getOg(): MetaOg;
    /** Gets the MetaTwitter instance for advanced Twitter Card operations. @keywords twitter, card */
    getTwitter(): MetaTwitter;
    /** Gets the page title without suffix. @keywords title, get */
    getTitle(): string;
    /** Gets the keywords meta tag. @keywords keywords, seo */
    getKeywords(): string;
    /** Gets the description meta tag. @keywords description, seo */
    getDescription(): string;
    /** Gets the Open Graph image URL. @keywords image, og */
    getImage(): string;
    /** Gets the canonical URL. @keywords canonical, url */
    getCanonical(): string;
    /** Gets the robots meta tag value. @keywords robots, index */
    getRobots(): MetaRobots;
    /** Gets the author meta tag. @keywords author, meta */
    getAuthor(): string;
    /** Gets the Open Graph site name. @keywords siteName, og */
    getSiteName(): string;
    /** Gets the Open Graph locale. @keywords locale, og */
    getLocale(): string;
    /** Sets the page title (with suffix) and updates Open Graph and Twitter Card titles. @keywords title, set */
    setTitle(title: string): this;
    /** Sets the keywords meta tag. @keywords keywords, set */
    setKeywords(keywords: string | string[]): this;
    /** Sets the description meta tag. @keywords description, set */
    setDescription(description: string): this;
    /** Sets the image for Open Graph and Twitter Card. @keywords image, set */
    setImage(image: string): this;
    /** Sets the canonical URL and updates Open Graph and Twitter Card URLs. @keywords canonical, set */
    setCanonical(canonical: string): this;
    /** Sets the robots meta tag. @keywords robots, set */
    setRobots(robots: MetaRobots): this;
    /** Sets the author meta tag. @keywords author, set */
    setAuthor(author: string): this;
    /** Sets the site name for Open Graph and Twitter Card. @keywords siteName, set */
    setSiteName(siteName: string): this;
    /** Sets the locale for Open Graph. @keywords locale, set */
    setLocale(locale: string): this;
    /** Sets the suffix to append to page title. @keywords suffix, title */
    setSuffix(suffix?: string): void;
    /** Generates the complete HTML for all meta-tags including Open Graph and Twitter Card. @keywords html, render */
    html(): string;
    /** Generates the title as an HTML-safe string. @keywords html, title */
    htmlTitle(): string;
}