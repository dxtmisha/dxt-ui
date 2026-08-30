// md5:0cae6640d29458c55949249cbbe28436 true
/** Manages search list options and configuration settings. @keywords search, options, list, config */
export declare class SearchListOptions {
    /** Initializes search list options. @keywords constructor, init */
    constructor(options?: SearchOptions | undefined);
    /** Retrieves current search options. @keywords get, options, search */
    getOptions(): SearchOptions;
    /** Retrieves the minimum character length required to trigger search. @keywords limit, min, length, trigger */
    getLimit(): number;
    /** Checks if all items are returned regardless of search match. @keywords return, all, match, filter */
    getReturnEverything(): boolean;
    /** Retrieves search debounce delay in milliseconds. @keywords delay, debounce, time */
    getDelay(): number;
    /** Checks whether exact match searching is enabled. @keywords exact, match, strict */
    getFindExactMatch(): boolean;
    /** Retrieves the CSS class name used for highlighting matches. @keywords class, highlight, css */
    getClassName(): string;
    /** Updates search options. @keywords set, options, update */
    setOptions(options: SearchOptions): this;
}