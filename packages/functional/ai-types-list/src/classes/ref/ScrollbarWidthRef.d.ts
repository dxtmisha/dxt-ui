// md5:dccf8e1f2abf0382b096f974d317424a true
/** Reactive manager for scrollbar width measurements. @keywords scrollbar width reactive ref */
export declare class ScrollbarWidthRef {
    /** Reactive scrollbar presence state. @keywords scrollbar item reactive ref */
    readonly item: import("vue").Ref<boolean | undefined, boolean | undefined>;
    /** Reactive scrollbar width in pixels. @keywords scrollbar width reactive ref */
    readonly width: import("vue").Ref<number, number>;
    /** Initializes scrollbar width reactive state. @keywords constructor init */
    constructor();
    /** Computed flag indicating whether scrollbar width is defined. @keywords is defined computed */
    readonly is: import("vue").ComputedRef<boolean>;
}