// md5:d14066fba059a3b971577896eb2837a4 true
/** Manages Open Graph meta tags. @keywords meta og opengraph tags */
export declare class MetaOg extends MetaManager<MetaOpenGraphTag[]> {
    /** Creates a new MetaOg manager instance. @keywords meta og constructor */
    constructor();
    /** Gets the Open Graph title (og:title). @keywords og title get */
    getTitle(): string;
    /** Gets the Open Graph type (og:type). @keywords og type get */
    getType(): MetaOpenGraphType;
    /** Gets the Open Graph canonical URL (og:url). @keywords og url get */
    getUrl(): string;
    /** Gets the Open Graph image URL (og:image). @keywords og image get */
    getImage(): string;
    /** Gets the Open Graph description (og:description). @keywords og description get */
    getDescription(): string;
    /** Gets the Open Graph locale (og:locale). @keywords og locale get */
    getLocale(): string;
    /** Gets the Open Graph site name (og:site_name). @keywords og site_name get */
    getSiteName(): string;
    /** Sets the Open Graph title (og:title). @keywords og title set */
    setTitle(title: string): this;
    /** Sets the Open Graph type (og:type). @keywords og type set */
    setType(type: MetaOpenGraphType): this;
    /** Sets the Open Graph canonical URL (og:url). @keywords og url set */
    setUrl(url: string): this;
    /** Sets the Open Graph image URL (og:image). @keywords og image set */
    setImage(url: string): this;
    /** Sets the Open Graph description (og:description). @keywords og description set */
    setDescription(description: string): this;
    /** Sets the Open Graph locale (og:locale). @keywords og locale set */
    setLocale(locale: string): this;
    /** Sets the Open Graph site name (og:site_name). @keywords og site_name set */
    setSiteName(siteName: string): this;
}