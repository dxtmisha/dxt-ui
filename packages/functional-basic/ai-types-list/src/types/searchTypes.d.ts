// md5:cc742cdcfb73b9f080ee2bf2dd50a7e8 true
export type SearchItem = Record<string, any>;
/** Generates a nested dot-notation column path. @keywords search, column, path */
export type SearchColumnPath<K, P> = K extends string ? P extends string ? `${K}.${P}` : never : never;
/** Resolves flat and nested searchable column paths for an item. @keywords search, column, dot-notation */
export type SearchColumn<T extends SearchItem> = {
    [K in keyof T]-?: NonNullable<T[K]> extends object ? K | SearchColumnPath<K, keyof NonNullable<T[K]>> : K;
}[keyof T];
export type SearchColumns<T extends SearchItem> = (SearchColumn<T> & string)[];
/** Converts dot-notation paths to camelCase format. @keywords capitalize, format, path */
export type SearchFormatCapitalize<K extends string> = K extends `${infer First}.${infer Rest}` ? `${First}${Capitalize<SearchFormatCapitalize<Rest>>}` : K;
/** Generates search property key names with a Search suffix. @keywords search, format, key */
export type SearchFormatKey<K> = K extends string ? `${SearchFormatCapitalize<K>}Search` : never;
/** Extends item with formatted search properties and active status. @keywords search, format, item */
export type SearchFormatItem<T extends SearchItem, KT extends string[]> = {
    [K in keyof T | SearchFormatKey<KT[number]>]: K extends keyof T ? T[K] : string;
} & {
    searchActive?: boolean;
};
export type SearchFormatList<T extends SearchItem, K extends string[]> = SearchFormatItem<T, K>[];
export type SearchListValue<T extends SearchItem> = T[] | undefined;
/** Search configuration options. @keywords search, options, config */
export type SearchOptions = {
    limit?: number;
    returnEverything?: boolean;
    delay?: number;
    findExactMatch?: boolean;
    classSearchName?: string;
};
/** Search index cache entry. @keywords search, cache, index */
export type SearchCacheItem<T extends SearchItem> = {
    item: T;
    value: string;
};
export type SearchCache<T extends SearchItem> = SearchCacheItem<T>[];
/** Highlighted text segment indicating match status. @keywords highlight, match, text */
export type HighlightMatchItem = {
    text: string;
    isMatch: boolean;
};