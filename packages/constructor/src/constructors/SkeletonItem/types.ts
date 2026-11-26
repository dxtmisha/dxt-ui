import type { VNode } from 'vue'
import type { ConstrClass } from '@dxtmisha/functional'

/**
 * Interface for describing which components need to be connected for work.
 *
 * Интерфейс для описания, какие компоненты надо подключить для работы.
 */
export type SkeletonItemComponents = {}

/**
 * Type describing available events.
 *
 * Тип, описывающий доступные события.
 */
export type SkeletonItemEmits = {}

/**
 * Type describing available properties.
 *
 * Тип, описывающий доступные свойства.
 */
export interface SkeletonItemExpose {
}

/**
 * Type describing available slots.
 *
 * Тип, описывающий доступные слоты.
 */
export interface SkeletonItemSlots {
  /** Default slot for the skeleton item / Слот по умолчанию для элемента скелетона */
  default?(props?: Record<string, unknown>): VNode[]
}

/**
 * Type describing subclasses.
 *
 * Тип, описывающий подклассы.
 */
export type SkeletonItemClasses = {
  /** Root element classes / Классы корневого элемента */
  main: ConstrClass
  // :classes [!] System label / Системная метка
  // :classes [!] System label / Системная метка
}
