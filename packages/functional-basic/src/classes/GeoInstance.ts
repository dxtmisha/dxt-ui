import { executeFunction } from '../functions/executeFunction'
import { isDomRuntime } from '../functions/isDomRuntime'
import { isSelected } from '../functions/isSelected'

import { Cookie } from './Cookie'
import { DataStorage } from './DataStorage'

import { geo } from '@dxtmisha/media'

import {
  type GeoItem,
  type GeoItemFull
} from '../types/geoTypes'

/**
 * Cookie key for storing the geo code/
 * Ключ куки для хранения кода гео
 */
export const UI_GEO_COOKIE_KEY = 'ui-geo-code'

const STORAGE_NAME_CODE = '__ui:geo-code__'

/**
 * Base class for working with geographic data.
 * Includes methods for determining location, language, and time zone.
 *
 * Базовый класс для работы с географическими данными.
 * Включает методы для определения местоположения, языка и часового пояса.
 */
export class GeoInstance {
  /**
   * Data storage instance for geo code/
   * Экземпляр хранилища данных для гео-кода
   */
  private storage = new DataStorage<string>(STORAGE_NAME_CODE)

  /**
   * Current location code (e.g., 'en-GB')/
   * Текущий код локации (например, 'en-GB')
   */
  private location: string

  /**
   * Value by default for the country code/
   * Значение по умолчанию для кода страны
   */
  private valueDefault?: string | (() => string)

  /**
   * Detailed data about the current country/
   * Детальные данные о текущей стране
   */
  private item: GeoItemFull

  /**
   * Current language code/
   * Текущий код языка
   */
  private language: string

  /**
   * Current time zone offset in minutes/
   * Текущее смещение часового пояса в минутах
   */
  private timezone: number = new Date().getTimezoneOffset()

  /**
   * Constructor.
   * Initializes the location and related data.
   *
   * Конструктор.
   * Инициализирует местоположение и связанные с ним данные.
   */
  constructor() {
    this.location = this.findLocation()

    this.item = this.getByCode(this.location)
    this.language = this.findLanguage(this.location)
  }

  /**
   * Getting information about the current country.
   *
   * Получение информации о текущей стране.
   * @returns object with geo data / объект с гео-данными
   */
  get(): GeoItemFull {
    return this.item
  }

  /**
   * Getting the current country code.
   *
   * Получение текущего кода страны.
   * @returns country code / код страны
   */
  getCountry(): string {
    return this.item.country
  }

  /**
   * Getting the current language code.
   *
   * Получение текущего кода языка.
   * @returns language code / код языка
   */
  getLanguage(): string {
    return this.language
  }

  /**
   * Getting the full format according to the standard (language-country).
   *
   * Получение полного формата согласно стандарту (язык-страна).
   * @returns standard string / строка стандарта
   */
  getStandard(): string {
    return this.getItem().standard
  }

  /**
   * Getting the first day of the week for the current country.
   *
   * Получение первого дня недели для текущей страны.
   * @returns first day of the week / первый день недели
   */
  getFirstDay(): string {
    return this.item.firstDay
  }

  /**
   * Getting the current location string.
   *
   * Получение строки текущего местоположения.
   * @returns location string / строка местоположения
   */
  getLocation(): string {
    return this.location
  }

  /**
   * Getting the country code from the location.
   *
   * Получение кода страны из местоположения.
   * @returns country code / код страны
   */
  getLocationCountry(): string {
    return this.toCountry(this.getLocation())
  }

  /**
   * Getting the language code from the location.
   *
   * Получение кода языка из местоположения.
   * @returns language code / код языка
   */
  getLocationLanguage(): string {
    return this.toLanguage(this.getLocation())
  }

  /**
   * Getting processed data including the current language.
   *
   * Получение обработанных данных, включая текущий язык.
   * @returns full geo item data / полные данные гео-объекта
   */
  getItem(): GeoItemFull {
    return this.item
  }

  /**
   * Returns the full list of available countries.
   *
   * Возвращает полный список доступных стран.
   * @returns list of geo items / список гео-объектов
   */
  getList(): GeoItem[] {
    return geo
  }

