import { type InputPhoneDialCodePropsBasic, defaultsInputPhoneDialCode } from '@dxtmisha/constructor/InputPhoneDialCode'

import type { ButtonProps } from '../Button'
import type { MenuCountryProps } from '../MenuCountry'
import type { IconProps } from '../Icon'

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
export type InputPhoneDialCodeProps = InputPhoneDialCodePropsBasic<
  IconProps,
  ButtonProps,
  MenuCountryProps
> & PropsToken

/**
 * Default value for property/ Значение по умолчанию для свойства
 */
export const defaults: object = {
  ...defaultsInputPhoneDialCode,
  iconArrowDown: 'keyboard_arrow_down',
  ...{
    // :default [!] System label / Системная метка
    // :default [!] System label / Системная метка
  }
}
