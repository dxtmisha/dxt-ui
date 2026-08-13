// md5:13e9ae724a1bccff7435202817bb2905 true
export type LazyItemByMargin = {
    rootMargin: string;
    item: ReturnType<typeof useLazyRef>;
};
/**
 * Hook for tracking element visibility by margin.
 * @keywords useLazyItemByMarginRef, lazy, observer, margin
 */
export declare const useLazyItemByMarginRef: (element: RefType<HTMLElement | undefined>, rootMargin?: string) => {
    /** Lazy item status */
    lazyItemStatus: ShallowRef<boolean, boolean>;
    /** Tracked lazy item instance */
    readonly lazyItem: LazyItem | undefined;
};