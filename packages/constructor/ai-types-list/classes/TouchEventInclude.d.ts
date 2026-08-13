// md5:5b391b15f408fdb36fbe9094dd7f65a6 true
import { Ref } from 'vue';

export type TouchEventClient = {
    clientX: number;
    clientY: number;
    target?: EventTarget | null;
};

export type TouchEventCallback = (mouse: TouchEventClient, touche?: Touch) => void;

/** Handles touch and mouse events with gesture detection. @keywords touch mouse gesture handler */
export declare class TouchEventInclude {
    /** Creates a touch and mouse event handler instance. @keywords constructor init */
    constructor(start?: ((mouse: TouchEventClient, touche?: Touch) => void) | undefined, move?: TouchEventCallback | undefined, end?: TouchEventCallback | undefined, element?: Ref<HTMLElement | undefined> | undefined);
    /** Touch event handlers. @keywords touch events listeners */
    readonly onTouch: {
        onTouchstart: (event: TouchEvent) => void;
        onTouchend: (event: TouchEvent) => void;
        onTouchcancel: (event: TouchEvent) => void;
        onTouchmove: (event: TouchEvent) => void;
    };
    /** Mouse event handlers. @keywords mouse events listeners */
    readonly onMouse: {
        onMousedown: (event: MouseEvent) => void;
        onMouseup: (event: MouseEvent) => void;
        onMousemove: (event: MouseEvent) => void;
    };
}