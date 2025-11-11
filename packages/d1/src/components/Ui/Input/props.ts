import type { MaskProps } from '../Mask'
import type { IconProps } from '../Icon'
import type { FieldProps } from '../Field'
import type { FieldLabelProps } from '../FieldLabel'
import type { FieldMessageProps } from '../FieldMessage'
import type { FieldCounterProps } from '../FieldCounter'
import type { ProgressProps } from '../Progress'

import { type InputPropsBasic, defaultsInput } from '@dxtmisha/constructor/Input'

export const propsValues = {
  // :values [!] System label / Системная метка
  // :values [!] System label / Системная метка
}

interface PropsToken {
  // :type [!] System label / Системная метка
  // :type [!] System label / Системная метка
}

/**
 * Type describing incoming properties/ Тип, описывающий входящие свойства
 */
export interface InputProps extends InputPropsBasic<
  MaskProps,
  IconProps,
  FieldProps,
  FieldLabelProps,
  FieldMessageProps,
  FieldCounterProps,
  ProgressProps
>, PropsToken {
}

/**
 * Default value for property/ Значение по умолчанию для свойства
 */
export const defaults: object = {
  ...defaultsInput,
  iconVisibility: 'visibility',
  iconVisibilityOff: 'visibility_off',
  ...{
    // :default [!] System label / Системная метка
    // :default [!] System label / Системная метка
  }
}
