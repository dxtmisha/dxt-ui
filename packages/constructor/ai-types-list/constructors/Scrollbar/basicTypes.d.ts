// md5:2491aec5e1810266d3d0bbafb7b81676 true
import type { ConstrBind } from '@dxtmisha/functional';

export type ScrollbarEdgeType = 'top' | 'bottom';

export type ScrollbarComponentInclude = {
  scrollbar?: object;
};

/** Scrollbar event map with prefixed names. @keywords scrollbar, events, emits */
export type ScrollbarEmitsInclude = {
  scrollbarTop: ScrollbarEmits['top'];
  scrollbarReachTop: ScrollbarEmits['reachTop'];
  scrollbarLeaveTop: ScrollbarEmits['leaveTop'];
  scrollbarBottom: ScrollbarEmits['bottom'];
  scrollbarReachBottom: ScrollbarEmits['reachBottom'];
  scrollbarLeaveBottom: ScrollbarEmits['leaveBottom'];
  scrollbarEdge: ScrollbarEmits['edge'];
};

/** Scrollbar inclusion properties. @keywords scrollbar, props, attributes */
export type ScrollbarPropsInclude<Scrollbar extends ScrollbarPropsBasic = ScrollbarPropsBasic> = {
  scrollbarAttrs?: ConstrBind<Scrollbar>;
};