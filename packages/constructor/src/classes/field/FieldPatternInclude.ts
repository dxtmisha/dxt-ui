import { computed } from 'vue'

const PATTERNS: Record<string, string> = {
  email: '[\\S]+@[\\S]{2,}\\.[\\w]{2,}',
  password: '[0-9a-zA-Z\\-!@#$%^&*]+'
}

/**
 * Class for working with checks by regular expressions.<br>
 * Класс для работы с проверкой по регулярным выражениям.
 */
export class FieldPatternInclude {
  /**
   * Constructor
   * @param props input data /<br>входные данные
   * @param type object for working with input type /<br>объект для работы с типом ввода
   */

  constructor(
    protected readonly props: InputPropsBasicForValue,
    protected readonly type: InputType
  ) {
  }

  /**
   * Returns regular expressions.<br>
   * Возвращает регулярные выражения.
   */
  readonly item = computed<string | undefined>(() => {
    return this.props.pattern ?? PATTERNS?.[this.type.item.value] ?? undefined
  })
}
