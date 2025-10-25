import { computed } from 'vue'
import { InputVisibility } from './InputVisibility'

import type { FieldBasicProps } from '../../types/fieldTypes'

/**
 * Class for working with the input type.
 *
 * Класс для работы с типом ввода.
 */
export class InputType {
  /**
   * Constructor
   * @param props input data/ входные данные
   * @param visibility object for working with visualization/ объект для работы с визуализацией
   */

  constructor(
    protected readonly props: FieldBasicProps,
    protected readonly visibility?: InputVisibility
  ) {
  }

  /**
   * Returns the input type.
   *
   * Возвращает тип ввода.
   */
  readonly item = computed<string>(() => {
    const type = this.props.type

    if (
      type === 'password'
      && this.visibility?.item.value
    ) {
      return 'text'
    }

    return type ?? 'text'
  })
}