  /**
   * Returns data about the country by its code.
   *
   * Возвращает данные о стране по ее коду.
   * @param code country code, full form language-country or one of them / код страны, полный вид язык-страна или один из них
   * @returns full geo data / полные гео-данные
   */
  getByCode(code?: string): GeoItemFull {
    let item: GeoItem | undefined

    if (code) {
      if (/([A-Z]{2}-[a-z]{2})|([a-z]{2}-[A-Z]{2})/.test(code)) {
        item = this.getByCodeFull(code)
      }

      if (!item && /[A-Z]{2}/.test(code)) {
        item = this.getByCountry(this.toCountry(code))
      }

      if (!item && /[a-z]{2}/.test(code)) {
        item = this.getByLanguage(this.toLanguage(code))
      }
    }

    return this.toFull(item ?? this.getList()[0] as GeoItem, code)
  }

  /**
   * Returns full data by language and country combination.
   *
   * Возвращает полные данные по комбинации языка и страны.
   * @param code string in the form of language-country / строка в виде язык-страна
   * @returns geo item or undefined / гео-объект или undefined
   */
  getByCodeFull(code: string): GeoItem | undefined {
    return this.getList()
      .find(
        item => isSelected(code, [
          `${item.language}-${item.country}`,
          `${item.country}-${item.language}`
        ])
      )
  }

  /**
   * Returns full data by country code.
   *
   * Возвращает полные данные по коду страны.
   * @param country country code / код страны
   * @returns geo item or undefined / гео-объект или undefined
   */
  getByCountry(country: string): GeoItem | undefined {
    return this.getList()
      .find((item) => {
        return item.country === country
          || item?.countryAlternative?.includes(country)
      })
  }

  /**
   * Returns full data by language code.
   *
   * Возвращает полные данные по коду языка.
   * @param language language code / код языка
   * @returns geo item or undefined / гео-объект или undefined
   */
  getByLanguage(language: string): GeoItem | undefined {
    return this.getList()
      .find((item) => {
        return item.language === language
          || item?.languageAlternative?.includes(language)
      })
  }

  /**
   * Returns the current time zone offset in minutes.
   *
   * Возвращает текущее смещение часового пояса в минутах.
   * @returns timezone offset / смещение часового пояса
   */
  getTimezone(): number {
    return this.timezone
  }

  /**
   * Returns the current time zone offset in a formatted string (e.g., '+03:00').
   *
   * Возвращает текущее смещение часового пояса в виде отформатированной строки (например, '+03:00').
   * @returns formatted timezone string / отформатированная строка часового пояса
   */
  getTimezoneFormat(): string {
    const hours = Math.abs(Math.trunc(this.timezone / 60)).toString().padStart(2, '0')
    const minutes = Math.abs(this.timezone % 60).toString().padStart(2, '0')

    if (this.timezone >= 0) {
      return `-${hours}:${minutes}`
    }

    return `+${hours}:${minutes}`
  }

  /**
   * Finds the country data by its code or name.
   *
   * Ищет данные о стране по ее коду или названию.
   * @param code country code / код страны
   * @returns full geo data / полные гео-данные
   */
  find(code: string): GeoItemFull {
    return this.getByCode(code)
  }

  /**
   * Converts a geo item to its standard string representation (language-country).
   *
   * Преобразует гео-объект в его стандартное строковое представление (язык-страна).
   * @param item geo item data / данные гео-объекта
   * @returns standard code string / строка стандартного кода
   */
  toStandard(
    item: GeoItem,
    language?: string
  ) {
    if (language) {
      const standardLanguage = this.getByLanguage(language)?.language

      if (standardLanguage) {
        return `${standardLanguage}-${item.country}`
      }
    }

    return `${item.language}-${item.country}`
  }

