// md5:3860a5dcc8b0758f8843cd9ae150803b true
/** Manages a single search item's value and search state. @keywords search item, search state, query */
export declare class SearchListItem {
    /** Initializes a new SearchListItem instance. @keywords search item, constructor */
    constructor(value: string | undefined, options: SearchListOptions);
    /** Checks whether the search value is non-empty. @keywords check value, is filled, type guard */
    is(): this is this & {
        value: string;
    };
    /** Checks whether the search value is valid and meets the minimum length threshold. @keywords min length, is search, search check */
    isSearch(): boolean;
    /** Gets the current search value. @keywords get search value, search query */
    get(): string;
    /** Sets a new search value. @keywords set search value, update query */
    set(value?: string): this;
}