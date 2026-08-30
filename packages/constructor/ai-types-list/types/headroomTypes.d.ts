// md5:7fcf2d70149014f6a9e68f66c6169178 true
import type { ComputedRef } from 'vue';
import type { ElementOrWindow } from '@dxtmisha/functional-basic';

/** Headroom component incoming properties @keywords headroom, scroll, sticky, props */
export type HeadroomPropsInclude = {
    /** Target scrolling element or window selector */
    scrollElement?: ElementOrWindow | string;
    /** Hide element on scroll down and reveal on scroll up */
    disappears?: boolean;
    /** Transform threshold in pixels for transformation calculations */
    transformThreshold?: number;
};

/** Headroom scroll and state event payload @keywords headroom, event, payload, scroll */
export type HeadroomEventItem = {
    value: number;
    disappearsValue: number;
    isSticky: boolean;
    transformThreshold: number;
    transformValue: number;
    transformPercent: number;
    valueDifference: number;
};

/** Headroom component emitted events @keywords headroom, emits, events */
export type HeadroomEmitsInclude = {
    headroomScroll: [event: HeadroomEventItem];
    headroomSticky: [event: HeadroomEventItem];
};

/** Exposed methods and properties for Headroom @keywords headroom, expose, api */
export type HeadroomExposeInclude = {
    isSticky: ComputedRef<boolean>;
    /** Returns current headroom calculation state and values */
    getValues: () => HeadroomEventItem;
    /** Triggers recalculation and updates headroom state */
    update: () => void;
};