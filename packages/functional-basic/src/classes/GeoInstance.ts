// ai-none

import { isString } from '../functions/isString'
import { sanitizeLocation } from '../functions/sanitizeLocation'

import { GeoList } from './GeoList'
import { GeoLocation, UI_GEO_COOKIE_KEY } from './GeoLocation'
import { GeoTimezone } from './GeoTimezone'

import {
  type GeoItem,
  type GeoItemFull
} from '../types/geoTypes'

export { UI_GEO_COOKIE_KEY }

/**
 * Default first day of the week /
 * Первый день недели по умолчанию
 */
const DEFAULT_FIRST_DAY = 'Mo'

/**
 * Regular expression for matching full language-country or country-language codes /
 * Регулярное выражение для проверки полного кода язык-страна или страна-язык
 */
const REGEXP_CODE_FULL = /([A-Z]{2}-[a-z]{2})|([a-z]{2}-[A-Z]{2})/

/**
 * Regular expression for hyphen or underscore subtag separators /
 * Регулярное выражение для разделителей субтегов (дефис или подчеркивание)
 */
const REGEXP_SEPARATOR = /[-_]/

/**
 * Regular expression for an exact 2-letter uppercase country code /
 * Регулярное выражение для точного двухбуквенного кода страны в верхнем регистре
 */
const REGEXP_COUNTRY_CODE = /^[A-Z]{2}$/

/**
 * Regular expression for a 2-letter Latin region subtag in any case /
 * Регулярное выражение для двухбуквенного латинского субтега региона в любом регистре
 */
const REGEXP_ALPHA_TWO = /^[a-zA-Z]{2}$/

/**
 * Regular expression for a 2- or 3-letter lowercase ISO language code /
 * Регулярное выражение для двух- или трехбуквенного ISO-кода языка в нижнем регистре
 */
const REGEXP_LANGUAGE_LOWER = /^[a-z]{2,3}$/

/**
 * Regular expression for a 2- or 3-letter primary language subtag in any case /
 * Регулярное выражение для двух- или трехбуквенного основного субтега языка в любом регистре
 */
const REGEXP_LANGUAGE_SUBTAG = /^[a-zA-Z]{2,3}$/

/**
 * Base class for working with geographic data.
 * Includes methods for determining location, language, and time zone.
 *
 * Базовый класс для работы с географическими данными.
 * Включает методы для определения местоположения, языка и часового пояса.
 */
export class GeoInstance {
  /**
   * Location manager instance /
   * Экземпляр менеджера локации
   */
  protected readonly location = new GeoLocation()

  /**
   * Time zone manager instance /
   * Экземпляр менеджера часового пояса
   */
  protected timezone?: GeoTimezone

  /**
   * Detailed data about the current country /
   * Детальные данные о текущей стране
   */
  protected item: GeoItemFull

  /**
   * Current language code /
   * Текущий код языка
   */
  protected language: string

