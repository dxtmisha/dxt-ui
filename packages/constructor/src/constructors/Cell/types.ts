import type { ConstrClass } from '@dxt-ui/functional'

import type { IconComponentInclude } from '../Icon'
import type { ProgressComponentInclude } from '../Progress'
import type { RippleComponentsInclude } from '../Ripple'

import type { EventClickEmits, EventClickExpose } from '../../types/eventClickTypes'
import type { LabelSlots } from '../../types/labelTypes'
import type { DescriptionSlots } from '../../types/descriptionTypes'
import type { CaptionSlots } from '../../types/captionTypes'

import type { CellClassesSub } from './basicTypes'

/**
 * Interface for describing which components need to be connected for work.
 *
 * Интерфейс для описания, какие компоненты надо подключить для работы.
 */
export type CellComponents
  = IconComponentInclude
    & ProgressComponentInclude
    & RippleComponentsInclude

/**
 * Type describing available events.
 *
 * Тип, описывающий доступные события.
 */
export type CellEmits = EventClickEmits

/**
 * Type describing available properties.
 *
 * Тип, описывающий доступные свойства.
 */
export interface CellExpose extends EventClickExpose {
}

/**
 * Type describing available slots.
 *
 * Тип, описывающий доступные слоты.
 */
export interface CellSlots extends LabelSlots, DescriptionSlots, CaptionSlots {
  trailing? (props: CellClassesSub): any
}

/**
 * Type describing subclasses.
 *
 * Тип, описывающий подклассы.
 */
export type CellClasses = {
  main: ConstrClass
  // :classes [!] System label / Системная метка
  context: string
  contextTrailing: string
  label: string
  description: string
  caption: string
  icon: string
  trailing: string
  loading: string
  // :classes [!] System label / Системная метка
}
