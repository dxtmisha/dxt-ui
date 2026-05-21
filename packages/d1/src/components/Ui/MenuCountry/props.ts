import { type MenuCountryPropsBasic, defaultsMenuCountry } from '@dxtmisha/constructor/MenuCountry'
import type { MenuProps } from '../Menu'

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
export type MenuCountryProps = MenuCountryPropsBasic<MenuProps> & PropsToken

/**
 * Default value for property/ Значение по умолчанию для свойства
 */
export const defaults: object = {
  ...defaultsMenuCountry,
  ...{
    // :default [!] System label / Системная метка
    // :default [!] System label / Системная метка
  }
}
