import { copyObject } from '../functions/copyObject'
import { isDomRuntime } from '../functions/isDomRuntime'
import { isSelected } from '../functions/isSelected'

import { DataStorage } from './DataStorage'

import { geo } from '@dxt-ui/media'

import {
  type GeoItem,
  type GeoItemFull
} from '../types/geoTypes'

const STORAGE_NAME_CODE = 'geo-code'

/**
 * Base class for working with geographic data.
 *
 * Базовый класс для работы с географическими данными.
 */
export class Geo {
  private static storage = new DataStorage<string>(STORAGE_NAME_CODE)
  private static location: string

  private static item: GeoItemFull
  private static language: string

  private static timezone: number = new Date().getTimezoneOffset()

  /**
   * Information about the current country.
   *
   * Информация об текущей стране.
   */
  static get(): GeoItemFull {
    return this.item
  }

  /**
   * Current country.
   *
   * Текущая страна.
   */
  static getCountry(): string {
    return this.item.country
  }

  /**
   * Current language.
   *
   * Текущий язык.
   */
  static getLanguage(): string {
    return this.language
  }

  /**
   * Full format according to the standard.
   *
   * Полный формат согласно стандарту.
   */
  static getStandard(): string {
    return this.item.standard
  }

  /**
   * Returns the first day of the week.
   *
   * Возвращает первый день недели.
   */
  static getFirstDay(): string {
    return this.item.firstDay
  }

  /**
   * Full format.
   *
   * Полный формат.
   */
  static getLocation(): string {
    return this.location
  }

  /**
   * Obtaining processed data.
   *
   * Получение обработанных данных.
   */
  static getItem(): GeoItemFull {
    return {
      ...this.item,
      language: this.language
    }
  }

  /**
   * Returns the full list of countries.
   *
   * Возвращает полный список стран.
   */
  static getList(): GeoItem[] {
    return geo
  }

  /**
   * Returns the data about the country by its full code.
   *
   * Возвращает данные о стране по ее полному коду.
   * @param code country code, full form language-country or one of them/
   * код страны, полный вид язык-страна или один из них
   */
  static getByCode(code?: string): GeoItemFull {
    let item: GeoItem | undefined

    if (code) {
      if (code.match(/([A-Z]{2}-[a-z]{2})|([a-z]{2}-[A-Z]{2})/)) {
        item = this.getByCodeFull(code)
      }

      if (!item && code.match(/[A-Z]{2}/)) {
        item = this.getByCountry(this.toCountry(code))
      }

      if (!item && code.match(/[a-z]{2}/)) {
        item = this.getByLanguage(this.toLanguage(code))
      }
    }

    return this.toFull(copyObject(item ?? this.getList()[0]))
  }

  /**
   * Returns the full data by language and country.
   *
   * Возвращает полные данные по языку и стране.
   * @param code string in the form of language-country/ строка в виде язык-страна
   */
  static getByCodeFull(code: string): GeoItem | undefined {
    return this.getList().find(
      item => isSelected(code, [
        `${item.language}-${item.country}`,
        `${item.country}-${item.language}`
      ])
    )
  }

  /**
   * Returns the full data by country.
   *
   * Возвращает полные данные по стране.
   * @param country country/ страна
   */
  static getByCountry(country: string): GeoItem | undefined {
    return this.getList().find((item) => {
      return item.country === country
        || item?.countryAlternative?.find(countryAlternative => countryAlternative === country)
    })
  }

  /**
   * Returns the full data by language.
   *
   * Возвращает полные данные по языку.
   * @param language language/ язык
   */
  static getByLanguage(language: string): GeoItem | undefined {
    return this.getList().find((item) => {
      return item.language === language
        || item?.languageAlternative?.find(languageAlternative => languageAlternative === language)
    })
  }

  /**
   * Retrieving the default timezone.
   *
   * Получение временной зоны по умолчанию
   */
  static getTimezone(): number {
    return this.timezone
  }

  /**
   * Retrieving the default timezone (formatted view).
   *
   * Получение временной зоны по умолчанию (отформатированный вид).
   */
  static getTimezoneFormat(): string {
    const hours = Math.abs(Math.trunc(this.timezone / 60)).toString().padStart(2, '0')
    const minutes = Math.abs(this.timezone % 60).toString().padStart(2, '0')

    if (this.timezone >= 0) {
      return `+${hours}:${minutes}`
    }

    return `-${hours}:${minutes}`
  }

  /**
   * Determines the current country by its full name.
   *
   * Определяет текущую страну по ее полному названию.
   * @param code country code, full form language-country or one of them/
   * код страны, полный вид язык-страна или один из них
   */
  static find(code: string): GeoItemFull {
    return this.getByCode(code)
  }

  /**
   * Returns a complete string with the country code and language.
   *
   * Возвращает полную строку с кодом страны и языка.
   * @param item object with data about the current country/
   * объект с данными об текущей стране
   */
  static toStandard(item: GeoItem) {
    return `${item.language}-${item.country}`
  }

  /**
   * Changes the data by the full code.
   *
   * Изменяет данные по полному коду.
   * @param code country code, full form language-country or one of them/
   * код страны, полный вид язык-страна или один из них
   * @param save save the result/ сохранить результат
   */
  static set(code: string, save?: boolean): void {
    this.location = code

    this.item = this.getByCode(this.location)
    this.language = this.findLanguage(this.location)

    if (save) {
      this.storage.set(this.location)
    }
  }

  /**
   * Changing the default timezone for transmitted dates.
   *
   * Изменение временной зоны по умолчанию для отправляемых дат
   * @param timezone new time zone/ новая временная зона
   */
  static setTimezone(timezone: number) {
    this.timezone = timezone
  }

  /**
   * Determines the current location.
   *
   * Определяет текущую локацию.
   */
  private static findLocation(): string {
    return (
      isDomRuntime() && (
        this.storage.get()
        || document.querySelector('html')?.lang
        || navigator.language
        || navigator.languages[0]
        || 'en-GB'
      )
    ) || 'en-GB'
  }

  /**
   * Determines the current language.
   *
   * Определяет текущий язык.
   * @param code country code, full form language-country or one of them/
   * код страны, полный вид язык-страна или один из них
   */
  private static findLanguage(code?: string): string {
    if (code && code.match(/[a-z]{2}/)) {
      return this.toLanguage(code)
    }

    return this.item.language
  }

  /**
   * Returns the country code by its full language-country.
   *
   * Возвращает код страны по ее полному язык-страна.
   * @param code country code/ код страна
   */
  private static toCountry(code: string): string {
    return code.replace(/[^A-Z]+/g, '')
  }

  /**
   * Returns the language code by its full language-country.<br>
   * Возвращает код языка по его полному язык-страна.
   * @param code country code/ код страна
   */
  private static toLanguage(code: string): string {
    return code.replace(/[^a-z]+/g, '')
  }

  /**
   * Adding missing data.<br>
   * Добавление недостающих данных.
   * @param item object with data about the current country/
   * объект с данными об текущей стране
   */
  private static toFull(item: GeoItem): GeoItemFull {
    return {
      ...item,
      standard: this.toStandard(item),
      firstDay: item?.firstDay || 'Mo'
    }
  }

  static {
    this.location = this.findLocation()

    this.language = this.findLanguage(this.location)
    this.item = this.getByCode(this.location)
  }
}
