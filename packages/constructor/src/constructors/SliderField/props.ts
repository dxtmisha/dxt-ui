import type { FieldLabelPropsBasic, FieldLabelPropsInclude } from '../FieldLabel'
import type { FieldMessagePropsBasic, FieldMessagePropsInclude } from '../FieldMessage'
import type { IconPropsBasic, IconTrailingPropsInclude } from '../Icon'
import type { SliderPropsBasic, SliderPropsInclude, SliderValueType } from '../Slider'

import type { FieldValueProps } from '../../types/fieldTypes'

type SliderFieldPropsToken = {
  // :type [!] System label / Системная метка
  // :type [!] System label / Системная метка
}

export type SliderFieldPropsBasic<
  Icon extends IconPropsBasic = IconPropsBasic,
  FieldLabel extends FieldLabelPropsBasic = FieldLabelPropsBasic,
  FieldMessage extends FieldMessagePropsBasic = FieldMessagePropsBasic,
  Slider extends SliderPropsBasic = SliderPropsBasic
> = IconTrailingPropsInclude<Icon>
  & FieldLabelPropsInclude<FieldLabel>
  & FieldMessagePropsInclude<FieldMessage>
  & FieldValueProps<SliderValueType>
  & SliderPropsInclude<Slider>
  & {
  /** Show value in label title / Показывать значение в заголовке метки */
    showValueInLabel?: boolean
    /** Show numeric input text boxes / Показывать числовые поля ввода */
    showInput?: boolean

    /** Show current value badge / Показывать метку текущего значения */
    showValue?: boolean

    /** Label or placeholder for minimum value / Метка или плейсхолдер для минимального значения */
    labelMin?: string
    /** Label or placeholder for maximum value / Метка или плейсхолдер для максимального значения */
    labelMax?: string
    /** Text displayed before slider or min input / Текст, отображаемый перед слайдером или мин инпутом */
    labelLeading?: string
    /** Text displayed after slider or max input / Текст, отображаемый после слайдера или макс инпута */
    labelTrailing?: string

    /** Separator between label title and value / Разделитель между заголовком метки и значением */
    labelSeparator?: string

  }

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
export const defaultsSliderField = {
  min: 0,
  max: 100,
  step: 1,
  minimumDistance: 1,
  showValue: true,
  labelSeparator: ': ',
  ...{
    // :default [!] System label / Системная метка
    // :default [!] System label / Системная метка
  }
}
