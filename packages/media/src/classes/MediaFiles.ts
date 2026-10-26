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
 *
 * Класс для работы с конфигурациями метаданных файлов и валидацией путей.
 */
export class MediaFiles {
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
    return Boolean(this.getByMime(mime))
  }

  /**
   * Returns a file metadata item by its code or extension, or the default neutral item if not found.
   *
   * Возвращает элемент метаданных файла по его коду или расширению, либо нейтральный элемент по умолчанию, если не найдено.
   * @param code file code or extension / код файла или расширение
   * @returns file metadata item or undefined / элемент метаданных файла или undefined
   */
  static get(code: string): MediaFileItem {
    return MediaFileIcon.toItem(this.find(MediaFileIcon.toCode(code)))
  }

  /**
   * Returns a category neutral file item by category or file code/extension.
   *
   * Возвращает нейтральный элемент файла категории по категории или коду/расширению файла.
   * @param category category, category value, or file code/extension / категория, значение категории или код/расширение файла
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
   * @returns default neutral file item or undefined / нейтральный элемент файла по умолчанию или undefined
   */
  static getNeutral(): MediaFileItem | undefined {
    return MediaFileIcon.toItem(this.findNeutral())
  }

  /**
   * Finds a file metadata item by its code or extension, or returns the default neutral item.
   *
   * Находит элемент метаданных файла по коду или расширению, либо возвращает нейтральный элемент по умолчанию.
   * @param code normalized file code or extension / нормализованный код файла или расширение
   * @returns file metadata item or undefined / элемент метаданных файла или undefined
   */
  protected static find(code: string): MediaFileItem {
    return this.findByCode(code)
      ?? this.findByMime(code)
      ?? this.findNeutral()
  }

  /**
   * Finds a category neutral file item by category or file code/extension.
   *
   * Находит нейтральный элемент файла категории по категории или коду/расширению файла.
   * @param category normalized category or file code / нормализованная категория или код файла
   * @returns category neutral file item or undefined / нейтральный элемент файла категории или undefined
   */
  protected static findByCategory(category: string): MediaFileItem | undefined {
    const mime = category.endsWith('/*') ? category : `${category}/*`

    const categoryItem = fileList.find(
      element => element.group === MediaFileGroup.category
        && (
          element.category === category
          || element.code === category
          || element.mime === mime
        )
    )

    if (categoryItem) {
      return categoryItem
    }

    if (
      category === MediaFileCategory.system
      || category === 'file'
    ) {
      return this.findNeutral()
    }

    return undefined
  }

  /**
   * Finds a file metadata item by its code or extension.
   *
   * Находит элемент метаданных файла по его коду или расширению.
   * @param code normalized file code or extension / нормализованный код файла или расширение
   * @returns file metadata item or undefined / элемент метаданных файла или undefined
   */
  protected static findByCode(code: string): MediaFileItem | undefined {
    return fileList.find(element => element.code === code)
  }

  /**
   * Finds a file metadata item by its MIME type.
   *
   * Находит элемент метаданных файла по его MIME-типу.
   * @param mime normalized MIME type / нормализованный MIME-тип
   * @returns file metadata item or undefined / элемент метаданных файла или undefined
   */
  protected static findByMime(mime: string): MediaFileItem | undefined {
    return fileList.find(element => element.mime === mime)
  }

  /**
   * Finds the default neutral file item.
   *
   * Находит нейтральный элемент файла по умолчанию.
   * @returns default neutral file item or undefined / нейтральный элемент файла по умолчанию или undefined
   */
  protected static findNeutral(): MediaFileItem {
    return fileList.find(element => element.group === MediaFileGroup.neutral)!
  }
}
