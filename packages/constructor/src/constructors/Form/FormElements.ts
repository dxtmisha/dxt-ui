import { provide, shallowRef, type ShallowRef } from 'vue'

import {
  FORM_NAME_ELEMENT,
  type FormElementItem,
  type FormElementsData,
  type FormElementsValues
} from './basicTypes'

/**
 * Class for managing child elements of the Form component.
 * Provides element registration via Vue provide.
 *
 * Класс для управления дочерними элементами компонента Form.
 * Предоставляет регистрацию элементов через Vue provide.
 */
export class FormElements {
  /** Reactive list of registered child elements / Реактивный список зарегистрированных дочерних элементов */
  readonly item = shallowRef<FormElementItem[]>([])

  /**
   * Constructor for FormElements.
   * Calls Vue provide to register child elements.
   *
   * Конструктор для FormElements.
   * Вызывает Vue provide для регистрации дочерних элементов.
   */
  constructor() {
    provide(FORM_NAME_ELEMENT, this.register)
  }

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
        value: element.getValue?.() ?? element.value?.value
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
  getValue(name: string): any {
    const element = this.item.value.find(item => item.name === name)
    return element?.getValue?.() ?? element?.value?.value
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
      values[element.name] = element.getValue?.() ?? element.value?.value
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
        if (typeof element.setValue === 'function') {
          element.setValue(value)
        } else if (element.value) {
          element.value.value = value
        }

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
   * Resets registered child elements.
   *
   * Сбрасывает зарегистрированные дочерние элементы.
   * @returns current instance / текущий экземпляр
   */
  readonly reset = (): this => {
    for (const element of this.item.value) {
      if (typeof element.clear === 'function') {
        element.clear()
      } else if (typeof element.setValue === 'function') {
        element.setValue(undefined)
      } else if (element.value) {
        element.value.value = undefined
      }
    }

    return this
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
}
