// md5:7da334b570aab71ee89981f5e4a79733 true
import { Ref, ComputedRef } from 'vue';

/** Scrollbar width reactive reference utility class @keywords scrollbar, width, reactive, dom */
export declare class ScrollbarWidthRef {
    /** Reactive item state @keywords item, state, boolean */
    readonly item: Ref<boolean | undefined, boolean | undefined>;
    /** Reactive scrollbar width value @keywords width, number, size */
    readonly width: Ref<number, number>;
    /** Creates a scrollbar width reference instance @keywords constructor, init */
    constructor();
    /** Computes whether scrollbar width is available @keywords is, computed, check */
    readonly is: ComputedRef<boolean>;
}