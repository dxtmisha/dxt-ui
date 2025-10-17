import type { ConstrClass } from '@dxtmisha/functional'
import type {
  WindowComponentInclude,
  WindowControlItem,
  WindowEmitsInclude,
  WindowExposeInclude,
  WindowSlots
} from '../Window'
import type { BarsComponentInclude, BarsEmitsInclude } from '../Bars'
import type { ActionsComponentInclude, ActionsEmitsInclude } from '../Actions'

/**
 * Interface for describing which components need to be connected for work.
 *
 * Интерфейс для описания, какие компоненты надо подключить для работы.
 */
export type ModalComponents
  = WindowComponentInclude
    & BarsComponentInclude
    & ActionsComponentInclude

/**
 * Type describing available events.
 *
 * Тип, описывающий доступные события.
 */
export type ModalEmits
  = WindowEmitsInclude
    & BarsEmitsInclude
    & ActionsEmitsInclude

/**
 * Type describing available properties.
 *
 * Тип, описывающий доступные свойства.
 */
export interface ModalExpose extends WindowExposeInclude {
}

/**
 * Type describing available slots.
 *
 * Тип, описывающий доступные слоты.
 */
export interface ModalSlots extends WindowSlots {
  header(props: WindowControlItem): any
}

/**
 * Type describing subclasses.
 *
 * Тип, описывающий подклассы.
 */
export type ModalClasses = {
  main: ConstrClass
  // :classes [!] System label / Системная метка
  title: string
  header: string
  body: string
  footer: string
  // :classes [!] System label / Системная метка
}
