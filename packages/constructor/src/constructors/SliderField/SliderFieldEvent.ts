// ai-none

import type { ConstrBind } from '@dxtmisha/functional'

import type { FieldEventInclude } from '../../classes/Field/FieldEventInclude'
import type { SliderValueType } from '../Slider'
import type { SliderFieldProps } from './props'
import type { SliderFieldValue } from './SliderFieldValue'

/**
 * Class for handling events of SliderField.
 * Coordinates slider input/change callbacks and numeric input focus, blur, and value updates.
 *
 * Класс для обработки событий SliderField.
 * Координирует коллбэки ввода/изменения слайдера и обработку фокуса, потери фокуса и ввода числовых полей.
 */
export class SliderFieldEvent {
  /**
   * Constructor.
   *
   * Конструктор.
   * @param props input properties / входящие свойства
   * @param event getter returning field event include instance / функция, возвращающая экземпляр событий поля
   * @param valueItem getter returning slider field value instance / функция, возвращающая экземпляр значения поля слайдера
   */
  constructor(
    protected readonly props: Readonly<SliderFieldProps>,
    protected readonly event: () => FieldEventInclude,
    protected readonly valueItem: () => SliderFieldValue
  ) { }

  /**
   * Input attributes and event handlers for numeric input fields.
   *
   * Атрибуты и обработчики событий ввода для числовых полей ввода.
   * @returns input attributes and events object / объект атрибутов и событий ввода
   */
  get inputBinds(): ConstrBind {
    return {
      type: 'number',
      min: this.props.min,
      max: this.props.max,
      step: this.props.step,
      disabled: this.props.disabled,
      readonly: this.props.readonly,
      onBlur: this.onBlur,
      onChange: this.onChange,
      onFocus: this.onFocus,
      onInput: this.onInput
    }
  }

  /**
   * Blur handler for numeric input fields.
   *
   * Обработчик потери фокуса для числовых полей ввода.
   * @param event blur event / событие потери фокуса
   */
  readonly onBlur = (event: FocusEvent): void => {
    const target = event.target as HTMLInputElement | null

    if (target) {
      target.value = ''
    }

    this.event().onBlur(event)
  }

  /**
   * Change handler for numeric input fields.
   *
   * Обработчик подтверждения изменения значения для числовых полей ввода.
   * @param event change event / событие изменения
   */
  readonly onChange = (event: Event): void => {
    if (
      this.props.disabled
      || this.props.readonly
    ) {
      return
    }

    this.event().onChange(event)
  }

  /**
   * Focus handler for numeric input fields.
   *
   * Обработчик фокуса для числовых полей ввода.
   * @param event focus event / событие фокуса
   */
  readonly onFocus = (event: FocusEvent): void => {
    const target = event.target as HTMLInputElement | null

    if (target) {
      switch (target.dataset?.type) {
        case 'min':
          target.value = String(this.valueItem().min)
          break
        case 'max':
          target.value = String(this.valueItem().max)
          break
      }
    }

    this.event().onFocus(event)
  }

  /**
   * Input handler for numeric input fields.
   *
   * Обработчик ввода для числовых полей ввода.
   * @param event input event / событие ввода
   */
  readonly onInput = (event: Event): void => {
    if (
      this.props.disabled
      || this.props.readonly
    ) {
      return
    }

    const target = event.target as HTMLInputElement | null

    if (!target) {
      return
    }

    const valueFocus = Number.isFinite(target.valueAsNumber) ? target.valueAsNumber : 0
    const valueItem = this.valueItem()
    const nextValue: SliderValueType = this.props.multiple
      ? [
          target.dataset?.type === 'min' ? valueFocus : valueItem.min,
          target.dataset?.type === 'max' ? valueFocus : valueItem.max
        ]
      : valueFocus

    valueItem.set(nextValue)
    this.event().onInput(
      event as InputEvent,
      { value: nextValue }
    )
  }

  /**
   * Event handler when slider value change is committed.
   *
   * Обработчик события при подтверждении изменения значения слайдера.
   */
  readonly onSliderChange = (): void => {
    this.event().onChange(new InputEvent('change'))
  }

  /**
   * Event handler when slider value is selected or dragged.
   *
   * Обработчик события при выборе или перетаскивании значения слайдера.
   * @param value selected detail object or value / выбранный объект деталей или значение
   */
  readonly onSliderInput = (value: SliderValueType): void => {
    this.event().onInput(
      new InputEvent('input'),
      { value }
    )
  }
}
