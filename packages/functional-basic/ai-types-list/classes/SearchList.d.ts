// md5:bc775f4a0a8c60ed52f643b0cdd3c987 true
/** Manages searchable lists, coordinating options, item state, matching, and data storage. @keywords search list, filter, search manager */
export declare class SearchList<T extends SearchItem, K extends SearchColumns<T>> {
    /** Initializes a new SearchList instance. @keywords constructor, initialize search list */
    constructor(list: SearchListValue<T>, columns?: K, value?: string, options?: SearchOptions);
    /** Returns the current search columns. @keywords get columns, search fields */
    getColumns(): K | undefined;
    /** Returns the search data management instance. @keywords get data, search list data */
    getData(): SearchListData<T, K>;
    /** Returns the search item instance. @keywords get item, search list item */
    getItem(): SearchListItem;
    /** Returns the current list of items. @keywords get list, source items */
    getList(): SearchListValue<T>;
    /** Returns the search options instance. @keywords get options, configuration */
    getOptions(): SearchListOptions;
    /** Returns the current search query string. @keywords get value, query string */
    getValue(): string;
    /** Sets search columns and invalidates the cache. @keywords set columns, update fields */
    setColumns(columns?: K): this;
    /** Sets a new item list and invalidates the cache. @keywords set list, update items */
    setList(list: SearchListValue<T>): this;
    /** Sets search options and updates matcher logic. @keywords set options, configure matcher */
    setOptions(options?: SearchOptions): this;
    /** Sets the search query string and updates matcher logic. @keywords set value, query filter */
    setValue(value?: string): this;
    /** Evaluates the search and returns the formatted result list. @keywords execute search, format list, filter result */
    to(): SearchFormatList<T, K>;
}