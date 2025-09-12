import { computed, ref } from 'vue'

import { FieldInputCheckInclude } from './FieldInputCheckInclude'

import type { FieldElementInclude } from './FieldElementInclude'
import type { FieldAttributesInclude } from './FieldAttributesInclude'
import type { FieldChangeInclude } from './FieldChangeInclude'
import type { FieldValueInclude } from './FieldValueInclude'
import type { FieldCodeInclude } from './FieldCodeInclude'
import type { FieldMatchInclude } from './FieldMatchInclude'

import type { FieldAllProps, FieldValidationItem } from '../../types/fieldTypes'

/**
 * Class for working with validity
 *
 * Класс для работы с валидностью
 */
export class InputValidation {
  /** Internal validation state/ Внутреннее состояние валидации */
  protected readonly validation = ref<FieldValidationItem>()

  /**
   * Constructor
   * @param props input data/ входные данные
   * @param element object for working with input element/ объект для работы с элементом ввода
   * @param attributes object for working with input attributes/ объект для работы с атрибутами ввода
   * @param value object for value work/ объект для работы со значениями
   * @param change object for change state/ объект для состояния изменения
   * @param code object for error codes/ объект для работы с кодами ошибок
   * @param match object for match checking/ объект для проверки совпадений
   */
  constructor(
    protected readonly props: FieldAllProps,
    protected readonly element: FieldElementInclude,
    protected readonly attributes: FieldAttributesInclude,
    protected readonly value: FieldValueInclude,
    protected readonly change?: FieldChangeInclude,
    protected readonly code?: FieldCodeInclude,
    protected readonly match?: FieldMatchInclude
  ) {
  }

  /** Hidden input element for native validation/ Скрытый input для нативной валидации */
  protected readonly input = computed<FieldInputCheckInclude>(
    () => new FieldInputCheckInclude(
      this.attributes.listForCheck.value,
      undefined,
      this.code
    )
  )

  /** Returns error data/ Возвращает данные об ошибке */
  readonly item = computed<FieldValidationItem>(() => {
    const global = this.checkGlobal()

    if (global) {
      return global
    }

    const check = this.checkItem() ?? this.match?.check()

    if (check) {
      return check
    }

    return this.getValidationItemNone()
  })

  /** Returns error string/ Возвращает строку об ошибке */
  readonly message = computed<string>(() => {
    if (this.props.validationMessage) {
      return this.props.validationMessage
    }

    if (
      !this.change
      || this.change.is()
    ) {
      const data = this.item.value

      return data.validityMessage
        ?? data.validationMessage
        ?? ''
    }

    return ''
  })

  /**
   * Checks if there is an error
   *
   * Проверяет, есть ли ошибка
   */
  isError(): boolean {
    return !this.item.value?.status
  }

  /**
   * Checks whether the element has constraints and satisfies them
   *
   * Проверяет, имеет ли элемент ограничения и удовлетворяет ли им
   */
  readonly checkValidity = (): boolean => {
    return !this.isError()
  }

  /**
   * Changes the validity data
   *
   * Изменяет данные о валидности
   * @param validation values for validity/ значения для валидности
   */
  set(validation: Record<string, any> | FieldValidationItem): this {
    if (
      'status' in validation
      && 'validationMessage' in validation
      && 'value' in validation
    ) {
      this.validation.value = validation as FieldValidationItem
    } else if (
      'target' in validation
      && (
        validation.target instanceof HTMLInputElement
        || validation.target instanceof HTMLTextAreaElement
      )
      && Number(validation.target.minLength) > -1
    ) {
      this.validation.value = this.input.value.checkByInput(validation.target)
    } else {
      this.validation.value = undefined
    }

    return this
  }

  /**
   * Returns an empty validation item
   *
   * Возвращает пустой элемент валидации
   */
  protected getValidationItemNone(): FieldValidationItem {
    return {
      group: FieldInputCheckInclude.getGroupDefault(),
      status: true,
      value: undefined
    }
  }

  /**
   * Check for global data
   *
   * Проверка для глобальных данных
   */
  protected checkGlobal(): FieldValidationItem | undefined {
    if (this.props.validationMessage) {
      return {
        group: FieldInputCheckInclude.getGroupDefault(),
        status: false,
        validationMessage: this.props.validationMessage,
        value: this.value.item.value
      }
    }

    return this.validation.value ?? undefined
  }

  /**
   * Check for selected data
   *
   * Проверка для выбранных данных
   */
  protected checkItem(): FieldValidationItem | undefined {
    const values = this.value.getToArray()

    for (const value of values) {
      const check = this.checkByInput(value)

      if (!check.status) {
        return check
      }
    }

    return undefined
  }

  /**
   * Checks the value using hidden input element
   * @param value value to check/ значение для проверки
   *
   * Проверяет значение с помощью скрытого input
   */
  protected checkByInput(value: any): FieldValidationItem {
    return this.input.value.check(value)
  }
}
