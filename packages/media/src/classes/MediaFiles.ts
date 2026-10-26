import { MediaFileIcon } from './MediaFileIcon'

import {
  MediaFileCategory,
  MediaFileGroup,
  type MediaFileCategoryOrCode,
  type MediaFileItem,
  type MediaFileList
} from '../types/fileTypes'

import { fileList } from '../media/fileList'

/**
 * Class for working with file metadata configurations and path validation.
 * Provides centralized catalog lookups by code, extension, or MIME type with lazy Map indexing,
 * resolves category-level neutral icons, detects file system paths and remote URLs,
 * and seamlessly enriches metadata with custom icons from MediaFileIcon.
 *
 * Класс для работы с конфигурациями метаданных файлов и валидацией путей.
 * Обеспечивает централизованный поиск по каталогу по коду, расширению или MIME-типу с ленивым Map-индексированием,
 * определяет нейтральные иконки категорий, валидирует пути файловой системы и удаленные URL,
 * а также бесшовно обогащает метаданные кастомными иконками из MediaFileIcon.
 */
export class MediaFiles {
  /** Cache index of category neutral items / Индексный кэш нейтральных элементов категорий */
  protected static categoryMap?: Map<string, Readonly<MediaFileItem>>

  /** Cache index of file items by code / Индексный кэш элементов файлов по коду */
  protected static codeMap?: Map<string, Readonly<MediaFileItem>>

  /** Cache index of file items by extension / Индексный кэш элементов файлов по расширению */
  protected static extensionMap?: Map<string, Readonly<MediaFileItem>>

  /** Cache index of file items by MIME type / Индексный кэш элементов файлов по MIME-типу */
  protected static mimeMap?: Map<string, Readonly<MediaFileItem>>

  /** Default neutral file item / Нейтральный элемент файла по умолчанию */
  protected static neutralItem?: Readonly<MediaFileItem>

  /**
   * Protected constructor.
   *
   * Защищенный конструктор.
   */
  protected constructor() {}

  /**
   * Checks whether the specified path is a link or path to a file.
   *
   * Проверяет, является ли указанный путь ссылкой или путем к файлу.
   * @param path file link or path / ссылка или путь к файлу
   * @returns true if path or link / true, если путь или ссылка
   */
  static isLink(path: string): boolean {
    if (
      typeof path !== 'string'
      || !path
    ) {
      return false
    }

    return (
      path.includes('/')
      || path.includes('\\')
    ) && !this.isMime(path)
  }

  /**
   * Checks whether the specified value is a MIME type.
   *
   * Проверяет, является ли указанное значение MIME-типом.
   * @param mime MIME type to check / проверяемый MIME-тип
   * @returns true if MIME type / true, если MIME-тип
   */
  static isMime(mime: string): boolean {
    return Boolean(this.findByMime(MediaFileIcon.toCode(mime)))
  }

  /**
   * Returns a file metadata item by its code or extension, or the default neutral item if not found.
   *
   * Возвращает элемент метаданных файла по его коду или расширению, либо нейтральный элемент по умолчанию, если не найдено.
   * @param code file code or extension / код файла или расширение
   * @returns file metadata item / элемент метаданных файла
   */
  static get(code: string): MediaFileItem {
    return MediaFileIcon.toItem(this.find(MediaFileIcon.toCode(code)))
  }

  /**
   * Returns a category neutral file item by file category.
   *
   * Возвращает нейтральный элемент файла категории по категории файла.
   * @param category file category or category value / категория файла или значение категории
   * @returns category neutral file item or undefined / нейтральный элемент файла категории или undefined
   */
  static getByCategory(category: MediaFileCategoryOrCode): MediaFileItem | undefined {
    return MediaFileIcon.toItem(this.findByCategory(MediaFileIcon.toCode(category)))
  }

  /**
   * Returns a file metadata item by its MIME type.
   *
   * Возвращает элемент метаданных файла по его MIME-типу.
   * @param mime MIME type / MIME-тип
   * @returns file metadata item or undefined / элемент метаданных файла или undefined
   */
  static getByMime(mime: string): MediaFileItem | undefined {
    return MediaFileIcon.toItem(this.findByMime(MediaFileIcon.toCode(mime)))
  }

  /**
   * Returns the list of all file metadata configurations.
   *
   * Возвращает список всех конфигураций метаданных файлов.
   * @returns list of file items / список элементов файлов
   */
  static getList(): MediaFileList {
    return fileList.map(item => MediaFileIcon.toItem(item))
  }

  /**
   * Returns the default neutral file item.
   *
   * Возвращает нейтральный элемент файла по умолчанию.
   * @returns default neutral file item / нейтральный элемент файла по умолчанию
   */
  static getNeutral(): MediaFileItem {
    return MediaFileIcon.toItem(this.findNeutral())
  }

