// md5:dccf8e1f2abf0382b096f974d317424a true
import type { ComputedRef, Ref } from 'vue';

/** Reactive scrollbar width tracker @keywords scrollbar, width, reactive, vue */
export declare class ScrollbarWidthRef {
    /** Reactive state indicating measurement activity @keywords reactive, state */
    readonly item: Ref<boolean | undefined>;
    /** Reactive scrollbar width in pixels @keywords reactive, width, scrollbar */
    readonly width: Ref<number>;
    /** Initializes the reactive scrollbar width tracker @keywords constructor, init */
    constructor();
    /** Computed flag indicating if scrollbar width is measured and defined @keywords computed, check */
    readonly is: ComputedRef<boolean>;
}