import type { FieldEventInclude } from '../../classes/Field/FieldEventInclude'
import type { SliderValueType } from '../Slider'
import type { SliderFieldProps } from './props'
import type { SliderFieldValue } from './SliderFieldValue'

/**
 * Class for handling events of SliderField.
 *
 * Класс для обработки событий SliderField.
 */
export class SliderFieldEvent {
  /**
   * Constructor
   * @param props input properties / входящие свойства
   * @param event field event include instance / экземпляр событий поля
   * @param valueItem slider field value instance / экземпляр значения поля слайдера
   */
  constructor(
    protected readonly props: SliderFieldProps,
    protected readonly event: FieldEventInclude,
    protected readonly valueItem: SliderFieldValue
  ) { }

  /**
   * Event handler when slider value is selected or dragged.
   *
   * Обработчик события при выборе или перетаскивании значения слайдера.
   * @param value selected detail object or value / выбранный объект деталей или значение
   */
  readonly onSliderInput = (value: SliderValueType): void => {
    this.event.onInput(
      new InputEvent('input'),
      { value }
    )
  }

  /**
   * Event handler when slider value change is committed.
   *
   * Обработчик события при подтверждении изменения значения слайдера.
   */
  readonly onSliderChange = (): void => {
    this.event.onChange(new InputEvent('change'))
  }

  /**
   * Focus handler for numeric input fields.
   *
   * Обработчик фокуса для числовых полей ввода.
   * @param event focus event / событие фокуса
   */
  readonly onFocus = (event: FocusEvent): void => {
    const target = event.target as HTMLInputElement

    switch (target.dataset.type) {
      case 'min':
        target.value = String(this.valueItem.min)
        break
      case 'max':
        target.value = String(this.valueItem.max)
        break
    }
  }

  /**
   * Blur handler for numeric input fields.
   *
   * Обработчик потери фокуса для числовых полей ввода.
   * @param event blur event / событие потери фокуса
   */
  readonly onBlur = (event: FocusEvent): void => {
    const target = event.target as HTMLInputElement

    target.value = ''
  }

  /**
   * Input handler for numeric input fields.
   *
   * Обработчик ввода для числовых полей ввода.
   * @param event input event / событие ввода
   */
  readonly onInput = (event: Event): void => {
    const target = event.target as HTMLInputElement
    const valueFocus = target.valueAsNumber || 0

    if (this.props.multiple) {
      const type = target.dataset.type
      const min = type === 'min' ? valueFocus : this.valueItem.min
      const max = type === 'max' ? valueFocus : this.valueItem.max

      this.valueItem.set([min, max])
    } else {
      this.valueItem.set(valueFocus)
    }
  }

  /**
   * Input attributes and event handlers for numeric input fields.
   *
   * Атрибуты и обработчики событий ввода для числовых полей ввода.
   * @returns input attributes and events object / объект атрибутов и событий ввода
   */
  get inputBinds(): Record<string, any> {
    return {
      type: 'number',
      min: this.props.min,
      max: this.props.max,
      step: this.props.step,
      onBlur: this.onBlur,
      onFocus: this.onFocus,
      onInput: this.onInput
    }
  }
}
