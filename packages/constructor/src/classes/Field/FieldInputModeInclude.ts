import { computed } from 'vue'
import { FieldTypeInclude } from './FieldTypeInclude'

import type { FieldAllProps } from '../../types/fieldTypes'

/**
 * Class for getting the type of displayed keyboard.
 *
 * Класс для получения типа отображаемой клавиатуры.
 */
export class FieldInputModeInclude {
  /**
   * Constructor
   * @param props input data/ входные данные
   * @param type object for working with input type/ объект для работы с типом ввода
   */
  constructor(
    protected readonly props: FieldAllProps,
    protected readonly type: FieldTypeInclude
  ) {
  }

  /** Returns the keyboard name/ Возвращает название клавиатуры */
  readonly item = computed<string | undefined>(() => {
    if (this.props.inputMode) {
      return this.props.inputMode
    }

    switch (this.type.item.value) {
      case 'number':
      case 'datetime':
      case 'date':
      case 'year-month':
      case 'time':
      case 'hour-minute':
        return 'numeric'
      case 'number-format':
      case 'currency':
        return 'decimal'
      case 'tel':
        return 'tel'
      case 'email':
        return 'email'
      default:
        return undefined
    }
  })

  readonly autocomplete = computed<string | undefined>(() => {
    if (this.props.autocomplete) {
      return this.props.autocomplete
    }

    switch (this.type.item.value) {
      case 'search':
        return 'off'
      case 'email':
        return 'email'
      case 'password':
        return 'new-password'
      case 'tel':
        return 'tel'
      case 'url':
        return 'url'
    }

    return undefined
  })
}
