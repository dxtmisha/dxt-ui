// ai-none

import { isFilled } from '@dxtmisha/functional'

import type { FieldMessageProps } from './props'
import type { FieldMessageSlots } from './types'

/**
 * Class for managing message strings (both helper and validation text).
 *
 * Класс для работы со строками сообщений (как вспомогательными текстами, так и текстами валидации).
 */
export class FieldMessageMessage {
  /**
   * Constructor
   *
   * Конструктор
   * @param props input data / входные данные
   * @param slots object for working with slots / объект для работы со слотами
   */
  constructor(
    protected readonly props: Readonly<FieldMessageProps>,
    protected readonly slots?: FieldMessageSlots
  ) {
  }

  /**
   * Returns text of the active message.
   *
   * Возвращает текст активного сообщения.
   * @returns message text / текст сообщения
   */
  get item(): string | undefined {
    if (isFilled(this.props.validationMessage)) {
      return this.props.validationMessage
    }

    if (isFilled(this.props.warningMessage)) {
      return this.props.warningMessage
    }

    if (isFilled(this.props.helperMessage)) {
      return this.props.helperMessage
    }

    return undefined
  }

  /**
   * Checks if there is any message text or active slot.
   *
   * Проверяет, есть ли текст сообщения или активный слот.
   * @returns boolean value / логическое значение
   */
  is(): boolean {
    return this.isHelper() || this.isWarning() || this.isValidation()
  }

  /**
   * Checks if there is a helper message or active helper slot.
   *
   * Проверяет, есть ли вспомогательное сообщение или активный слот helper.
   * @returns boolean value / логическое значение
   */
  isHelper(): boolean {
    return Boolean(
      isFilled(this.props.helperMessage)
      || this.slots?.helper
    )
  }

  /**
   * Checks if there is a warning message or active warning slot without validation errors.
   *
   * Проверяет, есть ли предупреждающее сообщение или слот warning при отсутствии ошибки валидации.
   * @returns boolean value / логическое значение
   */
  isWarning(): boolean {
    return Boolean(
      !this.isValidation()
      && (
        isFilled(this.props.warningMessage)
        || this.slots?.warning
      )
    )
  }

  /**
   * Checks if there is an error validation message or active validation slot.
   *
   * Проверяет, есть ли сообщение об ошибке валидации или активный слот валидации.
   * @returns boolean value / логическое значение
   */
  isValidation(): boolean {
    return Boolean(
      isFilled(this.props.validationMessage)
      || this.slots?.validation
    )
  }
}
