import { type SliderFieldPropsBasic, defaultsSliderField } from '@dxtmisha/constructor/SliderField'
import type { IconProps } from '../Icon'
import type { FieldLabelProps } from '../FieldLabel'
import type { FieldMessageProps } from '../FieldMessage'
import type { SliderProps } from '../Slider'

export const propsValues = {
  // :values [!] System label / Системная метка
  // :values [!] System label / Системная метка
}

type PropsToken = {
  // :type [!] System label / Системная метка
  disabled?: boolean
  vertical?: boolean
  // :type [!] System label / Системная метка
}

/**
 * Type describing incoming properties/ Тип, описывающий входящие свойства
 */
export type SliderFieldProps = SliderFieldPropsBasic<
  IconProps,
  FieldLabelProps,
  FieldMessageProps,
  SliderProps
> & PropsToken

/**
 * Default value for property/ Значение по умолчанию для свойства
 */
export const defaults: object = {
  ...defaultsSliderField,
  ...{
    // :default [!] System label / Системная метка
    // :default [!] System label / Системная метка
  }
}
