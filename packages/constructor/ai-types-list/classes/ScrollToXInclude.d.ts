// md5:3ab7e363fd61f62fc3f2daf9618ad18c true
import { Ref } from 'vue';

/** Manages horizontal scrolling via wheel interactions. @keywords scroll horizontal wheel snap */
export declare class ScrollToXInclude {
    /** Creates ScrollToXInclude instance. @keywords constructor init @param element target scrollable element reference */
    constructor(element: Ref<HTMLElement | undefined>);
    /** Returns element event bindings. @keywords bindings wheel getter */
    get binds(): {
        onWheelPassive: (event: WheelEvent) => void;
    };
    /** Handles wheel event for horizontal scrolling. @keywords wheel event handler */
    readonly onScrollToX: (event: WheelEvent) => void;
}