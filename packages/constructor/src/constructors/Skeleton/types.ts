import type { ComputedRef } from 'vue'
import type { ConstrClass } from '@dxtmisha/functional'
import type { SkeletonClassesList } from './basicTypes'

/**
 * Interface for describing which components need to be connected for work.
 *
 * Интерфейс для описания, какие компоненты надо подключить для работы.
 */
export type SkeletonComponents = {}

/**
 * Type describing available events.
 *
 * Тип, описывающий доступные события.
 */
export type SkeletonEmits = {}

/**
 * Type describing available properties.
 *
 * Тип, описывающий доступные свойства.
 */
export interface SkeletonExpose {
  isActive: ComputedRef<boolean>
}

/**
 * Type describing available slots.
 *
 * Тип, описывающий доступные слоты.
 */
export interface SkeletonSlots {
  default?(props: SkeletonClassesList): any
}

/**
 * Type describing subclasses.
 *
 * Тип, описывающий подклассы.
 */
export type SkeletonClasses = {
  main: ConstrClass
  // :classes [!] System label / Системная метка
  // :classes [!] System label / Системная метка
}
