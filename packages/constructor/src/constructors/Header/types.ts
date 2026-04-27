import type { ConstrClass } from '@dxtmisha/functional'

import type { CaptionSlots } from '../../types/captionTypes'
import type { LabelSlots } from '../../types/labelTypes'

/**
 * Interface for describing which components need to be connected for work.
 *
 * Интерфейс для описания, какие компоненты надо подключить для работы.
 */
export type HeaderComponents = {}

/**
 * Type describing available events.
 *
 * Тип, описывающий доступные события.
 */
export type HeaderEmits = {}

/**
 * Type describing available properties.
 *
 * Тип, описывающий доступные свойства.
 */
export interface HeaderExpose {
}

/**
 * Type describing available slots.
 *
 * Тип, описывающий доступные слоты.
 */
export interface HeaderSlots extends LabelSlots, CaptionSlots {
  /** Slot for trailing content/ Слот для правого контента */
  trailing?(props: any): any
}

/**
 * Type describing subclasses.
 *
 * Тип, описывающий подклассы.
 */
export type HeaderClasses = {
  main: ConstrClass
  // :classes [!] System label / Системная метка
  label: string
  caption: string
  icon: string
  space: string
  // :classes [!] System label / Системная метка
}
