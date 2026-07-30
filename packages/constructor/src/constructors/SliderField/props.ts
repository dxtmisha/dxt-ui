import type { SliderPropsBasic } from '../Slider/props'
import type { SliderFieldPropsInclude } from './basicTypes'

type SliderFieldPropsToken = {
  // :type [!] System label / Системная метка
  // :type [!] System label / Системная метка
}

export type SliderFieldPropsBasic = SliderPropsBasic & SliderFieldPropsInclude

/**
 * Type describing incoming properties.
 *
 * Тип, описывающий входящие свойства.
 */
export type SliderFieldProps = SliderFieldPropsBasic & SliderFieldPropsToken

/**
 * Default value for property.
 *
 * Значение по умолчанию для свойства.
 */
export const defaultsSliderField: SliderFieldPropsBasic = {
  min: 0,
  max: 100,
  step: 1,
  showLabel: true,
  ripple: true,
  ...{
    // :default [!] System label / Системная метка
    // :default [!] System label / Системная метка
  }
}
