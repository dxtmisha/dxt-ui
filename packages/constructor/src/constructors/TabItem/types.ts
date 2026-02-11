import type { ConstrClass } from '@dxtmisha/functional'
import type { IconComponentInclude } from '../Icon'
import type { BadgeComponentInclude } from '../Badge'
import type { ProgressComponentInclude } from '../Progress'
import type { RippleComponentsInclude } from '../Ripple'

import type { EventClickEmits, EventClickExpose } from '../../types/eventClickTypes'
import type { LabelSlots } from '../../types/labelTypes'

/**
 * Interface for describing which components need to be connected for work.
 *
 * Интерфейс для описания, какие компоненты надо подключить для работы.
 */
export type TabItemComponents
  = IconComponentInclude
    & BadgeComponentInclude
    & ProgressComponentInclude
    & RippleComponentsInclude

/**
 * Type describing available events.
 *
 * Тип, описывающий доступные события.
 */
export type TabItemEmits = EventClickEmits

/**
 * Type describing available properties.
 *
 * Тип, описывающий доступные свойства.
 */
export interface TabItemExpose extends EventClickExpose {
}

/**
 * Type describing available slots.
 *
 * Тип, описывающий доступные слоты.
 */
export interface TabItemSlots extends LabelSlots {
}

/**
 * Type describing subclasses.
 *
 * Тип, описывающий подклассы.
 */
export type TabItemClasses = {
  main: ConstrClass
  // :classes [!] System label / Системная метка
  // :classes [!] System label / Системная метка
}
