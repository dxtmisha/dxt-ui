// md5:3860a5dcc8b0758f8843cd9ae150803b true
/** Manages search item value and query state. @keywords search item value query state */
export declare class SearchListItem {
    /** Initializes a new SearchListItem instance. @keywords search item constructor init */
    constructor(value: string | undefined, options: SearchListOptions);
    /** Checks whether the search value is defined. @keywords check value exists defined */
    is(): this is this & {
        value: string;
    };
    /** Checks if the search value length meets the minimum limit. @keywords search threshold limit length */
    isSearch(): boolean;
    /** Gets the current search string value. @keywords get search query string */
    get(): string;
    /** Sets the search string value. @keywords set search query update */
    set(value?: string): this;
}