import { type CheckboxPropsBasic, defaultsCheckbox } from '@dxtmisha/constructor/Checkbox'

import type { IconProps } from '../Icon'
import type { FieldMessageProps } from '../FieldMessage'
import type { FieldCounterProps } from '../FieldCounter'
import type { ProgressProps } from '../Progress'

export const propsValues = {
  // :values [!] System label / Системная метка
  // :values [!] System label / Системная метка
}

type PropsToken = {
  // :type [!] System label / Системная метка
  required?: boolean
  block?: boolean
  itemCenter?: boolean
  right?: boolean
  focus?: boolean
  disabled?: boolean
  // :type [!] System label / Системная метка
}

/**
 * Type describing incoming properties/ Тип, описывающий входящие свойства
 */
export type CheckboxProps
  = CheckboxPropsBasic<IconProps, FieldMessageProps, FieldCounterProps, ProgressProps>
    & PropsToken

/**
 * Default value for property/ Значение по умолчанию для свойства
 */
export const defaults: object = {
  ...defaultsCheckbox,
  iconCheckbox: 'check_small',
  iconIndeterminate: 'check_indeterminate_small',
  ...{
    // :default [!] System label / Системная метка
    itemCenter: true
    // :default [!] System label / Системная метка
  }
}
