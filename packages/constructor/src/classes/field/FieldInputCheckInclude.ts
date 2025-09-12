import {
  anyToString,
  createElement,
  executeFunction,
  isFilled,
  isString
} from '@dxt-ui/functional'

import type { FieldCodeInclude } from './FieldCodeInclude'

import type {
  FieldElementDom,
  FieldPatternElement,
  FieldPatternItemOrFunction,
  FieldValidationItem
} from '../../types/fieldTypes'

/**
 * The class creates hidden input and runs native validation for pattern
 *
 * Класс создаёт скрытый input и выполняет нативную валидацию по паттерну
 */
export class FieldInputCheckInclude<Value = any> {
  /** Hidden input element for native validation/ Скрытый input для нативной валидации */
  readonly input: HTMLInputElement | undefined

  /**
   * Constructor
   * @param pattern property for verification/ свойство для проверки
   * @param group group name/ название группы
   * @param code object for error codes/ объект для работы с кодами ошибок
   */
  constructor(
    readonly pattern: FieldPatternItemOrFunction,
    readonly group: string = FieldInputCheckInclude.getGroupDefault(),
    protected readonly code?: FieldCodeInclude
  ) {
    this.input = createElement<HTMLInputElement>(
      undefined,
      'input',
      this.getAttributes()
    )
  }

  /**
   * Runs validation and returns result
   *
   * Выполняет проверку и возвращает результат
   */
  check(value: Value): FieldValidationItem {
    const input = this.input

    if (input) {
      if (
        input.type === 'checkbox'
        || input.type === 'radio'
      ) {
        input.checked = Boolean(value)
      } else {
        input.value = anyToString(value)
      }

      return this.checkByInput(input)
    }

    return {
      group: this.group,
      status: true,
      value
    }
  }

  /**
   * Runs validation by input and returns result
   *
   * Выполняет проверку по инпуту и возвращает результат
   * @param input input element/ элемент инпута
   */
  checkByInput(
    input: FieldElementDom
  ): FieldValidationItem {
    return {
      group: this.group,
      input,
      status: input.checkValidity(),
      validationMessage: input.validationMessage,
      validity: input.validity,
      validityMessage: this.code?.get(input.validity),
      required: input.required,
      pattern: this.pattern,
      value: input.value
    }
  }

  /**
   * Returns attributes for internal input
   *
   * Возвращает атрибуты для внутреннего инпута
   */
  protected getAttributes(): FieldPatternElement {
    const pattern = this.pattern

    if (isFilled(pattern)) {
      const attributes: FieldPatternElement = executeFunction(pattern)

      if (isFilled(attributes)) {
        if (isString(attributes)) {
          return { pattern: attributes }
        }

        return attributes
      }
    }

    return {}
  }

  /**
   * Returns the default group name
   *
   * Возвращает название группы по умолчанию
   */
  static getGroupDefault(): string {
    return 'check'
  }
}

export type FieldInputCheckListInclude = Record<string, FieldInputCheckInclude>
