import { GeoInstance } from './GeoInstance'
import { ServerStorage } from './ServerStorage'

import {
  type GeoItem,
  type GeoItemFull
} from '../types/geoTypes'

/**
 * Base class for working with geographic data.
 *
 * Базовый класс для работы с географическими данными.
 */
export class Geo {
  /**
   * Returns the instance of the class.
   *
   * Возвращает инстанс класса.
   */
  static getItem(): GeoInstance {
    return ServerStorage.get('__dxt_geo_instance__', () => new GeoInstance())
  }

  /**
   * Information about the current country.
   *
   * Информация об текущей стране.
   */
  static get(): GeoItemFull {
    return this.getItem().get()
  }

  /**
   * Current country.
   *
   * Текущая страна.
   */
  static getCountry(): string {
    return this.getItem().getCountry()
  }

  /**
   * Current language.
   *
   * Текущий язык.
   */
  static getLanguage(): string {
    return this.getItem().getLanguage()
  }

  /**
   * Full format according to the standard.
   *
   * Полный формат согласно стандарту.
   */
  static getStandard(): string {
    return this.getItem().getStandard()
  }

  /**
   * Returns the first day of the week.
   *
   * Возвращает первый день недели.
   */
  static getFirstDay(): string {
    return this.getItem().getFirstDay()
  }

  /**
   * Full format.
   *
   * Полный формат.
   */
  static getLocation(): string {
    return this.getItem().getLocation()
  }

  /**
   * Obtaining processed data.
   *
   * Получение обработанных данных.
   */
  static getItemFull(): GeoItemFull {
    return this.getItem().getItem()
  }

  /**
   * Returns the full list of countries.
   *
   * Возвращает полный список стран.
   */
  static getList(): GeoItem[] {
    return this.getItem().getList()
  }

  /**
   * Returns the data about the country by its full code.
   *
   * Возвращает данные о стране по ее полному коду.
   * @param code country code, full form language-country or one of them/
   * код страны, полный вид язык-страна или один из них
   */
  static getByCode(code?: string): GeoItemFull {
    return this.getItem().getByCode(code)
  }

  /**
   * Returns the full data by language and country.
   *
   * Возвращает полные данные по языку и стране.
   * @param code string in the form of language-country/ строка в виде язык-страна
   */
  static getByCodeFull(code: string): GeoItem | undefined {
    return this.getItem().getByCodeFull(code)
  }

  /**
   * Returns the full data by country.
   *
   * Возвращает полные данные по стране.
   * @param country country/ страна
   */
  static getByCountry(country: string): GeoItem | undefined {
    return this.getItem().getByCountry(country)
  }

  /**
   * Returns the full data by language.
   *
   * Возвращает полные данные по языку.
   * @param language language/ язык
   */
  static getByLanguage(language: string): GeoItem | undefined {
    return this.getItem().getByLanguage(language)
  }

  /**
   * Retrieving the default timezone.
   *
   * Получение временной зоны по умолчанию
   */
  static getTimezone(): number {
    return this.getItem().getTimezone()
  }

  /**
   * Retrieving the default timezone (formatted view).
   *
   * Получение временной зоны по умолчанию (отформатированный вид).
   */
  static getTimezoneFormat(): string {
    return this.getItem().getTimezoneFormat()
  }

  /**
   * Determines the current country by its full name.
   *
   * Определяет текущую страну по ее полному названию.
   * @param code country code, full form language-country or one of them/
   * код страны, полный вид язык-страна или один из них
   */
  static find(code: string): GeoItemFull {
    return this.getItem().find(code)
  }

  /**
   * Returns a complete string with the country code and language.
   *
   * Возвращает полную строку с кодом страны и языка.
   * @param item object with data about the current country/
   * объект с данными об текущей стране
   */
  static toStandard(item: GeoItem) {
    return this.getItem().toStandard(item)
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
    this.getItem().set(code, save)
  }

  /**
   * Changing the default timezone for transmitted dates.
   *
   * Изменение временной зоны по умолчанию для отправляемых дат
   * @param timezone new time zone/ новая временная зона
   */
  static setTimezone(timezone: number) {
    this.getItem().setTimezone(timezone)
  }
}
