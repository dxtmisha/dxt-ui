import type { ConstrClass } from '@dxtmisha/functional'

import type { ImageComponentInclude } from '../Image'
import type { FieldMessageComponentInclude } from '../FieldMessage'
import type { ProgressComponentInclude } from '../Progress'
import type { RippleComponentInclude } from '../Ripple'

import type { FieldBasicEmits, FieldBasicExpose } from '../../types/fieldTypes'
import type { LabelSlots } from '../../types/labelTypes'
import type { DescriptionSlots } from '../../types/descriptionTypes'

/**
 * Interface for describing which components need to be connected for work.
 *
 * Интерфейс для описания, какие компоненты надо подключить для работы.
 */
export type CheckboxComponents
  = ImageComponentInclude
    & FieldMessageComponentInclude
    & ProgressComponentInclude
    & RippleComponentInclude

/**
 * Type describing available events.
 *
 * Тип, описывающий доступные события.
 */
export type CheckboxEmits = FieldBasicEmits<boolean>

/**
 * Type describing available properties.
 *
 * Тип, описывающий доступные свойства.
 */
export interface CheckboxExpose extends FieldBasicExpose<boolean> {
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
  input: string
  body: string
  item: string
  icon: string
  loading: string
  info: string
  label: string
  // :classes [!] System label / Системная метка
}
