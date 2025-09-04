import type { ConstrClass } from '@dxt-ui/functional'

import type { CaptionSlots } from '../../types/captionTypes'
import type { EventClickEmits } from '../../types/eventClickTypes'

import type { IconComponentInclude } from '../Icon'
import type { FieldLabelComponentInclude } from '../FieldLabel'
import type { FieldMessageComponentInclude } from '../FieldMessage'
import type { ProgressComponentInclude } from '../Progress'

import type { FieldControl } from './basicTypes'

/**
 * Interface for describing which components need to be connected for work.
 *
 * Интерфейс для описания, какие компоненты надо подключить для работы.
 */
export type FieldComponents
  = IconComponentInclude
    & FieldLabelComponentInclude
    & FieldMessageComponentInclude
    & ProgressComponentInclude

/**
 * Type describing available events.
 *
 * Тип, описывающий доступные события.
 */
export type FieldEmits = EventClickEmits

/**
 * Type describing available properties.
 *
 * Тип, описывающий доступные свойства.
 */
export interface FieldExpose {
}

/**
 * Type describing available slots.
 *
 * Тип, описывающий доступные слоты.
 */
export interface FieldSlots extends CaptionSlots {
  leading? (props: FieldControl): any
  trailing? (props: FieldControl): any
  default? (props: FieldControl): any
}

/**
 * Type describing subclasses.
 *
 * Тип, описывающий подклассы.
 */
export type FieldClasses = {
  main: ConstrClass
  // :classes [!] System label / Системная метка
  // :classes [!] System label / Системная метка
}
