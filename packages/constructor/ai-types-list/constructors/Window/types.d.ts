// md5:77f799f11b5c279fdd4f260dd4ff5915 true
import type { ConstrClass } from '@dxtmisha/functional';

export type WindowComponents = ScrollbarComponentInclude & ButtonComponentInclude & ImageComponentInclude;

export type WindowEmits = ScrollbarEmitsInclude & ImageEmitsInclude & ModelEmitsOpen & {
    /** Window state change event. @keywords window, state, emit */
    window: [options: WindowEmitOptions];
};

export interface WindowExpose {
    /** Returns the unique identifier of the window. @keywords id, window */
    getId(): string | undefined;
    /** Returns the reactive open state of the window. @keywords open, visibility, state */
    getOpen(): boolean;
    /** Returns the control item data for window management. @keywords control, trigger */
    getControl(): WindowControlItem | undefined;
    /** Sets the window open state. @keywords open, state */
    setOpen(open: boolean): Promise<void>;
    /** Opens the window. @keywords open, show */
    toOpen(): Promise<void>;
    /** Closes the window. @keywords close, hide */
    toClose(): Promise<void>;
    /** Toggles window visibility state. @keywords toggle, visibility */
    toggle(): Promise<void>;
}

export interface WindowSlots {
    /** Slot for window control trigger element. @keywords slot, control */
    control?(props: WindowControlItem): any;
    /** Slot for window title/header. @keywords slot, title, header */
    title?(props: WindowControlItem): any;
    /** Slot for window footer. @keywords slot, footer */
    footer?(props: WindowControlItem): any;
    /** Default slot for main content. @keywords slot, default, content */
    default?(props: WindowControlItem): any;
}

export type WindowClasses = {
    main: ConstrClass;
    body: string;
    bodyGroup: string;
    bodyContext: string;
    control: string;
    image: string;
    close: string;
    teleport: string;
};