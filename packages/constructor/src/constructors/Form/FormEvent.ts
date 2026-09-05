import type { ConstrEmit } from '@dxtmisha/functional'

import type { ModelInclude } from '../../classes/ModelInclude'
import type { FormElementsData, FormElementsValues } from './basicTypes'
import type { FormValue } from './FormValue'
import type { FormPropsBasic } from './props'
import type { FormEmits } from './types'

/**
 * Class for handling Form events.
 *
 * Класс для обработки событий формы.
 */
export class FormEvent {
  /**
   * Constructor
   * @param props incoming form properties / входящие свойства формы
   * @param value object for managing form values / объект для управления значениями формы
   * @param emits the function is called when an event is triggered / функция вызывается, когда срабатывает событие
   * @param model object for managing model synchronization / объект для управления синхронизацией модели
   */
  constructor(
    protected readonly props: FormPropsBasic,
    protected readonly value: FormValue,
    protected readonly emits?: ConstrEmit<FormEmits>,
    protected readonly model?: ModelInclude<FormElementsValues>
  ) { }

  /**
   * Handles form change event /
   * Обрабатывает событие изменения формы
   * @param event change event / событие изменения
   */
  readonly onChange = (event?: InputEvent): void => {
    const { data, values } = this.getData()

    this.emits?.('change', event as InputEvent, data, values)
    this.emits?.('changeLite', data, values)
    this.emits?.('changeValues', values)
    this.model?.emit(values)
  }

  /**
   * Handles form input event /
   * Обрабатывает событие ввода формы
   * @param event input event / событие ввода
   */
  readonly onInput = (event?: InputEvent): void => {
    this.value.update()

    const { data, values } = this.getData()

    if (event) {
      this.emits?.('input', event, data, values)
    }

    this.emits?.('inputLite', data, values)
    this.emits?.('inputValues', values)
    this.model?.emit(values)
  }

  /**
   * Handles form reset event /
   * Обрабатывает событие сброса формы
   * @param event reset event / событие сброса
   */
  readonly onReset = (event?: InputEvent): void => {
    event?.preventDefault()

    this.value.reset()

    if (event) {
      this.emits?.('reset', event)
    }

    this.onInput(event)
    this.onChange(event)
  }

  /**
   * Handles form submit event /
   * Обрабатывает событие отправки формы
   * @param event submit event / событие отправки
   */
  readonly onSubmit = (event: SubmitEvent): void => {
    this.emits?.('submit', event)
  }

  /**
   * Returns data and values of form elements.
   *
   * Возвращает данные и значения элементов формы.
   * @returns object containing form elements data and values / объект, содержащий данные и значения элементов формы
   */
  protected getData(): { data: FormElementsData, values: FormElementsValues } {
    return {
      data: this.value.getData(),
      values: this.value.get()
    }
  }
}
