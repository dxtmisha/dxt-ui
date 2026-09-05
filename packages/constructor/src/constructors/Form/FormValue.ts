import { onMounted, watch, type ToRefs } from 'vue'

import type { FormElements } from './FormElements'
import type { FormElementsNative } from './FormElementsNative'

import type { FormElementsData, FormElementsValues } from './basicTypes'
import type { FormPropsBasic } from './props'

/**
 * Class for managing Form values.
 * Coordinates reading and writing values across custom child elements and native form controls.
 *
 * Класс для управления значениями формы (Form).
 * Координирует чтение и запись значений между кастомными дочерними элементами и нативными элементами управления формы.
 */
export class FormValue {
  /** Cached initial form values / Закешированные исходные значения формы */
  protected cache: FormElementsValues = {}

  /**
   * Constructor
   * @param props incoming form properties / входящие свойства формы
   * @param refs reactive references to incoming form properties / реактивные ссылки на входящие свойства формы
   * @param elements object for managing child elements / объект для управления дочерними элементами
   * @param native object for working with native form elements / объект для работы с нативными элементами формы
   */
  constructor(
    protected readonly props?: FormPropsBasic,
    protected readonly refs?: ToRefs<FormPropsBasic>,
    protected readonly elements?: FormElements,
    protected readonly native?: FormElementsNative
  ) {
    if (this.refs?.value) {
      watch(this.refs.value, (value) => {
        if (value) {
          this.setValuesAll(value)
        }
      })
    }

    if (this.refs?.modelValue) {
      watch(this.refs.modelValue, (value) => {
        if (value) {
          this.setValuesAll(value)
        }
      })
    }

    onMounted(() => {
      if (this.props?.value) {
        this.cache = { ...this.props.value }
      } else if (this.props?.modelValue) {
        this.cache = { ...this.props.modelValue }
      }

      this.setValues(this.cache)
    })
  }

  /**
   * Returns current object of form element values keyed by element name.
   *
   * Возвращает текущий объект со значениями элементов формы, где ключами являются имена элементов.
   * @returns object with name to value mapping / объект сопоставления имени и значения
   */
  readonly get = (): FormElementsValues => {
    if (this.props?.native) {
      return this.native?.getValues() ?? {}
    }

    return this.elements?.getValues() ?? {}
  }

  /**
   * Returns cached initial form values.
   *
   * Возвращает закешированные исходные значения формы.
   * @returns cached initial values / закешированные исходные значения
   */
  getCache(): FormElementsValues {
    return this.cache
  }

  /**
   * Returns current object of form element validation data.
   *
   * Возвращает текущий объект с данными валидации элементов формы.
   * @returns object with name to validation data mapping / объект сопоставления имени и данных валидации
   */
  getData(): FormElementsData {
    if (this.props?.native) {
      return this.native?.get() ?? {}
    }

    return this.elements?.getData() ?? {}
  }

  /**
   * Returns the value of an element by name.
   *
   * Возвращает значение элемента по имени.
   * @param name element name / имя элемента
   * @returns element value or undefined / значение элемента или undefined
   */
  getValue(name: string): any {
    if (this.props?.native) {
      return this.native?.getValue(name)
    }

    return this.elements?.getValue(name)
  }

  /**
   * Resets form element values to cached initial values.
   *
   * Сбрасывает значения элементов формы к закешированным исходным значениям.
   */
  readonly reset = (): void => {
    if (this.props?.native) {
      this.native?.reset(this.cache)
    } else {
      this.elements?.reset(this.cache)
    }
  }

  /**
   * Sets the value of a form element by name.
   *
   * Устанавливает значение элемента формы по имени.
   * @param name element name / имя элемента
   * @param value new value / новое значение
   */
  readonly set = (name: string, value: any): void => {
    if (this.props?.native) {
      this.native?.set(name, value)
    } else {
      this.elements?.set(name, value)
    }
  }

  /**
   * Sets values for form elements.
   *
   * Устанавливает значения для элементов формы.
   * @param values object of element values keyed by name / объект значений элементов по имени
   */
  readonly setValues = (values: FormElementsValues): void => {
    if (this.props?.native) {
      this.native?.setValues(values)
    } else {
      this.elements?.setValues(values)
    }
  }

  /**
   * Sets values for all form elements.
   * If a value is not provided for an element, clears it.
   *
   * Устанавливает значения для всех элементов формы.
   * Если значение для элемента не передано, очищает его.
   * @param values object of element values keyed by name / объект значений элементов по имени
   */
  readonly setValuesAll = (values: FormElementsValues): void => {
    if (this.props?.native) {
      this.native?.setValuesAll(values)
    } else {
      this.elements?.setValuesAll(values)
    }
  }

  /**
   * Updates cached reactive form data when in native mode.
   *
   * Обновляет кешированные реактивные данные формы в нативном режиме.
   * @returns current instance / текущий экземпляр
   */
  readonly update = (): this => {
    if (this.props?.native) {
      this.native?.update()
    }

    return this
  }
}
