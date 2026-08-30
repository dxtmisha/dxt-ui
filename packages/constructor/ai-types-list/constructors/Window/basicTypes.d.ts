// md5:3869002fa5d1937d2e0aab3b201257ae true
import type { Ref } from 'vue';
import type { ConstrBind } from '@dxtmisha/functional';

/** Window lifecycle status states @keywords window, status, lifecycle */
export declare enum WindowStatusItem {
    display = "display",
    preparation = "preparation",
    flash = "flash",
    open = "open",
    hide = "hide",
    close = "close"
}

/** Window behavior and appearance control items @keywords window, control, status */
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

export type WindowEventClickType = KeyboardEvent | MouseEvent | TouchEvent;

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

export interface WindowExposeInclude extends WindowExpose {
    /** Returns reference to the window element @keywords window, element, expose */
    getWindowElement(): ConstrBind<WindowExpose> | undefined;
}

export type WindowPropsInclude<Window extends WindowPropsBasic = WindowPropsBasic> = {
    disabled?: boolean;
    autoClose?: boolean;
    windowAttrs?: ConstrBind<Window>;
};

export declare const __WINDOW_TYPE_BODY_NAME = "--sys-type-body";