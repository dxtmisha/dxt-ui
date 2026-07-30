import type { ConstrClass } from '@dxtmisha/functional'
import type { HeadroomEmitsInclude, HeadroomExposeInclude } from '../../types/headroomTypes'

/**
 * Interface for describing which components need to be connected for work.
 *
 * Интерфейс для описания, какие компоненты надо подключить для работы.
 */
export type HeadroomComponents = {
  // componentName: object
}

/**
 * Type describing available events.
 *
 * Тип, описывающий доступные события.
 */
export type HeadroomEmits = HeadroomEmitsInclude

/**
 * Type describing available properties.
 *
 * Тип, описывающий доступные свойства.
 */
export type HeadroomExpose = HeadroomExposeInclude

/**
 * Type describing available slots.
 *
 * Тип, описывающий доступные слоты.
 */
export interface HeadroomSlots {
  default? (props: any): any
}

/**
 * Type describing subclasses.
 *
 * Тип, описывающий подклассы.
 */
export type HeadroomClasses = {
  main: ConstrClass
  // :classes [!] System label / Системная метка
  // :classes [!] System label / Системная метка
}
