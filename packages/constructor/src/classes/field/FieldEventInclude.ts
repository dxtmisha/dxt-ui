import { type ConstrEmit } from '@dxtmisha/functional'

import { ModelInclude } from '../ModelInclude'
import { FieldChangeInclude } from './FieldChangeInclude'
import { FieldValueInclude } from './FieldValueInclude'
import { FieldValidationInclude } from './FieldValidationInclude'

import type { FieldAllProps, FieldBasicEmits, FieldValidationItem } from '../../types/fieldTypes'

/**
 * Class for working with events.
 *
 * Класс для работы с событиями.
 */
export class FieldEventInclude {
  protected readonly model: ModelInclude

  /**
   * Constructor
   * @param props input data/ входные данные
   * @param change object for working with data change label/ объект для работы с меткой об изменении данных
   * @param value object for working with values/ объект для работы со значениями
   * @param validation object for working with validity/ объект для работы с валидностью
   * @param emits the function is called when an event is triggered/ функция вызывается, когда срабатывает событие
   */

  constructor(
    protected readonly props: FieldAllProps,
    protected readonly change: FieldChangeInclude,
    protected readonly value: FieldValueInclude,
    protected readonly validation?: FieldValidationInclude,
    protected readonly emits?: ConstrEmit<FieldBasicEmits>
  ) {
    this.model = new ModelInclude(
      'value',
      this.emits,
      this.value.itemByFull
    )
  }

  /**
   * Events for losing focus.
   *
   * События для потери фокуса.
   */
  readonly onBlur = () => {
    this.change.to()
  }

  /**
   * Call of data change event.
   *
   * Вызов события изменения данных.
   * @param event event object/ объект события
   * @param data object with data/ объект с данными
   */
  readonly onInput = (
    event: InputEvent,
    data?: Record<string, any>
  ): void => {
    if (this.isEnabled()) {
      const newData = data ?? event

      if (
        this.change.is()
        || data
      ) {
        this.validation?.set(newData)
      }

      this.value.setByEvent(newData)
      this.on(event)
    }
  }

  /**
   * Triggering the change event after losing focus.
   *
   * Вызов события изменения после потери фокуса.
   * @param event event object/ объект события
   */
  readonly onChange = (event?: InputEvent | Event): void => {
    if (this.isEnabled()) {
      if (event) {
        this.validation?.set(event)
      }

      this.change.to()
      this.on(event, 'change')
    }
  }

  /**
   * Triggering the event for select change.
   *
   * Вызов события для изменения селект.
   * @param event event object/ объект события
   * @param data object with data/ объект с данными
   */
  readonly onSelect = (
    event: Event,
    data?: Record<string, any>
  ): void => {
    if (this.isEnabled()) {
      this.value.setByEvent(data ?? event)
      this.onAndChange(event)
    }
  }

  /**
   * Triggering the event for changes in the checkbox.
   *
   * Вызов события для изменения в checkbox.
   * @param event event object/ объект события
   */
  readonly onChecked = (event: Event): void => {
    if (this.isEnabled()) {
      this.value.setByChecked(event)
      this.onAndChange(event)
    }
  }

  /**
   * Triggering the event for changes in the radio.
   *
   * Вызов события для изменения в radio.
   * @param event event object/ объект события
   */
  readonly onRadio = (event: Event): void => {
    if (this.isEnabled()) {
      this.value.setByRadio(event)
      this.onAndChange(event)
    }
  }

  /**
   * Triggering the event to delete all values.<br>
   * Вызов события для удаления всех значений.
   * @param event event object/ объект события
   */
  readonly onClear = (event: MouseEvent): void => {
    if (this.isEnabled()) {
      this.value.clear()
      this.onAndChange(event)
    }
  }

  /**
   * Triggering the event.
   *
   * Вызов события.
   * @param event event object/ объект события
   * @param type event type/ тип события
   */
  readonly on = <E>(
    event?: E,
    type: string & keyof FieldBasicEmits = 'input'
  ): this => {
    if (type === 'input') {
      this.model.emit(this.value.itemByFull.value)
    }

    this.emits?.(type as 'input', event as Event, {
      ...this.getValidation(type),
      ...this.getData()
    })

    return this
  }

  /**
   * Checks whether additional data needs to be generated for the current event.
   *
   * Проверяет, надо ли генерировать дополнительные данные для текущего события.
   * @param type event type/ тип события
   */
  protected isValue(
    type: string & keyof FieldBasicEmits
  ): boolean {
    return Boolean(type && ['input', 'change'].indexOf(type) >= 0)
  }

  /**
   * Checks if it is possible to change the value.
   *
   * Проверяет, возможно ли изменение значения.
   */
  protected isEnabled(): boolean {
    return this.props.disabled !== true
  }

  /**
   * Returns input data.
   *
   * Возвращает данные об вводе.
   */
  protected getData(): FieldValidationItem {
    return {
      value: this.value.itemByFull.value,
      valueInput: this.value.item.value,
      detail: this.props.detail
    }
  }

  /**
   * Returns validity data.
   *
   * Возвращает данные валидности.
   * @param type event type/ тип события
   */
  protected getValidation(
    type: string & keyof FieldBasicEmits
  ): FieldValidationItem {
    if (this.isValue(type)) {
      if (this.validation) {
        return this.validation.item.value
      }

      return {
        group: 'check',
        value: this.value.item.value
      }
    }

    return {} as FieldValidationItem
  }

  /**
   * Triggering the event and change event.
   *
   * Вызов события и события изменения.
   * @param event event object/ объект события
   */
  protected onAndChange(event?: InputEvent | Event): this {
    this.on(event)
      .onChange(event)

    return this
  }
}
