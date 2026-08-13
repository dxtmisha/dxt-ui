// md5:38e5e0bd2a58dbf4cca0c92cf8cdc67f true
import { ConstrBind } from '@dxtmisha/functional';
export type ScrollbarEdgeType = 'top' | 'bottom';
export type ScrollbarComponentInclude = {
    scrollbar?: object;
};
export type ScrollbarEmitsInclude = {
    scrollbarTop: ScrollbarEmits['top'];
    scrollbarReachTop: ScrollbarEmits['reachTop'];
    scrollbarLeaveTop: ScrollbarEmits['leaveTop'];
    scrollbarBottom: ScrollbarEmits['bottom'];
    scrollbarReachBottom: ScrollbarEmits['reachBottom'];
    scrollbarLeaveBottom: ScrollbarEmits['leaveBottom'];
    scrollbarEdge: ScrollbarEmits['edge'];
};
export type ScrollbarPropsInclude<Scrollbar extends ScrollbarPropsBasic = ScrollbarPropsBasic> = {
    scrollbarAttrs?: ConstrBind<Scrollbar>;
};