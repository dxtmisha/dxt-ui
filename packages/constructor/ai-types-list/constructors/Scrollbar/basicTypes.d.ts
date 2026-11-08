// md5:f6c37ee832a374bee4956ee62b53ee10 true
import type { ConstrBind } from '@dxtmisha/functional';

export type ScrollbarEdgeType = 'top' | 'bottom';

/** Event listener callbacks for scrollbar boundaries. @keywords scrollbar, events, listener */
export type ScrollbarEventList = {
    /** Triggered on top boundary state change. */
    onTop: (isTop: boolean) => void;
    /** Triggered when reaching top boundary. */
    onReachTop: () => void;
    /** Triggered when leaving top boundary. */
    onLeaveTop: () => void;
    /** Triggered on bottom boundary state change. */
    onBottom: (isBottom: boolean) => void;
    /** Triggered when reaching bottom boundary. */
    onReachBottom: () => void;
    /** Triggered when leaving bottom boundary. */
    onLeaveBottom: () => void;
    /** Triggered when reaching or leaving any edge. */
    onEdge: (isTop: boolean, isBottom: boolean, edge: ScrollbarEdgeType) => void;
};

/** Component inclusion configuration for scrollbar integration. @keywords scrollbar, component, include */
export type ScrollbarComponentInclude = {
    /** Scrollbar component configuration. */
    scrollbar?: object;
};

/** Scrollbar-prefixed event emitters. @keywords scrollbar, emits, events */
export type ScrollbarEmitsInclude = {
    /** Triggered on top boundary state change. */
    scrollbarTop: ScrollbarEmits['top'];
    /** Triggered on reaching the top boundary. */
    scrollbarReachTop: ScrollbarEmits['reachTop'];
    /** Triggered on leaving the top boundary. */
    scrollbarLeaveTop: ScrollbarEmits['leaveTop'];
    /** Triggered on bottom boundary state change. */
    scrollbarBottom: ScrollbarEmits['bottom'];
    /** Triggered on reaching the bottom boundary. */
    scrollbarReachBottom: ScrollbarEmits['reachBottom'];
    /** Triggered on leaving the bottom boundary. */
    scrollbarLeaveBottom: ScrollbarEmits['leaveBottom'];
    /** Triggered on reaching or leaving any edge. */
    scrollbarEdge: ScrollbarEmits['edge'];
};

/** Properties for scrollbar integration. @keywords scrollbar, props, attributes */
export type ScrollbarPropsInclude<Scrollbar extends ScrollbarPropsBasic = ScrollbarPropsBasic> = {
    /** Additional attributes for the scrollbar component. */
    scrollbarAttrs?: ConstrBind<Scrollbar>;
};