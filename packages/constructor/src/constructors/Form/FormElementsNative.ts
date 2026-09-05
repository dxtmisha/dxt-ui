import { onMounted, ref, watch, type Ref } from 'vue'

import type { FormElementsData, FormElementsValues } from './basicTypes'

/**
 * Class for working with native HTML form elements and their values.
 * Caches form element data reactively and updates on value changes.
 *
 * Класс для работы с нативными HTML-элементами формы и их значениями.
 * Кеширует данные элементов формы реактивно и обновляет при изменении значений.
 */
export class FormElementsNative {
  /** Reactive record of form elements validation data / Реактивный объект данных валидации элементов формы */
  readonly item = ref<FormElementsData>({})

  /**
   * Constructor for FormElementsNative.
   *
   * Конструктор для FormElementsNative.
   * @param element reactive reference to HTML form element / реактивная ссылка на HTML-элемент формы
   */
  constructor(
    protected readonly element: Ref<HTMLFormElement | undefined>
  ) {
    this.update()

    onMounted(() => {
      watch(this.element, () => {
        this.update()
      }, { immediate: true })
    })
  }

  /**
   * Checks if any native form element has an error.
   *
   * Проверяет, есть ли ошибка в каком-либо нативном элементе формы.
   * @returns true if any element has an error / true, если есть ошибка в элементе
   */
  isError(): boolean {
    if (this.element.value) {
      return !this.element.value.checkValidity()
    }

    return Object.values(this.item.value).some(element => element.status === false)
  }

  /**
   * Returns current object of form element validation data.
   *
   * Возвращает текущий объект с данными валидации элементов формы.
   * @returns object with name to validation data mapping / объект сопоставления имени и данных валидации
   */
  get(): FormElementsData {
    return this.item.value
  }

  /**
   * Returns the value of a native form element by name.
   *
   * Возвращает значение нативного элемента формы по имени.
   * @param name element name / имя элемента
   * @returns element value or undefined / значение элемента или undefined
   */
  getValue(name: string): any {
    return this.item.value[name]?.value
  }

  /**
   * Returns current object of form element values keyed by element name.
   *
   * Возвращает текущий объект со значениями элементов формы, где ключами являются имена элементов.
   * @returns object with name to value mapping / объект сопоставления имени и значения
   */
  getValues(): FormElementsValues {
    const values: FormElementsValues = {}

    Object.entries(this.item.value).forEach(([name, item]) => {
      values[name] = item.value
    })

    return values
  }

  /**
   * Sets the value of a native form element by name.
   *
   * Устанавливает значение нативного элемента формы по имени.
   * @param name element name / имя элемента
   * @param value new value / новое значение
   * @returns current instance / текущий экземпляр
   */
  set(name: string, value: any): this {
    const form = this.element.value

    if (form?.elements) {
      const element = form.elements.namedItem(name)

      if (element) {
        this.setElementValue(element, value)
        this.update()
      }
    }

    return this
  }

  /**
   * Sets values for native form elements.
   *
   * Устанавливает значения для нативных элементов формы.
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
   * Sets values for all native form elements.
   * If a value is not provided for an element, clears it.
   *
   * Устанавливает значения для всех нативных элементов формы.
   * Если значение для элемента не передано, очищает его.
   * @param values object of element values keyed by name / объект значений элементов по имени
   * @returns current instance / текущий экземпляр
   */
  setValuesAll(values: FormElementsValues): this {
    const form = this.element.value

    if (form?.elements) {
      Array.from(form.elements).forEach((control) => {
        if (
          'name' in control
          && control.name
        ) {
          const name = control.name as string
          const value = values[name]

          this.setElementValue(control, value)
        }
      })
    }

    this.update()
    return this
  }

  /**
   * Updates cached reactive form elements data.
   *
   * Обновляет кешированные реактивные данные элементов формы.
   * @returns current instance / текущий экземпляр
   */
  readonly update = (): this => {
    const data: FormElementsData = {}
    const form = this.element.value

    if (form?.elements) {
      Array.from(form.elements).forEach((control) => {
        if (this.isInput(control)) {
          data[control.name] = {
            value: this.getElementValue(control),
            validationMessage: control.validationMessage,
            validity: control.validity,
            status: typeof control.checkValidity === 'function' ? control.checkValidity() : true
          }
        }
      })
    }

    this.item.value = data
    return this
  }

  /**
   * Resets native form elements.
   * Restores initial cached values if provided, or clears elements.
   *
   * Сбрасывает нативные элементы формы.
   * Восстанавливает исходные закешированные значения, если они переданы, или очищает элементы.
   * @param initialValues optional initial values to restore / опциональные исходные значения для восстановления
   * @returns current instance / текущий экземпляр
   */
  readonly reset = (initialValues?: FormElementsValues): this => {
    return this.setValuesAll(initialValues ?? {})
  }

  /**
   * Checks if the element is an input element for data collection.
   *
   * Проверяет, является ли элемент элементом ввода для сбора данных.
   * @param input element to check / элемент для проверки
   * @returns true if the element is an input element / true, если элемент является элементом ввода
   */
  protected isInput(input: Element): input is HTMLInputElement {
    if (!('name' in input) || !input.name) {
      return false
    }

    const control = input as HTMLInputElement

    if (control.type === 'radio' && !control.checked) {
      return false
    }

    if (['button', 'submit', 'reset', 'image'].includes(control.type)) {
      return false
    }

    return true
  }

  /**
   * Returns the native value of an input element.
   *
   * Возвращает нативное значение элемента ввода.
   * @param input input element / элемент ввода
   * @returns element value / значение элемента
   */
  protected getElementValue(input: HTMLInputElement): any {
    return input.type === 'checkbox' ? input.checked : input.value
  }

  /**
   * Sets value on a native DOM element or RadioNodeList.
   *
   * Устанавливает значение на нативном элементе DOM или RadioNodeList.
   * @param element DOM element or radio node list / элемент DOM или список радиокнопок
   * @param value new value / новое значение
   */
  protected setElementValue(element: Element | RadioNodeList, value: any): void {
    if (typeof RadioNodeList !== 'undefined' && element instanceof RadioNodeList) {
      element.value = String(value ?? '')
      return
    }

    if (element instanceof HTMLInputElement) {
      if (['button', 'submit', 'reset', 'image'].includes(element.type)) {
        return
      }

      if (element.type === 'checkbox') {
        element.checked = Boolean(value)
      } else if (element.type === 'radio') {
        element.checked = Boolean(value !== undefined && value !== null && element.value === String(value))
      } else {
        element.value = value ?? ''
      }
      return
    }

    if (element instanceof HTMLButtonElement) {
      return
    }

    if ('value' in element) {
      (element as any).value = value ?? ''
    }
  }
}
