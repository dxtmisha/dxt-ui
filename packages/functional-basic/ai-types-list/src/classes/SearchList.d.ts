// md5:e15ecb4757bd1a875b197209f84ceae9 true
/** Manages searchable lists, coordinating options, item state, matching logic, and data storage. @keywords search, list, filter, matcher */
export declare class SearchList<T extends SearchItem, K extends SearchColumns<T>> {
    /** Initializes search list with items, columns, query value, and options. @keywords constructor, search, init */
    constructor(list: SearchListValue<T>, columns?: K, value?: string, options?: SearchOptions);
    /** Returns the search data management instance. @keywords data, storage */
    getData(): SearchListData<T, K>;
    /** Returns the current list of items. @keywords list, items */
    getList(): SearchListValue<T>;
    /** Returns the active search columns. @keywords columns, fields */
    getColumns(): K | undefined;
    /** Returns the search item instance. @keywords item, helper */
    getItem(): SearchListItem;
    /** Returns the current search query value. @keywords query, value, search */
    getValue(): string | undefined;
    /** Returns the search options instance. @keywords options, config */
    getOptions(): SearchListOptions;
    /** Sets a new list of items and resets cache. @keywords list, items, reset */
    setList(list: SearchListValue<T>): this;
    /** Sets new search columns and resets cache. @keywords columns, fields, reset */
    setColumns(columns?: K): this;
    /** Sets search query value and updates matcher. @keywords query, value, matcher */
    setValue(value?: string): this;
    /** Sets search options and updates matcher. @keywords options, config, matcher */
    setOptions(options: SearchOptions): this;
    /** Processes list and returns formatted items based on search state. @keywords format, list, filter, results */
    to(): SearchFormatList<T, K>;
}