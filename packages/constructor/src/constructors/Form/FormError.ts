import { onMounted, ref, watch } from 'vue'

import type { FormElements } from './FormElements'
import type { FormElementsNative } from './FormElementsNative'

import type { FormPropsBasic } from './props'

/**
 * Class for managing and storing form error states.
 * Tracks overall error status and field error details based on active elements mode.
 *
 * Класс для управления и хранения состояний ошибок формы.
 * Отслеживает общий статус ошибки и детали ошибок полей в зависимости от режима элементов.
 */
export class FormError {
  /** Reactive overall error state flag / Реактивный флаг общего состояния ошибки */
  readonly error = ref<boolean>(false)

  /** Reactive map of error messages by field name / Реактивная карта сообщений об ошибках по именам полей */
  readonly errors = ref<Record<string, string>>({})

  /**
   * Constructor for FormError.
   *
   * Конструктор для FormError.
   * @param props incoming form properties / входящие свойства формы
   * @param elements object for managing custom child elements / объект для управления кастомными дочерними элементами
   * @param native object for working with native form elements / объект для работы с нативными элементами формы
   */
  constructor(
    protected readonly props: FormPropsBasic,
    protected readonly elements: FormElements,
    protected readonly native: FormElementsNative
  ) {
    onMounted(() => {
      watch(
        [
          () => this.props.native,
          this.elements.item,
          this.native.item
        ],
        () => {
          this.update()
        },
        { deep: true, immediate: true }
      )
    })
  }

  /**
   * Checks if form has an error.
   *
   * Проверяет, есть ли ошибка в форме.
   * @returns true if has error / true, если есть ошибка
   */
  isError(): boolean {
    return this.props.native
      ? this.native.isError()
      : this.elements.isError()
  }

  /**
   * Checks validity of the form /
   * Проверяет валидность формы
   * @returns validity status / статус валидности
   */
  readonly checkValidity = (): boolean => {
    return !this.isError()
  }

  /**
   * Returns boolean error status.
   *
   * Возвращает булев статус ошибки.
   * @returns true if form has an error / true, если в форме есть ошибка
   */
  get(): boolean {
    return this.error.value
  }

  /**
   * Returns map of errors by field name.
   *
   * Возвращает карту ошибок по именам полей.
   * @returns record of field errors / объект ошибок полей
   */
  getErrors(): Record<string, string> {
    return this.errors.value
  }

  /**
   * Updates error status and errors map based on active elements (native or custom).
   *
   * Обновляет статус ошибки и карту ошибок на основе активных элементов (нативных или кастомных).
   * @returns this instance / текущий экземпляр
   */
  readonly update = (): this => {
    this.error.value = this.isError()
    this.errors.value = this.props.native
      ? this.getErrorsNative()
      : this.getErrorsElements()

    return this
  }

  /**
   * Resets error status and errors map.
   *
   * Сбрасывает статус ошибки и карту ошибок.
   * @returns this instance / текущий экземпляр
   */
  readonly reset = (): this => {
    this.error.value = false
    this.errors.value = {}
    return this
  }

  /**
   * Returns map of errors collected from custom child elements.
   *
   * Возвращает карту ошибок, собранных из кастомных дочерних элементов.
   * @returns record of field errors / объект ошибок полей
   */
  protected getErrorsElements(): Record<string, string> {
    const errors: Record<string, string> = {}

    this.elements.item.value.forEach((element) => {
      const isInvalid = (typeof element.checkValidity === 'function' && !element.checkValidity())
        || element.data?.status === false

      if (isInvalid) {
        const message = element.getValidationMessage?.()
          || element.data?.validationMessage
          || element.data?.validityMessage
          || ''

        errors[element.name] = message
      }
    })

    return errors
  }

  /**
   * Returns map of errors collected from native form elements.
   *
   * Возвращает карту ошибок, собранных из нативных элементов формы.
   * @returns record of field errors / объект ошибок полей
   */
  protected getErrorsNative(): Record<string, string> {
    const errors: Record<string, string> = {}

    Object.entries(this.native.get()).forEach(([name, item]) => {
      if (item.status === false) {
        errors[name] = item.validationMessage ?? item.validityMessage ?? ''
      }
    })

    return errors
  }
}
