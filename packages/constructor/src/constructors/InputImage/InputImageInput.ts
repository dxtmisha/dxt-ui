import { ref } from 'vue'

import { InputImageFiles } from './InputImageFiles'
import type { InputImageProps } from './props'

/**
 * Class for managing the hidden file input element in InputImage.
 *
 * Класс для управления скрытым элементом инпута файлов в InputImage.
 */
export class InputImageInput {
  /** Reference to the file input element / Ссылка на элемент выбора файла */
  readonly element = ref<HTMLInputElement | undefined>(undefined)

  /**
   * Constructor.
   *
   * Конструктор.
   * @param props input data / входные данные
   * @param files file manager instance / экземпляр менеджера файлов
   */
  constructor(
    protected readonly props: InputImageProps,
    protected readonly files: InputImageFiles
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
      accept: this.props.accept ?? 'image/*',
      disabled: this.props.disabled || this.props.readonly,
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
    if (!this.props.disabled && !this.props.readonly) {
      this.element.value?.click()
    }
  }

  /**
   * Clears the file input element value.
   *
   * Очищает значение элемента ввода файла.
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
    const files = target.files

    if (files && files.length > 0) {
      this.files.setFile(files[0])
    }
  }
}
