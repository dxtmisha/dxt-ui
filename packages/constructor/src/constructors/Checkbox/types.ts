import type { ConstrClass } from '@dxtmisha/functional'

import type { ImageComponentsInclude } from '../Image'
import type { FieldMessageComponentInclude } from '../FieldMessage'
import type { ProgressComponentInclude } from '../Progress'
import type { RippleComponentsInclude } from '../Ripple'

import type { FieldBasicEmits, FieldBasicExpose } from '../../types/fieldTypes'
import type { LabelSlots } from '../../types/labelTypes'
import type { DescriptionSlots } from '../../types/descriptionTypes'

/**
 * Interface for describing which components need to be connected for work.
 *
 * Интерфейс для описания, какие компоненты надо подключить для работы.
 */
export type CheckboxComponents
  = ImageComponentsInclude
    & FieldMessageComponentInclude
    & ProgressComponentInclude
    & RippleComponentsInclude

/**
 * Type describing available events.
 *
 * Тип, описывающий доступные события.
 */
export type CheckboxEmits = FieldBasicEmits

/**
 * Type describing available properties.
 *
 * Тип, описывающий доступные свойства.
 */
export interface CheckboxExpose extends FieldBasicExpose {
}

/**
 * Type describing available slots.
 *
 * Тип, описывающий доступные слоты.
 */
export interface CheckboxSlots extends LabelSlots, DescriptionSlots {
}

/**
 * Type describing subclasses.
 *
 * Тип, описывающий подклассы.
 */
export type CheckboxClasses = {
  main: ConstrClass
  // :classes [!] System label / Системная метка
  // :classes [!] System label / Системная метка
}
