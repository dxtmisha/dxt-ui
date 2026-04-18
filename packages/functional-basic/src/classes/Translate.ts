import { TranslateInstance } from './TranslateInstance'
import { ServerStorage } from './ServerStorage'

import { type TranslateCode, type TranslateConfig, type TranslateDataFile, type TranslateList } from '../types/translateTypes'

/**
 * Class for getting the translated text.
 *
 * Класс для получения переведенного текста.
 */
export class Translate {
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
    return this.getItem().get(name, replacement)
  }

  /**
   * Returns a request-isolated instance of TranslateInstance.
   *
   * Возвращает изолированный в рамках запроса экземпляр TranslateInstance.
   * @returns TranslateInstance instance / экземпляр TranslateInstance
   */
  static getItem(): TranslateInstance {
    return ServerStorage.get('__ui:translate-instance__', () => new TranslateInstance())
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
    return this.getItem().getSync(name, first, replacement)
  }

  /**
   * Getting a list of translations by an array of text codes.
   *
   * Получение списка переводов по массиву кодов текста.
   * @param names list of codes to get translations/ список кодов для получения переводов
   */
  static getList<T extends TranslateCode[]>(names: T): Promise<TranslateList<T>> {
    return this.getItem().getList(names)
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
    return this.getItem().getListSync(names, first)
  }

  /**
   * Added a list of translated texts.
   *
   * Добавлен список переведенных текстов.
   * @param names list of codes to get translations/ список кодов для получения переводов
   */
  static async add(names: string | string[]): Promise<void> {
    await this.getItem().add(names)
  }

  /**
   * Adds texts in sync mode.
   *
   * Добавляет тексты в режиме синхронизации.
   * @param data list of texts in the form of key-value/ список текстов в виде ключ-значение
   */
  static addSync(data: Record<string, string>): void {
    this.getItem().addSync(data)
  }

  /**
   * Adding data in the form of a query or directly, depending on the execution environment.
   *
   * Добавление данных в виде запроса или напрямую, в зависимости от среды выполнения.
   * @param data list of texts in the form of key-value/ список текстов в виде ключ-значение
   */
  static async addNormalOrSync(data: Record<string, string>): Promise<void> {
    await this.getItem().addNormalOrSync(data)
  }

  /**
   * Adds texts synchronously by location.
   *
   * Добавляет тексты синхронно по местоположению.
   * @param data list of texts by location/ список текстов по местоположению
   */
  static addSyncByLocation(data: Record<string, Record<string, string>>): void {
    this.getItem().addSyncByLocation(data)
  }

  /**
   * Adds texts synchronously from the file.
   *
   * Добавляет тексты синхронно из файла.
   * @param data file with translations/ файл с переводами
   */
  static addSyncByFile(data: TranslateDataFile): void {
    this.getItem().addSyncByFile(data)
  }

  /**
   * Change the path to the script for obtaining the translation.
   *
   * Изменить путь к скрипту для получения перевода.
   * @param url path to the script/ путь к скрипту
   */
  static setUrl(url: string): void {
    this.getItem().setUrl(url)
  }

  /**
   * Change the name of the property to get the translation.
   *
   * Изменить имя свойства для получения перевода.
   * @param name property name/ имя свойства
   */
  static setPropsName(name: string): void {
    this.getItem().setPropsName(name)
  }

  /**
   * Change the read mode from the API.
   *
   * Изменить режим чтения из API.
   * @param value read mode/ режим чтения
   */
  static setReadApi(value: boolean): void {
    this.getItem().setReadApi(value)
  }

  /**
   * Set the configuration for the translation.
   *
   * Установить конфигурацию для перевода.
   * @param config configuration/ конфигурация
   */
  static setConfig(config: TranslateConfig): void {
    if (config.url) {
      this.getItem().setUrl(config.url)
    }

    if (config.propsName) {
      this.getItem().setPropsName(config.propsName)
    }

    if (typeof config.readApi === 'boolean') {
      this.getItem().setReadApi(config.readApi)
    }
  }
}
