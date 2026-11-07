// md5:bcf57cb3d677070530f7a1600e2a1bc4 true
/** Manages searchable lists, coordinating options, item state, matching logic, and data storage. @keywords search list, filtering, collection search */
export declare class SearchList<T extends SearchItem, K extends SearchColumns<T>> {
    /** Initializes a new SearchList instance. @keywords constructor, init, search list */
    constructor(list: SearchListValue<T>, columns?: K, value?: string, options?: SearchOptions);
    /** Returns the current search columns. @keywords get columns, search fields */
    getColumns(): K | undefined;
    /** Returns the search data management instance. @keywords get data, search list data */
    getData(): SearchListData<T, K>;
    /** Returns the search item instance. @keywords get item, search item */
    getItem(): SearchListItem;
    /** Returns the current list of items. @keywords get list, items */
    getList(): SearchListValue<T>;
    /** Returns the search options instance. @keywords get options, configuration */
    getOptions(): SearchListOptions;
    /** Returns the current search query string. @keywords get value, query, search term */
    getValue(): string;
    /** Sets active search columns and resets the cache. @keywords set columns, search fields */
    setColumns(columns?: K): this;
    /** Sets a new list of items and resets the cache. @keywords set list, update items */
    setList(list: SearchListValue<T>): this;
    /** Sets search options and updates matcher logic. @keywords set options, configure */
    setOptions(options?: SearchOptions): this;
    /** Sets search query string and updates matcher logic. @keywords set value, search query */
    setValue(value?: string): this;
    /** Processes and returns the formatted list based on current search state. @keywords format, search results, process */
    to(): SearchFormatList<T, K>;
}