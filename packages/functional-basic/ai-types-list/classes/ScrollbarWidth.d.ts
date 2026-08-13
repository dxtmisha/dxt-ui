// md5:3b09133e825a2ec80bbdbdca589ddb5e true
/** Scrollbar width helper utility @keywords scrollbar, width, scroll */
export declare class ScrollbarWidth {
    /** Checks whether to enable scroll hiding @keywords scrollbar, hide, check */
    static is(): Promise<boolean>;
    /** Returns the width of the scroll @keywords scrollbar, width, size */
    static get(): Promise<number>;
    /** Returns the storage for scroll width @keywords scrollbar, storage */
    static getStorage(): DataStorage<number>;
    /** Returns the calculation flag @keywords scrollbar, calculate, state */
    static getCalculate(): boolean;
    /** Creates elements to check the width of the scroll @keywords scrollbar, element, create */
    static createElement(): HTMLElement | void;
}