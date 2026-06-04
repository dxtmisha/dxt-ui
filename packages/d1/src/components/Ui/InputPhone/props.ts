import { type InputPhonePropsBasic, defaultsInputPhone } from '@dxtmisha/constructor/InputPhone'

import type { FieldProps } from '../Field'
import type { FieldLabelProps } from '../FieldLabel'
import type { FieldMessageProps } from '../FieldMessage'
import type { FieldCounterProps } from '../FieldCounter'
import type { IconProps } from '../Icon'
import type { InputPhoneDialCodeProps } from '../InputPhoneDialCode'
import type { MaskProps } from '../Mask'
import type { ProgressProps } from '../Progress'

export const propsValues = {
  // :values [!] System label / Системная метка
  // :values [!] System label / Системная метка
}

type PropsToken = {
  // :type [!] System label / Системная метка
  // :type [!] System label / Системная метка
}

/**
 * Type describing incoming properties/ Тип, описывающий входящие свойства
 */
export type InputPhoneProps = InputPhonePropsBasic<
  InputPhoneDialCodeProps,
  MaskProps,
  IconProps,
  FieldProps,
  FieldLabelProps,
  FieldMessageProps,
  FieldCounterProps,
  ProgressProps
> & PropsToken

/**
 * Default value for property/ Значение по умолчанию для свойства
 */
export const defaults: object = {
  ...defaultsInputPhone,
  ...{
    // :default [!] System label / Системная метка
    // :default [!] System label / Системная метка
  }
}
