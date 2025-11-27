import type { ConstrClass } from '@dxtmisha/functional'

import type { IconComponentInclude } from '../Icon'
import type { ProgressComponentInclude } from '../Progress'
import type { RippleComponentsInclude } from '../Ripple'

import type { EventClickEmits, EventClickExpose } from '../../types/eventClickTypes'
import type { LabelExpose, LabelSlots } from '../../types/labelTypes'

/**
 * Interface for describing which components need to be connected for work.
 *
 * Интерфейс для описания, какие компоненты надо подключить для работы.
 */
export type ButtonComponents
  = IconComponentInclude
    & ProgressComponentInclude
    & RippleComponentsInclude

/**
 * Type describing available events.
 *
 * Тип, описывающий доступные события.
 */
export type ButtonEmits = EventClickEmits

/**
 * Type describing available properties.
 *
 * Тип, описывающий доступные свойства.
 */
export interface ButtonExpose extends LabelExpose, EventClickExpose {
}

/**
 * Type describing available slots.
 *
 * Тип, описывающий доступные слоты.
 */
export interface ButtonSlots extends LabelSlots {
}

/**
 * Type describing subclasses.
 *
 * Тип, описывающий подклассы.
 */
export type ButtonClasses = {
  main: ConstrClass
  // :classes [!] System label / Системная метка
  label: string
  icon: string
  trailing: string
  loading: string
  // :classes [!] System label / Системная метка
}
