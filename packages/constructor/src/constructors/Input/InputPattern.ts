import { computed } from 'vue'
import { InputType } from './InputType'

import type { FieldPatternProps } from '../../types/fieldTypes'

/**
 * Predefined patterns for different input types/
 * Предопределенные шаблоны для различных типов ввода
 */
const PATTERNS: Record<string, string> = {
  email: '[\\S]+@[\\S]{2,}\\.[\\w]{2,}',
  password: '[0-9a-zA-Z\\-!@#$%^&*]+'
}

/**
 * Class for working with checks by regular expressions.
 *
 * Класс для работы с проверкой по регулярным выражениям.
 */
export class InputPattern {
  /**
   * Constructor
   * @param props input data/ входные данные
   * @param type object for working with input type/ объект для работы с типом ввода
   */

  constructor(
    protected readonly props: FieldPatternProps,
    protected readonly type: InputType
  ) {
  }

  /**
   * Returns regular expressions/ Возвращает регулярные выражения
   */
  readonly item = computed<string | undefined>(() => {
    return this.props.pattern ?? PATTERNS?.[this.type.item.value] ?? undefined
  })
}
