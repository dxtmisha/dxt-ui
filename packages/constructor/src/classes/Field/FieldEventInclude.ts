import { watch } from 'vue'
import { type ConstrEmit, DesignLifecycleAbstract } from '@dxtmisha/functional'

import type { FieldChangeInclude } from './FieldChangeInclude'
import type { FieldFormInclude } from './FieldFormInclude'
import type { FieldValidationInclude } from './FieldValidationInclude'
import type { FieldValueInclude } from './FieldValueInclude'
import { ModelInclude } from '../ModelInclude'

import type { FieldAllProps, FieldBasicEmits, FieldValidationItem } from '../../types/fieldTypes'

/**
 * Class for working with events.
 *
 * Класс для работы с событиями.
 */
export class FieldEventInclude extends DesignLifecycleAbstract {
  /** Model inclusion instance / Экземпляр включения модели */
  protected readonly model: ModelInclude

  /** Cleanup function for value watcher / Функция очистки наблюдателя значения */
  protected watchStop?: () => void

  /**
   * Constructor
   *
   * Конструктор
   * @param props input data / входные данные
   * @param change function returning object for working with data change label / функция, возвращающая объект для работы с меткой об изменении данных
   * @param value function returning object for working with values / функция, возвращающая объект для работы со значениями
   * @param validation function returning object for working with validity / функция, возвращающая объект для работы с валидностью
   * @param emits the function is called when an event is triggered / функция вызывается, когда срабатывает событие
   * @param form function returning object for working with the form element context / функция, возвращающая объект для работы с контекстом элемента формы
   */
  constructor(
    protected readonly props: FieldAllProps,
    protected readonly change: () => FieldChangeInclude,
    protected readonly value: () => FieldValueInclude,
    protected readonly validation?: () => FieldValidationInclude,
    protected readonly emits?: ConstrEmit<FieldBasicEmits>,
    protected readonly form?: () => FieldFormInclude
  ) {
    super()

    this.model = new ModelInclude(
      'value',
      this.emits
    )
  }

  /** Callback after component mounting / Обработчик после монтирования компонента */
  override readonly onMounted = (): void => {
    this.watchStop?.()
    this.watchStop = watch(this.value().itemByFull, (newValue) => {
      this.model.emit(newValue)
    })
  }

  /** Callback after component unmounting / Обработчик после размонтирования компонента */
  override readonly onUnmounted = (): void => {
    this.watchStop?.()
    this.watchStop = undefined
  }

  /**
   * Checks if it is possible to change the value.
   *
   * Проверяет, возможно ли изменение значения.
   * @returns true if possible / true, если возможно
   */
  isEnabled(): boolean {
    return this.props.disabled !== true
      && this.props.readonly !== true
  }

  /**
   * Events for focus.
   *
   * События для фокуса.
   * @param event focus event / событие фокуса
   */
  readonly onFocus = (event?: FocusEvent): void => {
    if (this.props.disabled !== true) {
      this.emits?.('focus', event as FocusEvent)
    }
  }

  /**
   * Events for losing focus.
   *
   * События для потери фокуса.
   * @param event blur event / событие потери фокуса
   */
  readonly onBlur = (event?: FocusEvent): void => {
    if (this.isEnabled()) {
      this.change().to()
    }

    if (this.props.disabled !== true) {
      this.emits?.('blur', event as FocusEvent)
    }
  }

  /**
   * Call of data change event.
   *
   * Вызов события изменения данных.
   * @param event event object / объект события
   * @param data object with data / объект с данными
   */
  readonly onInput = (
    event: InputEvent,
    data?: Record<string, any>
  ): void => {
    if (this.isEnabled()) {
      const newData = data ?? event

      if (
        this.change().is()
        || data
      ) {
        this.validation?.().set(newData)
      }

      this.value().setByEvent(newData)
      this.on(event)
    }
  }

  /**
   * Triggering the change event after losing focus.
   *
   * Вызов события изменения после потери фокуса.
   * @param event event object / объект события
   */
  readonly onChange = (event?: InputEvent | Event): void => {
    if (this.isEnabled()) {
      if (event) {
        this.validation?.().set(event)
      }

      this.change().to()
      this.on(event, 'change')
    }
  }

