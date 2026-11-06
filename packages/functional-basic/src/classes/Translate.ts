import { isObjectNotArray } from '../functions/isObjectNotArray'

import { TranslateInstance } from './TranslateInstance'

import {
  type TranslateCode,
  type TranslateConfig,
  type TranslateDataFile,
  type TranslateList
} from '../types/translateTypes'

/**
 * Static wrapper class for managing translations and localized text at the application level.
 * Delegates all operations to a global singleton instance of TranslateInstance.
 * The shared translation dictionary is independent of user identity, including during SSR.
 *
 * Статический класс-обертка для управления переводами и локализованным текстом на уровне приложения.
 * Делегирует все операции глобальному экземпляру синглтона TranslateInstance.
 * Общий словарь переводов не зависит от пользователя, в том числе при SSR.
 */
export class Translate {
  /** TranslateInstance singleton item / Экземпляр синглтона TranslateInstance */
  protected static item?: TranslateInstance

  /**
   * Getting the translation text by its code.
   *
   * Получение текста перевода по его коду.
   * @param name code name / название кода
   * @param replacement If set, replaces the text with the specified values / если установлено, заменяет текст на указанные значения
   * @returns translation text / текст перевода
   */
  static async get(
    name: string,
    replacement?: string[] | Record<string, string | number>
  ): Promise<string> {
    return this.getItem().get(name, replacement)
  }

  /**
   * Returns the global singleton instance of TranslateInstance.
   *
   * Возвращает глобальный экземпляр синглтона TranslateInstance.
   * @returns TranslateInstance instance / экземпляр TranslateInstance
   */
  static getItem(): TranslateInstance {
    if (!this.item) {
      this.item = new TranslateInstance()
    }

    return this.item
  }

  /**
   * Getting a list of translations by an array of text codes.
   *
   * Получение списка переводов по массиву кодов текста.
   * @param names list of codes to get translations / список кодов для получения переводов
   * @returns object with translations / объект с переводами
   */
  static getList<T extends TranslateCode[]>(names: T): Promise<TranslateList<T>> {
    return this.getItem().getList(names)
  }

  /**
   * Getting a list of translations by an array of text codes (Sync).
   *
   * Получение списка переводов по массиву кодов текста (Sync).
   * @param names list of codes to get translations / список кодов для получения переводов
   * @param first If set to true, returns a space when there is no text instead of the code name / если установлено true, возвращает пробел при отсутствии текста вместо названия кода
   * @returns object with translations / объект с переводами
   */
  static getListSync<T extends TranslateCode[]>(names: T, first: boolean = false): TranslateList<T> {
    return this.getItem().getListSync(names, first)
  }

  /**
   * Getting the translation text by its code (Sync).
   *
   * Получение текста перевода по его коду (Sync).
   * @param name code name / название кода
   * @param first If set to true, returns a space when there is no text instead of the code name / если установлено true, возвращает пробел при отсутствии текста вместо названия кода
   * @param replacement If set, replaces the text with the specified values / если установлено, заменяет текст на указанные значения
   * @returns translation text / текст перевода
   */
  static getSync(
    name: string,
    first: boolean = false,
    replacement?: string[] | Record<string, string | number>
  ): string {
    return this.getItem().getSync(name, first, replacement)
  }

  /**
   * Set the configuration for the translation.
   *
   * Установить конфигурацию для перевода.
   * @param config configuration / конфигурация
   * @returns void / ничего не возвращает
   */
  static setConfig(config?: TranslateConfig): void {
    if (isObjectNotArray(config)) {
      const item = this.getItem()

      if (config.url) {
        item.setUrl(config.url)
      }

      if (config.propsName) {
        item.setPropsName(config.propsName)
      }

      if (typeof config.readApi === 'boolean') {
        item.setReadApi(config.readApi)
      }
    }
  }

  /**
   * Change the name of the property to get the translation.
   *
   * Изменить имя свойства для получения перевода.
   * @param name property name / имя свойства
   * @returns void / ничего не возвращает
   */
  static setPropsName(name: string): void {
    this.getItem().setPropsName(name)
  }

  /**
   * Change the read mode from the API.
   *
   * Изменить режим чтения из API.
   * @param value read mode / режим чтения
   * @returns void / ничего не возвращает
   */
  static setReadApi(value: boolean): void {
    this.getItem().setReadApi(value)
  }

  /**
   * Change the path to the script for obtaining the translation.
   *
   * Изменить путь к скрипту для получения перевода.
   * @param url path to the script / путь к скрипту
   * @returns void / ничего не возвращает
   */
  static setUrl(url: string): void {
    this.getItem().setUrl(url)
  }

  /**
   * Added a list of translated texts.
   *
   * Добавлен список переведенных текстов.
   * @param names list of codes to get translations / список кодов для получения переводов
   * @returns promise resolving when translations are added / промис, разрешающийся после добавления переводов
   */
  static async add(names: string | string[]): Promise<void> {
    await this.getItem().add(names)
  }

  /**
   * Adding data in the form of a query or directly, depending on the execution environment.
   *
   * Добавление данных в виде запроса или напрямую, в зависимости от среды выполнения.
   * @param data list of texts in the form of key-value / список текстов в виде ключ-значение
   * @returns promise resolving when operation completes / промис, разрешающийся после завершения операции
   */
  static async addNormalOrSync(data: Record<string, string>): Promise<void> {
    await this.getItem().addNormalOrSync(data)
  }

  /**
   * Adds texts in sync mode.
   *
   * Добавляет тексты в режиме синхронизации.
   * @param data list of texts in the form of key-value / список текстов в виде ключ-значение
   * @returns void / ничего не возвращает
   */
  static addSync(data: Record<string, string>): void {
    this.getItem().addSync(data)
  }

  /**
   * Adds texts synchronously from the file.
   *
   * Добавляет тексты синхронно из файла.
   * @param data file with translations / файл с переводами
   * @returns void / ничего не возвращает
   */
  static addSyncByFile(data: TranslateDataFile): void {
    this.getItem().addSyncByFile(data)
  }

  /**
   * Adds texts synchronously by location.
   *
   * Добавляет тексты синхронно по местоположению.
   * @param data list of texts by location / список текстов по местоположению
   * @returns void / ничего не возвращает
   */
  static addSyncByLocation(data: Record<string, Record<string, string>>): void {
    this.getItem().addSyncByLocation(data)
  }
}
