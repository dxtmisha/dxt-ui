// md5:f6b45a3cacfde06a0e135d1af93d0426 true
/** Matches search values against dataset using regex. @keywords search list matcher filter regex */
export declare class SearchListMatcher {
    /** Creates a search list matcher instance. */
    constructor(item: SearchListItem, options: SearchListOptions);
    /** Checks if the matcher is initialized. */
    is(): boolean;
    /** Checks if value matches search expression. */
    isSelection(value: SearchCacheItem<any>['value']): boolean;
    /** Returns current regular expression matcher. */
    get(): RegExp | undefined;
    /** Updates matcher based on current item and options. */
    update(): void;
    /** Initializes or resets regular expression matcher. */
    protected initMatcher(): void;
}