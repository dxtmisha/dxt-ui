import { inject } from 'vue'

import { FieldValidationInclude } from './FieldValidationInclude'
import { FieldValueInclude } from './FieldValueInclude'

import {
  FORM_NAME_ELEMENT,
  type FormElementItem,
  type FormElementRegistration
} from '../../constructors/Form/basicTypes'
import type { FieldAllProps, FieldValidationItem } from '../../types/fieldTypes'

/**
 * Class for working with the form element context.
 * Класс для работы с контекстом элемента формы.
 */
export class FieldFormInclude {
  protected context: FormElementRegistration | undefined

  /**
   * Constructor
   * @param props input data / входные данные
   * @param value object for working with values / объект для работы со значениями
   * @param validation object for working with validity / объект для работы с валидностью
   */
  constructor(
    protected readonly props: FieldAllProps,
    protected readonly value: FieldValueInclude,
    protected readonly validation: FieldValidationInclude
  ) {
    this.context = inject<FormElementRegistration | undefined>(FORM_NAME_ELEMENT, undefined)

    const element = this.getElement()

    if (element) {
      this.register(element)
    }
  }

  /**
   * Forms the form element item record.
   *
   * Формирует объект записи элемента формы.
   * @returns form element item or undefined / объект элемента формы или undefined
   */
  getElement(): FormElementItem | undefined {
    if (!this.props.name) {
      return undefined
    }

    return {
      name: this.props.name,
      data: this.validation.item.value,
      ...this.value.expose(),
      ...this.validation.expose()
    }
  }

  /**
   * Returns the value of a registered form child element by name.
   *
   * Возвращает значение зарегистрированного дочернего элемента формы по имени.
   * @param name element name / имя элемента
   * @returns element value or undefined / значение элемента или undefined
   */
  getValue(name: string): any {
    return this.context?.getValue(name)
  }

  /**
   * Updates validation data of a registered form child element.
   *
   * Обновляет данные валидации зарегистрированного дочернего элемента формы.
   * @param name element name / имя элемента
   * @param data element validation and input data / данные валидации и ввода элемента
   */
  updateData(
    name: string,
    data?: FieldValidationItem
  ): void {
    this.context?.updateData(name, data)
  }

  /**
   * Registers a child element in the parent Form component.
   *
   * Регистрирует дочерний элемент в родительском компоненте Form.
   * @param element form element item / объект элемента формы
   */
  private register(
    element: FormElementItem
  ): void {
    this.context?.register(element)
  }
}
