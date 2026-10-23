// md5:0d5ab90e8018be716a26ef47d8a043b1 true
/** Utility for measuring and caching browser scrollbar width. @keywords scrollbar width measurement scroll */
export declare class ScrollbarWidth {
    /** Checks whether scrollbar hiding should be enabled. @keywords scrollbar check hide enabled */
    static is(): Promise<boolean>;
    /** Gets the scrollbar width in pixels. @keywords scrollbar width size pixels measure */
    static get(): Promise<number>;
    /** Returns the storage instance caching the scrollbar width. @keywords scrollbar storage cache */
    static getStorage(): DataStorage<number>;
    /** Checks if scrollbar width calculation is currently in progress. @keywords scrollbar calculate status flag */
    static getCalculate(): boolean;
}