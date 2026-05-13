import { type RadioPropsBasic, defaultsRadio } from '@dxtmisha/constructor/Radio'

import type { ImageProps } from '../Image'
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
export type RadioProps = RadioPropsBasic<
  ImageProps,
  FieldMessageProps,
  FieldCounterProps,
  ProgressProps
> & PropsToken

/**
 * Default value for property/ Значение по умолчанию для свойства
 */
export const defaults: object = {
  ...defaultsRadio,
  iconCheckbox: 'radio_button_unchecked',
  iconIndeterminate: 'remove',
  ...{
    // :default [!] System label / Системная метка
    block: true,
    itemCenter: true
    // :default [!] System label / Системная метка
  }
}
