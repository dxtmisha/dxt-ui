// md5:cc742cdcfb73b9f080ee2bf2dd50a7e8 true
/** Search item type @keywords search item, record */
export type SearchItem = Record<string, any>;
/** Type for generating a column path @keywords search column path */
export type SearchColumnPath<K, P> = K extends string ? P extends string ? `${K}.${P}` : never : never;
/** Type for getting a column @keywords search column */
export type SearchColumn<T extends SearchItem> = {
    [K in keyof T]-?: NonNullable<T[K]> extends object ? K | SearchColumnPath<K, keyof NonNullable<T[K]>> : K;
}[keyof T];
/** Type for a list of columns @keywords search columns */
export type SearchColumns<T extends SearchItem> = (SearchColumn<T> & string)[];
/** Type for formatting the key @keywords search format capitalize */
export type SearchFormatCapitalize<K extends string> = K extends `${infer First}.${infer Rest}` ? `${First}${Capitalize<SearchFormatCapitalize<Rest>>}` : K;
/** Type for generating a search key @keywords search format key */
export type SearchFormatKey<K> = K extends string ? `${SearchFormatCapitalize<K>}Search` : never;
/** Type for a formatted search item @keywords search format item */
export type SearchFormatItem<T extends SearchItem, KT extends string[]> = {
    [K in keyof T | SearchFormatKey<KT[number]>]: K extends keyof T ? T[K] : string;
} & {
    searchActive?: boolean;
};
/** Type for a list of formatted search items @keywords search format list */
export type SearchFormatList<T extends SearchItem, K extends string[]> = SearchFormatItem<T, K>[];
/** Search list value @keywords search list value */
export type SearchListValue<T extends SearchItem> = T[] | undefined;
/** Search options @keywords search options, limit, delay */
export type SearchOptions = {
    limit?: number;
    returnEverything?: boolean;
    delay?: number;
    findExactMatch?: boolean;
    classSearchName?: string;
};
/** Search cache item @keywords search cache item */
export type SearchCacheItem<T extends SearchItem> = {
    item: T;
    value: string;
};
/** Search cache list @keywords search cache */
export type SearchCache<T extends SearchItem> = SearchCacheItem<T>[];
/** Highlight match item type @keywords highlight match item */
export type HighlightMatchItem = {
    text: string;
    isMatch: boolean;
};