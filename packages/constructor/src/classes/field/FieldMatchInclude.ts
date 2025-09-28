import { anyToString, isObject, Translate } from '@dxtmisha/functional'

import { FieldElementInclude } from './FieldElementInclude'
import { FieldValueInclude } from './FieldValueInclude'
import { FieldInputCheckInclude } from './FieldInputCheckInclude'

import type { FieldAllProps, FieldValidationItem } from '../../types/fieldTypes'

/**
 * Class for checking input value matching with another element
 *
 * Класс для проверки совпадения вводимого значения с другим элементом
 */
export class FieldMatchInclude {
  /**
   * Constructor
   * @param props input data/ входные данные
   * @param element object for working with input element/ объект для работы с элементом ввода
   * @param value object for working with value/ объект для работы со значениями
   */
  constructor(
    protected readonly props: FieldAllProps,
    protected readonly element: FieldElementInclude,
    protected readonly value: FieldValueInclude
  ) {
  }

  /**
   * Checks whether matching verification is enabled
   *
   * Проверяет, включена ли проверка совпадения
   */
  is(): boolean {
    return Boolean(this.props.match)
  }

  /**
   * Returns selector used to find external element
   *
   * Возвращает селектор для поиска внешнего элемента
   */
  getSelectors() {
    if (this.is()) {
      if (isObject(this.props.match)) {
        return this.props.match.name
      }

      return this.props.match
    }

    return undefined
  }

  /**
   * Returns validation error text
   *
   * Возвращает текст ошибки валидации
   */
  getValidationMessage(): string {
    if (this.is()) {
      if (
        isObject(this.props.match)
        && this.props.match?.validationMessage
      ) {
        return this.props.match.validationMessage
      }

      return Translate.getSync('Your entries must match.')
    }

    return ''
  }

  /**
   * Checks value against external element
   *
   * Проверяет совпадение значения с внешним элементом
   */
  check(): FieldValidationItem | undefined {
    const selectors = this.getSelectors()

    if (selectors) {
      const input = this.element.findByName(selectors)

      if (
        input
        && anyToString(input.value) !== this.value.string.value
      ) {
        return {
          group: FieldInputCheckInclude.getGroupDefault(),
          status: false,
          input: this.element.get(),
          validationMessage: this.getValidationMessage(),
          value: this.value.item.value
        }
      }
    }

    return undefined
  }
}
