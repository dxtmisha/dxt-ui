import { MediaFileIcon } from './MediaFileIcon'

import {
  MediaFileGroup,
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
   * Checks whether the specified path is a link or path to a file.
   *
   * Проверяет, является ли указанный путь ссылкой или путем к файлу.
   * @param path file link or path / ссылка или путь к файлу
   * @returns true if path or link / true, если путь или ссылка
   */
  static isLink(path: string): boolean {
    return path.includes('/')
      || path.includes('\\')
      || path.startsWith('http://')
      || path.startsWith('https://')
  }

  /**
   * Returns a file metadata item by its code or extension, or the default neutral item if not found.
   *
   * Возвращает элемент метаданных файла по его коду или расширению, либо нейтральный элемент по умолчанию, если не найдено.
   * @param code file code or extension / код файла или расширение
   * @returns file metadata item or undefined / элемент метаданных файла или undefined
   */
  static get(code: string): MediaFileItem | undefined {
    const itemCode = MediaFileIcon.toCode(code)
    const item = this.find(itemCode)

    return MediaFileIcon.toItem(item)
  }

  /**
   * Returns the list of all file metadata configurations.
   *
   * Возвращает список всех конфигураций метаданных файлов.
   * @returns list of file items / список элементов файлов
   */
  static getList(): MediaFileList {
    return fileList
  }

  /**
   * Finds a file metadata item by its code or extension, or returns the default neutral item.
   *
   * Находит элемент метаданных файла по коду или расширению, либо возвращает нейтральный элемент по умолчанию.
   * @param code file code or extension / код файла или расширение
   * @returns file metadata item or undefined / элемент метаданных файла или undefined
   */
  protected static find(code: string): MediaFileItem | undefined {
    const itemCode = MediaFileIcon.toCode(code)

    return fileList.find(element => element.code === itemCode)
      ?? fileList.find(element => element.group === MediaFileGroup.neutral)
  }
}
