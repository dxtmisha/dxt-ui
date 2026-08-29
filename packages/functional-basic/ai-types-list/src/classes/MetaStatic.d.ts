// md5:6a331ca900c5644d6d4fb327e56ffbeb true
/** Static class for managing meta tags, Open Graph, and Twitter Cards @keywords meta, seo, open-graph, twitter-card */
export declare class MetaStatic {
    /** Returns the singleton instance of the Meta class @keywords meta, singleton, instance */
    static getItem(): Meta;
    /** Gets the MetaOg instance for Open Graph operations @keywords og, open-graph */
    static getOg(): MetaOg;
    /** Gets the MetaTwitter instance for Twitter Card operations @keywords twitter, card */
    static getTwitter(): MetaTwitter;
    /** Gets the page title without suffix @keywords title, seo */
    static getTitle(): string;
    /** Gets the keywords meta tag content @keywords keywords, meta */
    static getKeywords(): string;
    /** Gets the description meta tag content @keywords description, meta */
    static getDescription(): string;
    /** Gets the Open Graph image URL @keywords image, og */
    static getImage(): string;
    /** Gets the canonical URL @keywords canonical, url */
    static getCanonical(): string;
    /** Gets the robots meta tag value @keywords robots, crawler */
    static getRobots(): MetaRobots;
    /** Gets the author meta tag content @keywords author, meta */
    static getAuthor(): string;
    /** Gets the Open Graph site name @keywords site_name, og */
    static getSiteName(): string;
    /** Gets the Open Graph locale @keywords locale, og */
    static getLocale(): string;
    /** Sets the page title and updates Open Graph/Twitter Card titles @keywords set_title, meta */
    static setTitle(title: string): typeof MetaStatic;
    /** Sets the keywords meta tag @keywords set_keywords, meta */
    static setKeywords(keywords: string | string[]): typeof MetaStatic;
    /** Sets the description meta tag @keywords set_description, meta */
    static setDescription(description: string): typeof MetaStatic;
    /** Sets the image for Open Graph and Twitter Card @keywords set_image, og, twitter */
    static setImage(image: string): typeof MetaStatic;
    /** Sets the canonical URL and updates Open Graph/Twitter Card URLs @keywords set_canonical, url */
    static setCanonical(canonical: string): typeof MetaStatic;
    /** Sets the robots meta tag directive @keywords set_robots, crawler */
    static setRobots(robots: MetaRobots): typeof MetaStatic;
    /** Sets the author meta tag @keywords set_author, meta */
    static setAuthor(author: string): typeof MetaStatic;
    /** Sets the site name for Open Graph and Twitter Card @keywords set_site_name, og, twitter */
    static setSiteName(siteName: string): typeof MetaStatic;
    /** Sets the locale for Open Graph @keywords set_locale, og */
    static setLocale(locale: string): typeof MetaStatic;
    /** Sets the suffix to append to page title @keywords set_suffix, title */
    static setSuffix(suffix?: string): typeof MetaStatic;
    /** Generates complete HTML markup for all meta tags @keywords html, render, meta */
    static html(): string;
    /** Generates the title as an HTML-safe string @keywords html_title, render_title */
    static htmlTitle(): string;
}