  /**
   * Triggering the event for select change.
   *
   * Вызов события для изменения селект.
   * @param event event object / объект события
   * @param data object with data / объект с данными
   */
  readonly onSelect = (
    event: Event,
    data?: Record<string, any>
  ): void => {
    if (this.isEnabled()) {
      this.value().setByEvent(data ?? event)
      this.onAndChange(event)
    }
  }

  /**
   * Triggering the event for changes in the checkbox.
   *
   * Вызов события для изменения в checkbox.
   * @param event event object / объект события
   */
  readonly onChecked = (event: Event): void => {
    if (this.isEnabled()) {
      this.value().setByChecked(event)
      this.onAndChange(event)
    }
  }

  /**
   * Triggering the event for changes in the radio.
   *
   * Вызов события для изменения в radio.
   * @param event event object / объект события
   */
  readonly onRadio = (event: Event): void => {
    if (this.isEnabled()) {
      this.value().setByRadio(event)
      this.onAndChange(event)
    }
  }

  /**
   * Triggering the event to delete all values.
   *
   * Вызов события для удаления всех значений.
   * @param event event object / объект события
   */
  readonly onClear = (event?: MouseEvent): void => {
    if (this.isEnabled()) {
      this.value().clear()
      this.onAndChange(event)
    }
  }

  /**
   * Triggering the event to set a specific value.
   *
   * Вызов события для установки конкретного значения.
   * @param value new value / новое значение
   */
  readonly onValue = (value?: any): void => {
    if (this.isEnabled()) {
      if (value !== undefined) {
        this.value().set(value)
      }

      this.onAndChange()
    }
  }

  /**
   * Triggering the event.
   *
   * Вызов события.
   * @param event event object / объект события
   * @param type event type / тип события
   * @returns current instance / текущий экземпляр
   */
  readonly on = <E>(
    event?: E,
    type: string & keyof FieldBasicEmits = 'input'
  ): this => {
    if (type === 'input') {
      this.emitModel()
    }

    const data = {
      ...this.getValidation(type),
      ...this.getData()
    }

    this.emits?.(type as 'input', event as Event, data)
    this.emits?.(`${type}Lite` as 'inputLite', data)

    if (this.props.name) {
      this.form?.().updateData(data, event as InputEvent)
    }

    return this
  }

  /**
   * Triggering the event and change event.
   *
   * Вызов события и события изменения.
   * @param event event object / объект события
   * @returns current instance / текущий экземпляр
   */
  readonly onAndChange = (event?: InputEvent | Event): this => {
    this.on(event)
      .onChange(event)

    return this
  }

  /**
   * Emits model update value on input events.
   *
   * Испускает обновление значения модели при событиях ввода.
   */
  protected emitModel(): void {
    this.model.emit(this.value().itemByFull.value)
  }

  /**
   * Checks whether additional data needs to be generated for the current event.
   *
   * Проверяет, надо ли генерировать дополнительные данные для текущего события.
   * @param type event type / тип события
   * @returns true if value is required / true, если значение требуется
   */
  protected isValue(
    type: string & keyof FieldBasicEmits
  ): boolean {
    return Boolean(type && ['input', 'change'].indexOf(type) >= 0)
  }

  /**
   * Returns input data.
   *
   * Возвращает данные об вводе.
   * @returns validation item data / данные элемента валидации
   */
  protected getData(): FieldValidationItem {
    const value = this.value()

    return {
      value: value.itemByFull.value,
      valueInput: value.item.value,
      detail: this.props.detail
    }
  }

  /**
   * Returns validity data.
   *
   * Возвращает данные валидности.
   * @param type event type / тип события
   * @returns validation item data / данные элемента валидации
   */
  protected getValidation(
    type: string & keyof FieldBasicEmits
  ): FieldValidationItem {
    if (this.isValue(type)) {
      if (this.validation) {
        return this.validation().item.value
      }

      return {
        group: 'check',
        value: this.value().item.value
      }
    }

    return {} as FieldValidationItem
  }
}
