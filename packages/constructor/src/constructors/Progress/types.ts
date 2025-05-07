import type { ConstrClass } from '@dxt-ui/functional'

/**
 * Interface for describing which components need to be connected for work.
 *
 * Интерфейс для описания, какие компоненты надо подключить для работы.
 */
export type ProgressComponents = {}

/**
 * Type describing available events.
 *
 * Тип, описывающий доступные события.
 */
export type ProgressEmits = {}

/**
 * Type describing available properties.
 *
 * Тип, описывающий доступные свойства.
 */
export interface ProgressExpose {}

/**
 * Type describing available slots.
 *
 * Тип, описывающий доступные слоты.
 */
export interface ProgressSlots {}

/**
 * Type describing subclasses.
 *
 * Тип, описывающий подклассы.
 */
export type ProgressClasses = {
  main: ConstrClass
  // :classes [!] System label / Системная метка
  circle: string
  circleSub: string
  point: string
  // :classes [!] System label / Системная метка
}
