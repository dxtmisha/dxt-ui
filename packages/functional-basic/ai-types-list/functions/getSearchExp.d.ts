// md5:6d2d434a0898d28f48cae361a2951788 true
/**
 * Builds a case-insensitive global RegExp for multi-word search matching all terms.
 * @keywords get_search_exp, regexp, search, filter
 * @param search Search string with space-separated words
 * @param limit Maximum search string length
 */
export declare function getSearchExp(search: string, limit?: number): RegExp;