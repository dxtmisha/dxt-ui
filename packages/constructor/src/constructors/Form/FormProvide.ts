// ai-none

import { provide } from 'vue'

import type { FieldValidationItem } from '../../types/fieldTypes'
import {
  FORM_NAME_ELEMENT,
  type FormElementItem,
  type FormElementRegistration
} from './basicTypes'
import type { FormElements } from './FormElements'
import type { FormEvent } from './FormEvent'

/**
 * Class for managing child element registration and providing form context via Vue provide/inject.
 * Wraps registration and lookup callbacks lazily so child elements and events are instantiated only on demand.
 *
 * Класс для управления регистрацией дочерних элементов и предоставления контекста формы через Vue provide/inject.
 * Оборачивает функции регистрации и получения значений лениво, чтобы дочерние элементы и события создавались только по требованию.
 */
export class FormProvide {
  /**
   * Constructor for FormProvide.
   * Calls Vue provide to register form context for child elements.
   *
   * Конструктор для FormProvide.
   * Вызывает Vue provide для регистрации контекста формы для дочерних элементов.
   * @param elements lazy getter for custom child elements manager / ленивый геттер менеджера кастомных дочерних элементов
   * @param event lazy getter for form event handler / ленивый геттер обработчика событий формы
   */
  constructor(
    protected readonly elements: () => FormElements,
    protected readonly event: () => FormEvent
  ) {
    provide<FormElementRegistration>(FORM_NAME_ELEMENT, {
      getValue: this.getValue,
      register: this.register,
      unregister: this.unregister,
      updateData: this.updateData
    })
  }

  /**
   * Returns the value of a registered child element by name.
   *
   * Возвращает значение зарегистрированного дочернего элемента по имени.
   * @param name element name / имя элемента
   * @returns element value or undefined / значение элемента или undefined
   */
  readonly getValue = (name: string): unknown => {
    return this.elements().getValue(name)
  }

  /**
   * Updates validation data of a registered form child element and triggers form input event.
   *
   * Обновляет данные валидации зарегистрированного дочернего элемента формы и вызывает событие ввода формы.
   * @param id element identifier / идентификатор элемента
   * @param data element validation and input data / данные валидации и ввода элемента
   * @param event event object / объект события
   */
  readonly updateData = (
    id: string,
    data?: FieldValidationItem,
    event?: InputEvent
  ): void => {
    this.elements().updateData(id, data)
    this.event().onInput(event)
  }

  /**
   * Registers a form child element.
   *
   * Регистрирует дочерний элемент формы.
   * @param element element registration object / объект регистрации элемента
   */
  readonly register = (element: FormElementItem): void => {
    this.elements().register(element)
  }

  /**
   * Unregisters a form child element by its identifier.
   *
   * Удаляет регистрацию дочернего элемента формы по его идентификатору.
   * @param id element identifier / идентификатор элемента
   */
  readonly unregister = (id: string): void => {
    this.elements()?.unregister(id)
  }
}