  /**
   * Finds a file metadata item by its code or extension, or returns the default neutral item.
   *
   * Находит элемент метаданных файла по коду или расширению, либо возвращает нейтральный элемент по умолчанию.
   * @param code normalized file code or extension / нормализованный код файла или расширение
   * @returns file metadata item / элемент метаданных файла
   */
  protected static find(code: string): MediaFileItem {
    if (!code) {
      return this.findNeutral()
    }

    return this.findByCode(code)
      ?? this.findByExtension(code)
      ?? this.findByMime(code)
      ?? this.findNeutral()
  }

  /**
   * Finds a category neutral file item by file category.
   *
   * Находит нейтральный элемент файла категории по категории файла.
   * @param category normalized file category / нормализованная категория файла
   * @returns category neutral file item or undefined / нейтральный элемент файла категории или undefined
   */
  protected static findByCategory(category: string): MediaFileItem | undefined {
    if (!category) {
      return undefined
    }

    if (
      category === MediaFileCategory.system
      || category === 'file'
    ) {
      return this.findNeutral()
    }

    return this.initCategory().get(this.toCategory(category))
  }

  /**
   * Finds a file metadata item by its code.
   *
   * Находит элемент метаданных файла по его коду.
   * @param code normalized file code / нормализованный код файла
   * @returns file metadata item or undefined / элемент метаданных файла или undefined
   */
  protected static findByCode(code: string): MediaFileItem | undefined {
    if (!code) {
      return undefined
    }

    if (!this.codeMap) {
      this.codeMap = new Map()

      for (const element of fileList) {
        if (!this.codeMap.has(element.code)) {
          this.codeMap.set(element.code, element)
        }
      }
    }

    return this.codeMap.get(code)
  }

  /**
   * Finds a file metadata item by its extension.
   *
   * Находит элемент метаданных файла по его расширению.
   * @param extension normalized file extension / нормализованное расширение файла
   * @returns file metadata item or undefined / элемент метаданных файла или undefined
   */
  protected static findByExtension(extension: string): MediaFileItem | undefined {
    if (!extension) {
      return undefined
    }

    if (!this.extensionMap) {
      this.extensionMap = new Map()

      for (const element of fileList) {
        if (element.extensions) {
          for (const itemExtension of element.extensions) {
            if (!this.extensionMap.has(itemExtension)) {
              this.extensionMap.set(itemExtension, element)
            }
          }
        }
      }
    }

    return this.extensionMap.get(extension)
  }

  /**
   * Finds a file metadata item by its MIME type.
   *
   * Находит элемент метаданных файла по его MIME-типу.
   * @param mime normalized MIME type / нормализованный MIME-тип
   * @returns file metadata item or undefined / элемент метаданных файла или undefined
   */
  protected static findByMime(mime: string): MediaFileItem | undefined {
    if (!mime) {
      return undefined
    }

    if (!this.mimeMap) {
      this.mimeMap = new Map()

      for (const element of fileList) {
        if (
          element.mime
          && !this.mimeMap.has(element.mime)
        ) {
          this.mimeMap.set(element.mime, element)
        }
      }
    }

    return this.mimeMap.get(mime)
  }

  /**
   * Finds the default neutral file item.
   *
   * Находит нейтральный элемент файла по умолчанию.
   * @returns default neutral file item / нейтральный элемент файла по умолчанию
   */
  protected static findNeutral(): MediaFileItem {
    if (!this.neutralItem) {
      this.neutralItem = fileList.find(
        element => element.group === MediaFileGroup.neutral
      )!
    }

    return this.neutralItem
  }

  /**
   * Initializes and returns the category index map.
   *
   * Инициализирует и возвращает индексную карту категорий.
   * @returns category index map / индексная карта категорий
   */
  protected static initCategory(): Map<string, Readonly<MediaFileItem>> {
    if (!this.categoryMap) {
      this.categoryMap = new Map()

      for (const element of fileList) {
        if (element.group === MediaFileGroup.category) {
          if (
            element.category
            && !this.categoryMap.has(element.category)
          ) {
            this.categoryMap.set(element.category, element)
          }

          if (element.mime) {
            const mime = this.toCategory(element.mime)

            if (!this.categoryMap.has(mime)) {
              this.categoryMap.set(mime, element)
            }
          }
        }
      }
    }

    return this.categoryMap
  }

  /**
   * Converts a category name or MIME type to a normalized category name by removing wildcard suffixes.
   *
   * Преобразует имя категории или MIME-тип в нормализованное имя категории, удаляя суффиксы маски.
   * @param category category or MIME type string / строка категории или MIME-типа
   * @returns normalized category name / нормализованное имя категории
   */
  protected static toCategory(category: string): string {
    return category.endsWith('/*') ? category.slice(0, -2) : category
  }
}
