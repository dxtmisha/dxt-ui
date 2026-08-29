// md5:3b09133e825a2ec80bbdbdca589ddb5e true
/** Utility class for calculating and managing browser scrollbar width. @keywords scrollbar width measurement */
export declare class ScrollbarWidth {
    /** Checks whether scrollbar hiding should be enabled. @keywords scrollbar is scroll hiding */
    static is(): Promise<boolean>;
    /** Returns the scrollbar width in pixels. @keywords scrollbar width size */
    static get(): Promise<number>;
    /** Returns the data storage instance for the scrollbar width. @keywords scrollbar storage cache */
    static getStorage(): DataStorage<number>;
    /** Checks whether scrollbar width calculation is currently in progress. @keywords scrollbar calculation state */
    static getCalculate(): boolean;
}