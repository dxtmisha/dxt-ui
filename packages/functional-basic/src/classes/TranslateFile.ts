import { forEach } from '../functions/forEach'
import { executeFunction } from '../functions/executeFunction'
import { isFunction } from '../functions/isFunction'

import { Geo } from './Geo'

import { TRANSLATE_GLOBAL_PREFIX, type TranslateDataFile, type TranslateDataFileList } from '../types/translateTypes'

/**
 * Class for working with translation files.
 *
 * Класс для работы с файлами перевода.
 */
export class TranslateFile {
  /** List of files with translations/ Список файлов с переводами */
  protected files: TranslateDataFile = {}

  /** Data from files/ Данные из файлов */
  protected data: Record<string, TranslateDataFileList> = {}

  /**
   * Creates an instance of the class.
   *
   * Создает экземпляр класса.
   * @param data list of files/ список файлов
   * @param language language/ язык
   * @param location location/ местоположение
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
   * Checks if there are files for the current location or language.
   *
   * Проверяет, есть ли файлы для текущего местоположения или языка.
   * @returns boolean / логическое значение
   */
  isFile(): boolean {
    return Object.keys(this.files).length > 0
      && this.getIndex() !== undefined
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
   * Returns the language.
   *
   * Возвращает язык.
   * @returns language / язык
   */
  getLanguage(): string {
    return executeFunction(this.language)
  }

  /**
   * Returns a list of translations from the file for the current location.
   *
   * Возвращает список переводов из файла для текущего местоположения.
   * @returns promise with list of translations / промис со списком переводов
   */
  async getList(): Promise<TranslateDataFileList | undefined> {
    const index = this.getIndex()

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
   * @param data list of files/ список файлов
   */
  add(data: TranslateDataFile): void {
    forEach(data, (file, key) => {
      if (isFunction(file)) {
        this.files[key] = file
      }
    })
  }

  /**
   * Returns the key for the current location from the list of files.
   *
   * Возвращает ключ для текущего местоположения из списка файлов.
   * @returns file key or undefined / ключ файла или undefined
   */
  protected getIndex(): string | undefined {
    const location = this.getLocation()

    if (location in this.files) {
      return location
    }

    const language = this.getLanguage()

    if (language in this.files) {
      return language
    }

    if (TRANSLATE_GLOBAL_PREFIX in this.files) {
      return TRANSLATE_GLOBAL_PREFIX
    }

    return undefined
  }

  /**
   * Returns a list of translations from the cache.
   *
   * Возвращает список переводов из кэша.
   * @param index file key/ ключ файла
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
   * @param index file key/ ключ файла
   * @returns promise with list of translations or undefined / промис со списком переводов или undefined
   */
  protected async getByFile(index: string): Promise<TranslateDataFileList | undefined> {
    if (index in this.files) {
      const data = await executeFunction(this.files[index])

      if (data) {
        this.data[index] = data
      }

      return data
    }

    return undefined
  }
}
