// ai-none

import { computed } from 'vue'
import { GeoPhone, type GeoPhoneMap, isArray } from '@dxtmisha/functional'

import type { InputPhonePropsBasic } from './props'

/**
 * Class for managing the allowed countries list and resolving allowed country codes for InputPhone.
 *
 * Класс для управления списком разрешённых стран и определения допустимых кодов стран для InputPhone.
 */
export class InputPhoneCountryList {
  /**
   * Constructor
   *
   * Конструктор
   * @param props input data / входные данные
   */
  constructor(
    protected readonly props: Readonly<InputPhonePropsBasic>
  ) {
  }

  /** Normalized list of allowed country codes / Нормализованный список разрешённых кодов стран */
  readonly item = computed<string[] | undefined>(() => {
    const list = this.props.countryList
      ?? this.props.inputPhoneDialCodeAttrs?.countryList
      ?? this.props.inputPhoneDialCodeAttrs?.menuCountryAttrs?.list

    if (
      isArray(list)
      && list.length > 0
    ) {
      return list.map(code => GeoPhone.get(code)?.value ?? code)
    }

    return undefined
  })

  /**
   * Checks whether a country code is permitted by the configured country list.
   *
   * Проверяет, разрешён ли код страны заданным списком стран.
   * @param country country code / код страны
   * @returns true if allowed / true, если страна разрешена
   */
  isAllowed(country?: string): boolean {
    const allowed = this.item.value

    if (!allowed) {
      return true
    }

    if (!country) {
      return false
    }

    const resolved = GeoPhone.get(country)?.value ?? country
    return allowed.includes(resolved)
  }

  /**
   * Returns the first allowed country code from the list, if configured.
   *
   * Возвращает первый разрешённый код страны из списка, если список задан.
   * @returns first allowed country code or undefined / первый разрешённый код страны или undefined
   */
  getFirst(): string | undefined {
    return this.item.value?.[0]
  }

  /**
   * Resolves the first allowed country code from a phone map node.
   *
   * Возвращает первый разрешённый код страны из узла карты телефонов.
   * @param item phone map node / узел карты телефонов
   * @returns allowed country code or undefined / разрешённый код страны или undefined
   */
  resolveAllowed(item?: GeoPhoneMap): string | undefined {
    if (!item) {
      return undefined
    }

    if (
      item.value
      && this.isAllowed(item.value)
    ) {
      return item.value
    }

    return item.items.find(entry => this.isAllowed(entry.value))?.value
  }
}
