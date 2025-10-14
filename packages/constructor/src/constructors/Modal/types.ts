import type { ConstrClass } from '@dxtmisha/functional'
import type { WindowComponentInclude } from '../Window'
import type { BarsComponentInclude } from '../Bars'

/**
 * Interface for describing which components need to be connected for work.
 *
 * Интерфейс для описания, какие компоненты надо подключить для работы.
 */
export type ModalComponents
  = WindowComponentInclude
    & BarsComponentInclude

/**
 * Type describing available events.
 *
 * Тип, описывающий доступные события.
 */
export type ModalEmits = {
  // load: [value: string]
}

/**
 * Type describing available properties.
 *
 * Тип, описывающий доступные свойства.
 */
export interface ModalExpose {
}

/**
 * Type describing available slots.
 *
 * Тип, описывающий доступные слоты.
 */
export interface ModalSlots {
  // default? (props: any): any
}

/**
 * Type describing subclasses.
 *
 * Тип, описывающий подклассы.
 */
export type ModalClasses = {
  main: ConstrClass
  // :classes [!] System label / Системная метка
  // :classes [!] System label / Системная метка
}
