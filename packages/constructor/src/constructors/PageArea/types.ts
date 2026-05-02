import type { ConstrClass } from '@dxtmisha/functional'
import type { BlockSlots } from '../Block'

/**
 * Interface for describing which components need to be connected for work.
 *
 * Интерфейс для описания, какие компоненты надо подключить для работы.
 */
export type PageAreaComponents = {
  block: object
  group: object
  page: object
  section: object
}

/**
 * Type describing available events.
 *
 * Тип, описывающий доступные события.
 */
export type PageAreaEmits = {}

/**
 * Type describing available properties.
 *
 * Тип, описывающий доступные свойства.
 */
export interface PageAreaExpose {}

/**
 * Type describing available slots.
 *
 * Тип, описывающий доступные слоты.
 */
export interface PageAreaSlots extends BlockSlots {}

/**
 * Type describing subclasses.
 *
 * Тип, описывающий подклассы.
 */
export type PageAreaClasses = {
  main: ConstrClass
  // :classes [!] System label / Системная метка
  // :classes [!] System label / Системная метка
}
