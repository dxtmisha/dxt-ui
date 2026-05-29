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
    if (this.props.validationMessage) {
      return this.props.validationMessage
    }

    if (this.props.helperMessage) {
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
    return Boolean(
      isFilled(this.item)
      || this.slots?.helper
      || this.slots?.validation
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
