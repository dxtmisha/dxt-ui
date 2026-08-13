// md5:d14066fba059a3b971577896eb2837a4 true
export declare class MetaOg extends MetaManager<MetaOpenGraphTag[]> {
    /** Creates MetaOg instance. @keywords constructor, open, graph */
    constructor();
    /** Gets the Open Graph title. @keywords get, title, og */
    getTitle(): string;
    /** Gets the Open Graph type. @keywords get, type, og */
    getType(): MetaOpenGraphType;
    /** Gets the Open Graph URL. @keywords get, url, og */
    getUrl(): string;
    /** Gets the Open Graph image URL. @keywords get, image, og */
    getImage(): string;
    /** Gets the Open Graph description. @keywords get, description, og */
    getDescription(): string;
    /** Gets the Open Graph locale. @keywords get, locale, og */
    getLocale(): string;
    /** Gets the Open Graph site name. @keywords get, site, name, og */
    getSiteName(): string;
    /** Sets the Open Graph title. @keywords set, title, og */
    setTitle(title: string): this;
    /** Sets the Open Graph type. @keywords set, type, og */
    setType(type: MetaOpenGraphType): this;
    /** Sets the Open Graph URL. @keywords set, url, og */
    setUrl(url: string): this;
    /** Sets the Open Graph image URL. @keywords set, image, og */
    setImage(url: string): this;
    /** Sets the Open Graph description. @keywords set, description, og */
    setDescription(description: string): this;
    /** Sets the Open Graph locale. @keywords set, locale, og */
    setLocale(locale: string): this;
    /** Sets the Open Graph site name. @keywords set, site, name, og */
    setSiteName(siteName: string): this;
}