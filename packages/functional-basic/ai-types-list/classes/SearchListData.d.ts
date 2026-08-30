// md5:1526d0c3e87b85105d04525d915f5b01 true
/** Manages and formats search data list and item cache. @keywords search, list, cache, format */
export declare class SearchListData<T extends SearchItem, K extends SearchColumns<T>> {
    /** Creates an instance of SearchListData. @keywords constructor, init */
    constructor(list: SearchListValue<T>, columns: K | undefined, item: SearchListItem, options: SearchListOptions);
    /** Checks if both list and columns are provided for column-based search. @keywords type guard, check, columns */
    is(): this is this & {
        list: T[];
        columns: string[];
    };
    /** Checks if the search list is provided. @keywords type guard, check, list */
    isList(): this is this & {
        list: T[];
    };
    /** Returns the original list. @keywords get list, source */
    getList(): SearchListValue<T>;
    /** Returns search columns. @keywords get columns, keys */
    getColumns(): K | undefined;
    /** Sets a new list and updates the cache. @keywords set list, cache */
    setList(list: SearchListValue<T>): this;
    /** Sets search columns and updates the cache. @keywords set columns, cache */
    setColumns(columns?: SearchColumns<T>): this;
    /** Finds a cached item for the given original item. @keywords find, cache, lookup */
    findCacheItem(item: T): SearchCacheItem<T> | undefined;
    /** Iterates over cached items and applies a formatting callback. @keywords iterate, format, callback */
    forEach(callback: (item: SearchCacheItem<T>['item'], value: SearchCacheItem<T>['value']) => SearchFormatItem<T, K> | undefined): SearchFormatList<T, K>;
    /** Formats an item, optionally highlighting matching search terms. @keywords format item, highlight, match */
    toFormatItem(item: T, selection: boolean): SearchFormatItem<T, K>;
}