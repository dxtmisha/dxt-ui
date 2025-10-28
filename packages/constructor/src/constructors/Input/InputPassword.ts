import { computed } from 'vue'
import { FieldVisibilityInclude } from '../../classes/field/FieldVisibilityInclude'

import type { IconProps } from '../Icon'
import type { InputProps } from './props'

/**
 * Class for retrieving data to manage the password type.
 *
 * Класс для получения данных для управления типом пароля.
 */
export class InputPassword {
  protected visible: boolean = false

  /**
   * Constructor
   * @param props input data/ входные данные
   * @param visibility object for working with visualization/ объект для работы с визуализацией
   */

  constructor(
    protected readonly props: InputProps,
    protected readonly visibility: FieldVisibilityInclude
  ) {
  }

  /** Checks if the type is a password/ Проверяет, является ли тип паролем. */
  readonly is = computed<boolean>(() => this.props.type === 'password')

  /** Returns the icon value/ Возвращает значение иконки */
  readonly icon = computed<IconProps | undefined>(() => {
    if (this.is.value) {
      return {
        active: this.visibility.item.value,
        icon: this.props.iconVisibilityOff,
        iconActive: this.props.iconVisibility,
        dynamic: true
      }
    }

    return undefined
  })

  /**
   * Toggle value.
   *
   * Переключение значения.
   */
  toggle() {
    if (this.is.value) {
      this.visibility.toggle()
    }
  }
}
