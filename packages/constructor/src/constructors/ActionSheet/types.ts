import type { ConstrClass } from '@dxtmisha/functional'
import type {
  ModalComponents,
  ModalEmits,
  ModalExpose,
  ModalSlots
} from '../Modal'

/**
 * Interface for describing which components need to be connected for work.
 *
 * Интерфейс для описания, какие компоненты надо подключить для работы.
 */
export type ActionSheetComponents = ModalComponents

/**
 * Type describing available events.
 *
 * Тип, описывающий доступные события.
 */
export type ActionSheetEmits = ModalEmits

/**
 * Type describing available properties.
 *
 * Тип, описывающий доступные свойства.
 */
export interface ActionSheetExpose extends ModalExpose {
}

/**
 * Type describing available slots.
 *
 * Тип, описывающий доступные слоты.
 */
export interface ActionSheetSlots extends ModalSlots {
}

/**
 * Type describing subclasses.
 *
 * Тип, описывающий подклассы.
 */
export type ActionSheetClasses = {
  main: ConstrClass
  // :classes [!] System label / Системная метка
  title: string
  header: string
  body: string
  footer: string
  touch: string
  tab: string
  // :classes [!] System label / Системная метка
}
