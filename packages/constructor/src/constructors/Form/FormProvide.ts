import { provide } from 'vue'

import {
  FORM_NAME_ELEMENT,
  type FormElementRegistration
} from './basicTypes'
import type { FieldValidationItem } from '../../types/fieldTypes'
import type { FormElements } from './FormElements'
import type { FormEvent } from './FormEvent'

/**
 * Class for managing child element registration and providing form context.
 *
 * Класс для управления регистрацией дочерних элементов и предоставления контекста формы.
 */
export class FormProvide {
  /**
   * Constructor for FormProvide.
   * Calls Vue provide to register form context for child elements.
   *
   * Конструктор для FormProvide.
   * Вызывает Vue provide для регистрации контекста формы для дочерних элементов.
   * @param elements object for managing child elements / объект для управления дочерними элементами
   * @param event object for working with events / объект для работы с событиями
   */
  constructor(
    protected readonly elements: FormElements,
    protected readonly event: FormEvent
  ) {
    provide<FormElementRegistration>(FORM_NAME_ELEMENT, {
      getValue: this.elements.getValue,
      register: this.elements.register,
      updateData: this.updateData
    })
  }

  /**
   * Updates validation data of a registered form child element and triggers form input event.
   *
   * Обновляет данные валидации зарегистрированного дочернего элемента формы и вызывает событие ввода формы.
   * @param id element identifier or name / идентификатор или имя элемента
   * @param data element validation and input data / данные валидации и ввода элемента
   * @param event event object / объект события
   */
  readonly updateData = (
    id: string,
    data?: FieldValidationItem,
    event?: InputEvent
  ): void => {
    console.log('updateData', id, data)
    this.elements.updateData(id, data)
    this.event.onInput(event)
  }
}
