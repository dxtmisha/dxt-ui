// ai-none

import { isString, strSplit } from '@dxtmisha/functional'

import { ImageFile } from './ImageFile'

/** Regular expression to check PDF extension / Регулярное выражение для проверки расширения PDF */
const REGEX_EXTENSION = /^[^?#]*\.pdf(?:[?#]|$)/i

/** Regular expression to check PDF mime type / Регулярное выражение для проверки mime-типа PDF */
const REGEX_TYPE = /\/pdf$/i

/**
 * Class for working with PDF files.
 * It provides methods for identifying PDF files and generating
 * source URLs with customized view parameters.
 *
 * Класс для работы с PDF-файлами.
 * Предоставляет методы для идентификации PDF-файлов и генерации
 * исходных URL-адресов с настраиваемыми параметрами просмотра.
 */
export class ImagePdf {
  /**
   * Checks if the file is a PDF.
   *
   * Проверяет, является ли файл PDF.
   * @param file verified file / проверяемый файл
   * @returns returns true if the file is a PDF / возвращает true, если файл является PDF
   */
  static isPdf(file?: string | File): boolean {
    if (!file) {
      return false
    }

    if (isString(file)) {
      return Boolean(REGEX_EXTENSION.test(file))
    }

    return file instanceof File
      && Boolean(REGEX_TYPE.test(file?.type ?? ''))
  }

  /**
   * Returns a PDF source with viewer parameters while preserving its query and fragment options.
   *
   * Возвращает источник PDF с параметрами просмотра, сохраняя его query и параметры fragment.
   * @param file PDF URL or file to read / URL PDF или файл для чтения
   * @returns PDF source with viewer parameters or an empty string / источник PDF с параметрами просмотра или пустая строка
   */
  static async get(file: string | File): Promise<string> {
    if (!file) {
      return ''
    }

    if (isString(file)) {
      return this.getSource(file)
    }

    if (this.isPdf(file)) {
      const source = await ImageFile.getFileReader(file)

      return source ? this.getSource(source) : ''
    }

    return ''
  }

  /**
   * Merges viewer parameters into a single fragment without changing the resource URL.
   *
   * Объединяет параметры просмотра в одном fragment, не изменяя URL ресурса.
   * @param source PDF source URL / URL источника PDF
   * @returns PDF source with merged viewer parameters / источник PDF с объединёнными параметрами просмотра
   */
  protected static getSource(source: string): string {
    const [sourceUrl, fragment] = strSplit(source, '#', 2)
    const parameters = new URLSearchParams(fragment)

    parameters.set('toolbar', '0')
    parameters.set('scrollbar', '1')

    return `${sourceUrl}#${parameters.toString()}`
  }
}
