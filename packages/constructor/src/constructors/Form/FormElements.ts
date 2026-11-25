// ai-none

import { shallowRef, type ShallowRef } from 'vue'
import { isFunction, isNull } from '@dxtmisha/functional-basic'

import type { FieldValidationItem } from '../../types/fieldTypes'
import type {
  FormElementItem,
  FormElementsData,
  FormElementsValues
} from './basicTypes'

/**
 * Class for managing registered custom child elements of the Form component.
 * Stores child field descriptors, collects values and validation states, and coordinates bulk updates and resets.
 *
 * Класс для управления зарегистрированными кастомными дочерними элементами компонента Form.
 * Хранит дескрипторы дочерних полей, собирает значения и состояния валидации, а также координирует массовые обновления и сбросы.
 */
export class FormElements {
  /** Reactive list of registered child elements / Реактивный список зарегистрированных дочерних элементов */
  readonly item = shallowRef<FormElementItem[]>([])

  /**
   * Checks if any registered form element has a validation error.
   *
   * Проверяет, есть ли ошибка валидации в каком-либо зарегистрированном элементе формы.
   * @returns true if any element has an error / true, если есть ошибка в элементе
   */
  isError(): boolean {
    return this.item.value.some((element) => {
      return (isFunction(element.checkValidity) && !element.checkValidity())
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
   * Preserves populated data when multiple elements share the same name (such as radio groups).
   *
   * Возвращает объект с данными валидации элементов формы, где ключами являются имена элементов.
   * Если данные элемента отсутствуют, возвращает объект, содержащий только значение элемента.
   * Сохраняет заполненные данные при совпадении имён элементов (например, для групп радиокнопок).
   * @returns object with name to validation data mapping / объект сопоставления имени и данных валидации
   */
  getData(): FormElementsData {
    const data: FormElementsData = {}

    for (const element of this.item.value) {
      const value = this.getElementValue(element)

      if (
        element.data !== undefined
        || !isNull(value)
        || !Object.hasOwn(data, element.name)
      ) {
        data[element.name] = element.data ?? {
          value
        }
      }
    }

    return data
  }

  /**
   * Returns the value of a registered child element by name.
   * When multiple elements share a name, returns the first non-nullish value.
   *
   * Возвращает значение зарегистрированного дочернего элемента по имени.
   * При наличии нескольких элементов с одинаковым именем возвращает первое непустое значение.
   * @param name element name / имя элемента
   * @returns element value or undefined / значение элемента или undefined
   */
  readonly getValue = (name: string): unknown => {
    for (const element of this.item.value) {
      if (element.name === name) {
        const value = this.getElementValue(element)

        if (!isNull(value)) {
          return value
        }
      }
    }

    return undefined
  }

  /**
   * Returns an object of form element values keyed by element name.
   *
   * Возвращает объект со значениями элементов формы, где ключами являются имена элементов.
   * @returns object with name to value mapping / объект сопоставления имени и значения
   */
  getValues(): FormElementsValues {
    const values: FormElementsValues = {}

    for (const element of this.item.value) {
      const value = this.getElementValue(element)

      if (!isNull(value)) {
        values[element.name] = value
      }
    }

    return values
  }

  /**
   * Sets the value of all registered child elements matching the given name.
   *
   * Устанавливает значение для всех зарегистрированных дочерних элементов с указанным именем.
   * @param name element name / имя элемента
   * @param value new value / новое значение
   * @returns current instance / текущий экземпляр
   */
  set(name: string, value: unknown): this {
    for (const element of this.item.value) {
      if (element.name === name) {
        this.setElementValue(element, value)
      }
    }

    return this
  }

  /**
   * Sets values for registered child elements by name without altering omitted fields.
   *
   * Устанавливает значения для зарегистрированных дочерних элементов по имени без изменения неуказанных полей.
   * @param values object of element values keyed by name / объект значений элементов по имени
   * @returns current instance / текущий экземпляр
   */
  setValues(values: FormElementsValues): this {
    for (const [name, value] of Object.entries(values)) {
      this.set(name, value)
    }

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
      const currentValue = isFunction(element.getValue)
        ? element.getValue()
        : undefined

      if (value !== currentValue) {
        if (value !== undefined) {
          this.setElementValue(element, value)
        } else if (isFunction(element.clear)) {
          element.data = undefined
          element.clear()
        } else {
          this.setElementValue(element, undefined)
        }
      }
    }

    return this
  }

  /**
   * Updates validation data of a registered form child element and clears sibling elements with the same name.
   *
   * Обновляет данные валидации зарегистрированного дочернего элемента формы и очищает соседние элементы с тем же именем.
   * @param id element identifier / идентификатор элемента
   * @param data element validation and input data / данные валидации и ввода элемента
   */
  readonly updateData = (id: string, data?: FieldValidationItem): void => {
    const item = this.item.value.find(element => element.id === id)

    if (item) {
      this.clearByName(item.name, item.id)
      item.data = data
    }
  }

  /**
   * Resets registered child elements.
   * Restores initial cached values if provided, or clears all elements.
   *
   * Сбрасывает зарегистрированные дочерние элементы.
   * Восстанавливает исходные закешированные значения, если они переданы, или очищает все элементы.
   * @param initialValues optional initial values to restore / опциональные исходные значения для восстановления
   * @returns current instance / текущий экземпляр
   */
  readonly reset = (initialValues?: FormElementsValues): this => {
    return this.setValuesAll(initialValues ?? {})
  }

  /**
   * Clears values and data of registered elements by name, optionally excluding one element by identifier.
   *
   * Очищает значения и данные зарегистрированных элементов по имени с опциональным исключением одного элемента по идентификатору.
   * @param name element name / имя элемента
   * @param id optional element identifier to exclude / опциональный идентификатор элемента для исключения
   * @returns current instance / текущий экземпляр
   */
  readonly clearByName = (name: string, id?: string): this => {
    for (const element of this.item.value) {
      if (
        element.name === name
        && (id === undefined || element.id !== id)
      ) {
        element.data = undefined
        this.setElementValue(element, undefined)
      }
    }

    return this
  }

  /**
   * Registers a form child element if not already present.
   *
   * Регистрирует дочерний элемент формы, если он ещё не добавлен.
   * @param element element registration object / объект регистрации элемента
   */
  readonly register = (element: FormElementItem): void => {
    if (!this.item.value.includes(element)) {
      this.item.value = [...this.item.value, element]
    }
  }

  /**
   * Unregisters a form child element by its identifier.
   *
   * Удаляет регистрацию дочернего элемента формы по его идентификатору.
   * @param id element identifier / идентификатор элемента
   */
  readonly unregister = (id: string): void => {
    const nextItems = this.item.value.filter(element => element.id !== id)

    if (nextItems.length !== this.item.value.length) {
      this.item.value = nextItems
    }
  }

  /**
   * Returns the resolved value of a form element item.
   *
   * Возвращает вычисленное значение элемента формы.
   * @param element form element item / объект элемента формы
   * @returns element value or undefined / значение элемента или undefined
   */
  protected getElementValue(element?: FormElementItem): unknown {
    if (!element) {
      return undefined
    }

    if (element.data !== undefined && element.data.value !== undefined) {
      return element.data.value
    }

    return isFunction(element.getValue)
      ? element.getValue()
      : undefined
  }

  /**
   * Sets the value of a form element item via its setter or reactive ref.
   *
   * Устанавливает значение элемента формы через его сеттер или реактивную ссылку.
   * @param element form element item / объект элемента формы
   * @param value value to set / устанавливаемое значение
   * @returns current instance / текущий экземпляр
   */
  protected setElementValue(element: FormElementItem, value: unknown): this {
    element.data = undefined

    if (isFunction(element.setValue)) {
      element.setValue(value)
    } else if (element.value) {
      element.value.value = value
    }

    return this
  }
}
