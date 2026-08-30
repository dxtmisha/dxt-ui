// md5:3b09133e825a2ec80bbdbdca589ddb5e true
/** Utility class for calculating and managing scrollbar width. @keywords scrollbar, scroll width, layout, measurement */
export declare class ScrollbarWidth {
    /** Checks whether scrollbar hiding should be enabled. @keywords scrollbar, visibility, check, hide */
    static is(): Promise<boolean>;
    /** Computes and returns the scrollbar width in pixels. @keywords scrollbar, width, measure, pixels */
    static get(): Promise<number>;
    /** Returns the storage instance holding the cached scrollbar width. @keywords scrollbar, storage, cache */
    static getStorage(): DataStorage<number>;
    /** Checks if scrollbar width calculation is currently in progress. @keywords scrollbar, calculate, state, status */
    static getCalculate(): boolean;
}