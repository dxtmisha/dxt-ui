import { isDomRuntime, isString } from '@dxtmisha/functional'

import { ImageFile } from './ImageFile'

const IMAGE_PDF_TOOL = '#toolbar=0&scrollbar=1'

/**
 * Class for working with PDF files.
 *
 * Класс для работы с PDF-файлами.
 */
export class ImagePdf {
  /**
   * Checks if the file is an image.
   *
   * Проверяет, является ли файл PDF.
   * @param file verified file/ проверяемый файл
   */
  static isPdf(file?: string | File): boolean {
    if (!file) {
      return false
    }

    if (isString(file)) {
      return Boolean(/\.pdf$/i.test(file))
    }

    return isDomRuntime()
      && file instanceof File
      && Boolean(/\/pdf$/i.test(file?.type ?? ''))
  }

  /**
   * Applications asynchronously read the contents of files (or raw data buffers) stored on the user's computer.
   *
   * Асинхронно читать содержимое файлов (или буферы данных), хранящиеся на компьютере пользователя.
   * @param file the Blob or File from which to read/ Blob или File которые следует прочитать
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
