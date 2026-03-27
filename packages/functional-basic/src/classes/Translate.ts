import { TranslateInstance } from './TranslateInstance'

import { type TranslateCode, type TranslateDataFile, type TranslateList } from '../types/translateTypes'

/**
 * Class for getting the translated text.
 *
 * Класс для получения переведенного текста.
 */
export class Translate {
  protected static item = new TranslateInstance()

  /**
   * Getting the translation text by its code.
   *
   * Получение текста перевода по его коду.
   * @param name code name/ название кода
   * @param replacement If set, replaces the text with the specified values/ если установлено, заменяет текст на указанные значения
   */
  static async get(
    name: string,
    replacement?: string[] | Record<string, string | number>
  ): Promise<string> {
    return this.item.get(name, replacement)
  }

  /**
   * Getting the translation text by its code (Sync).
   *
   * Получение текста перевода по его коду (Sync).
   * @param name code name/ название кода
   * @param first If set to false, returns an empty string if there is no text/
   * если установлено false, возвращает пустую строку, если нет текста
   * @param replacement If set, replaces the text with the specified values/
   * если установлено, заменяет текст на указанные значения
   */
  static getSync(
    name: string,
    first: boolean = false,
    replacement?: string[] | Record<string, string | number>
  ): string {
    return this.item.getSync(name, first, replacement)
  }

  /**
   * Getting a list of translations by an array of text codes.
   *
   * Получение списка переводов по массиву кодов текста.
   * @param names list of codes to get translations/ список кодов для получения переводов
   */
  static getList<T extends TranslateCode[]>(names: T): Promise<TranslateList<T>> {
    return this.item.getList(names)
  }

  /**
   * Getting a list of translations by an array of text codes.
   *
   * Получение списка переводов по массиву кодов текста.
   * @param names list of codes to get translations/ список кодов для получения переводов
   * @param first If set to false, returns an empty string if there is no text/
   * если установлено false, возвращает пустую строку, если нет текста
   */
  static getListSync<T extends TranslateCode[]>(names: T, first: boolean = false): TranslateList<T> {
    return this.item.getListSync(names, first)
  }

  /**
   * Added a list of translated texts.
   *
   * Добавлен список переведенных текстов.
   * @param names list of codes to get translations/ список кодов для получения переводов
   */
  static add(names: string | string[]): Promise<void> {
    return this.item.add(names)
  }

  /**
   * Adds texts in sync mode.
   *
   * Добавляет тексты в режиме синхронизации.
   * @param data list of texts in the form of key-value/ список текстов в виде ключ-значение
   */
  static addSync(data: Record<string, string>): void {
    return this.item.addSync(data)
  }

  /**
   * Adding data in the form of a query or directly, depending on the execution environment.
   *
   * Добавление данных в виде запроса или напрямую, в зависимости от среды выполнения.
   * @param data list of texts in the form of key-value/ список текстов в виде ключ-значение
   */
  static async addNormalOrSync(data: Record<string, string>): Promise<void> {
    return this.item.addNormalOrSync(data)
  }

  /**
   * Adds texts synchronously by location.
   *
   * Добавляет тексты синхронно по местоположению.
   * @param data list of texts by location/ список текстов по местоположению
   */
  static addSyncByLocation(data: Record<string, Record<string, string>>): void {
    return this.item.addSyncByLocation(data)
  }

  /**
   * Adds texts synchronously from the file.
   *
   * Добавляет тексты синхронно из файла.
   * @param data file with translations/ файл с переводами
   */
  static addSyncByFile(data: TranslateDataFile): void {
    return this.item.addSyncByFile(data)
  }

  /**
   * Change the path to the script for obtaining the translation.
   *
   * Изменить путь к скрипту для получения перевода.
   * @param url path to the script/ путь к скрипту
   */
  static setUrl(url: string): Translate {
    this.item.setUrl(url)
    return Translate
  }

  /**
   * Change the name of the property to get the translation.
   *
   * Изменить имя свойства для получения перевода.
   * @param name property name/ имя свойства
   */
  static setPropsName(name: string): Translate {
    this.item.setPropsName(name)
    return this
  }

  /**
   * Change the read mode from the API.
   *
   * Изменить режим чтения из API.
   * @param value read mode/ режим чтения
   */
  static setReadApi(value: boolean): Translate {
    this.item.setReadApi(value)
    return this
  }
}
