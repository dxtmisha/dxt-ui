// md5:cec551b98c48e182422d0282b929726d true
/**
 * Manages searchable list with options, state, and matching logic.
 * @keywords search, list, filter, match
 */
export declare class SearchList<T extends SearchItem, K extends SearchColumns<T>> {
    /** @keywords constructor, init */
    constructor(list: SearchListValue<T>, columns?: K, value?: string, options?: SearchOptions);
    /** Retrieves search data management instance. @keywords get, data */
    getData(): SearchListData<T, K>;
    /** Retrieves current items list. @keywords get, list */
    getList(): SearchListValue<T>;
    /** Retrieves current search columns. @keywords get, columns */
    getColumns(): K | undefined;
    /** Retrieves search item instance. @keywords get, item */
    getItem(): SearchListItem;
    /** Retrieves current search value string. @keywords get, value */
    getValue(): string | undefined;
    /** Retrieves search options instance. @keywords get, options */
    getOptions(): SearchListOptions;
    /** Updates item list and resets cache. @keywords set, list */
    setList(list: SearchListValue<T>): this;
    /** Updates search columns and resets cache. @keywords set, columns */
    setColumns(columns?: K): this;
    /** Updates search value and matcher. @keywords set, value */
    setValue(value?: string): this;
    /** Updates search options and matcher. @keywords set, options */
    setOptions(options: SearchOptions): this;
    /** Processes and formats items based on search state. @keywords process, format, to */
    to(): SearchFormatList<T, K>;
    /** Processes item when search is active. @keywords callback, selection */
    protected readonly callbackToSelection: (item: SearchCacheItem<T>["item"], value: SearchCacheItem<T>["value"]) => SearchFormatItem<T, K> | undefined;
    /** Processes item when search is inactive. @keywords callback, none */
    protected readonly callbackToNone: (item: SearchCacheItem<T>["item"]) => SearchFormatItem<T, K>;
}