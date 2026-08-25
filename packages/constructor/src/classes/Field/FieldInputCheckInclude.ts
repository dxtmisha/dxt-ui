import {
  anyToString,
  createElement,
  ErrorCenter,
  executeFunction,
  isFilled,
  isString,
  toArray
} from '@dxtmisha/functional'

import { CONSTRUCTOR_ERROR_GROUP } from '../../types/errorTypes'

import type { FieldCodeInclude } from './FieldCodeInclude'

import type {
  FieldElementDom,
  FieldPatternElement,
  FieldPatternItemOrFunction,
  FieldValidationItem
} from '../../types/fieldTypes'

/**
 * The class creates hidden input and runs native validation for pattern.
 *
 * Класс создаёт скрытый input и выполняет нативную валидацию по паттерну.
 */
export class FieldInputCheckInclude<Value = any> {
  /** Hidden input element for native validation / Скрытый input для нативной валидации */
  readonly input: HTMLInputElement | undefined

  /**
   * Constructor
   *
   * Конструктор
   * @param pattern property for verification / свойство для проверки
   * @param group group name / название группы
   * @param code object for error codes / объект для работы с кодами ошибок
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
   * Runs validation and returns result.
   *
   * Выполняет проверку и возвращает результат.
   * @param value value to check / значение для проверки
   * @returns validation item data / данные элемента валидации
   */
  check(value: Value): FieldValidationItem {
    const input = this.input

    if (input) {
      if (
        input.type === 'checkbox'
        || input.type === 'radio'
      ) {
        input.checked = Boolean(value)
      } else if (input.type === 'file') {
        return this.checkFile(input, value)
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
   * Runs validation for file input and returns result.
   *
   * Выполняет проверку для файлового инпута и возвращает результат.
   * @param input file input element / элемент файлового инпута
   * @param value checked value / проверяемое значение
   * @returns validation item data / данные элемента валидации
   */
  protected checkFile(
    input: HTMLInputElement,
    value: Value
  ): FieldValidationItem {
    try {
      if (value instanceof FileList) {
        input.files = value
      } else if (
        (value instanceof File || Array.isArray(value))
        && typeof DataTransfer !== 'undefined'
      ) {
        const dataTransfer = new DataTransfer()
        toArray(value).forEach((file) => {
          if (file instanceof File) {
            dataTransfer.items.add(file)
          }
        })
        input.files = dataTransfer.files
      } else {
        input.value = ''
      }
    } catch {
      ErrorCenter.on({
        group: CONSTRUCTOR_ERROR_GROUP,
        code: 'field-input-check-file'
      })
    }

    return this.checkByInput(input, value)
  }

  /**
   * Runs validation by input and returns result.
   *
   * Выполняет проверку по инпуту и возвращает результат.
   * @param input input element / элемент инпута
   * @param value checked value / проверяемое значение
   * @returns validation item data / данные элемента валидации
   */
  checkByInput(
    input: FieldElementDom,
    value?: Value
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
      value: value ?? input.value
    }
  }

  /**
   * Returns attributes for internal input.
   *
   * Возвращает атрибуты для внутреннего инпута.
   * @returns element attributes / атрибуты элемента
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
   * Returns the default group name.
   *
   * Возвращает название группы по умолчанию.
   * @returns group name / название группы
   */
  static getGroupDefault(): string {
    return 'check'
  }
}

/** List of input check classes / Список классов проверки ввода */
export type FieldInputCheckListInclude = Record<string, FieldInputCheckInclude>
