import type { MenuPropsBasic, MenuPropsInclude } from '../Menu'

type MenuCountryPropsToken = {
  // :type [!] System label / Системная метка
  // :type [!] System label / Системная метка
}

export type MenuCountryPropsBasic<
  Menu extends MenuPropsBasic = MenuPropsBasic
> = MenuPropsInclude<Menu> & {
  countryList?: string[]
}

/**
 * Type describing incoming properties.
 *
 * Тип, описывающий входящие свойства.
 */
export type MenuCountryProps = MenuCountryPropsBasic & MenuCountryPropsToken

/**
 * Default value for property.
 *
 * Значение по умолчанию для свойства.
 */
export const defaultsMenuCountry = {
  // TODO: Location for a user-defined default value / Место для пользовательского значения по умолчанию
  ...{
    // :default [!] System label / Системная метка
    // :default [!] System label / Системная метка
  }
}
