// ai-none

import { mergeProps, ref } from 'vue'
import { isFunction, type ConstrBind, type ConstrEmit } from '@dxtmisha/functional'

import type { DropzoneEvents } from './DropzoneEvents'
import type { DropzoneFiles } from './DropzoneFiles'
import type { DropzoneProps } from './props'
import type { DropzoneEmits } from './types'

/**
 * Class for managing the native file input element, its bindings, and DOM interactions in Dropzone.
 *
 * Класс для управления нативным элементом ввода файлов, его привязками и DOM-взаимодействиями в Dropzone.
 */
export class DropzoneInput {
  /**
   * Constructor for DropzoneInput.
   *
   * Конструктор для DropzoneInput.
   * @param props input properties / входные свойства
   * @param events getter returning drag-and-drop events manager / функция, возвращающая менеджер событий перетаскивания
   * @param files getter returning file manager / функция, возвращающая менеджер файлов
   * @param emits event emitter function / функция испускания событий
   */
  constructor(
    protected readonly props: Readonly<DropzoneProps>,
    protected readonly events: () => DropzoneEvents,
    protected readonly files: () => DropzoneFiles,
    protected readonly emits?: ConstrEmit<DropzoneEmits>
  ) {
  }

  /** Reference to the file input element / Ссылка на элемент выбора файла */
  readonly element = ref<HTMLInputElement | undefined>(undefined)

  /**
   * Returns binding properties for the file input element.
   *
   * Возвращает свойства привязки для элемента ввода файлов.
   * @returns object with input binding attributes / объект с атрибутами привязки инпута
   */
  get binds(): ConstrBind {
    return mergeProps(
      {
        ref: this.element,
        key: 'input',
        accept: this.props.accept,
        disabled: this.props.disabled || this.props.readonly,
        multiple: this.props.multiple,
        type: 'file'
      },
      this.props.inputAttrs ?? {},
      this.events().binds,
      {
        onFocus: this.onFocus,
        onBlur: this.onBlur,
        onClick: this.clear,
        onChange: this.onChange
      }
    )
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
   * File input blur event handler.
   *
   * Обработчик события потери фокуса инпута файлов.
   * @param event blur event / событие потери фокуса
   */
  protected readonly onBlur = (event: FocusEvent): void => {
    if (!this.props.disabled && isFunction(this.emits)) {
      this.emits('blur', event)
    }
  }

  /**
   * File input change event handler.
   *
   * Обработчик события изменения инпута файлов.
   * @param event input change event / событие изменения инпута
   */
  protected readonly onChange = (event: Event): void => {
    const target = event.target as HTMLInputElement | null

    this.files().set(target?.files || undefined, event)
  }

  /**
   * Resets file input value on focus and emits focus event.
   *
   * Сбрасывает значение инпута при фокусе и эмитит событие focus.
   * @param event focus event / событие фокуса
   */
  protected readonly onFocus = (event: FocusEvent): void => {
    this.clear()

    if (!this.props.disabled && isFunction(this.emits)) {
      this.emits('focus', event)
    }
  }
}
