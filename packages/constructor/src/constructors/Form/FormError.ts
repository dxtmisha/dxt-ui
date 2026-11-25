// ai-none

import { ref, watch, type WatchStopHandle } from 'vue'
import { DesignLifecycleAbstract } from '@dxtmisha/functional'
import { isFunction } from '@dxtmisha/functional-basic'

import type { FormElements } from './FormElements'
import type { FormElementsNative } from './FormElementsNative'
import type { FormPropsBasic } from './props'

/**
 * Class for managing and storing form error states.
 * Tracks overall error status and field error details based on active elements mode (native or custom).
 *
 * Класс для управления и хранения состояний ошибок формы.
 * Отслеживает общий статус ошибки и детали ошибок полей в зависимости от активного режима элементов (нативного или кастомного).
 */
export class FormError extends DesignLifecycleAbstract {
  /** Reactive overall error state flag / Реактивный флаг общего состояния ошибки */
  readonly error = ref<boolean>(false)

  /** Reactive map of error messages by field name / Реактивная карта сообщений об ошибках по именам полей */
  readonly errors = ref<Record<string, string>>({})

  /** Cleanup handle for reactive elements watcher / Обработчик остановки реактивного наблюдателя элементов */
  protected stopWatch?: WatchStopHandle

  /**
   * Constructor for FormError.
   *
   * Конструктор для FormError.
   * @param props incoming form properties / входящие свойства формы
   * @param elements lazy getter for custom child elements manager / ленивый геттер менеджера кастомных дочерних элементов
   * @param native lazy getter for native form elements manager / ленивый геттер менеджера нативных элементов формы
   */
  constructor(
    protected readonly props: Readonly<FormPropsBasic>,
    protected readonly elements: () => FormElements,
    protected readonly native: () => FormElementsNative
  ) {
    super()
  }

  /**
   * Checks if the form has any validation error.
   *
   * Проверяет, есть ли в форме ошибка валидации.
   * @returns true if form has an error / true, если в форме есть ошибка
   */
  isError(): boolean {
    return this.props.native
      ? this.native().isError()
      : this.elements().isError()
  }

  /**
   * Returns cached boolean error status.
   *
   * Возвращает сохранённый булев статус ошибки.
   * @returns true if form has an error / true, если в форме есть ошибка
   */
  get(): boolean {
    return this.error.value
  }

  /**
   * Returns cached map of error messages by field name.
   *
   * Возвращает сохранённую карту сообщений об ошибках по именам полей.
   * @returns record of field errors / объект ошибок полей
   */
  getErrors(): Record<string, string> {
    return this.errors.value
  }

  /**
   * Updates error status and errors map based on active elements (native or custom).
   *
   * Обновляет статус ошибки и карту ошибок на основе активных элементов (нативных или кастомных).
   * @returns current instance / текущий экземпляр
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
   * @returns current instance / текущий экземпляр
   */
  readonly reset = (): this => {
    this.error.value = false
    this.errors.value = {}
    return this
  }

  /**
   * Checks validity of the form.
   *
   * Проверяет валидность формы.
   * @returns validity status / статус валидности
   */
  readonly checkValidity = (): boolean => {
    return !this.isError()
  }

  /**
   * Synchronizes initial error state and starts watching active element lists on mount.
   *
   * Синхронизирует начальное состояние ошибок и запускает наблюдение за активными списками элементов при монтировании.
   */
  override readonly onMounted = (): void => {
    this.update()

    this.stopWatch?.()
    this.stopWatch = watch(
      [
        () => this.props.native,
        () => this.props.native
          ? this.native().item.value
          : this.elements().item.value
      ],
      () => {
        this.update()
      },
      { deep: true }
    )
  }

  /**
   * Stops watching active element lists on unmount.
   *
   * Останавливает наблюдение за активными списками элементов при размонтировании.
   */
  override readonly onUnmounted = (): void => {
    this.stopWatch?.()
    this.stopWatch = undefined
  }

  /**
   * Returns map of errors collected from custom child elements.
   *
   * Возвращает карту ошибок, собранных из кастомных дочерних элементов.
   * @returns record of field errors / объект ошибок полей
   */
  protected getErrorsElements(): Record<string, string> {
    const errors: Record<string, string> = {}

    for (const element of this.elements().item.value) {
      const isInvalid = (isFunction(element.checkValidity) && !element.checkValidity())
        || element.data?.status === false

      if (isInvalid) {
        const message = element.getValidationMessage?.()
          || element.data?.validationMessage
          || element.data?.validityMessage
          || ''

        errors[element.name] = message
      }
    }

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

    for (const [name, item] of Object.entries(this.native().get())) {
      if (item.status === false) {
        errors[name] = item.validationMessage ?? item.validityMessage ?? ''
      }
    }

    return errors
  }
}
