// ai-none

import { geo } from '@dxtmisha/media'

import { copyObject } from '../functions/copyObject'
import { forEach } from '../functions/forEach'
import { isString } from '../functions/isString'

import { type GeoItem } from '../types/geoTypes'

/**
 * ASCII character code for hyphen ('-') /
 * ASCII-код символа дефиса ('-')
 */
const CHAR_HYPHEN = 45

/**
 * Length of a 2-letter ISO language or country code /
 * Длина двухбуквенного ISO-кода языка или страны
 */
const CODE_PART_LENGTH = 2

/**
 * Length of a full locale code in 'xx-YY' format /
 * Длина полного кода локали в формате 'xx-YY'
 */
const CODE_FULL_LENGTH = 5

/**
 * Class for managing and querying the global list of geographical countries and locales.
 * Maintains an absolute deep copy of the media geo database shared across SSR requests.
 *
 * Класс для управления и запроса глобального списка географических стран и локалей.
 * Поддерживает абсолютную глубокую копию гео-базы данных media, общую для запросов в SSR.
 */
export class GeoList {
  /**
   * Cached deep copy of the global country list /
   * Кэшированная глубокая копия глобального списка стран
   */
  protected static list?: GeoItem[]

  /**
   * Protected constructor for static utility class /
   * Защищенный конструктор для статического утилитного класса
   */
  protected constructor() {}

  /**
   * Returns the list of countries, creating an absolute deep copy on first access.
   * Shared globally across the application and SSR requests.
   *
   * Возвращает список стран, создавая абсолютную глубокую копию при первом обращении.
   * Является общим глобально для всего приложения и SSR-запросов.
   * @returns list of geo items / список гео-объектов
   */
  static get(): GeoItem[] {
    return (this.list ??= copyObject(geo))
  }

  /**
   * Returns full country data by language and country combination (e.g. 'en-US' or 'RU-ru').
   *
   * Возвращает полные данные по комбинации языка и страны (например, 'en-US' или 'RU-ru').
   * @param [code] string in the form of language-country / строка в виде язык-страна
   * @returns geo item or undefined / гео-объект или undefined
   */
  static getByCodeFull(code?: string): GeoItem | undefined {
    if (
      !isString(code)
      || code.length !== CODE_FULL_LENGTH
      || code.charCodeAt(CODE_PART_LENGTH) !== CHAR_HYPHEN
    ) {
      return undefined
    }

    const first = code.slice(0, CODE_PART_LENGTH)
    const second = code.slice(CODE_PART_LENGTH + 1)
    const list = this.get()
    const length = list.length

    if (length === 0) {
      return undefined
    }

    for (let index = 0; index < length; index++) {
      const item = list[index]

      if (
        (
          item.language === first
          && item.country === second
        )
        || (
          item.country === first
          && item.language === second
        )
      ) {
        return item
      }
    }

    return undefined
  }

  /**
   * Returns country data by its primary country code or alternative codes.
   *
   * Возвращает данные страны по ее основному коду страны или альтернативным кодам.
   * @param [country] country code / код страны
   * @returns geo item or undefined / гео-объект или undefined
   */
  static getByCountry(country?: string): GeoItem | undefined {
    if (!country) {
      return undefined
    }

    const list = this.get()
    const length = list.length

    if (length === 0) {
      return undefined
    }

    for (let index = 0; index < length; index++) {
      const item = list[index]

      if (
        item.country === country
        || item.countryAlternative?.includes(country)
      ) {
        return item
      }
    }

    return undefined
  }

  /**
   * Returns country data by language code or alternative language codes.
   *
   * Возвращает данные страны по коду языка или альтернативным кодам языка.
   * @param [language] language code / код языка
   * @returns geo item or undefined / гео-объект или undefined
   */
  static getByLanguage(language?: string): GeoItem | undefined {
    if (!language) {
      return undefined
    }

    const list = this.get()
    const length = list.length

    if (length === 0) {
      return undefined
    }

    for (let index = 0; index < length; index++) {
      const item = list[index]

      if (
        item.language === language
        || item.languageAlternative?.includes(language)
      ) {
        return item
      }
    }

    return undefined
  }

  /**
   * Adds or updates country geo data in the list.
   * Merges with existing country data if found, or creates a new entry.
   *
   * Добавляет или обновляет гео-данные страны в списке.
   * Объединяет с существующими данными страны, если она найдена, или создает новую запись.
   * @param country country code (e.g., 'US', 'VN') / код страны (например, 'US', 'VN')
   * @param [item] partial or full geo item data / частичные или полные гео-данные
   * @returns added or updated geo item / добавленный или обновленный гео-объект
   */
  static add(
    country: string,
    item?: Partial<GeoItem>
  ): GeoItem {
    const index = this.getIndex(country)
    const list = this.get()

    if (index !== -1) {
      const current = list[index]

      return (list[index] = {
        ...current,
        ...item,
        country: current.country,
        language: item?.language ?? current.language,
        ...this.getUnit(current.unit, item?.unit)
      })
    }

    const newItem: GeoItem = {
      ...item,
      language: item?.language ?? 'en',
      country
    }

    list.push(newItem)

    return newItem
  }

  /**
   * Adds or updates multiple countries in the geo list.
   *
   * Добавляет или обновляет несколько стран в гео-списке.
   * @param [list] map of country codes to geo items / карта кодов стран к гео-объектам
   */
  static addList(
    list?: Record<string, Partial<GeoItem>>
  ): void {
    if (!list) {
      return
    }

    forEach(list, (item, country) => {
      this.add(country, item)
    })
  }

  /**
   * Resets the cached list to undefined, forcing a fresh deep copy on next access.
   * Useful for testing and environment resets.
   *
   * Сбрасывает кэшированный список в undefined, вызывая создание новой глубокой копии при следующем доступе.
   * Полезно для тестов и сброса окружения.
   */
  static reset(): void {
    this.list = undefined
  }

  /**
   * Finds the index of a country in the list by its country code.
   *
   * Находит индекс страны в списке по ее коду страны.
   * @param [country] country code / код страны
   * @returns index of the country in the list, or -1 if not found / индекс страны в списке или -1, если не найдена
   */
  protected static getIndex(country?: string): number {
    if (!country) {
      return -1
    }

    const list = this.get()
    const length = list.length

    if (length === 0) {
      return -1
    }

    for (let index = 0; index < length; index++) {
      if (list[index].country === country) {
        return index
      }
    }

    return -1
  }

  /**
   * Merges and returns the unit configuration object for a country item.
   *
   * Объединяет и возвращает объект конфигурации единиц измерения для элемента страны.
   * @param current current unit configuration / текущая конфигурация единиц измерения
   * @param override unit configuration overrides / переопределения конфигурации единиц измерения
   * @returns object containing the merged unit property or an empty object / объект, содержащий объединенное свойство unit, или пустой объект
   */
  protected static getUnit(
    current?: GeoItem['unit'],
    override?: GeoItem['unit']
  ): { unit?: GeoItem['unit'] } {
    if (current || override) {
      return {
        unit: {
          ...current,
          ...override
        }
      }
    }

    return {}
  }
}
