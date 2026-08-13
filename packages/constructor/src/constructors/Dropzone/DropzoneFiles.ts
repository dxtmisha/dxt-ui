import { ref } from 'vue'
import { type ConstrEmit } from '@dxtmisha/functional'

import type { DropzoneEmits } from './types'
import type { DropzoneProps } from './props'

/**
 * Class for managing files in Dropzone.
 *
 * Класс для управления файлами в Dropzone.
 */
export class DropzoneFiles {
  /** Reactive ref storing selected or dropped files / Реактивная ссылка для хранения выбранных или сброшенных файлов */
  readonly item = ref<FileList | undefined>(undefined)

  /**
   * Constructor
   * @param props input data / входные данные
   * @param emits event callback function / функция вызова событий
   */
  constructor(
    protected readonly props: DropzoneProps,
    protected readonly emits?: ConstrEmit<DropzoneEmits>
  ) {
  }

  /**
   * Returns current file list.
   *
   * Возвращает текущий список файлов.
   * @returns file list or undefined / список файлов или undefined
   */
  get(): FileList | undefined {
    return this.item.value
  }

  /**
   * Sets new file list and triggers drop event.
   *
   * Устанавливает новый список файлов и вызывает событие drop.
   * @param files file list / список файлов
   */
  set(files?: FileList): void {
    this.item.value = files
    this.emit()
  }

  /**
   * Clears selected files.
   *
   * Очищает выбранные файлы.
   */
  clear(): void {
    this.set(undefined)
  }

  /**
   * Emits the drop event with current files.
   *
   * Отправляет событие drop с текущими файлами.
   */
  protected emit(): void {
    this.emits?.('drop', { files: this.item.value })
  }
}
