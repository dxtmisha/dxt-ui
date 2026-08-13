// md5:59789bf54027b39fa0fcfb0b044f0f6d true
import { ConstrClass } from '@dxtmisha/functional';

export type ScrollStickyComponents = {};

export type ScrollStickyEmits = {};

export interface ScrollStickyExpose {
}

/** @keywords scroll sticky slots default context */
export interface ScrollStickySlots {
    /** Recalculates scroll width @keywords resize */
    default?(props: {
        /** Recalculates the scroll width @keywords resize */
        onResize(): void;
    }): any;
    /** Slot for context element replacement @keywords context */
    context?(props: ScrollStickyBindItem): any;
    /** Slot for scroll element replacement @keywords scroll */
    scroll?(props: ScrollStickyBindItem): any;
}

export type ScrollStickyClasses = {
    main: ConstrClass;
    context: string;
    scroll: string;
};