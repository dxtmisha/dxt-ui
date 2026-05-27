import type { ImageItem } from './basicTypes'
import { isString, resizeImageByMax } from '@dxtmisha/functional'

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
   *
   * Создает изображение на основе файла или ссылки.
   * @param src file or link / файл или ссылка
   * @returns image item, source string, or undefined / элемент изображения, строка источника или undefined
   */
  static createImage(src: string | File): Promise<ImageItem | string | undefined> {
    return new Promise((resolve) => {
      if (src) {
        const image = new Image()

        image.onerror = () => resolve(undefined)
        image.onload = () => {
          resolve({
            image,
            src: this.getSRC(image, src),
            width: image.naturalWidth,
            height: image.naturalHeight
          })
        }

        (async () => {
          image.src = src instanceof File ? await this.getFileResult(src) : src
        })()
      } else {
        resolve(undefined)
      }
    })
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
   * Applications asynchronously read the contents of files (or raw data buffers) stored on the user's computer.
   *
   * Асинхронно читает содержимое файлов (или буферы данных), хранящиеся на компьютере пользователя.
   * @param file the Blob or File from which to read / Blob или File, которые следует прочитать
   * @returns loaded file content as a string / загруженное содержимое файла в виде строки
   */
  static getFileResult(file: File): Promise<string> {
    return new Promise((resolve) => {
      if (this.isImage(file)) {
        this.getFileReader(file).then(result => resolve(result))
      } else {
        resolve('')
      }
    })
  }

  /**
   * Applications asynchronously read the contents of files (or raw data buffers) stored on the user's computer.
   *
   * Асинхронно читает содержимое файлов (или буферы данных), хранящиеся на компьютере пользователя.
   * @param file the Blob or File from which to read / Blob или File, которые следует прочитать
   * @returns loaded file content as a string / загруженное содержимое файла в виде строки
   */
  static getFileReader(file: File): Promise<string> {
    return new Promise((resolve) => {
      const reader = new FileReader()
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
}
