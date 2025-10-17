import type { ConstrClass } from '@dxtmisha/functional'
import type { ModalComponents, ModalEmits, ModalExpose } from '../Modal'
import type { IconComponentInclude } from '../Icon'
import type { EventClickEmits } from '../../types/eventClickTypes'

/**
 * Interface for describing which components need to be connected for work.
 *
 * Интерфейс для описания, какие компоненты надо подключить для работы.
 */
export type DialogComponents = ModalComponents & IconComponentInclude

/**
 * Type describing available events.
 *
 * Тип, описывающий доступные события.
 */
export type DialogEmits = ModalEmits & EventClickEmits

/**
 * Type describing available properties.
 *
 * Тип, описывающий доступные свойства.
 */
export interface DialogExpose extends ModalExpose {
}

/**
 * Type describing available slots.
 *
 * Тип, описывающий доступные слоты.
 */
export interface DialogSlots extends ModalExpose {
}

/**
 * Type describing subclasses.
 *
 * Тип, описывающий подклассы.
 */
export type DialogClasses = {
  main: ConstrClass
  // :classes [!] System label / Системная метка
  // :classes [!] System label / Системная метка
}
