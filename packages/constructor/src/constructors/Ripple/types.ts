import type { ConstrClass } from '@dxt-ui/functional'

/**
 * Interface for describing which components need to be connected for work.
 *
 * Интерфейс для описания, какие компоненты надо подключить для работы.
 */
export type RippleComponents = {}

/**
 * Type describing available events.
 *
 * Тип, описывающий доступные события.
 */
export type RippleEmits = {}

/**
 * Type describing available properties.
 *
 * Тип, описывающий доступные свойства.
 */
export interface RippleExpose {}

/**
 * Type describing available slots.
 *
 * Тип, описывающий доступные слоты.
 */
export interface RippleSlots {}

/**
 * Type describing subclasses.
 *
 * Тип, описывающий подклассы.
 */
export type RippleClasses = {
  main: ConstrClass
  // :classes [!] System label / Системная метка
  item: string
  // :classes [!] System label / Системная метка
}
