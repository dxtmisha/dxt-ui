// ai-none

import { computed, type ComputedRef, toRef } from 'vue'
import {
  type ConstrBind,
  forEach,
  type GeoFlagNational,
  type GeoFlagRef,
  GeoPhone,
  type ListType
} from '@dxtmisha/functional'

import type { ListItemPropsBasic } from '../ListItem'
import type { MenuCountryProps } from './props'

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
 * Class for generating and managing the localized country and phone dial code list for MenuCountry.
 *
 * Класс для формирования и управления локализованным списком стран и телефонных кодов для MenuCountry.
 */
export class MenuCountryList {
  /** List of flags / Список флагов */
  readonly flagList: ComputedRef<GeoFlagNational[]>

  /**
   * Constructor
   * @param props input data / входные данные
   * @param flag function returning flag reference instance / функция, возвращающая экземпляр ссылки на флаги
   */
  constructor(
    protected readonly props: Readonly<MenuCountryProps>,
    protected readonly flag: () => GeoFlagRef
  ) {
    this.flagList = this.initFlagList()
  }

  /** Prepared menu items list / Подготовленный список элементов меню */
  readonly items = computed<MenuCountryListItem[]>(() => {
    if (this.props.showPhoneCode) {
      return this.getList(flag => this.getPhoneCodeItem(flag))
    }

    return this.getList(flag => this.getCountryItem(flag))
  })

  /**
   * Maps the flag list using the provided item builder callback.
   *
   * Преобразует список флагов с помощью переданной функции формирования элемента.
   * @param callback function to map a country flag to a list item / функция преобразования флага страны в элемент списка
   * @returns list of mapped menu items / список преобразованных элементов меню
   */
  protected getList(
    callback: (flag: GeoFlagNational) => MenuCountryListItem | undefined
  ): MenuCountryListItem[] {
    return forEach(
      this.flagList.value,
      callback
    ) as MenuCountryListItem[]
  }

  /**
   * Builds a menu item for a country with searchable metadata.
   *
   * Формирует элемент меню для страны с метаданными для поиска.
   * @param flag country flag item / элемент флага страны
   * @returns list item with search field / элемент списка с полем поиска
   */
  protected getCountryItem(
    flag: GeoFlagNational
  ): MenuCountryListItem {
    return {
      ...flag,
      search: this.getSearch(flag)
    }
  }

  /**
   * Builds a menu item or group for a country when phone codes are displayed.
   *
   * Формирует элемент меню или группу для страны при отображении телефонных кодов.
   * @param flag country flag item / элемент флага страны
   * @returns list item, group item with alternative subcodes, or undefined / элемент списка, группа с альтернативными подкодами или undefined
   */
  protected getPhoneCodeItem(
    flag: GeoFlagNational
  ): MenuCountryListItem | undefined {
    if (!flag.phoneCode) {
      return undefined
    }

    const codes = GeoPhone.getCodes(flag.value)

    if (codes.length > 1) {
      return {
        ...flag,
        type: 'group',
        index: flag.value,
        search: this.getSearch(flag),
        value: this.getPhoneCodeSubItems(flag, codes)
      }
    }

    return {
      ...flag,
      caption: `+${flag.phoneCode}`,
      search: this.getSearch(flag, codes.length > 0 ? codes : [flag.phoneCode])
    }
  }

  /**
   * Builds nested menu items for alternative phone dial codes of a country.
   *
   * Формирует вложенные элементы меню для альтернативных телефонных кодов страны.
   * @param flag country flag item / элемент флага страны
   * @param codes list of phone dial codes / список телефонных кодов
   * @returns list of nested subcode menu items / список вложенных элементов подкодов
   */
  protected getPhoneCodeSubItems(
    flag: GeoFlagNational,
    codes: string[]
  ): MenuCountryListItem[] {
    return codes.map((code, index) => {
      const value = index === 0 ? flag.value : `${flag.value}-${code}`

      return {
        index: value,
        value,
        label: `+${code}`,
        search: this.getSearch(flag, [code]),
        detail: {
          country: flag.value,
          icon: flag.icon,
          label: flag.label,
          phone: GeoPhone.cleanPhone(code)
        }
      }
    })
  }

  /**
   * Builds a combined search string containing localized names, national names, country codes, and dial codes.
   *
   * Формирует объединённую строку поиска с локализованными и национальными названиями, кодами стран и телефонными кодами.
   * @param flag country flag item / элемент флага страны
   * @param codes optional list of phone dial codes / необязательный список телефонных кодов
   * @returns combined search string / объединённая строка поиска
   */
  protected getSearch(
    flag: GeoFlagNational,
    codes?: string[]
  ): string {
    const parts: string[] = [
      flag.label,
      flag.description,
      flag.country,
      flag.nationalCountry,
      flag.countryCode,
      flag.value,
      ...this.getSearchCodes(codes)
    ]

    return parts.join(' ')
  }

  /**
   * Formats phone dial codes into searchable strings with original and hyphenless variants.
   *
   * Форматирует телефонные коды в строки для поиска в исходном виде и без дефисов.
   * @param codes optional list of phone dial codes / необязательный список телефонных кодов
   * @returns array of formatted phone code search terms / массив строк поиска по телефонным кодам
   */
  protected getSearchCodes(codes?: string[]): string[] {
    if (codes) {
      return codes.map((code) => {
        if (code.includes('-')) {
          return `+${code} +${code.replace(/-/g, '')}`
        }

        return `+${code}`
      })
    }

    return []
  }

  /**
   * Initializes the flag list.
   *
   * Инициализирует список флагов.
   * @returns reactive list of national flag items / реактивный список элементов национальных флагов
   */
  protected initFlagList(): ComputedRef<GeoFlagNational[]> {
    return this.flag().getNational(toRef(this.props, 'list'))
  }
}
