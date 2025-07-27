import type { ConstrClass } from '@dxt-ui/functional'

import type { LabelNumberSlots } from '../../types/labelNumberTypes'
import type { IconComponentInclude } from '../Icon'

/**
 * Interface for describing which components need to be connected for work.
 *
 * Интерфейс для описания, какие компоненты надо подключить для работы.
 */
export type BadgeComponents = IconComponentInclude

/**
 * Type describing available events.
 *
 * Тип, описывающий доступные события.
 */
export type BadgeEmits = {}

/**
 * Type describing available properties.
 *
 * Тип, описывающий доступные свойства.
 */
export interface BadgeExpose {
}

/**
 * Type describing available slots.
 *
 * Тип, описывающий доступные слоты.
 */
export interface BadgeSlots extends LabelNumberSlots {
}

/**
 * Type describing subclasses.
 *
 * Тип, описывающий подклассы.
 */
export type BadgeClasses = {
  main: ConstrClass
  // :classes [!] System label / Системная метка
  label: string
  icon: string
  // :classes [!] System label / Системная метка
}
