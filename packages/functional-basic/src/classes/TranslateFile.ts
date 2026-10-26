// ai-none

import { executeFunction } from '../functions/executeFunction'
import { forEach } from '../functions/forEach'
import { isFunction } from '../functions/isFunction'

import { ErrorCenter } from './ErrorCenter'
import { Geo } from './Geo'

import {
  TRANSLATE_GLOBAL_PREFIX,
  type TranslateDataFile,
  type TranslateDataFileList,
  type TranslatePromiseItem
} from '../types/translateTypes'

/**
 * Class for managing and loading translation files with hierarchical locale resolution and caching.
 * Resolves translation files using the fallback chain: location -> language -> global prefix.
 *
 * Класс для управления и загрузки файлов перевода с иерархическим разрешением локалей и кэшированием.
 * Разрешает файлы перевода по цепочке отката: регион (location) -> язык (language) -> глобальный префикс (global).
 */
export class TranslateFile {
  /** List of files with translations / Список файлов с переводами */
  protected files: TranslateDataFile = Object.create(null)

  /** Data from files / Данные из файлов */
  protected data: Record<string, TranslateDataFileList> = Object.create(null)

  /** Active loading promises for deduplication / Активные промисы загрузки для дедупликации */
  protected promises: Record<string, TranslatePromiseItem> = Object.create(null)

  /** Counter for generating unique request identifiers / Счетчик для генерации уникальных идентификаторов запросов */
  protected id: number = 0

  /**
   * Creates an instance of the class.
   *
   * Создает экземпляр класса.
   * @param data list of files / список файлов
   * @param location location / местоположение
   * @param language language / язык
   */
  constructor(
    data?: TranslateDataFile,
    protected location: string | (() => string) = () => Geo.getLocation(),
    protected language: string | (() => string) = () => Geo.getLanguage()
  ) {
    if (data) {
      this.add(data)
    }
  }

  /**
   * Checks if there are files for the specified location or language.
   *
   * Проверяет, есть ли файлы для указанного местоположения или языка.
   * @param location location, current by default / регион, по умолчанию текущий
   * @param language language, current by default / язык, по умолчанию текущий
   * @returns true if matching file exists / true, если подходящий файл существует
   */
  isFile(
    location: string = this.getLocation(),
    language: string = this.getLanguage()
  ): boolean {
    return this.getIndex(location, language) !== undefined
  }

  /**
   * Returns the language.
   *
   * Возвращает язык.
   * @returns language / язык
   */
  getLanguage(): string {
    return executeFunction(this.language)
  }

  /**
   * Returns the location.
   *
   * Возвращает местоположение.
   * @returns location / местоположение
   */
  getLocation(): string {
    return executeFunction(this.location)
  }

  /**
   * Returns translations for a fixed location and language, preserving them across asynchronous loading.
   *
   * Возвращает переводы для заданных региона и языка, сохраняя их при асинхронной загрузке.
   * @param location location, current by default / регион, по умолчанию текущий
   * @param language language, current by default / язык, по умолчанию текущий
   * @returns promise with list of translations / промис со списком переводов
   */
  async getList(
    location: string = this.getLocation(),
    language: string = this.getLanguage()
  ): Promise<TranslateDataFileList | undefined> {
    const index = this.getIndex(location, language)

    if (index !== undefined) {
      return this.getByData(index)
        ?? await this.getByFile(index)
    }

    return undefined
  }

  /**
   * Adds a list of files with translations and clears stale cache for updated keys.
   *
   * Добавляет список файлов с переводами и очищает устаревший кэш для обновляемых ключей.
   * @param data list of files / список файлов
   */
  add(data: TranslateDataFile): void {
    forEach(data, (file, key) => {
      if (isFunction(file)) {
        this.files[key] = file
        delete this.data[key]
        delete this.promises[key]
      }
    })
  }

  /**
   * Resets the cache of loaded translation data and active promises.
   *
   * Сбрасывает кэш загруженных данных переводов и активные промисы.
   * @returns current instance / текущий экземпляр
   */
  reset(): this {
    this.data = Object.create(null)
    this.promises = Object.create(null)

    return this
  }

  /**
   * Returns a list of translations from the cache.
   *
   * Возвращает список переводов из кэша.
   * @param index file key / ключ файла
   * @returns list of translations or undefined / список переводов или undefined
   */
  protected getByData(index: string): TranslateDataFileList | undefined {
    if (index in this.data) {
      return this.data[index]
    }

    return undefined
  }

  /**
   * Returns a list of translations from the file, deduplicating concurrent loads and caching the result.
   *
   * Возвращает список переводов из файла, дедуплицируя параллельные загрузки и кэшируя результат.
   * @param index file key / ключ файла
   * @returns promise with list of translations or undefined / промис со списком переводов или undefined
   */
  protected async getByFile(index: string): Promise<TranslateDataFileList | undefined> {
    if (!(index in this.files)) {
      return undefined
    }

    if (index in this.promises) {
      return this.promises[index].promise
    }

    const id = ++this.id
    const promise = (async () => {
      try {
        const data = await executeFunction(this.files[index])

        if (
          data
          && this.promises[index]?.id === id
        ) {
          this.data[index] = data
        }

        return data
      } catch (error) {
        ErrorCenter.on({
          group: 'translate',
          code: 'error',
          details: error
        })

        return undefined
      }
    })().finally(() => {
      if (this.promises[index]?.id === id) {
        delete this.promises[index]
      }
    })

    this.promises[index] = {
      id,
      promise
    }

    return promise
  }

  /**
   * Returns the file key for the specified location and language.
   *
   * Возвращает ключ файла для указанных региона и языка.
   * @param location location, current by default / регион, по умолчанию текущий
   * @param language language, current by default / язык, по умолчанию текущий
   * @returns file key or undefined / ключ файла или undefined
   */
  protected getIndex(
    location: string = this.getLocation(),
    language: string = this.getLanguage()
  ): string | undefined {
    if (location in this.files) {
      return location
    }

    if (language in this.files) {
      return language
    }

    if (TRANSLATE_GLOBAL_PREFIX in this.files) {
      return TRANSLATE_GLOBAL_PREFIX
    }

    return undefined
  }
}
