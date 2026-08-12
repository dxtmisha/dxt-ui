import type { FieldLabelPropsBasic, FieldLabelPropsInclude } from '../FieldLabel'
import type { FieldMessagePropsBasic, FieldMessagePropsInclude } from '../FieldMessage'
import type { IconPropsBasic, IconTrailingPropsInclude } from '../Icon'
import { defaultsSlider, type SliderPropsBasic, type SliderPropsInclude, type SliderValueType } from '../Slider'

import type { FieldValueProps } from '../../types/fieldTypes'

/** SliderField design token properties interface / Интерфейс токенов дизайна свойств SliderField */
type SliderFieldPropsToken = {
  // :type [!] System label / Системная метка
  disabled?: boolean
  vertical?: boolean
  // :type [!] System label / Системная метка
}

/**
 * Basic properties interface for SliderField component.
 *
 * Базовый интерфейс свойств для компонента SliderField.
 */
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

    /** Text displayed before the component content / Текст, отображаемый перед содержимым компонента */
    labelLeading?: string
    /** Text displayed after the component content / Текст, отображаемый после содержимого компонента */
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
  ...defaultsSlider,
  showValue: true,
  labelSeparator: ': ',
  ...{
    // :default [!] System label / Системная метка
    // :default [!] System label / Системная метка
  }
}
