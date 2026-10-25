// ai-none

import { forEach } from '../functions/forEach'
import { executeFunction } from '../functions/executeFunction'
import { isFunction } from '../functions/isFunction'

import { ErrorCenter } from './ErrorCenter'
import { Geo } from './Geo'

import { TRANSLATE_GLOBAL_PREFIX, type TranslateDataFile, type TranslateDataFileList } from '../types/translateTypes'

/**
 * Class for working with translation files.
 *
 * Класс для работы с файлами перевода.
 */
export class TranslateFile {
  /** List of files with translations / Список файлов с переводами */
  protected files: TranslateDataFile = {}

  /** Data from files / Данные из файлов */
  protected data: Record<string, TranslateDataFileList> = {}

  /**
   * Creates an instance of the class.
   *
   * Создает экземпляр класса.
   * @param data list of files / список файлов
   * @param language language / язык
   * @param location location / местоположение
   */
  constructor(
    data?: TranslateDataFile,
    protected language: string | (() => string) = () => Geo.getLanguage(),
    protected location: string | (() => string) = () => Geo.getLocation()
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
   * @returns boolean / логическое значение
   */
  isFile(location: string = this.getLocation(), language: string = this.getLanguage()): boolean {
    return Object.keys(this.files).length > 0
      && this.getIndex(location, language) !== undefined
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

    if (index) {
      return this.getByData(index)
        ?? await this.getByFile(index)
    }

    return undefined
  }

  /**
   * Adds a list of files with translations.
   *
   * Добавляет список файлов с переводами.
   * @param data list of files / список файлов
   */
  add(data: TranslateDataFile): void {
    forEach(data, (file, key) => {
      if (isFunction(file)) {
        this.files[key] = file
      }
    })
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
   * Returns a list of translations from the file and caches the result.
   *
   * Возвращает список переводов из файла и кэширует результат.
   * @param index file key / ключ файла
   * @returns promise with list of translations or undefined / промис со списком переводов или undefined
   */
  protected async getByFile(index: string): Promise<TranslateDataFileList | undefined> {
    if (index in this.files) {
      try {
        const data = await executeFunction(this.files[index])

        if (data) {
          this.data[index] = data
        }

        return data
      } catch (error) {
        ErrorCenter.on({
          group: 'translate',
          code: 'error',
          details: error
        })
      }
    }

    return undefined
  }

  /**
   * Returns the file key for the specified location and language.
   *
   * Возвращает ключ файла для указанных региона и языка.
   * @param location location, current by default / регион, по умолчанию текущий
   * @param language language, current by default / язык, по умолчанию текущий
   * @returns file key or undefined / ключ файла или undefined
   */
  protected getIndex(location: string = this.getLocation(), language: string = this.getLanguage()): string | undefined {
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
