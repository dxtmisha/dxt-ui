import type { ConstrClass } from '@dxtmisha/functional'

import type { IconComponentInclude } from '../Icon'
import type { BadgeComponentInclude } from '../Badge'
import type { ProgressComponentInclude } from '../Progress'
import type { RippleComponentInclude } from '../Ripple'

import type { LabelSlots } from '../../types/labelTypes'
import type { EventClickEmits, EventClickExpose } from '../../types/eventClickTypes'

/**
 * Interface for describing which components need to be connected for work.
 *
 * Интерфейс для описания, какие компоненты надо подключить для работы.
 */
export type NavigationRailItemComponents
  = IconComponentInclude
    & BadgeComponentInclude
    & ProgressComponentInclude
    & RippleComponentInclude

/**
 * Type describing available events.
 *
 * Тип, описывающий доступные события.
 */
export type NavigationRailItemEmits = EventClickEmits

/**
 * Type describing available properties.
 *
 * Тип, описывающий доступные свойства.
 */
export interface NavigationRailItemExpose extends EventClickExpose {
}

/**
 * Type describing available slots.
 *
 * Тип, описывающий доступные слоты.
 */
export interface NavigationRailItemSlots extends LabelSlots {
  /** Slot for the leading element/ Слот для ведущего элемента */
  leading?(props: any): any

  /** Slot for the list item body/ Слот для содержимого элемента списка */
  body?(props: any): any
}

/**
 * Type describing subclasses.
 *
 * Тип, описывающий подклассы.
 */
export type NavigationRailItemClasses = {
  main: ConstrClass
  // :classes [!] System label / Системная метка
  label: string
  context: string
  contextLine: string
  badge: string
  // :classes [!] System label / Системная метка
}
