// md5:0cae6640d29458c55949249cbbe28436 true
/** Manages search configuration options and query behavior settings. @keywords search, options, config, query, filter */
export declare class SearchListOptions {
    /** Initializes search list configuration with optional settings. @keywords init, constructor, search, options */
    constructor(options?: SearchOptions | undefined);
    /** Retrieves all active search configuration options. @keywords options, config, get, settings */
    getOptions(): SearchOptions;
    /** Retrieves the minimum character length required to trigger a search. @keywords limit, min-length, query, threshold */
    getLimit(): number;
    /** Checks whether all items are returned when no query match is found. @keywords fallback, return-all, match, filter */
    getReturnEverything(): boolean;
    /** Retrieves the search debounce delay in milliseconds. @keywords delay, debounce, timeout, ms */
    getDelay(): number;
    /** Checks whether exact match filtering is enabled. @keywords exact-match, strict, search */
    getFindExactMatch(): boolean;
    /** Retrieves the CSS class name used for highlighting matching terms. @keywords css, class-name, highlight, style */
    getClassName(): string;
    /** Updates search configuration options. @keywords update, set, options, config */
    setOptions(options: SearchOptions): this;
}