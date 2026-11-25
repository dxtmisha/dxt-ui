// ai-none

import { type ConstrEmit } from '@dxtmisha/functional'

import type { InputFileDropzoneEmits } from './types'
import type { InputFileDropzoneProps } from './props'

/**
 * Class for processing uploaded files and triggering add events in InputFileDropzone.
 *
 * Класс для обработки загруженных файлов и вызова событий добавления в InputFileDropzone.
 */
export class InputFileDropzoneFiles {
  /**
   * Constructor.
   *
   * Конструктор.
   * @param props input data / входные данные
   * @param emits event callback function / функция вызова событий
   */
  constructor(
    protected readonly props: InputFileDropzoneProps,
    protected readonly emits?: ConstrEmit<InputFileDropzoneEmits>
  ) {
  }

  /**
   * Handles added files, filters by maxFileSize, and emits add and reject events.
   *
   * Обрабатывает добавленные файлы, фильтрует по maxFileSize и вызывает события add и reject.
   * @param files selected or dropped file list / список выбранных или перетащенных файлов
   * @returns valid files array / массив валидных файлов
   */
  setFiles(files?: FileList | File[]): File[] {
    if (!files || files.length === 0) {
      return []
    }

    const maxFileSize = this.props.maxFileSize
    const validFiles: File[] = []
    const rejectedFiles: File[] = []

    if (maxFileSize) {
      for (const file of Array.from(files)) {
        if (file.size <= maxFileSize) {
          validFiles.push(file)
        } else {
          rejectedFiles.push(file)
        }
      }
    } else {
      validFiles.push(...Array.from(files))
    }

    if (validFiles.length > 0) {
      this.emits?.('add', validFiles)
    }

    if (rejectedFiles.length > 0) {
      this.emits?.('reject', rejectedFiles)
    }

    return validFiles
  }
}
