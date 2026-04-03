import type { ConstrClass } from '@dxtmisha/functional'
import type { ScrollbarEdgeType } from './basicTypes'

/**
 * Interface for describing which components need to be connected for work.
 *
 * Интерфейс для описания, какие компоненты надо подключить для работы.
 */
export type ScrollbarComponents = {}

/**
 * Type describing available events.
 *
 * Тип, описывающий доступные события.
 */
export type ScrollbarEmits = {
  /** Event triggered when reaching the top/ Событие при достижении верха */
  top: [isTop: boolean]
  /** Event triggered when precisely reaching the top position/ Событие при точном достижении верхней позиции */
  reachTop: []
  /** Event triggered when leaving the top position/ Событие при уходе с верхней позиции */
  leaveTop: []
  /** Event triggered when reaching the bottom/ Событие при достижении низа */
  bottom: [isBottom: boolean]
  /** Event triggered when precisely reaching the bottom position/ Событие при точном достижении нижней позиции */
  reachBottom: []
  /** Event triggered when leaving the bottom position/ Событие при уходе с нижней позиции */
  leaveBottom: []
  /** Event triggered when reaching any edge/ Событие при достижении любого края */
  edge: [isTop: boolean, isBottom: boolean, edge: ScrollbarEdgeType]
}

/**
 * Type describing available properties.
 *
 * Тип, описывающий доступные свойства.
 */
export interface ScrollbarExpose {
}

/**
 * Type describing available slots.
 *
 * Тип, описывающий доступные слоты.
 */
export interface ScrollbarSlots {
  /** Slot for default scrollbar content/ Слот для основного содержимого скроллбара */
  default?(props: any): any
}

/**
 * Type describing subclasses.
 *
 * Тип, описывающий подклассы.
 */
export type ScrollbarClasses = {
  main: ConstrClass
  // :classes [!] System label / Системная метка
  // :classes [!] System label / Системная метка
}
