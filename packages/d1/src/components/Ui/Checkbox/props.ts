import { type CheckboxPropsBasic, defaultsCheckbox } from '@dxtmisha/constructor/Checkbox'

import type { IconProps } from '../Icon'
import type { FieldMessageProps } from '../FieldMessage'
import type { FieldCounterProps } from '../FieldCounter'
import type { ProgressProps } from '../Progress'

export const propsValues = {
  // :values [!] System label / Системная метка
  adaptive: ['rightAlways', 'rightSm', 'rightMd', 'rightLg', 'rightXl', 'right2xl'],
  container: ['rightSm', 'rightMd', 'rightLg', 'rightXl', 'right2xl']
  // :values [!] System label / Системная метка
}

type PropsToken = {
  // :type [!] System label / Системная метка
  block?: boolean
  adaptive?: 'rightAlways' | 'rightSm' | 'rightMd' | 'rightLg' | 'rightXl' | 'right2xl'
  container?: 'rightSm' | 'rightMd' | 'rightLg' | 'rightXl' | 'right2xl'
  required?: boolean
  itemCenter?: boolean
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
  iconCheckbox: 'check',
  iconIndeterminate: 'remove',
  ...{
    // :default [!] System label / Системная метка
    block: true,
    itemCenter: true
    // :default [!] System label / Системная метка
  }
}
