// md5:161e4278c7c37f4383df8532f80c31ff true
/** Reactive wrapper for asynchronous scrollbar measurement. @keywords scrollbar, width, reactive, measurement */
export declare class ScrollbarWidthRef {
    /** Scrollbar presence flag; true if width > -1 and <= 8px, initially undefined. @keywords scrollbar, flag, presence */
    readonly item: import("vue").Ref<boolean | undefined>;
    /** Scrollbar width in pixels; initially 0. @keywords scrollbar, width, pixels, size */
    readonly width: import("vue").Ref<number>;
    /** Initializes a new ScrollbarWidthRef instance. @keywords scrollbar, constructor, init */
    constructor();
    /** Indicates whether the scrollbar measurement is completed and defined. @keywords scrollbar, ready, computed */
    readonly is: import("vue").ComputedRef<boolean>;
}