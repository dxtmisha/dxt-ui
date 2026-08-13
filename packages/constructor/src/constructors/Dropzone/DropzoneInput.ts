import { ref } from 'vue'

import { DropzoneFiles } from './DropzoneFiles'

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
   */
  constructor(
    protected readonly props: DropzoneProps,
    protected readonly files: DropzoneFiles
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
      disabled: this.props.disabled,
      multiple: this.props.multiple,
      type: 'file',
      onChange: this.onChange,
      onClick: this.onFocus
    }
  }

  /**
   * Triggers click on the file input element to open the file selection dialog.
   *
   * Вызывает клик по элементу выбора файла для открытия диалога выбора.
   */
  readonly open = (): void => {
    this.element.value?.click()
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
   * Resets file input value on click/focus so re-selecting the same file triggers change event.
   *
   * Сбрасывает значение инпута при фокусе/клике, чтобы повторный выбор того же файла вызывал событие change.
   */
  protected readonly onFocus = (): void => {
    this.clear()
  }

  /**
   * File input change event handler.
   *
   * Обработчик события изменения инпута файлов.
   * @param event input change event / событие изменения инпута
   */
  protected readonly onChange = (event: Event): void => {
    const target = event.target as HTMLInputElement
    this.files.set(target.files || undefined)
  }
}
