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
   * Handles added files, filters by maxFileSize, and emits add event.
   *
   * Обрабатывает добавленные файлы, фильтрует по maxFileSize и вызывает событие add.
   * @param files selected or dropped file list / список выбранных или перетащенных файлов
   * @returns valid files array / массив валидных файлов
   */
  setFiles(files?: FileList | File[]): File[] {
    if (!files || files.length === 0) {
      return []
    }

    let validFiles = Array.from(files)

    if (this.props.maxFileSize) {
      validFiles = validFiles.filter(file => file.size <= (this.props.maxFileSize as number))
    }

    if (validFiles.length > 0) {
      this.emits?.('add', validFiles)
    }

    return validFiles
  }
}
