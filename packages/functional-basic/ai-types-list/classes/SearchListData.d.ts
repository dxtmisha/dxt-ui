// md5:b32899fb4bb02ab93b735e3244246f74 true
/** @keywords search list data cache format */
export declare class SearchListData<T extends SearchItem, K extends SearchColumns<T>> {
    /** @keywords constructor init */
    constructor(list: SearchListValue<T>, columns: K | undefined, item: SearchListItem, options: SearchListOptions);
    /** @keywords check ready */
    is(): this is this & {
        list: T[];
        columns: string[];
    };
    /** @keywords check list */
    isList(): this is this & {
        list: T[];
    };
    /** @keywords get list */
    getList(): SearchListValue<T>;
    /** @keywords get columns */
    getColumns(): K | undefined;
    /** @keywords get cache */
    protected getCache(): SearchCache<T>;
    /** @keywords set list */
    setList(list: SearchListValue<T>): this;
    /** @keywords set columns */
    setColumns(columns?: SearchColumns<T>): this;
    /** @keywords find cache item */
    findCacheItem(item: T): SearchCacheItem<T> | undefined;
    /** @keywords iterate foreach */
    forEach(callback: (item: SearchCacheItem<T>['item'], value: SearchCacheItem<T>['value']) => SearchFormatItem<T, K> | undefined): SearchFormatList<T, K>;
    /** @keywords format item */
    toFormatItem(item: T, selection: boolean): SearchFormatItem<T, K>;
    /** @keywords get column name */
    protected getColumnName(column: string): string;
    /** @keywords add tag highlight */
    protected addTag(value: any): string;
    /** @keywords generate cache */
    protected generateCache(): SearchCache<T>;
    /** @keywords init cache */
    protected initCache(): void;
    /** @keywords reset cache */
    protected resetCache(): void;
}