  /**
   * Updates the current location and related data.
   *
   * Обновляет текущее местоположение и связанные с ним данные.
   * @param code location code (e.g., 'en-GB') / код локации (например, 'en-GB')
   * @param save whether to save the location in storage / нужно ли сохранять местоположение в хранилище
   */
  set(code: string, save?: boolean): void {
    this.location = code

    this.item = this.getByCode(this.location)
    this.language = this.findLanguage(this.location)

    if (save) {
      this.storage.set(this.location)
      this.getCookie().set(this.location)
    }
  }

  /**
   * Updates the default time zone offset.
   *
   * Обновляет смещение часового пояса по умолчанию.
   * @param timezone new time zone offset / новое смещение часового пояса
   */
  setTimezone(timezone: number) {
    this.timezone = timezone
  }

  /**
   * Sets the default value for the country code.
   *
   * Устанавливает значение по умолчанию для кода страны.
   * @param code default code value / значение кода по умолчанию
   */
  setValueDefault(code?: string | (() => string)) {
    this.valueDefault = code

    this.location = this.findLocation()
    this.item = this.getByCode(this.location)
    this.language = this.findLanguage(this.location)
  }

  /**
   * Internal method to get the geo cookie instance.
   *
   * Внутренний метод для получения экземпляра гео-куки.
   * @returns Cookie instance for geo code / экземпляр куки для гео-кода
   */
  private getCookie(): Cookie<string> {
    return Cookie.getInstance<string>(UI_GEO_COOKIE_KEY)
  }

  /**
   * Internal method to determine the initial location.
   *
   * Внутренний метод для определения начального местоположения.
   * @returns initial location code / начальный код локации
   */
  private findLocation(): string {
    return this.getCookie().get()
      || this.findLocationDom()
      || executeFunction(this.valueDefault)
      || 'en-GB'
  }

  /**
   * Internal method to determine the location from DOM-specific sources.
   * Returns an empty string (falsy) when not in a DOM runtime.
   *
   * Внутренний метод для определения местоположения из DOM-источников.
   * Возвращает пустую строку (falsy) вне DOM-окружения.
   * @returns location code from DOM or empty string / код локации из DOM или пустая строка
   */
  private findLocationDom(): string | undefined {
    return (
      isDomRuntime() && (
        this.storage.get()
        || document.querySelector('html')?.lang
        || navigator.language
        || navigator.languages[0]
        || undefined
      )
    ) || undefined
  }

  /**
   * Internal method to determine the language from the provided code.
   *
   * Внутренний метод для определения языка по предоставленному коду.
   * @param code location or language code / код локации или языка
   * @returns language code / код языка
   */
  private findLanguage(code?: string): string {
    if (code) {
      const language = this.toLanguage(code)

      if (language) {
        const item = this.getByLanguage(language)

        if (item) {
          return item.language
        }
      }
    }

    return this.item.language
  }

  /**
   * Internal method to extract country code from a location string.
   *
   * Внутренний метод для извлечения кода страны из строки локации.
   * @param code combined string / комбинированная строка
   * @returns country code / код страны
   */
  private toCountry(code: string): string {
    return code.replace(/[^A-Z]+/g, '')
  }

  /**
   * Internal method to extract language code from a location string.
   *
   * Внутренний метод для извлечения кода языка из строки локации.
   * @param code combined string / комбинированная строка
   * @returns language code / код языка
   */
  private toLanguage(code: string): string {
    return code.replace(/[^a-z]+/g, '')
  }

  /**
   * Internal method to fill missing fields in a geo item.
   *
   * Внутренний метод для заполнения отсутствующих полей в гео-объекте.
   * @param item basic geo item / базовый гео-объект
   * @param code country code, full form language-country or one of them / код страны, полный вид язык-страна или один из них
   * @returns full geo item data / полные данные гео-объекта
   */
  private toFull(item: GeoItem, code?: string): GeoItemFull {
    const locationLanguage = (code && this.toLanguage(code)) || item.language
    const standard = this.toStandard(item, locationLanguage)

    return {
      ...item,
      standard,
      firstDay: item?.firstDay || 'Mo',

      location: code ?? standard,
      locationCountry: (code && this.toCountry(code)) || item.country,
      locationLanguage
    }
  }
}
