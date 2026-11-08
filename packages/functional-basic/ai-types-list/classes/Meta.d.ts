// md5:ef84caccdb8513b4250794a84e7634cc true
/** Unified manager for standard HTML, Open Graph, and Twitter Card meta tags. @keywords meta, tags, html, og, twitter, seo */
export declare class Meta extends MetaManager<MetaTag[]> {
    /** Creates a Meta instance with integrated Open Graph and Twitter Card support. @keywords constructor, init */
    constructor();
    /** Gets the author meta tag content. @keywords author, meta, seo */
    getAuthor(): string;
    /** Gets the canonical URL. @keywords canonical, url, seo */
    getCanonical(): string;
    /** Gets the description meta tag content. @keywords description, meta, seo */
    getDescription(): string;
    /** Gets the Open Graph image URL. @keywords image, og, preview */
    getImage(): string;
    /** Gets the keywords meta tag content. @keywords keywords, meta, seo */
    getKeywords(): string;
    /** Gets the Open Graph locale. @keywords locale, language, og */
    getLocale(): string;
    /** Gets the MetaOg instance for advanced Open Graph operations. @keywords og, opengraph, social */
    getOg(): MetaOg;
    /** Gets the robots meta tag directive. @keywords robots, crawler, seo */
    getRobots(): MetaRobots;
    /** Gets the Open Graph site name. @keywords site_name, og */
    getSiteName(): string;
    /** Gets the page title without suffix. @keywords title, heading */
    getTitle(): string;
    /** Gets the MetaTwitter instance for Twitter Card operations. @keywords twitter, card, social */
    getTwitter(): MetaTwitter;
    /** Sets a managed meta tag field, routing title updates through the title formatter. @keywords set, tag, title */
    set(name: MetaTag, content: string): this;
    /** Sets the author meta tag. @keywords author, creator, meta */
    setAuthor(author: string): this;
    /** Sets the canonical URL and syncs it with Open Graph and Twitter Card. @keywords canonical, url, seo */
    setCanonical(canonical: string): this;
    /** Sets the description meta tag. @keywords description, summary, seo */
    setDescription(description: string): this;
    /** Sets the image URL for Open Graph and Twitter Card tags. @keywords image, preview, og, twitter */
    setImage(image: string): this;
    /** Sets the keywords meta tag from a string or array. @keywords keywords, tags, seo */
    setKeywords(keywords: string | string[]): this;
    /** Sets the locale for Open Graph metadata. @keywords locale, language, og */
    setLocale(locale: string): this;
    /** Sets the robots meta tag directive. @keywords robots, indexing, seo */
    setRobots(robots: MetaRobots): this;
    /** Sets the site name for Open Graph and Twitter Card tags. @keywords site_name, website, branding */
    setSiteName(siteName: string): this;
    /** Sets the suffix appended to the page title. @keywords suffix, title, brand */
    setSuffix(suffix?: string): this;
    /** Sets the page title and syncs Open Graph and Twitter Card titles. @keywords title, page_title, og, twitter */
    setTitle(title: string): this;
    /** Generates complete HTML markup for all configured meta tags. @keywords html, render, output, tags */
    html(): string;
    /** Generates the page title as an HTML-safe string. @keywords html_title, render, title */
    htmlTitle(): string;
}