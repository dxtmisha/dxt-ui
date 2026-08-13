// md5:11360d07086d6838b19af0a80ea63986 true
/** Manage search list options @keywords search_list_options search_options */
export declare class SearchListOptions {
    /** @keywords constructor search_list_options */
    constructor(options?: SearchOptions | undefined);
    /** Get current search options @keywords get_options search_options */
    getOptions(): SearchOptions;
    /** Get minimum character limit for search @keywords get_limit search_limit */
    getLimit(): number;
    /** Check if all items should be returned regardless of match @keywords get_return_everything search_all */
    getReturnEverything(): boolean;
    /** Get search delay in milliseconds @keywords get_delay search_delay */
    getDelay(): number;
    /** Check if exact match search is enabled @keywords get_find_exact_match exact_search */
    getFindExactMatch(): boolean;
    /** Get CSS class name for match highlighting @keywords get_class_name search_highlight_class */
    getClassName(): string;
    /** Set new search options @keywords set_options search_options */
    setOptions(options: SearchOptions): this;
}