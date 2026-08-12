import type { ConstrClass } from '@dxtmisha/functional'

import type { FieldLabelComponentInclude, FieldLabelSlotsInclude } from '../FieldLabel'
import type { FieldMessageComponentInclude } from '../FieldMessage'
import type { IconComponentInclude } from '../Icon'
import type { SliderComponentInclude, SliderSlots, SliderValueType } from '../Slider'

import type { FieldBasicEmits, FieldBasicExpose } from '../../types/fieldTypes'

/**
 * Interface for describing which components need to be connected for work.
 *
 * Интерфейс для описания, какие компоненты надо подключить для работы.
 */
export type SliderFieldComponents
  = SliderComponentInclude
    & FieldLabelComponentInclude
    & FieldMessageComponentInclude
    & IconComponentInclude

/**
 * Type describing available events.
 *
 * Тип, описывающий доступные события.
 */
export type SliderFieldEmits = FieldBasicEmits<SliderValueType>

/**
 * Type describing available properties.
 *
 * Тип, описывающий доступные свойства.
 */
export interface SliderFieldExpose extends FieldBasicExpose<SliderValueType> {
}

/**
 * Type describing available slots.
 *
 * Тип, описывающий доступные слоты.
 */
export interface SliderFieldSlots extends FieldLabelSlotsInclude, SliderSlots {
  leading?: (props: any) => any
  trailing?: (props: any) => any
}

/**
 * Type describing subclasses.
 *
 * Тип, описывающий подклассы.
 */
export type SliderFieldClasses = {
  main: ConstrClass
  // :classes [!] System label / Системная метка
  body: string
  hidden: string
  labelSlider: string
  labelLeading: string
  labelTrailing: string
  input: string
  inputMin: string
  inputMax: string
  value: string
  valueMin: string
  valueMax: string
  slider: string
  // :classes [!] System label / Системная метка
}
