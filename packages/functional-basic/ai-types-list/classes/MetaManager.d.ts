// md5:6591cb092515791b601b9d0f155ca84b true
type MetaList<T extends readonly string[]> = {
    [K in T[number]]?: string;
};
/** Manages HTML meta tag creation, retrieval, and rendering. @keywords meta, head, seo, html, tags */
export declare class MetaManager<T extends readonly string[], Key extends keyof MetaList<T> = keyof MetaList<T>> {
    /** Initializes manager with meta tag names and optional property attribute mode. @keywords meta, init, head */
    constructor(listMeta: T, isProperty?: boolean);
    /** Returns managed meta tag names list. @keywords meta, list, names */
    getListMeta(): T;
    /** Gets content of specified meta tag by name. @keywords meta, get, value, content */
    get(name: Key): string;
    /** Returns all configured meta tag key-value pairs. @keywords meta, items, dictionary, all */
    getItems(): MetaList<T>;
    /** Renders all meta tags as an HTML string. @keywords html, render, markup, meta */
    html(): string;
    /** Sets content for a specific meta tag. @keywords meta, set, update */
    set(name: Key, content: string): this;
    /** Sets multiple meta tags from a dictionary object. @keywords meta, batch, set, dictionary */
    setByList(metaList: MetaList<T>): this;
}