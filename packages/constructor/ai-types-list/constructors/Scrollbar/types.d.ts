// md5:7fccbff8afc6127696b593bd26dd5aec true
import type { ConstrClass } from '@dxtmisha/functional';

export type ScrollbarComponents = {};

export type ScrollbarEmits = {
    /** Triggered on top edge status change. @keywords top, scroll */
    top: [isTop: boolean];
    /** Triggered when precisely reaching the top edge. @keywords reachTop, scroll */
    reachTop: [];
    /** Triggered when leaving the top edge. @keywords leaveTop, scroll */
    leaveTop: [];
    /** Triggered on bottom edge status change. @keywords bottom, scroll */
    bottom: [isBottom: boolean];
    /** Triggered when precisely reaching the bottom edge. @keywords reachBottom, scroll */
    reachBottom: [];
    /** Triggered when leaving the bottom edge. @keywords leaveBottom, scroll */
    leaveBottom: [];
    /** Triggered when reaching any edge boundary. @keywords edge, scroll */
    edge: [isTop: boolean, isBottom: boolean, edge: ScrollbarEdgeType];
};

export interface ScrollbarExpose {}

export interface ScrollbarSlots {
    /** Default slot for scrollbar content. */
    default?(props: any): any;
}

export type ScrollbarClasses = {
    main: ConstrClass;
};