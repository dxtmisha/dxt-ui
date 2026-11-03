// md5:5e38c8c9bf16b306475af7653ad27d68 true
export type LazyItemByMargin = {
    rootMargin: string;
    item: ReturnType<typeof useLazyRef>;
};
/** Tracks element screen appearance by root margin with shared observer support. @keywords intersection observer, lazy load, root margin */
export declare const useLazyItemByMarginRef: (element: RefType<HTMLElement | undefined>, rootMargin?: string) => {
    /** Reactive visibility status of the tracked item. */
    lazyItemStatus: import("vue").ShallowRef<boolean>;
    /** Active tracking state owned by this registration. */
    readonly lazyItem: LazyItem | undefined;
    /** Releases this registration from tracking. @keywords unobserve, cleanup */
    removeLazyItem: () => void;
};