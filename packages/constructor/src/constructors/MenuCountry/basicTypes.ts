import type { Ref } from 'vue'
import type { ConstrBind, GeoFlagNational, ListType } from '@dxtmisha/functional'

import type { ListItemPropsBasic } from '../ListItem'
import type { MenuExposeInclude } from '../Menu'

import type { MenuCountryExpose } from './types'
import type { MenuCountryPropsBasic } from './props'

/** MenuCountry item type supporting group entries for alternative codes / Тип элемента MenuCountry с поддержкой групп для альтернативных кодов */
export type MenuCountryListItem = ConstrBind<
  ListItemPropsBasic
  & Partial<Omit<GeoFlagNational, 'value'>>
  & {
    /** Optional item type / Опциональный тип элемента */
    type?: ListType
    /** Optional item index / Опциональный индекс элемента */
    index?: string
    /** Optional search string / Опциональная строка поиска */
    search?: string
    /** Country code or nested alternative prefix items / Код страны или вложенные элементы альтернативных префиксов */
    value?: string | MenuCountryListItem[]
  }
>

/**
 * Interface for describing which components need to be connected for MenuCountry work.
 *
 * Интерфейс для описания, какие компоненты надо подключить для работы MenuCountry.
 */
export type MenuCountryComponentInclude = {
  /** MenuCountry component configuration / Конфигурация компонента MenuCountry */
  menuCountry?: object
}

/**
 * Type for menu country expose functionality.
 *
 * Тип для функциональности экспорта menu country.
 */
export interface MenuCountryExposeInclude extends MenuExposeInclude {
  /** Reference to the menu country element / Ссылка на элемент menu country */
  getMenuCountryElement(): Ref<ConstrBind<MenuCountryExpose> | undefined>
}

/**
 * Interface for menu country include props.
 *
 * Интерфейс для свойств включения menu country.
 */
export type MenuCountryPropsInclude<
  MenuCountry extends MenuCountryPropsBasic = MenuCountryPropsBasic
> = {
  /** Whether the menu country is disabled / Отключено ли menu country */
  disabled?: boolean
  /** Disable returning focus to the control element on close / Отключить возврат фокуса на элемент управления при закрытии */
  disableFocusReturn?: boolean
  /** Filter countries by code (ISO 3166-1 alpha-2) / Фильтр стран по кодам (ISO 3166-1 alpha-2) */
  countryList?: string[]
  /** Starting length for search highlighting / Начальная длина для подсветки поиска */
  highlightLengthStart?: number
  /** Whether to show the search input / Показывать ли поле поиска */
  showSearch?: boolean
  /** Whether to enable filtering mode / Включен ли режим фильтрации */
  filterMode?: boolean
  /** Additional attributes for the MenuCountry component / Дополнительные атрибуты для компонента MenuCountry */
  menuCountryAttrs?: ConstrBind<MenuCountry>
}
