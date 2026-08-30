// md5:d14066fba059a3b971577896eb2837a4 true
/** Manages Open Graph meta tags. @keywords meta open graph og seo tags */
export declare class MetaOg extends MetaManager<MetaOpenGraphTag[]> {
    /** Initializes a new MetaOg instance. @keywords constructor og */
    constructor();
    /** Gets the Open Graph title (`og:title`). @keywords og title */
    getTitle(): string;
    /** Gets the Open Graph type (`og:type`). @keywords og type */
    getType(): MetaOpenGraphType;
    /** Gets the Open Graph URL (`og:url`). @keywords og url */
    getUrl(): string;
    /** Gets the Open Graph image URL (`og:image`). @keywords og image */
    getImage(): string;
    /** Gets the Open Graph description (`og:description`). @keywords og description */
    getDescription(): string;
    /** Gets the Open Graph locale (`og:locale`). @keywords og locale */
    getLocale(): string;
    /** Gets the Open Graph site name (`og:site_name`). @keywords og site name */
    getSiteName(): string;
    /** Sets the Open Graph title (`og:title`). @keywords og title */
    setTitle(title: string): this;
    /** Sets the Open Graph type (`og:type`). @keywords og type */
    setType(type: MetaOpenGraphType): this;
    /** Sets the Open Graph URL (`og:url`). @keywords og url */
    setUrl(url: string): this;
    /** Sets the Open Graph image URL (`og:image`). @keywords og image */
    setImage(url: string): this;
    /** Sets the Open Graph description (`og:description`). @keywords og description */
    setDescription(description: string): this;
    /** Sets the Open Graph locale (`og:locale`, e.g. 'en_US'). @keywords og locale */
    setLocale(locale: string): this;
    /** Sets the Open Graph site name (`og:site_name`). @keywords og site name */
    setSiteName(siteName: string): this;
}