import { shallowRef, type ShallowRef } from 'vue'

import type {
  FormElementItem,
  FormElementsData,
  FormElementsValues
} from './basicTypes'
import type { FieldValidationItem } from '../../types/fieldTypes'

/**
 * Class for managing child elements of the Form component.
 *
 * Класс для управления дочерними элементами компонента Form.
 */
export class FormElements {
  /** Reactive list of registered child elements / Реактивный список зарегистрированных дочерних элементов */
  readonly item = shallowRef<FormElementItem[]>([])

  /**
   * Checks if any registered form element has an error.
   *
   * Проверяет, есть ли ошибка в каком-либо зарегистрированном элементе формы.
   * @returns true if any element has an error / true, если есть ошибка в элементе
   */
  isError(): boolean {
    return this.item.value.some((element) => {
      return (typeof element.checkValidity === 'function' && !element.checkValidity())
        || element.data?.status === false
    })
  }

  /**
   * Returns reactive list of registered elements.
   *
   * Возвращает реактивный список зарегистрированных элементов.
   * @returns reactive list of elements / реактивный список элементов
   */
  get(): ShallowRef<FormElementItem[]> {
    return this.item
  }

  /**
   * Returns an object of form element validation data keyed by element name.
   * If element data is missing, falls back to an object containing only the element value.
   *
   * Возвращает объект с данными валидации элементов формы, где ключами являются имена элементов.
   * Если данные элемента отсутствуют, возвращает объект, содержащий только значение элемента.
   * @returns object with name to validation data mapping / объект сопоставления имени и данных валидации
   */
  getData(): FormElementsData {
    const data: FormElementsData = {}

    this.item.value.forEach((element) => {
      data[element.name] = element.data ?? {
        value: this.getElementValue(element)
      }
    })

    return data
  }

  /**
   * Returns the value of a registered child element by name.
   *
   * Возвращает значение зарегистрированного дочернего элемента по имени.
   * @param name element name / имя элемента
   * @returns element value or undefined / значение элемента или undefined
   */
  readonly getValue = (name: string): any => {
    return this.getElementValue(this.item.value.find(item => item.name === name))
  }

  /**
   * Returns an object of form element values keyed by element name.
   *
   * Возвращает объект со значениями элементов формы, где ключами являются имена элементов.
   * @returns object with name to value mapping / объект сопоставления имени и значения
   */
  getValues(): FormElementsValues {
    const values: FormElementsValues = {}

    this.item.value.forEach((element) => {
      values[element.name] = this.getElementValue(element)
    })

    return values
  }

  /**
   * Sets the value of a registered child element by name.
   *
   * Устанавливает значение зарегистрированного дочернего элемента по имени.
   * @param name element name / имя элемента
   * @param value new value / новое значение
   * @returns current instance / текущий экземпляр
   */
  set(name: string, value: any): this {
    for (const element of this.item.value) {
      if (element.name === name) {
        this.setElementValue(element, value)
        break
      }
    }

    return this
  }

  /**
   * Sets values for registered child elements.
   *
   * Устанавливает значения для зарегистрированных дочерних элементов.
   * @param values object of element values keyed by name / объект значений элементов по имени
   * @returns current instance / текущий экземпляр
   */
  setValues(values: FormElementsValues): this {
    Object.entries(values).forEach(([name, value]) => {
      this.set(name, value)
    })

    return this
  }

  /**
   * Sets values for all registered child elements.
   * If a value is not provided for an element, clears or resets it.
   *
   * Устанавливает значения для всех зарегистрированных дочерних элементов.
   * Если значение для элемента не передано, очищает или сбрасывает его.
   * @param values object of element values keyed by name / объект значений элементов по имени
   * @returns current instance / текущий экземпляр
   */
  setValuesAll(values: FormElementsValues): this {
    for (const element of this.item.value) {
      const value = values[element.name]

      if (value !== undefined) {
        this.setElementValue(element, value)
      } else if (typeof element.clear === 'function') {
        element.clear()
      } else {
        this.setElementValue(element, undefined)
      }
    }

    return this
  }

  /**
   * Updates validation data of a registered form child element.
   *
   * Обновляет данные валидации зарегистрированного дочернего элемента формы.
   * @param name element name / имя элемента
   * @param data element validation and input data / данные валидации и ввода элемента
   */
  readonly updateData = (name: string, data?: FieldValidationItem): void => {
    const item = this.item.value.find(element => element.name === name)

    if (item) {
      item.data = data
    }
  }

  /**
   * Resets registered child elements.
   * Restores initial cached values if provided, or clears elements.
   *
   * Сбрасывает зарегистрированные дочерние элементы.
   * Восстанавливает исходные закешированные значения, если они переданы, или очищает элементы.
   * @param initialValues optional initial values to restore / опциональные исходные значения для восстановления
   * @returns current instance / текущий экземпляр
   */
  readonly reset = (initialValues?: FormElementsValues): this => {
    return this.setValuesAll(initialValues ?? {})
  }

  /**
   * Registers a form child element.
   *
   * Регистрирует дочерний элемент формы.
   * @param element element registration object / объект регистрации элемента
   */
  readonly register = (element: FormElementItem): void => {
    if (!this.item.value.includes(element)) {
      this.item.value = [...this.item.value, element]
    }
  }

  /**
   * Returns the value of a form element item.
   *
   * Возвращает значение элемента формы.
   * @param element form element item / объект элемента формы
   * @returns element value or undefined / значение элемента или undefined
   */
  protected getElementValue(element?: FormElementItem): any {
    return element?.getValue?.() ?? element?.value?.value
  }

  /**
   * Sets the value of a form element item.
   *
   * Устанавливает значение элемента формы.
   * @param element form element item / объект элемента формы
   * @param value value to set / устанавливаемое значение
   * @returns current instance / текущий экземпляр
   */
  protected setElementValue(element: FormElementItem, value: any): this {
    if (typeof element.setValue === 'function') {
      element.setValue(value)
    } else if (element.value) {
      element.value.value = value
    }

    return this
  }
}
