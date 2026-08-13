// md5:98d948f9799c55cc57694d0e762f89f4 true
import { Ref } from 'vue';
import { ConstrBind } from '@dxtmisha/functional';

/** Window lifecycle states @keywords window status item lifecycle state */
export declare enum WindowStatusItem {
    display = "display",
    preparation = "preparation",
    flash = "flash",
    open = "open",
    hide = "hide",
    close = "close"
}

/** Window control options and behavior items @keywords window control status item behavior */
export declare enum WindowStatusControlItem {
    block = "block",
    blockChildren = "blockChildren",
    blockOther = "blockOther",
    close = "close",
    static = "static",
    controlStatic = "controlStatic",
    controlOpenOnly = "controlOpenOnly",
    controlActive = "controlActive",
    persistent = "persistent"
}

export type WindowEmitOptions = {
    id: string;
    element: HTMLDivElement;
    control: HTMLElement;
    open: boolean;
};

export type WindowClassesList = {
    block: string;
    blockChildren: string;
    blockOther: string;
    close: string;
    static: string;
    control: string;
    controlId: string;
    controlStatic: string;
    controlOpenOnly: string;
    controlActive: string;
    persistent: string;
};

/** Window event click type supporting mouse, touch, and keyboard @keywords window event click type */
export type WindowEventClickType = MouseEvent & TouchEvent | KeyboardEvent | MouseEvent | TouchEvent;

/** Window click event handler returning a promise @keywords window event click handler */
export type WindowEventClick = (event: WindowEventClickType) => Promise<void>;

export type WindowControlBasic = {
    classesWindow: WindowClassesList;
};

export type WindowControlItem = WindowControlBasic & {
    class: string;
    open: Ref<boolean>;
    onClick: WindowEventClick;
    onKeydown: WindowEventClick;
    onContextmenu: WindowEventClick;
    binds: AriaList & {
        class: string;
        onClick: WindowEventClick;
        onKeydown: WindowEventClick;
        onContextmenu: WindowEventClick;
    };
};

export type WindowComponentInclude = {
    window?: object;
};

export type WindowEmitsInclude = {
    window: [options: WindowEmitOptions];
};

/** Window expose inclusion interface with element accessor @keywords window expose include interface */
export interface WindowExposeInclude extends WindowExpose {
    /** Returns reference to the window element @keywords get window element expose */
    getWindowElement(): ConstrBind<WindowExpose> | undefined;
}

export type WindowPropsInclude<Window extends WindowPropsBasic = WindowPropsBasic> = {
    disabled?: boolean;
    autoClose?: boolean;
    windowAttrs?: ConstrBind<Window>;
};

/** CSS variable name for MotionTransform body type @keywords window type body name css variable */
export declare const __WINDOW_TYPE_BODY_NAME = "--sys-type-body";