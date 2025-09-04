import { computed } from 'vue'
import { isFilled } from '@dxt-ui/functional'

import type { FieldMessageProps } from './props'
import type { FieldMessageSlots } from './types'

/**
 * Class for working with text
 *
 * Класс для работы с текстом
 */
export class FieldMessageMessage {
  /**
   * Constructor
   * @param props input data/ входные данные
   * @param slots object for working with slots/ объект для работы со слотами
   */
  constructor(
    protected readonly props: Readonly<FieldMessageProps>,
    protected readonly slots?: FieldMessageSlots
  ) {
  }

  /** Checks if there is text/ Проверяет, есть ли текст */
  readonly is = computed<boolean>(() =>
    isFilled(this.item.value)
    || Boolean(
      this.slots
      && (
        'helper' in this.slots
        || 'validation' in this.slots
      )
    )
  )

  /** Checks if there is an error/ Проверяет, есть ли ошибка */
  readonly isValidation = computed<boolean>(() =>
    isFilled(this.props.validationMessage)
    || Boolean(this.slots && 'validation' in this.slots)
  )

  /** Returns text/ Возвращает текст */
  readonly item = computed<string>(() => {
    if (this.props.validationMessage) {
      return this.props.validationMessage
    }

    if (this.props.helperMessage) {
      return this.props.helperMessage
    }

    return ''
  })
}
