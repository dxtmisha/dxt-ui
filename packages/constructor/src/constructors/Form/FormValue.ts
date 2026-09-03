import { watch, type ToRefs } from 'vue'

import type { FormElementsData, FormElementsValues } from './basicTypes'
import type { FormElements } from './FormElements'
import type { FormElementsNative } from './FormElementsNative'
import type { FormPropsBasic } from './props'

/**
 * Class for managing Form values.
 * Coordinates reading and writing values across custom child elements and native form controls.
 *
 * Класс для управления значениями формы (Form).
 * Координирует чтение и запись значений между кастомными дочерними элементами и нативными элементами управления формы.
 */
export class FormValue {
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
          this.setValues(value)
        }
      })
    }

    if (this.refs?.modelValue) {
      watch(this.refs.modelValue, (value) => {
        if (value) {
          this.setValues(value)
        }
      })
    }
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

  /**
   * Resets form element values.
   *
   * Сбрасывает значения элементов формы.
   */
  readonly reset = (): void => {
    if (this.props?.native) {
      this.native?.reset()
    } else {
      this.elements?.reset()
    }
  }
}
