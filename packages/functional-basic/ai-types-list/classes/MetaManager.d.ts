// md5:6591cb092515791b601b9d0f155ca84b true
type MetaList<T extends readonly string[]> = {
    [K in T[number]]?: string;
};
/** @keywords MetaManager meta tags management */
export declare class MetaManager<T extends readonly string[], Key extends keyof MetaList<T> = keyof MetaList<T>> {
    /** @keywords constructor MetaManager */
    constructor(listMeta: T, isProperty?: boolean);
    /** @keywords getListMeta meta list */
    getListMeta(): T;
    /** @keywords get meta value */
    get(name: Key): string;
    /** @keywords getItems all meta tags */
    getItems(): MetaList<T>;
    /** @keywords html render meta tags */
    html(): string;
    /** @keywords set meta value */
    set(name: Key, content: string): this;
    /** @keywords setByList multiple meta tags */
    setByList(metaList: MetaList<T>): this;
}
export {};