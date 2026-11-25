// ai-none

import { shallowRef } from 'vue'
import { isFunction, type ConstrEmit } from '@dxtmisha/functional'

import type { ModelInclude } from '../../classes/ModelInclude'
import type { FieldValidationItem } from '../../types/fieldTypes'
import type { DropzoneEmits } from './types'

/**
 * Class for managing selected or dropped files and emitting file change events in Dropzone.
 *
 * Класс для управления выбранными или сброшенными файлами и отправки событий изменения файлов в Dropzone.
 */
export class DropzoneFiles {
  /**
   * Constructor for DropzoneFiles.
   *
   * Конструктор для DropzoneFiles.
   * @param model getter returning model synchronization controller / функция, возвращающая контроллер синхронизации модели
   * @param emits event callback function / функция вызова событий
   */
  constructor(
    protected readonly model?: () => ModelInclude<FileList | undefined>,
    protected readonly emits?: ConstrEmit<DropzoneEmits>
  ) {
  }

  /** Reactive shallow ref storing selected or dropped files / Реактивная поверхностная ссылка для хранения выбранных или сброшенных файлов */
  readonly item = shallowRef<FileList | undefined>(undefined)

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
   * Sets new file list and triggers change, input, and model update events.
   *
   * Устанавливает новый список файлов и вызывает события изменения, ввода и обновления модели.
   * @param files file list / список файлов
   * @param event DOM event / DOM-событие
   */
  set(files?: FileList, event?: Event): void {
    const isChanged = this.item.value !== files

    this.item.value = files
    this.emit(event)

    if (isChanged) {
      this.model?.().emit(files)
    }
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

  /**
   * Emits change and input events with current files.
   *
   * Отправляет события change и input с текущими файлами.
   * @param event DOM event / DOM-событие
   */
  protected emit(event?: Event): void {
    if (isFunction(this.emits)) {
      const data = this.getData()

      if (event) {
        this.emits('input', event, data)
        this.emits('change', event, data)
      }

      this.emits('inputLite', data)
      this.emits('changeLite', data)
    }
  }
}
