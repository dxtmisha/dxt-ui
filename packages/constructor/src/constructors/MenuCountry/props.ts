import type { ListSelectedList } from '@dxtmisha/functional'

import type { MenuPropsBasic, MenuPropsInclude } from '../Menu'
import type { ModelPropsSelected } from '../../types/modelTypes'

/**
 * Type describing token properties for MenuCountry.
 *
 * Тип, описывающий свойства токенов для MenuCountry.
 */
type MenuCountryPropsToken = {
  // :type [!] System label / Системная метка
  // :type [!] System label / Системная метка
}

/**
 * Interface describing basic properties of the MenuCountry component.
 *
 * Интерфейс, описывающий базовые свойства компонента MenuCountry.
 */
export type MenuCountryPropsBasic<
  Menu extends MenuPropsBasic = MenuPropsBasic
> = MenuPropsInclude<Menu>
  & ModelPropsSelected<ListSelectedList>
  & {
    // Status
    /** List of selected items / Список выбранных элементов */
    selected?: ListSelectedList

    // Value
    /**
     * Filter countries by code (ISO 3166-1 alpha-2) /
     * Фильтр стран по кодам (ISO 3166-1 alpha-2)
     */
    list?: string[]

    // Style
    /** Whether to show the phone code / Показывать ли код телефона */
    showPhoneCode?: boolean
    /** Starting length for search highlighting / Начальная длина для подсветки поиска */
    highlightLengthStart?: number
    /** Whether to show the search input / Показывать ли поле поиска */
    showSearch?: boolean
    /** Whether to enable filtering mode / Включен ли режим фильтрации */
    filterMode?: boolean

    // Technical
    /** Whether selection is determined by value / Определяется ли выбор по значению */
    isSelectedByValue?: boolean
    /** Representation language / Язык представления */
    language?: string
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
  highlightLengthStart: 1,
  showSearch: true,
  filterMode: false,
  ...{
    // :default [!] System label / Системная метка
    // :default [!] System label / Системная метка
  }
}
