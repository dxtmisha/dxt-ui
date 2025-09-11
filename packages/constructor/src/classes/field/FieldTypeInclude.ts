import { computed } from 'vue'
import { InputVisibility } from './InputVisibility'

import type { InputPropsBasicForValue } from './typesBasic'

/**
 * Class for working with the input type.<br>
 * Класс для работы с типом ввода.
 */
export class FieldTypeInclude {
  /**
   * Constructor
   * @param props input data /<br>входные данные
   * @param visibility object for working with visualization /<br>объект для работы с визуализацией
   */

  constructor(
    protected readonly props: InputPropsBasicForValue,
    protected readonly visibility: InputVisibility
  ) {
  }

  /**
   * Returns the input type.<br>
   * Возвращает тип ввода.
   */
  readonly item = computed<string>(() => {
    if (this.props.arrow) {
      return 'number'
    }

    const type = this.props.type

    if (
      type === 'password'
      && this.visibility.item.value
    ) {
      return 'text'
    }

    return type ?? 'text'
  })
}
