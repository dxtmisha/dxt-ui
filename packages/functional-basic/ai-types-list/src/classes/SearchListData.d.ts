// md5:1526d0c3e87b85105d04525d915f5b01 true
/** Manages and formats search data list and its cache. @keywords search list data cache format */
export declare class SearchListData<T extends SearchItem, K extends SearchColumns<T>> {
    /** Creates a SearchListData instance. @keywords constructor init */
    constructor(list: SearchListValue<T>, columns: K | undefined, item: SearchListItem, options: SearchListOptions);
    /** Checks if both list and columns are provided. @keywords is ready validation */
    is(): this is this & {
        list: T[];
        columns: string[];
    };
    /** Checks if the list is provided. @keywords isList hasList validation */
    isList(): this is this & {
        list: T[];
    };
    /** Returns the original list. @keywords getList source */
    getList(): SearchListValue<T>;
    /** Returns the search columns. @keywords getColumns fields */
    getColumns(): K | undefined;
    /** Sets a new list and regenerates the cache. @keywords setList update */
    setList(list: SearchListValue<T>): this;
    /** Sets new search columns and regenerates the cache. @keywords setColumns update */
    setColumns(columns?: SearchColumns<T>): this;
    /** Finds a cached item corresponding to the given original item. @keywords findCacheItem find cache lookup */
    findCacheItem(item: T): SearchCacheItem<T> | undefined;
    /** Iterates over cached items and executes a callback for each item. @keywords forEach iterate format */
    forEach(callback: (item: SearchCacheItem<T>['item'], value: SearchCacheItem<T>['value']) => SearchFormatItem<T, K> | undefined): SearchFormatList<T, K>;
    /** Converts a single item to a formatted item with highlighted matches. @keywords toFormatItem highlight format */
    toFormatItem(item: T, selection: boolean): SearchFormatItem<T, K>;
}