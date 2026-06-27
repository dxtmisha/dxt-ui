import type { ConstrClass } from '@dxtmisha/functional'
import type { LabelSlots } from '../../types/labelTypes'

import type { ImageComponentInclude, ImageEmitsInclude } from '../Image'
import type { BadgeComponentInclude } from '../Badge'

/**
 * Interface for describing which components need to be connected for work.
 *
 * Интерфейс для описания, какие компоненты надо подключить для работы.
 */
export type AvatarComponents = ImageComponentInclude & BadgeComponentInclude

/**
 * Type describing available events.
 *
 * Тип, описывающий доступные события.
 */
export type AvatarEmits = ImageEmitsInclude

/**
 * Type describing available properties.
 *
 * Тип, описывающий доступные свойства.
 */
export interface AvatarExpose {
}

/**
 * Type describing available slots.
 *
 * Тип, описывающий доступные слоты.
 */
export interface AvatarSlots extends LabelSlots {
}

/**
 * Type describing subclasses.
 *
 * Тип, описывающий подклассы.
 */
export type AvatarClasses = {
  /** Class for the main element / Класс для главного элемента */
  main: ConstrClass
  // :classes [!] System label / Системная метка
  label: string
  // :classes [!] System label / Системная метка
}
