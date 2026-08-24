import { ref } from 'vue'
import { type ConstrEmit } from '@dxtmisha/functional'

import type { FieldValidationItem } from '../../types/fieldTypes'
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
   * Sets new file list and triggers change and input events.
   *
   * Устанавливает новый список файлов и вызывает события изменения и ввода.
   * @param files file list / список файлов
   * @param event DOM event / DOM-событие
   */
  set(files?: FileList, event?: Event): void {
    this.item.value = files
    this.emit(event)
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
   * Emits change and input events with current files.
   *
   * Отправляет события change и input с текущими файлами.
   * @param event DOM event / DOM-событие
   */
  protected emit(event?: Event): void {
    const data = this.getData()

    if (event) {
      this.emits?.('input', event, data)
      this.emits?.('change', event, data)
    }

    this.emits?.('inputLite', data)
    this.emits?.('changeLite', data)
  }

  /**
   * Generates validation data item for event emission.
   *
   * Генерирует элемент данных валидации для отправки событий.
   * @returns validation item data / данные элемента валидации
   */
  protected getData(): FieldValidationItem<FileList | undefined> {
    const isFull = Boolean(this.item.value && this.item.value.length > 0)

    return {
      status: true,
      isFull,
      value: this.item.value,
      valueInput: this.item.value
    }
  }
}
