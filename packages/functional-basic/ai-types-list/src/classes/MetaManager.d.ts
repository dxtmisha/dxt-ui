// md5:6591cb092515791b601b9d0f155ca84b true
/** Dictionary structure for meta tag names and content */
type MetaList<T extends readonly string[]> = {
    [K in T[number]]?: string;
};
/** Manages document meta tags reading, writing, and HTML serialization @keywords meta, head, seo, dom */
export declare class MetaManager<T extends readonly string[], Key extends keyof MetaList<T> = keyof MetaList<T>> {
    /** Creates a MetaManager instance @keywords meta, manager, init */
    constructor(listMeta: T, isProperty?: boolean);
    /** Returns managed meta tag names list @keywords list, names */
    getListMeta(): T;
    /** Gets content of specified meta tag @keywords get, read, content */
    get(name: Key): string;
    /** Returns all meta tags as key-value dictionary @keywords items, dictionary, all */
    getItems(): MetaList<T>;
    /** Serializes all managed meta tags to HTML string @keywords html, render, serialize */
    html(): string;
    /** Sets content for specified meta tag @keywords set, update, write */
    set(name: Key, content: string): this;
    /** Sets multiple meta tags from dictionary @keywords bulk, batch, set */
    setByList(metaList: MetaList<T>): this;
}