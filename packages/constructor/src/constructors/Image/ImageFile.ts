// ai-none

import { ErrorCenter, isString, resizeImageByMax } from '@dxtmisha/functional'

import type { ImageItem } from './basicTypes'
import { CONSTRUCTOR_ERROR_GROUP } from '../../types/errorTypes'

/** Maximum size allowed without conversion / Максимальный размер, допустимый без преобразования */
export const MAX_SIZE: number = 1280

/** Regular expression to check if the file is an image / Регулярное выражение для проверки, является ли файл изображением */
const REGEX_IMAGE = /^image\//

/**
 * Class for working with uploaded images.
 * It provides methods for checking file types, creating image objects from
 * files or URLs, and performing size optimization.
 *
 * Класс для работы с загруженными изображениями.
 * Предоставляет методы для проверки типов файлов, создания объектов изображений
 * из файлов или URL, а также оптимизации их размера.
 */
export class ImageFile {
  /**
   * Checks if the file is an image.
   *
   * Проверяет, является ли файл изображением.
   * @param file verified file / проверяемый файл
   * @returns true if the file is an image / true, если файл является изображением
   */
  static isImage(file: File): boolean {
    return REGEX_IMAGE.test(file.type)
  }

  /**
   * Creates an image based on a file or a link.
   * Returns undefined for empty sources or image loading errors.
   * Rejects the promise if source preparation or image processing throws.
   *
   * Создает изображение на основе файла или ссылки.
   * Возвращает undefined для пустых источников или ошибок загрузки изображения.
   * Отклоняет промис, если подготовка источника или обработка изображения выбрасывает исключение.
   * @param src file or link / файл или ссылка
   * @returns image item, source string, or undefined / элемент изображения, строка источника или undefined
   */
  static async createImage(src: string | File): Promise<ImageItem | string | undefined> {
    if (!src) {
      return undefined
    }

    try {
      const source = src instanceof File ? await this.getImageDataUrl(src) : src

      if (!source) {
        return undefined
      }

      return await new Promise((resolve, reject) => {
        const image = new Image()

        image.onerror = () => resolve(undefined)
        image.onload = () => {
          try {
            resolve({
              image,
              src: this.getSRC(image, src),
              width: image.naturalWidth,
              height: image.naturalHeight
            })
          } catch (error) {
            reject(error)
          }
        }

        image.src = source
      })
    } catch (error) {
      this.onError(error)
      throw error
    }
  }

  /**
   * Returns a link to the image.
   *
   * Возвращает ссылку на изображение.
   * @param src file or link / файл или ссылка
   * @returns link to the image / ссылка на изображение
   */
  static async getPath(src: string | File): Promise<string> {
    const item = await this.createImage(src)
    return isString(item) ? item : (item?.src ?? '')
  }

  /**
   * Asynchronously reads the image file and returns its content as a Data URL (Base64).
   * Returns an empty string if the file is not an image.
   *
   * Асинхронно читает файл изображения и возвращает его содержимое в виде Data URL (Base64).
   * Возвращает пустую строку, если файл не является изображением.
   * @param file image file to read / файл изображения для чтения
   * @returns Data URL string or empty string / строка Data URL или пустая строка
   */
  static async getImageDataUrl(file: File): Promise<string> {
    if (this.isImage(file)) {
      return await this.getFileReader(file)
    }

    return ''
  }

  /**
   * Asynchronously reads the contents of any file (or Blob) as a Data URL using FileReader.
   * In case of read error or abort, registers an error in ErrorCenter and returns an empty string.
   *
   * Асинхронно читает содержимое любого файла (или Blob) в формате Data URL с помощью FileReader.
   * В случае ошибки чтения или отмены регистрирует ошибку в ErrorCenter и возвращает пустую строку.
   * @param file the Blob or File from which to read / Blob или File для чтения
   * @returns loaded file content as a Data URL string / загруженное содержимое файла в виде строки Data URL
   */
  static getFileReader(file: File): Promise<string> {
    return new Promise((resolve) => {
      const reader = new FileReader()

      reader.onerror = () => resolve(this.onError(reader.error))
      reader.onabort = () => resolve(this.onError(reader.error))
      reader.onload = () => resolve(typeof reader.result === 'string' ? reader.result : '')
      reader.readAsDataURL(file)
    })
  }

  /**
   * Image size adaptation. Checks if the image size is larger than maxSize, reduces it to maxSize.
   *
   * Адаптация размера изображения. Проверяет, если размер изображения больше maxSize, уменьшает его до maxSize.
   * @param image image element / элемент изображения
   * @param src link to image / ссылка на изображение
   * @param maxSize maximum allowable image size / максимальный допустимый размер изображения
   * @returns adapted image source / адаптированный источник изображения
   */
  protected static getSRC(
    image: HTMLImageElement,
    src?: string | File,
    maxSize = MAX_SIZE as number
  ): string {
    if (
      (
        src instanceof File
        || src === undefined
      )
      && (
        image.naturalHeight > maxSize
        || image.naturalWidth > maxSize
      )
    ) {
      return resizeImageByMax(image, maxSize) ?? ''
    } else {
      return image.src
    }
  }

  /**
   * Registers an error in ErrorCenter and returns an empty string.
   *
   * Регистрирует ошибку в ErrorCenter и возвращает пустую строку.
   * @param details error details / детали ошибки
   * @returns empty string / пустая строка
   */
  protected static onError(details?: unknown): string {
    ErrorCenter.on({
      group: CONSTRUCTOR_ERROR_GROUP,
      code: 'image-file',
      details
    })

    return ''
  }
}
