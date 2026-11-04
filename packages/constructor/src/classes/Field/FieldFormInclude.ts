import { inject } from 'vue'
import { executeFunction, getElementId, type FunctionOr } from '@dxtmisha/functional'

import type { FieldValidationInclude } from './FieldValidationInclude'
import type { FieldValueInclude } from './FieldValueInclude'

import {
  FORM_NAME_ELEMENT,
  type FormElementItem,
  type FormElementRegistration
} from '../../constructors/Form/basicTypes'
import type { FieldAllProps, FieldValidationItem } from '../../types/fieldTypes'

/**
 * Class for working with the form element context.
 *
 * Класс для работы с контекстом элемента формы.
 */
export class FieldFormInclude {
  /**
   * Checks whether the form integration is active based on the name property.
   *
   * Проверяет, активна ли интеграция с формой на основе свойства name.
   * @param props input data / входные данные
   * @returns true if name is defined / true, если имя задано
   */
  static is(props?: FieldAllProps): boolean {
    return Boolean(props?.name)
  }

  /** Unique element identifier / Уникальный идентификатор элемента */
  readonly id: string = getElementId()

  /** Form element registration context / Контекст регистрации элемента формы */
  protected readonly context: FormElementRegistration | undefined

  /**
   * Constructor
   *
   * Конструктор
   * @param props input data / входные данные
   * @param value function returning object for working with values / функция, возвращающая объект для работы со значениями
   * @param validation function returning object for working with validity / функция, возвращающая объект для работы с валидностью
   * @param extra additional parameters or function returning parameters / дополнительные параметры или функция, возвращающая параметры
   */
  constructor(
    protected readonly props: FieldAllProps,
    protected readonly value: () => FieldValueInclude,
    protected readonly validation: () => FieldValidationInclude,
    protected readonly extra?: FunctionOr<Record<string, any>>
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
      id: this.id,
      name: this.props.name,
      data: this.validation().item.value,
      ...this.value().expose(),
      ...this.validation().expose(),
      ...executeFunction(this.extra)
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
   * @param data element validation and input data / данные валидации и ввода элемента
   * @param event event object / объект события
   */
  updateData(
    data?: FieldValidationItem,
    event?: InputEvent
  ): void {
    this.context?.updateData(this.id, data, event)
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
