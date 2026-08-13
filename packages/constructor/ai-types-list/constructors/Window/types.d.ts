// md5:6a3933fae14620b043a380d08b52c407 true
import { ConstrClass } from '@dxtmisha/functional';

export type WindowComponents = ScrollbarComponentInclude & ButtonComponentInclude & ImageComponentInclude;

export type WindowEmits = ScrollbarEmitsInclude & ImageEmitsInclude & ModelEmitsOpen & {
    window: [options: WindowEmitOptions];
};

/** @keywords window, expose, api */
export interface WindowExpose {
    /** @keywords id, get */
    getId(): string | undefined;
    /** @keywords open, state, get */
    getOpen(): boolean;
    /** @keywords control, item, get */
    getControl(): WindowControlItem | undefined;
    /** @keywords open, set */
    setOpen(open: boolean): Promise<void>;
    /** @keywords open, transition */
    toOpen(): Promise<void>;
    /** @keywords close, transition */
    toClose(): Promise<void>;
    /** @keywords toggle, visibility */
    toggle(): Promise<void>;
}

export interface WindowSlots {
    control?(props: WindowControlItem): any;
    title?(props: WindowControlItem): any;
    footer?(props: WindowControlItem): any;
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