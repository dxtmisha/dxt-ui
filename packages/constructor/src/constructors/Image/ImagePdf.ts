import { isString } from '@dxtmisha/functional'

import { ImageFile } from './ImageFile'

/** PDF toolbar parameters for the URL / Параметры панели инструментов PDF для URL */
const IMAGE_PDF_TOOL = '#toolbar=0&scrollbar=1'

/** Regular expression to check PDF extension / Регулярное выражение для проверки расширения PDF */
const REGEX_EXTENSION = /\.pdf$/i

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
   * Applications asynchronously read the contents of files (or raw data buffers) stored on the user's computer.
   *
   * Асинхронно читает содержимое файлов (или буферы данных), хранящиеся на компьютере пользователя.
   * @param file the Blob or File from which to read / Blob или File, которые следует прочитать
   * @returns loaded file content as a string / загруженное содержимое файла в виде строки
   */
  static async get(file: string | File): Promise<string> {
    if (isString(file)) {
      return `${file}${IMAGE_PDF_TOOL}`
    }

    if (this.isPdf(file)) {
      return `${(await ImageFile.getFileReader(file))}${IMAGE_PDF_TOOL}`
    }

    return ''
  }
}
