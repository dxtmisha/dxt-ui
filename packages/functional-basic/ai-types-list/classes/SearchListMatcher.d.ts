// md5:7465efc64a91bb9faad165e16207bcf5 true
/** Matches search values against list data using regular expressions. @keywords search matcher regex pattern */
export declare class SearchListMatcher {
    /** Initializes the search matcher with item and options. @keywords constructor init */
    constructor(item: SearchListItem, options: SearchListOptions);
    /** Checks if the matcher is active or initialized. @keywords is initialized check active */
    is(): boolean;
    /** Checks if the given value matches the current search expression. @keywords test match selection */
    isSelection(value: SearchCacheItem<any>['value']): boolean;
    /** Gets the compiled regular expression matcher. @keywords regex pattern get */
    get(): RegExp | undefined;
    /** Updates the regex matcher from current item value and options. @keywords update refresh compile */
    update(): void;
}