// ai-none

import { toGeoItem } from '../functions/toGeoItem'
import { toGeoItemFull } from '../functions/toGeoItemFull'
import { toGeoStandard } from '../functions/toGeoStandard'

import { GeoList } from './GeoList'
import { GeoLocation } from './GeoLocation'
import { GeoTimezone } from './GeoTimezone'

import {
  type GeoItem,
  type GeoItemFull
} from '../types/geoTypes'

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
  protected item!: GeoItemFull

  /**
   * Constructor.
   * Initializes the location and related data.
   *
   * Конструктор.
   * Инициализирует местоположение и связанные с ним данные.
   */
  constructor() {
    this.updateItem()
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
   * @returns current instance / текущий экземпляр
   */
  set(code?: string, save?: boolean): this {
    this.location.set(code, save)
    this.updateItem()

    return this
  }

  /**
   * Returns data about the country by its code.
   *
   * Возвращает данные о стране по ее коду.
   * @param code country code, full form language-country or one of them / код страны, полный вид язык-страна или один из них
   * @returns full geo data / полные гео-данные
   */
  getByCode(code?: string): GeoItemFull {
    return toGeoItemFull(toGeoItem(code) ?? this.getList()[0], code)
  }

  /**
   * Returns geo item data by language and country combination.
   *
   * Возвращает гео-данные по комбинации языка и страны.
   * @param code string in the form of language-country / строка в виде язык-страна
   * @returns geo item or undefined / гео-объект или undefined
   */
  getByCodeFull(code?: string): GeoItem | undefined {
    return GeoList.getByCodeFull(code)
  }

  /**
   * Returns geo item data by country code.
   *
   * Возвращает гео-данные по коду страны.
   * @param country country code / код страны
   * @returns geo item or undefined / гео-объект или undefined
   */
  getByCountry(country?: string): GeoItem | undefined {
    return GeoList.getByCountry(country)
  }

  /**
   * Returns geo item data by language code.
   *
   * Возвращает гео-данные по коду языка.
   * @param language language code / код языка
   * @returns geo item or undefined / гео-объект или undefined
   */
  getByLanguage(language?: string): GeoItem | undefined {
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
    return this.item.locationLanguage
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
    return this.location.getCountry()
  }

  /**
   * Getting the language code from the location.
   *
   * Получение кода языка из местоположения.
   * @returns language code / код языка
   */
  getLocationLanguage(): string {
    return this.location.getLanguage()
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
   * Sets the default value or resolver for the location code.
   *
   * Устанавливает значение по умолчанию или функцию его вычисления для кода локации.
   * @param code default code value or provider / значение кода по умолчанию или провайдер
   * @returns current instance / текущий экземпляр
   */
  setValueDefault(code?: string | (() => string | undefined)): this {
    this.location.setValueDefault(code)
    this.updateItem()

    return this
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
    item?: Partial<GeoItem>
  ): this {
    GeoList.add(country, item)
    this.updateItem()

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
    list?: Record<string, Partial<GeoItem>>
  ): this {
    if (list) {
      GeoList.addList(list)
      this.updateItem()
    }

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
   * @param raw whether to skip language processing / не обрабатывать ли язык
   * @returns standard code string / строка стандартного кода
   */
  toStandard(
    item?: GeoItem,
    language?: string,
    raw?: boolean
  ): string {
    return toGeoStandard(item, language, raw)
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
   * Internal method to update current geo item.
   *
   * Внутренний метод для обновления текущего гео-объекта.
   * @returns void / ничего не возвращает
   */
  protected updateItem(): void {
    this.item = this.getByCode(this.location.get())
  }
}
