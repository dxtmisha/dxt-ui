// md5:ad6c04f5d6283b7923ae21b473034f84 true
/** Search item value and state @keywords search_item, value */
export declare class SearchListItem {
    /** Creates SearchListItem @keywords constructor, init */
    constructor(value: string | undefined, options: SearchListOptions);
    /** Checks if value is filled @keywords check, exists */
    is(): this is this & {
        value: string;
    };
    /** Checks if search length meets limit @keywords search, limit */
    isSearch(): boolean;
    /** Returns current search value @keywords get, value */
    get(): string;
    /** Sets new search value @keywords set, value */
    set(value?: string): this;
}