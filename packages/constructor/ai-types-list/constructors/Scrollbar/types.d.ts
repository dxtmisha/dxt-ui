// md5:695685a4f3ccdc9c10ea664a24186fc8 true
import type { VNode } from 'vue';
import type { ConstrClass } from '@dxtmisha/functional';

export type ScrollbarComponents = {};

/** Scrollbar event definitions and payloads @keywords scrollbar, emits, events */
export type ScrollbarEmits = {
    /** Triggered when reaching or leaving the top edge @keywords top, scroll */
    top: [isTop: boolean];
    /** Triggered when reaching the exact top position @keywords reachTop, top */
    reachTop: [];
    /** Triggered when scrolling away from the top position @keywords leaveTop, top */
    leaveTop: [];
    /** Triggered when reaching or leaving the bottom edge @keywords bottom, scroll */
    bottom: [isBottom: boolean];
    /** Triggered when reaching the exact bottom position @keywords reachBottom, bottom */
    reachBottom: [];
    /** Triggered when scrolling away from the bottom position @keywords leaveBottom, bottom */
    leaveBottom: [];
    /** Triggered when reaching any boundary edge @keywords edge, boundary */
    edge: [isTop: boolean, isBottom: boolean, edge: ScrollbarEdgeType];
};

export interface ScrollbarExpose {}

/** Scrollbar slot definitions @keywords scrollbar, slots */
export interface ScrollbarSlots {
    /** Main content slot @keywords slot, default */
    default?(props?: Record<string, never>): VNode[] | undefined;
}

export type ScrollbarClasses = {
    main: ConstrClass;
};