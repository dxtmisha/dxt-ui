import type { MenuPropsBasic } from '../Menu'
import { defaultsMenuCountry, type MenuCountryPropsBasic } from '../MenuCountry'

type MenuLanguagePropsToken = {
  // :type [!] System label / Системная метка
  // :type [!] System label / Системная метка
}

export type MenuLanguagePropsBasic<
  Menu extends MenuPropsBasic = MenuPropsBasic
> = MenuCountryPropsBasic<Menu>

/**
 * Type describing incoming properties.
 *
 * Тип, описывающий входящие свойства.
 */
export type MenuLanguageProps = MenuLanguagePropsBasic & MenuLanguagePropsToken

/**
 * Default value for property.
 *
 * Значение по умолчанию для свойства.
 */
export const defaultsMenuLanguage = {
  ...defaultsMenuCountry,
  ...{
    // :default [!] System label / Системная метка
    // :default [!] System label / Системная метка
  }
}
