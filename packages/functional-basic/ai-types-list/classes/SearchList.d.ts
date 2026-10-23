// md5:d4c14b3cb9192c1dd69af174004ed70d true
/** Manages searchable lists, coordinating options, item state, matching, and data storage. @keywords search list, filter, match coordinator */
export declare class SearchList<T extends SearchItem, K extends SearchColumns<T>> {
    /** Creates a new SearchList instance. @keywords initialize, search list, constructor */
    constructor(list: SearchListValue<T>, columns?: K, value?: string, options?: SearchOptions);
    /** Retrieves the configured search columns. @keywords get columns, search fields */
    getColumns(): K | undefined;
    /** Retrieves the search data manager instance. @keywords get data, data manager */
    getData(): SearchListData<T, K>;
    /** Retrieves the search item manager instance. @keywords get item, item state */
    getItem(): SearchListItem;
    /** Retrieves the current list of items. @keywords get list, source items */
    getList(): SearchListValue<T>;
    /** Retrieves the search options instance. @keywords get options, search configuration */
    getOptions(): SearchListOptions;
    /** Retrieves the active search query string. @keywords get value, search query */
    getValue(): string | undefined;
    /** Sets search columns and invalidates the cache. @keywords set columns, search fields */
    setColumns(columns?: K): this;
    /** Sets a new list of items and invalidates the cache. @keywords set list, update items */
    setList(list: SearchListValue<T>): this;
    /** Sets search options and updates the matcher. @keywords set options, configure */
    setOptions(options: SearchOptions): this;
    /** Sets a new search query and updates the matcher. @keywords set value, query filter */
    setValue(value?: string): this;
    /** Processes and returns the formatted list based on current search criteria. @keywords format, search results, execute */
    to(): SearchFormatList<T, K>;
}