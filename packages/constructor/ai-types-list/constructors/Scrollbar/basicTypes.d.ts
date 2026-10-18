// md5:1b4549aa34424f5fdbee24af907611d1 true
import type { ConstrBind } from '@dxtmisha/functional';

export type ScrollbarEdgeType = 'top' | 'bottom';

export type ScrollbarComponentInclude = {
    /** Scrollbar component configuration @keywords scrollbar, config */
    scrollbar?: object;
};

/** Scrollbar event mappings prefixed with `scrollbar` @keywords scrollbar, emits, events */
export type ScrollbarEmitsInclude = {
    /** Event triggered when reaching top @keywords scrollbar, top */
    scrollbarTop: ScrollbarEmits['top'];
    /** Event triggered when precisely reaching top position @keywords scrollbar, reach, top */
    scrollbarReachTop: ScrollbarEmits['reachTop'];
    /** Event triggered when leaving top position @keywords scrollbar, leave, top */
    scrollbarLeaveTop: ScrollbarEmits['leaveTop'];
    /** Event triggered when reaching bottom @keywords scrollbar, bottom */
    scrollbarBottom: ScrollbarEmits['bottom'];
    /** Event triggered when precisely reaching bottom position @keywords scrollbar, reach, bottom */
    scrollbarReachBottom: ScrollbarEmits['reachBottom'];
    /** Event triggered when leaving bottom position @keywords scrollbar, leave, bottom */
    scrollbarLeaveBottom: ScrollbarEmits['leaveBottom'];
    /** Event triggered when reaching any edge @keywords scrollbar, edge */
    scrollbarEdge: ScrollbarEmits['edge'];
};

/** Scrollbar inclusion properties @keywords scrollbar, props, attributes */
export type ScrollbarPropsInclude<Scrollbar extends ScrollbarPropsBasic = ScrollbarPropsBasic> = {
    /** Additional attributes for scrollbar component @keywords scrollbar, attrs */
    scrollbarAttrs?: ConstrBind<Scrollbar>;
};