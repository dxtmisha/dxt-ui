// md5:e15ecb4757bd1a875b197209f84ceae9 true
/** Manages searchable lists, coordinating options, item state, matching logic, and storage. @keywords search, list, filter, data */
export declare class SearchList<T extends SearchItem, K extends SearchColumns<T>> {
    /** Initializes a new SearchList instance. @keywords search list, constructor */
    constructor(list: SearchListValue<T>, columns?: K, value?: string, options?: SearchOptions);
    /** Gets the search data management instance. @keywords search data, storage */
    getData(): SearchListData<T, K>;
    /** Gets the current list of items. @keywords list, items, search list */
    getList(): SearchListValue<T>;
    /** Gets the active search columns. @keywords columns, fields, search columns */
    getColumns(): K | undefined;
    /** Gets the search item instance. @keywords item, search item */
    getItem(): SearchListItem;
    /** Gets the current search query value. @keywords query, search value */
    getValue(): string | undefined;
    /** Gets the search options manager instance. @keywords options, configuration, search options */
    getOptions(): SearchListOptions;
    /** Sets a new list of items and resets the cache. @keywords set list, update items */
    setList(list: SearchListValue<T>): this;
    /** Sets target search columns and resets the cache. @keywords set columns, search fields */
    setColumns(columns?: K): this;
    /** Sets the search query value and updates the matcher. @keywords set value, search query */
    setValue(value?: string): this;
    /** Sets search options and updates the matcher. @keywords set options, configuration */
    setOptions(options: SearchOptions): this;
    /** Processes and returns the formatted list based on the current search state. @keywords format, process, filter results */
    to(): SearchFormatList<T, K>;
}