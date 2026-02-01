import type { ConstrClass } from '@dxtmisha/functional'

import type { LabelAlternativeSlots } from '../../types/labelTypes'
import type { DescriptionSlots } from '../../types/descriptionTypes'
import type { CaptionSlots } from '../../types/captionTypes'

import type { IconComponentInclude } from '../Icon'

/**
 * Interface for describing which components need to be connected for work.
 *
 * Интерфейс для описания, какие компоненты надо подключить для работы.
 */
export type BlockComponents = IconComponentInclude

/**
 * Type describing available events.
 *
 * Тип, описывающий доступные события.
 */
export type BlockEmits = {}

/**
 * Type describing available properties.
 *
 * Тип, описывающий доступные свойства.
 */
export interface BlockExpose {
}

/**
 * Type describing available slots.
 *
 * Тип, описывающий доступные слоты.
 */
export interface BlockSlots extends LabelAlternativeSlots, DescriptionSlots, CaptionSlots {
  /** Slot for trailing content/ Слот для правого контента */
  trailing?(props: any): any

  /** Slot for headline/ Слот для заголовка */
  headline?(props: any): any

  /** Default slot/ Слот по умолчанию */
  default?(props: any): any
}

/**
 * Type describing subclasses.
 *
 * Тип, описывающий подклассы.
 */
export type BlockClasses = {
  main: ConstrClass
  // :classes [!] System label / Системная метка
  headline: string
  header: string
  label: string
  description: string
  caption: string
  icon: string
  space: string
  body: string
  // :classes [!] System label / Системная метка
}
