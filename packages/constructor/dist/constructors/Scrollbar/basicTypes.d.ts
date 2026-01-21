import { ConstrBind } from '@dxtmisha/functional';
import { ScrollbarPropsBasic } from './props';
import { ScrollbarEmits } from './types';
/**
 * Type describing the edge position of the scrollbar/
 * Тип, описывающий позицию края скроллбара
 */
export type ScrollbarEdgeType = 'top' | 'bottom';
/**
 * Interface for describing which components need to be connected for work/
 * Интерфейс для описания, какие компоненты надо подключить для работы
 */
export type ScrollbarComponentsInclude = {
    scrollbar?: object;
};
/**
 * Interface for describing available events with scrollbar prefix/
 * Интерфейс для описания доступных событий с префиксом scrollbar
 */
export type ScrollbarEmitsInclude = {
    scrollbarTop: ScrollbarEmits['top'];
    scrollbarReachTop: ScrollbarEmits['reachTop'];
    scrollbarLeaveTop: ScrollbarEmits['leaveTop'];
    scrollbarBottom: ScrollbarEmits['bottom'];
    scrollbarReachBottom: ScrollbarEmits['reachBottom'];
    scrollbarLeaveBottom: ScrollbarEmits['leaveBottom'];
    scrollbarEdge: ScrollbarEmits['edge'];
};
/**
 * Interface for describing available properties for scrollbar inclusion/
 * Интерфейс для описания доступных свойств для включения скроллбара
 */
export type ScrollbarPropsInclude<Scrollbar extends ScrollbarPropsBasic = ScrollbarPropsBasic> = {
    scrollbarAttrs?: ConstrBind<Scrollbar>;
};
