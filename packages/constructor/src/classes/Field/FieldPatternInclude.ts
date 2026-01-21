import { computed } from 'vue'

import { FieldTypeInclude } from './FieldTypeInclude'

import type { FieldAllProps } from '../../types/fieldTypes'

const PATTERNS: Record<string, string> = {
  email: '[\\S]+@[\\S]{2,}\\.[\\w]{2,}',
  password: '[0-9a-zA-Z\\-!@#$%^&*]+'
}

/**
 * Class for working with checks by regular expressions.
 *
 * Класс для работы с проверкой по регулярным выражениям.
 */
export class FieldPatternInclude {
  /**
   * Constructor
   * @param props input data/ входные данные
   * @param type object for working with input type/ объект для работы с типом ввода
   */

  constructor(
    protected readonly props: FieldAllProps,
    protected readonly type?: FieldTypeInclude
  ) {
  }

  /** Returns regular expressions/ Возвращает регулярные выражения */
  readonly item = computed<string | undefined>(() => {
    if (this.props.pattern) {
      return this.props.pattern
    }

    if (this.type) {
      return PATTERNS?.[this.type.item.value]
    }

    return undefined
  })
}
