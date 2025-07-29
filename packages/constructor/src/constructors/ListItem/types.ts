import type { ConstrClass } from '@dxt-ui/functional'

import type { IconComponentInclude } from '../Icon'
import type { BadgeComponentInclude } from '../Badge'
import type { ProgressComponentInclude } from '../Progress'
import type { RippleComponentsInclude } from '../Ripple'

import type { EventClickEmits, EventClickExpose } from '../../types/eventClickTypes'

/**
 * Interface for describing which components need to be connected for work.
 *
 * Интерфейс для описания, какие компоненты надо подключить для работы.
 */
export type ListItemComponents
  = IconComponentInclude
    & BadgeComponentInclude
    & ProgressComponentInclude
    & RippleComponentsInclude

/**
 * Type describing available events.
 *
 * Тип, описывающий доступные события.
 */
export type ListItemEmits = EventClickEmits

/**
 * Type describing available properties.
 *
 * Тип, описывающий доступные свойства.
 */
export interface ListItemExpose extends EventClickExpose {
}

/**
 * Type describing available slots.
 *
 * Тип, описывающий доступные слоты.
 */
export interface ListItemSlots {
  // default? (props: any): any
}

/**
 * Type describing subclasses.
 *
 * Тип, описывающий подклассы.
 */
export type ListItemClasses = {
  main: ConstrClass
  // :classes [!] System label / Системная метка
  // :classes [!] System label / Системная метка
}
