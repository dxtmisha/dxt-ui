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
export type ScrollbarComponentInclude = {
    /** Scrollbar component configuration/ Конфигурация компонента скроллбара */
    scrollbar?: object;
};
/**
 * Interface for describing available events with scrollbar prefix/
 * Интерфейс для описания доступных событий с префиксом scrollbar
 */
export type ScrollbarEmitsInclude = {
    /** Event triggered when reaching the top/ Событие при достижении верха */
    scrollbarTop: ScrollbarEmits['top'];
    /** Event triggered when precisely reaching the top position/ Событие при точном достижении верхней позиции */
    scrollbarReachTop: ScrollbarEmits['reachTop'];
    /** Event triggered when leaving the top position/ Событие при уходе с верхней позиции */
    scrollbarLeaveTop: ScrollbarEmits['leaveTop'];
    /** Event triggered when reaching the bottom/ Событие при достижении низа */
    scrollbarBottom: ScrollbarEmits['bottom'];
    /** Event triggered when precisely reaching the bottom position/ Событие при точном достижении нижней позиции */
    scrollbarReachBottom: ScrollbarEmits['reachBottom'];
    /** Event triggered when leaving the bottom position/ Событие при уходе с нижней позиции */
    scrollbarLeaveBottom: ScrollbarEmits['leaveBottom'];
    /** Event triggered when reaching any edge/ Событие при достижении любого края */
    scrollbarEdge: ScrollbarEmits['edge'];
};
/**
 * Interface for describing available properties for scrollbar inclusion/
 * Интерфейс для описания доступных свойств для включения скроллбара
 */
export type ScrollbarPropsInclude<Scrollbar extends ScrollbarPropsBasic = ScrollbarPropsBasic> = {
    /** Additional attributes for the scrollbar/ Дополнительные атрибуты для скроллбара */
    scrollbarAttrs?: ConstrBind<Scrollbar>;
};
