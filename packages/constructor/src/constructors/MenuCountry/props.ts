import type { ListSelectedList } from '@dxtmisha/functional'

import type { MenuPropsBasic, MenuPropsInclude } from '../Menu'
import type { ModelPropsSelected } from '../../types/modelTypes'

type MenuCountryPropsToken = {
  // :type [!] System label / Системная метка
  // :type [!] System label / Системная метка
}

export type MenuCountryPropsBasic<
  Menu extends MenuPropsBasic = MenuPropsBasic
> = MenuPropsInclude<Menu> & ModelPropsSelected & {
  // Status
  /** List of selected items/ Список выбранных элементов */
  selected?: ListSelectedList

  // Value
  /**
   * Filter countries by code (ISO 3166-1 alpha-2)/
   * Фильтр стран по кодам (ISO 3166-1 alpha-2)
   */
  countryList?: string[]

  // Technical
  /** Whether selection is determined by value/ Определяется ли выбор по значению */
  isSelectedByValue?: boolean
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
  isSelectedByValue: true,
  ...{
    // :default [!] System label / Системная метка
    // :default [!] System label / Системная метка
  }
}
