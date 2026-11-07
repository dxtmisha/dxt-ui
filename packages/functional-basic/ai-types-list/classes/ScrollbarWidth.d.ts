// md5:b44402b739666094d7e764ed00dc525c true
/** Utility class for measuring and managing browser scrollbar width. @keywords scrollbar width measurement */
export declare class ScrollbarWidth {
    /** Checks whether scrollbar hiding or compensation should be enabled. @keywords scrollbar is visible hiding */
    static is(): Promise<boolean>;
    /** Calculates and returns the scrollbar width in pixels. @keywords scrollbar width pixels measurement */
    static get(): Promise<number>;
    /** Indicates whether scrollbar width calculation is currently in progress. @keywords scrollbar calculating flag */
    static getCalculate(): boolean;
    /** Returns the data storage instance caching the scrollbar width value. @keywords scrollbar storage cache */
    static getStorage(): DataStorage<number>;
}