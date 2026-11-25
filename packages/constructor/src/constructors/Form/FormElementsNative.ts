// ai-none

import { ref, watch, type Ref, type WatchStopHandle } from 'vue'
import { DesignLifecycleAbstract } from '@dxtmisha/functional'
import { isFunction, isNull } from '@dxtmisha/functional-basic'

import type { FormElementsData, FormElementsValues } from './basicTypes'

/** Input control types ignored during value collection and assignment / Типы элементов ввода, игнорируемые при сборе и присвоении значений */
const IGNORED_INPUT_TYPES = ['button', 'submit', 'reset', 'image'] as const

/** Native form control element union / Объединение нативных элементов управления формы */
type NativeFormControl = HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement

/**
 * Class for working with native HTML form elements and their values.
 * Caches form element data reactively and synchronizes with the bound form DOM reference via component lifecycle.
 *
 * Класс для работы с нативными HTML-элементами формы и их значениями.
 * Кеширует данные элементов формы реактивно и синхронизируется с привязанной DOM-ссылкой формы через жизненный цикл компонента.
 */
export class FormElementsNative extends DesignLifecycleAbstract {
  /** Reactive record of form elements validation data / Реактивный объект данных валидации элементов формы */
  readonly item = ref<FormElementsData>({})

  /** Cleanup handle for form element ref watcher / Обработчик остановки наблюдателя за ссылкой на элемент формы */
  protected stopWatch?: WatchStopHandle

  /**
   * Constructor for FormElementsNative.
   *
   * Конструктор для FormElementsNative.
   * @param element reactive reference to HTML form element / реактивная ссылка на HTML-элемент формы
   */
  constructor(
    protected readonly element: Ref<HTMLFormElement | undefined>
  ) {
    super()
  }

  /**
   * Checks if any native form element has a validation error.
   *
   * Проверяет, есть ли ошибка валидации в каком-либо нативном элементе формы.
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
  getValue(name: string): unknown {
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

    for (const [name, item] of Object.entries(this.item.value)) {
      values[name] = item.value
    }

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
  set(name: string, value: unknown): this {
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
   * Sets values for native form elements by name without altering omitted fields.
   *
   * Устанавливает значения для нативных элементов формы по имени без изменения неуказанных полей.
   * @param values object of element values keyed by name / объект значений элементов по имени
   * @returns current instance / текущий экземпляр
   */
  setValues(values: FormElementsValues): this {
    const form = this.element.value

    if (form?.elements) {
      let changed = false

      for (const [name, value] of Object.entries(values)) {
        const element = form.elements.namedItem(name)

        if (element) {
          this.setElementValue(element, value)
          changed = true
        }
      }

      if (changed) {
        this.update()
      }
    }

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
      for (const control of Array.from(form.elements)) {
        if ('name' in control && control.name) {
          const name = String(control.name)
          const value = values[name]

          this.setElementValue(control, value)
        }
      }
    }

    this.update()
    return this
  }

  /**
   * Updates cached reactive form elements data from the bound form DOM controls.
   *
   * Обновляет кешированные реактивные данные элементов формы из привязанных DOM-элементов управления.
   * @returns current instance / текущий экземпляр
   */
  readonly update = (): this => {
    const data: FormElementsData = {}
    const form = this.element.value

    if (form?.elements) {
      for (const control of Array.from(form.elements)) {
        if (this.isInput(control)) {
          data[control.name] = {
            value: this.getElementValue(control),
            validationMessage: control.validationMessage,
            validity: control.validity,
            status: isFunction(control.checkValidity) ? control.checkValidity() : true
          }
        }
      }
    }

    this.item.value = data
    return this
  }

  /**
   * Resets native form elements.
   * Restores initial cached values if provided, or clears all elements.
   *
   * Сбрасывает нативные элементы формы.
   * Восстанавливает исходные закешированные значения, если они переданы, или очищает все элементы.
   * @param initialValues optional initial values to restore / опциональные исходные значения для восстановления
   * @returns current instance / текущий экземпляр
   */
  readonly reset = (initialValues?: FormElementsValues): this => {
    return this.setValuesAll(initialValues ?? {})
  }

  /**
   * Synchronizes initial native element state and starts watching the form DOM reference on mount.
   *
   * Синхронизирует начальное состояние нативных элементов и запускает наблюдение за DOM-ссылкой формы при монтировании.
   */
  override readonly onMounted = (): void => {
    this.update()

    this.stopWatch?.()
    this.stopWatch = watch(this.element, () => {
      this.update()
    })
  }

  /**
   * Stops watching the form DOM reference on unmount.
   *
   * Останавливает наблюдение за DOM-ссылкой формы при размонтировании.
   */
  override readonly onUnmounted = (): void => {
    this.stopWatch?.()
    this.stopWatch = undefined
  }

  /**
   * Checks if the element is a supported input control for data collection.
   *
   * Проверяет, является ли элемент поддерживаемым элементом ввода для сбора данных.
   * @param input element to check / элемент для проверки
   * @returns true if the element is a collectible input control / true, если элемент является собираемым элементом ввода
   */
  protected isInput(input: Element): input is NativeFormControl {
    if (
      !('name' in input)
      || !input.name
      || !('value' in input)
    ) {
      return false
    }

    const control = input as NativeFormControl

    if (
      control.type === 'radio'
      && !(control as HTMLInputElement).checked
    ) {
      return false
    }

    if (IGNORED_INPUT_TYPES.includes(control.type as typeof IGNORED_INPUT_TYPES[number])) {
      return false
    }

    return true
  }

  /**
   * Returns the native value of a form control element.
   *
   * Возвращает нативное значение элемента управления формы.
   * @param input form control element / элемент управления формы
   * @returns element value / значение элемента
   */
  protected getElementValue(input: NativeFormControl): unknown {
    return input.type === 'checkbox'
      ? (input as HTMLInputElement).checked
      : input.value
  }

  /**
   * Sets value on a native DOM control element or RadioNodeList.
   *
   * Устанавливает значение на нативном DOM-элементе управления или RadioNodeList.
   * @param element DOM element or radio node list / элемент DOM или список радиокнопок
   * @param value new value / новое значение
   */
  protected setElementValue(element: Element | RadioNodeList, value: unknown): void {
    const stringValue = isNull(value) ? '' : String(value)

    if (typeof RadioNodeList !== 'undefined' && element instanceof RadioNodeList) {
      if (isNull(value)) {
        for (const node of Array.from(element)) {
          if (node instanceof HTMLInputElement) {
            node.checked = false
          }
        }
      } else {
        element.value = stringValue
      }

      return
    }

    if (element instanceof HTMLInputElement) {
      if (IGNORED_INPUT_TYPES.includes(element.type as typeof IGNORED_INPUT_TYPES[number])) {
        return
      }

      if (element.type === 'file') {
        if (!stringValue) {
          element.value = ''
        }
        return
      }

      if (element.type === 'checkbox') {
        element.checked = Boolean(value)
      } else if (element.type === 'radio') {
        element.checked = !isNull(value) && element.value === stringValue
      } else {
        element.value = stringValue
      }

      return
    }

    if (element instanceof HTMLButtonElement) {
      return
    }

    if (element instanceof HTMLTextAreaElement || element instanceof HTMLSelectElement) {
      element.value = stringValue
    } else if ('value' in element) {
      (element as unknown as { value: string }).value = stringValue
    }
  }
}
