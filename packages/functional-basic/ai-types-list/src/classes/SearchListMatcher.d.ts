// md5:7465efc64a91bb9faad165e16207bcf5 true
/** Matches search values against search list data using regular expressions. @keywords search, matcher, regex, filter */
export declare class SearchListMatcher {
    /** Creates a SearchListMatcher instance. @keywords constructor, init */
    constructor(item: SearchListItem, options: SearchListOptions);
    /** Checks if the matcher is initialized. @keywords is_initialized, check */
    is(): boolean;
    /** Checks if a value matches the current search expression. @keywords is_selection, match_check, test */
    isSelection(value: SearchCacheItem<any>['value']): boolean;
    /** Gets the current regular expression matcher. @keywords get_regex, pattern */
    get(): RegExp | undefined;
    /** Updates the regular expression matcher from current item value and options. @keywords update, refresh_regex */
    update(): void;
}