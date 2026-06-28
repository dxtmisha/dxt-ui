import type { ConstrClass } from '@dxtmisha/functional'

import type { IconComponentInclude } from '../Icon'
import type { EventClickEmits, EventClickExpose } from '../../types/eventClickTypes'
import type { LabelSlots } from '../../types/labelTypes'

/**
 * Interface for describing which components need to be connected for work.
 *
 * Интерфейс для описания, какие компоненты надо подключить для работы.
 */
export type BreadcrumbItemComponents = IconComponentInclude

/**
 * Type describing available events.
 *
 * Тип, описывающий доступные события.
 */
export type BreadcrumbItemEmits = EventClickEmits

/**
 * Type describing available properties.
 *
 * Тип, описывающий доступные свойства.
 */
export interface BreadcrumbItemExpose extends EventClickExpose {
}

/**
 * Type describing available slots.
 *
 * Тип, описывающий доступные слоты.
 */
export interface BreadcrumbItemSlots extends LabelSlots {
}

/**
 * Type describing subclasses.
 *
 * Тип, описывающий подклассы.
 */
export type BreadcrumbItemClasses = {
  main: ConstrClass
  // :classes [!] System label / Системная метка
  iconArrow: string
  // :classes [!] System label / Системная метка
}
