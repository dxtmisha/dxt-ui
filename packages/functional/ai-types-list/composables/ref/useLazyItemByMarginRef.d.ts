// md5:f14f51040aaf6e5e059ebcc6cf192429 true
export type LazyItemByMargin = {
    rootMargin: string;
    item: ReturnType<typeof useLazyRef>;
};
/** Initializes element visibility tracking based on root margin. @keywords lazy load, intersection observer, root margin, viewport */
export declare const useLazyItemByMarginRef: (element: RefType<HTMLElement | undefined>, rootMargin?: string, unmounted?: boolean) => {
    lazyItemStatus: import("vue").ShallowRef<boolean, boolean>;
    readonly lazyItem: LazyItem | undefined;
    /** Removes the element from visibility tracking. @keywords remove, unobserve, cleanup */
    removeLazyItem: () => void;
};