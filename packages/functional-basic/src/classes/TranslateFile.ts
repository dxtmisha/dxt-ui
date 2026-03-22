import { forEach } from '../functions/forEach'
import { isFunction } from '../functions/isFunction'
import { Geo } from './Geo'

import { TRANSLATE_GLOBAL_PREFIX, type TranslateDataFile, type TranslateDataFileList } from '../types/translateTypes'
import { executeFunction } from '../functions/executeFunction.ts'

/**
 * Class for working with translation files.
 *
 * Класс для работы с файлами перевода.
 */
export class TranslateFile {
  /** List of files with translations/ Список файлов с переводами */
  protected static files: TranslateDataFile = {}

  /** Data from files/ Данные из файлов */
  protected static data: Record<string, TranslateDataFileList> = {}

  /**
   * Checks if there are files for the current location.
   *
   * Проверяет, есть ли файлы для текущего местоположения.
   */
  static isFile(): boolean {
    return Object.keys(this.files).length > 0
      && this.getIndex() !== undefined
  }

  /**
   * Returns a list of translations from the file for the current location.
   *
   * Возвращает список переводов из файла для текущего местоположения.
   */
  static async getList(): Promise<TranslateDataFileList | undefined> {
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
  static add(data: TranslateDataFile): void {
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
   */
  protected static getIndex(): string | undefined {
    if (Geo.getLocation() in this.files) {
      return Geo.getLocation()
    }

    if (Geo.getLanguage() in this.files) {
      return Geo.getLanguage()
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
   */
  protected static getByData(index: string): TranslateDataFileList | undefined {
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
   */
  protected static async getByFile(index: string): Promise<TranslateDataFileList | undefined> {
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
