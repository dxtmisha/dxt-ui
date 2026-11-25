// ai-none

import type { ConstrEmit } from '@dxtmisha/functional'

import type { ModelInclude } from '../../classes/ModelInclude'
import type { FormElementsData, FormElementsValues } from './basicTypes'
import type { FormValue } from './FormValue'
import type { FormEmits } from './types'

/**
 * Class for handling Form events.
 * Coordinates input, change, reset, and submit handlers, synchronizing values with the model and emitting component events.
 *
 * Класс для обработки событий формы.
 * Координирует обработчики ввода, изменения, сброса и отправки, синхронизируя значения с моделью и испуская события компонента.
 */
export class FormEvent {
  /**
   * Constructor for FormEvent.
   *
   * Конструктор для FormEvent.
   * @param model lazy getter for model synchronization helper / ленивый геттер помощника синхронизации модели
   * @param value lazy getter for form values manager / ленивый геттер менеджера значений формы
   * @param emits function called when an event is triggered / функция, вызываемая при срабатывании события
   */
  constructor(
    protected readonly model: () => ModelInclude<FormElementsValues>,
    protected readonly value: () => FormValue,
    protected readonly emits?: ConstrEmit<FormEmits>
  ) { }

  /**
   * Handles form change event.
   *
   * Обрабатывает событие изменения формы.
   * @param event change event / событие изменения
   */
  readonly onChange = (event?: InputEvent | Event): void => {
    const { data, values } = this.getData()

    this.model().emit(values)

    if (event) {
      this.emits?.('change', event, data, values)
    }

    this.emits?.('changeLite', data, values)
    this.emits?.('changeValues', values)
  }

  /**
   * Handles form input event.
   *
   * Обрабатывает событие ввода формы.
   * @param event input event / событие ввода
   */
  readonly onInput = (event?: InputEvent | Event): void => {
    this.value().update()

    const { data, values } = this.getData()

    this.model().emit(values)

    if (event) {
      this.emits?.('input', event, data, values)
    }

    this.emits?.('inputLite', data, values)
    this.emits?.('inputValues', values)
  }

  /**
   * Handles form reset event.
   *
   * Обрабатывает событие сброса формы.
   * @param event reset event / событие сброса
   */
  readonly onReset = (event?: Event): void => {
    event?.preventDefault()

    this.value().reset()

    if (event) {
      this.emits?.('reset', event)
    }

    this.onInput(event)
    this.onChange(event)
  }

  /**
   * Handles form submit event.
   *
   * Обрабатывает событие отправки формы.
   * @param event submit event / событие отправки
   */
  readonly onSubmit = (event: SubmitEvent): void => {
    this.emits?.('submit', event)
  }

  /**
   * Returns current data and values of form elements.
   *
   * Возвращает текущие данные и значения элементов формы.
   * @returns object containing form elements data and values / объект, содержащий данные и значения элементов формы
   */
  protected getData(): { data: FormElementsData, values: FormElementsValues } {
    const formValue = this.value()

    return {
      data: formValue.getData(),
      values: formValue.get()
    }
  }
}
