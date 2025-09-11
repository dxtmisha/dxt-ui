import { computed, ref } from 'vue'
import { isArray } from '../../functions/isArray'

import { type InputCheckItem, useInputCheck } from './useInputCheck'

import { InputElement } from './InputElement'
import { InputChange } from './InputChange'
import { InputValue } from './InputValue'
import { InputMatch } from './InputMatch'
import { InputCode } from './InputCode'

import { InputPropsBasicForValue, InputValidationItem } from './typesBasic'

/**
 * Class for working with validity.<br>
 * Класс для работы с валидностью.
 */
export class InputValidation {
  protected readonly validation = ref<InputValidationItem>()

  /**
   * Constructor
   * @param props input data /<br>входные данные
   * @param element object for working with the input element /<br>объект для работы с элементом ввода
   * @param change object for working with data change label /<br>объект для работы с меткой об изменении данных
   * @param value object for working with values /<br>объект для работы со значениями
   * @param match object for working with checks for value matches /<br>объект для работы с проверкой на совпадение значений
   * @param code object for working with error codes /<br>объект для работы с кодами ошибок
   */

  constructor(
    protected readonly props: InputPropsBasicForValue,
    protected readonly element: InputElement,
    protected readonly change: InputChange,
    protected readonly value: InputValue,
    protected readonly code: InputCode,
    protected readonly match?: InputMatch
  ) {
  }

  protected readonly input = computed<InputCheckItem>(() => useInputCheck(this.element.dataForCheck.value))

  /**
   * Returns error data.<br>
   * Возвращает данные об ошибке.
   */
  readonly item = computed<InputValidationItem>(() => {
    const global = this.checkGlobal()

    if (global) {
      return global
    }

    const check = this.checkItem() ?? this.match?.check()

    if (check) {
      return check
    }

    return {
      value: undefined
    } as InputValidationItem
  })

  /**
   * Returns error string.<br>
   * Возвращает строку об ошибке.
   */
  readonly message = computed<string>(() => {
    if (
      this.checkGlobal()
      || this.change.is()
    ) {
      const data = this.item.value

      if (data.validity) {
        const code = this.code.get(data.validity)

        if (code) {
          return code
        }
      }

      return data.validationMessage ?? ''
    }

    return ''
  })

  /**
   * Checks if there is an error.<br>
   * Проверяет, есть ли ошибка.
   */
  isError(): boolean {
    return !this.item.value?.status
  }

  /**
   * Checks whether the element has any constraints and whether it meets them.<br>
   * Проверяет, имеет ли элемент какие-либо ограничения и удовлетворяет ли он им.
   */
  readonly checkValidity = (): boolean => {
    return !this.isError()
  }

  /**
   * Changes the validity data.<br>
   * Изменяет данные о валидности.
   * @param validation values for validity /<br>значения для валидности
   */
  set(validation: Record<string, any> | InputValidationItem): this {
    if (
      'status' in validation
      && 'validationMessage' in validation
      && 'value' in validation
    ) {
      this.validation.value = validation as InputValidationItem
    } else if (
      'target' in validation
      && (
        validation.target instanceof HTMLInputElement
        || validation.target instanceof HTMLTextAreaElement
      )
      && Number(validation.target.minLength) > -1
    ) {
      const input = validation.target

      this.validation.value = {
        status: input.checkValidity(),
        input,
        validationMessage: input.validationMessage,
        validity: input.validity,
        value: this.value.item.value
      }
    } else {
      this.validation.value = undefined
    }

    return this
  }

  /**
   * Check for global data.<br>
   * Проверка для глобальных данных.
   */
  protected checkGlobal(): InputValidationItem | undefined {
    if (this.props.validationMessage) {
      return {
        status: false,
        validationMessage: this.props.validationMessage,
        value: this.value.item.value
      }
    }

    return this.validation.value ?? undefined
  }

  /**
   * Check for selected data.<br>
   * Проверка для выбранных данных.
   */
  protected checkItem(): InputValidationItem | undefined {
    const values = this.value.itemByFull.value

    if (isArray(values)) {
      for (const value of values) {
        const check = this.input.value.check(value)

        if (!check.status) {
          return check
        }
      }
    } else {
      const check = this.input.value.check(values)

      if (!check.status) {
        return check
      }
    }

    return undefined
  }
}
