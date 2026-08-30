// md5:cc742cdcfb73b9f080ee2bf2dd50a7e8 true
export type SearchItem = Record<string, any>;
export type SearchColumnPath<K, P> = K extends string ? P extends string ? `${K}.${P}` : never : never;
/** Resolves flat and nested dot-notated property paths for an item. @keywords search column path */
export type SearchColumn<T extends SearchItem> = {
    [K in keyof T]-?: NonNullable<T[K]> extends object ? K | SearchColumnPath<K, keyof NonNullable<T[K]>> : K;
}[keyof T];
export type SearchColumns<T extends SearchItem> = (SearchColumn<T> & string)[];
export type SearchFormatCapitalize<K extends string> = K extends `${infer First}.${infer Rest}` ? `${First}${Capitalize<SearchFormatCapitalize<Rest>>}` : K;
export type SearchFormatKey<K> = K extends string ? `${SearchFormatCapitalize<K>}Search` : never;
/** Formats search item with search keys and active status. @keywords search format item */
export type SearchFormatItem<T extends SearchItem, KT extends string[]> = {
    [K in keyof T | SearchFormatKey<KT[number]>]: K extends keyof T ? T[K] : string;
} & {
    searchActive?: boolean;
};
export type SearchFormatList<T extends SearchItem, K extends string[]> = SearchFormatItem<T, K>[];
export type SearchListValue<T extends SearchItem> = T[] | undefined;
/** Search configuration options. @keywords search options config */
export type SearchOptions = {
    limit?: number;
    returnEverything?: boolean;
    delay?: number;
    findExactMatch?: boolean;
    classSearchName?: string;
};
export type SearchCacheItem<T extends SearchItem> = {
    item: T;
    value: string;
};
export type SearchCache<T extends SearchItem> = SearchCacheItem<T>[];
export type HighlightMatchItem = {
    text: string;
    isMatch: boolean;
};