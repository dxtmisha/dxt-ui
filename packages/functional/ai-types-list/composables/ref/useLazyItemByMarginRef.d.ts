// md5:d82127287c63afcbe323434b305076af true
export type LazyItemByMargin = {
    rootMargin: string;
    item: ReturnType<typeof useLazyRef>;
};
/** Initializes element visibility tracking based on root margin. @keywords lazy loading, intersection observer, viewport, margin tracking */
export declare const useLazyItemByMarginRef: (element: RefType<HTMLElement | undefined>, rootMargin?: string) => {
    /** Lazy item visibility status. */
    lazyItemStatus: import("vue").ShallowRef<boolean, boolean>;
    /** Tracked lazy item instance. */
    readonly lazyItem: LazyItem | undefined;
};