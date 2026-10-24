import type { ConstrBind } from '@dxtmisha/functional'

import type { ScrollbarPropsBasic } from './props'
import type { ScrollbarEmits } from './types'

/**
 * Type describing the edge position of the scrollbar /
 * Тип, описывающий позицию края скроллбара
 */
export type ScrollbarEdgeType = 'top' | 'bottom'

/**
 * Type describing event listener callbacks for scrollbar inclusion /
 * Тип, описывающий функции-обработчики событий для включения скроллбара
 */
export type ScrollbarEventList = {
  /** Handler for top boundary state change / Обработчик изменения состояния верхней границы */
  onTop: (isTop: boolean) => void
  /** Handler for reaching top boundary / Обработчик достижения верхней границы */
  onReachTop: () => void
  /** Handler for leaving top boundary / Обработчик ухода с верхней границы */
  onLeaveTop: () => void
  /** Handler for bottom boundary state change / Обработчик изменения состояния нижней границы */
  onBottom: (isBottom: boolean) => void
  /** Handler for reaching bottom boundary / Обработчик достижения нижней границы */
  onReachBottom: () => void
  /** Handler for leaving bottom boundary / Обработчик ухода с нижней границы */
  onLeaveBottom: () => void
  /** Handler for reaching or leaving any edge / Обработчик достижения или ухода с любого края */
  onEdge: (isTop: boolean, isBottom: boolean, edge: ScrollbarEdgeType) => void
}

/**
 * Interface for describing which components need to be connected for work /
 * Интерфейс для описания, какие компоненты надо подключить для работы
 */
export type ScrollbarComponentInclude = {
  /** Scrollbar component configuration / Конфигурация компонента скроллбара */
  scrollbar?: object
}

/**
 * Interface for describing available events with scrollbar prefix /
 * Интерфейс для описания доступных событий с префиксом scrollbar
 */
export type ScrollbarEmitsInclude = {
  /** Event triggered when reaching the top / Событие при достижении верха */
  scrollbarTop: ScrollbarEmits['top']
  /** Event triggered when precisely reaching the top position / Событие при точном достижении верхней позиции */
  scrollbarReachTop: ScrollbarEmits['reachTop']
  /** Event triggered when leaving the top position / Событие при уходе с верхней позиции */
  scrollbarLeaveTop: ScrollbarEmits['leaveTop']
  /** Event triggered when reaching the bottom / Событие при достижении низа */
  scrollbarBottom: ScrollbarEmits['bottom']
  /** Event triggered when precisely reaching the bottom position / Событие при точном достижении нижней позиции */
  scrollbarReachBottom: ScrollbarEmits['reachBottom']
  /** Event triggered when leaving the bottom position / Событие при уходе с нижней позиции */
  scrollbarLeaveBottom: ScrollbarEmits['leaveBottom']
  /** Event triggered when reaching any edge / Событие при достижении любого края */
  scrollbarEdge: ScrollbarEmits['edge']
}

/**
 * Interface for describing available properties for scrollbar inclusion /
 * Интерфейс для описания доступных свойств для включения скроллбара
 */
export type ScrollbarPropsInclude<
  Scrollbar extends ScrollbarPropsBasic = ScrollbarPropsBasic
> = {
  /** Additional attributes for the scrollbar / Дополнительные атрибуты для скроллбара */
  scrollbarAttrs?: ConstrBind<Scrollbar>
}