  /**
   * Constructor.
   * Initializes the location and related data.
   *
   * Конструктор.
   * Инициализирует местоположение и связанные с ним данные.
   */
  constructor() {
    this.item = this.getByCode(this.location.get())
    this.language = this.findLanguage(this.location.get())
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
   * Updates the current location and related data.
   *
   * Обновляет текущее местоположение и связанные с ним данные.
   * @param code location code (e.g., 'en-GB') / код локации (например, 'en-GB')
   * @param save whether to save the location in storage / нужно ли сохранять местоположение в хранилище
   * @returns void / ничего не возвращает
   */
  set(code: string, save?: boolean): void {
    this.location.set(code, save)

    this.item = this.getByCode(this.location.get())
    this.language = this.findLanguage(this.location.get())
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
    const validCode = isString(code) ? code : undefined

    if (validCode) {
      if (REGEXP_CODE_FULL.test(validCode)) {
        item = this.getByCodeFull(validCode)
      }

      if (!item) {
        const country = this.toCountry(validCode)

        if (country) {
          item = this.getByCountry(country)
        }
      }

      if (!item) {
        const language = this.toLanguage(validCode)

        if (language) {
          item = this.getByLanguage(language)
        }
      }
    }

    return this.toFull(item ?? this.getList()[0] as GeoItem, validCode)
  }

  /**
   * Returns full data by language and country combination.
   *
   * Возвращает полные данные по комбинации языка и страны.
   * @param code string in the form of language-country / строка в виде язык-страна
   * @returns geo item or undefined / гео-объект или undefined
   */
  getByCodeFull(code: string): GeoItem | undefined {
    return GeoList.getByCodeFull(code)
  }

  /**
   * Returns full data by country code.
   *
   * Возвращает полные данные по коду страны.
   * @param country country code / код страны
   * @returns geo item or undefined / гео-объект или undefined
   */
  getByCountry(country: string): GeoItem | undefined {
    return GeoList.getByCountry(country)
  }

  /**
   * Returns full data by language code.
   *
   * Возвращает полные данные по коду языка.
   * @param language language code / код языка
   * @returns geo item or undefined / гео-объект или undefined
   */
  getByLanguage(language: string): GeoItem | undefined {
    return GeoList.getByLanguage(language)
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
   * Getting the first day of the week for the current country.
   *
   * Получение первого дня недели для текущей страны.
   * @returns first day of the week / первый день недели
   */
  getFirstDay(): string {
    return this.item.firstDay
  }

  /**
   * Getting processed data including the current language.
   *
   * Получение обработанных данных, включая текущий язык.
   * @returns full geo item data / полные данные гео-объекта
   * @deprecated Use get() / Используйте get()
   */
  getItem(): GeoItemFull {
    return this.item
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
   * Returns the full list of available countries.
   *
   * Возвращает полный список доступных стран.
   * @returns list of geo items / список гео-объектов
   */
  getList(): GeoItem[] {
    return GeoList.get()
  }

  /**
   * Getting the current location string.
   *
   * Получение строки текущего местоположения.
   * @returns location string / строка местоположения
   */
  getLocation(): string {
    return this.location.get()
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
   * Getting the full format according to the standard (language-country).
   *
   * Получение полного формата согласно стандарту (язык-страна).
   * @returns standard string / строка стандарта
   */
  getStandard(): string {
    return this.item.standard
  }

  /**
   * Returns the current time zone offset in minutes.
   *
   * Возвращает текущее смещение часового пояса в минутах.
   * @returns timezone offset / смещение часового пояса
   */
  getTimezone(): number {
    return this.getTimezoneObject().get()
  }

  /**
   * Returns the current time zone offset in a formatted string (e.g., '+03:00').
   *
   * Возвращает текущее смещение часового пояса в виде отформатированной строки (например, '+03:00').
   * @returns formatted timezone string / отформатированная строка часового пояса
   */
  getTimezoneFormat(): string {
    return this.getTimezoneObject().getFormat()
  }

  /**
   * Updates the default time zone offset.
   *
   * Обновляет смещение часового пояса по умолчанию.
   * @param timezone new time zone offset / новое смещение часового пояса
   * @returns current instance / текущий экземпляр
   */
  setTimezone(timezone: number): this {
    this.getTimezoneObject().set(timezone)
    return this
  }

  /**
   * Sets the default value for the country code.
   *
   * Устанавливает значение по умолчанию для кода страны.
   * @param code default code value / значение кода по умолчанию
   * @returns void / ничего не возвращает
   */
  setValueDefault(code?: string | (() => string | undefined)): void {
    this.location.setValueDefault(code)

    this.item = this.getByCode(this.location.get())
    this.language = this.findLanguage(this.location.get())
  }

  /**
   * Adds or updates country geo data.
   * Merges with existing country data if found, or creates a new entry.
   *
   * Добавляет или обновляет гео-данные страны.
   * Объединяет с существующими данными страны, если она найдена, или создает новую запись.
   * @param country country code (e.g., 'US', 'VN') / код страны (например, 'US', 'VN')
   * @param item partial or full geo item data / частичные или полные гео-данные
   * @returns current instance / текущий экземпляр
   */
  add(
    country: string,
    item: Partial<GeoItem>
  ): this {
    GeoList.add(country, item)

    if (
      this.item.country === country
      || this.toCountry(this.location.get()) === country
    ) {
      this.item = this.getByCode(this.location.get())
      this.language = this.findLanguage(this.location.get())
    }

    return this
  }

  /**
   * Adds or updates multiple countries in the geo list.
   *
   * Добавляет или обновляет несколько стран в гео-списке.
   * @param list map of country codes to geo items / карта кодов стран к гео-объектам
   * @returns current instance / текущий экземпляр
   */
  addList(
    list: Record<string, Partial<GeoItem>>
  ): this {
    GeoList.addList(list)

    this.item = this.getByCode(this.location.get())
    this.language = this.findLanguage(this.location.get())

    return this
  }

  /**
   * Finds the country data by its code.
   *
   * Ищет данные о стране по ее коду.
   * @param code country code / код страны
   * @returns full geo data / полные гео-данные
   * @deprecated Use getByCode() / Используйте getByCode()
   */
  find(code?: string): GeoItemFull {
    return this.getByCode(code)
  }

  /**
   * Converts a geo item to its standard string representation (language-country).
   *
   * Преобразует гео-объект в его стандартное строковое представление (язык-страна).
   * @param item geo item data / данные гео-объекта
   * @param language optional language override / опциональное переопределение языка
   * @returns standard code string / строка стандартного кода
   */
  toStandard(
    item: GeoItem,
    language?: string
  ): string {
    if (language) {
      const standardLanguage = this.getByLanguage(language)?.language

      if (standardLanguage) {
        return `${standardLanguage}-${item.country}`
      }
    }

    return `${item.language}-${item.country}`
  }

  /**
   * Internal getter for the list of available countries.
   *
   * Внутренний геттер для списка доступных стран.
   * @returns list of geo items / список гео-объектов
   */
  protected get list(): GeoItem[] {
    return GeoList.get()
  }

  /**
   * Internal method to get the location manager instance.
   *
   * Внутренний метод для получения экземпляра менеджера локации.
   * @returns location manager instance / экземпляр менеджера локации
   */
  protected getLocationObject(): GeoLocation {
    return this.location
  }

  /**
   * Internal method to get or initialize the time zone manager instance.
   *
   * Внутренний метод для получения или инициализации экземпляра менеджера часового пояса.
   * @returns time zone manager instance / экземпляр менеджера часового пояса
   */
  protected getTimezoneObject(): GeoTimezone {
    return (this.timezone ??= new GeoTimezone())
  }

  /**
   * Internal method to determine the language from the provided code.
   *
   * Внутренний метод для определения языка по предоставленному коду.
   * @param code location or language code / код локации или языка
   * @returns language code / код языка
   */
  protected findLanguage(code?: string): string {
    if (isString(code) && code) {
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
   * Supports BCP-47 subtags (e.g., 'zh-Hans-CN'), case-insensitive tags ('en-gb'),
   * reversed tags ('RU-ru'), and underscore alternatives ('BY_BY').
   *
   * Внутренний метод для извлечения кода страны из строки локации.
   * Поддерживает BCP-47 субтеги (например, 'zh-Hans-CN'), регистронезависимые теги ('en-gb'),
   * обратные теги ('RU-ru') и альтернативные коды с подчеркиванием ('BY_BY').
   * @param code combined string / комбинированная строка
   * @returns country code / код страны
   */
  protected toCountry(code: string): string {
    if (!isString(code)) {
      return ''
    }

    const trimmed = code.trim()

    if (!trimmed) {
      return ''
    }

    if (!REGEXP_SEPARATOR.test(trimmed)) {
      if (REGEXP_COUNTRY_CODE.test(trimmed)) {
        return trimmed
      }

      return this.getByCountry(trimmed)?.country ?? ''
    }

    const segments = trimmed.split(REGEXP_SEPARATOR)

    if (
      segments.length === 2
      && REGEXP_COUNTRY_CODE.test(segments[0])
      && REGEXP_LANGUAGE_LOWER.test(segments[1])
    ) {
      return segments[0]
    }

    if (!REGEXP_LANGUAGE_SUBTAG.test(segments[0])) {
      return this.getByCountry(trimmed)?.country ?? ''
    }

    const length = segments.length

    for (let index = 1; index < length; index++) {
      const segment = segments[index]

      if (segment.length <= 1) {
        break
      }

      if (REGEXP_ALPHA_TWO.test(segment)) {
        return segment.toUpperCase()
      }
    }

    return this.getByCountry(trimmed)?.country ?? ''
  }

  /**
   * Internal method to extract language code from a location string.
   * Supports BCP-47 subtags (e.g., 'zh-Hans-CN'), case-insensitive tags ('ru-ru'),
   * 3-letter ISO 639-3 codes ('cmn-SG'), and reversed tags ('RU-ru').
   *
   * Внутренний метод для извлечения кода языка из строки локации.
   * Поддерживает BCP-47 субтеги (например, 'zh-Hans-CN'), регистронезависимые теги ('ru-ru'),
   * трехбуквенные коды ISO 639-3 ('cmn-SG') и обратные теги ('RU-ru').
   * @param code combined string / комбинированная строка
   * @returns language code / код языка
   */
  protected toLanguage(code: string): string {
    if (!isString(code)) {
      return ''
    }

    const trimmed = code.trim()

    if (!trimmed) {
      return ''
    }

    if (!REGEXP_SEPARATOR.test(trimmed)) {
      return REGEXP_LANGUAGE_LOWER.test(trimmed) ? trimmed : ''
    }

    if (this.getByCountry(trimmed)) {
      return ''
    }

    const segments = trimmed.split(REGEXP_SEPARATOR)

    if (
      segments.length === 2
      && REGEXP_COUNTRY_CODE.test(segments[0])
    ) {
      if (REGEXP_LANGUAGE_LOWER.test(segments[1])) {
        return segments[1]
      }

      if (
        segments[0] === segments[1]
        && !this.getByLanguage(segments[0].toLowerCase())
      ) {
        return ''
      }
    }

    if (
      segments.length >= 2
      && segments[1].length > 0
      && REGEXP_LANGUAGE_SUBTAG.test(segments[0])
    ) {
      return segments[0].toLowerCase()
    }

    return ''
  }

  /**
   * Internal method to fill missing fields in a geo item.
   *
   * Внутренний метод для заполнения отсутствующих полей в гео-объекте.
   * @param item basic geo item / базовый гео-объект
   * @param code country code, full form language-country or one of them / код страны, полный вид язык-страна или один из них
   * @returns full geo item data / полные данные гео-объекта
   */
  protected toFull(item: GeoItem, code?: string): GeoItemFull {
    const locationLanguage = (code && this.toLanguage(code)) || item.language
    const standard = this.toStandard(item, locationLanguage)

    return {
      ...item,
      standard,
      firstDay: item.firstDay || DEFAULT_FIRST_DAY,

      location: sanitizeLocation(code) ?? standard,
      locationCountry: (code && this.toCountry(code)) || item.country,
      locationLanguage
    }
  }
}
