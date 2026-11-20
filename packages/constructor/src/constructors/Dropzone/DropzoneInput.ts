// ai-none

import { ref } from 'vue'
import type { ConstrEmit } from '@dxtmisha/functional'

import { DropzoneEvents } from './DropzoneEvents'
import { DropzoneFiles } from './DropzoneFiles'

import type { DropzoneEmits } from './types'
import type { DropzoneProps } from './props'

/**
 * Class for managing the file input element in Dropzone.
 *
 * Класс для управления элементом инпута файлов в Dropzone.
 */
export class DropzoneInput {
  /** Reference to the file input element / Ссылка на элемент выбора файла */
  readonly element = ref<HTMLInputElement | undefined>(undefined)

  /**
   * Constructor
   * @param props input data / входные данные
   * @param files file manager instance / экземпляр менеджера файлов
   * @param events events manager instance / экземпляр менеджера событий
   * @param emits event emitter / эмиттер событий
   */
  constructor(
    protected readonly props: DropzoneProps,
    protected readonly files: DropzoneFiles,
    protected readonly events?: DropzoneEvents,
    protected readonly emits?: ConstrEmit<DropzoneEmits>
  ) {
  }

  /**
   * Returns binding properties for the input element.
   *
   * Возвращает свойства привязки для элемента инпута.
   * @returns object with input binding attributes / объект с атрибутами привязки инпута
   */
  get binds(): Record<string, any> {
    return {
      ref: this.element,
      key: 'input',
      accept: this.props.accept,
      disabled: this.props.disabled || this.props.readonly,
      multiple: this.props.multiple,
      type: 'file',
      ...this.props.inputAttrs,
      ...this.events?.binds,
      onFocus: this.onFocus,
      onBlur: this.onBlur,
      onClick: this.clear,
      onChange: this.onChange
    }
  }

  /**
   * Triggers click on the file input element to open the file selection dialog.
   *
   * Вызывает клик по элементу выбора файла для открытия диалога выбора.
   */
  readonly open = (): void => {
    if (
      !this.props.disabled
      && !this.props.readonly
    ) {
      this.element.value?.click()
    }
  }

  /**
   * Clears the file input element.
   *
   * Очищает элемент ввода файла.
   */
  readonly clear = (): void => {
    if (this.element.value) {
      this.element.value.value = ''
      this.element.value.files = null
    }
  }

  /**
   * Resets file input value on focus and emits focus event.
   *
   * Сбрасывает значение инпута при фокусе и эмитит событие focus.
   * @param event focus event / событие фокуса
   */
  protected readonly onFocus = (event: FocusEvent): void => {
    this.clear()

    if (this.props.disabled !== true) {
      this.emits?.('focus', event)
    }
  }

  /**
   * File input blur event handler.
   *
   * Обработчик события потери фокуса инпута файлов.
   * @param event blur event / событие потери фокуса
   */
  protected readonly onBlur = (event: FocusEvent): void => {
    if (this.props.disabled !== true) {
      this.emits?.('blur', event)
    }
  }

  /**
   * File input change event handler.
   *
   * Обработчик события изменения инпута файлов.
   * @param event input change event / событие изменения инпута
   */
  protected readonly onChange = (event: Event): void => {
    const target = event.target as HTMLInputElement
    this.files.set(target.files || undefined, event)
  }
}
