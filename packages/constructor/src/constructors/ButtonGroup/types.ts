import type { ConstrClass } from '@dxtmisha/functional'

import type { ButtonComponentInclude } from '../Button'
import type { EventClickEmits } from '../../types/eventClickTypes'

/**
 * Interface for describing which components need to be connected for work.
 *
 * Интерфейс для описания, какие компоненты надо подключить для работы.
 */
export type ButtonGroupComponents = ButtonComponentInclude

/**
 * Type describing available events.
 *
 * Тип, описывающий доступные события.
 */
export type ButtonGroupEmits = EventClickEmits

/**
 * Type describing available properties.
 *
 * Тип, описывающий доступные свойства.
 */
export interface ButtonGroupExpose {
}

/**
 * Type describing available slots.
 *
 * Тип, описывающий доступные слоты.
 */
export interface ButtonGroupSlots {
  default?(props: any): any
}

/**
 * Type describing subclasses.
 *
 * Тип, описывающий подклассы.
 */
export type ButtonGroupClasses = {
  main: ConstrClass
  // :classes [!] System label / Системная метка
  item: string
  // :classes [!] System label / Системная метка
}
