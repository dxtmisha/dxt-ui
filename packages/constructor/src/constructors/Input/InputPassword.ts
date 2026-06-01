import { FieldVisibilityInclude } from '../../classes/Field/FieldVisibilityInclude'
import { TextInclude } from '../../classes/TextInclude'

import type { IconProps } from '../Icon'
import type { InputProps } from './props'

/**
 * Class for retrieving data to manage the password type.
 *
 * Класс для получения данных для управления типом пароля.
 */
export class InputPassword {
  /** Visibility status / Статус видимости */
  protected visible: boolean = false

  /**
   * Constructor
   *
   * Конструктор
   * @param props input data / входные данные
   * @param visibility object for working with visualization / объект для работы с визуализацией
   * @param text object for working with text / объект для работы с текстом
   */
  constructor(
    protected readonly props: InputProps,
    protected readonly visibility: FieldVisibilityInclude,
    protected readonly text: TextInclude
  ) {
  }

  /** Returns the icon properties / Возвращает свойства иконки */
  get icon(): IconProps | undefined {
    if (this.is()) {
      return {
        active: this.visibility.item.value,
        icon: this.props.iconVisibilityOff,
        iconActive: this.props.iconVisibility,
        dynamic: true,
        ariaLabel: this.visibility.item.value ? this.text.hide : this.text.show
      }
    }

    return undefined
  }

  /**
   * Checks if the type is a password.
   *
   * Проверяет, является ли тип паролем.
   * @returns true if type is password / true, если тип — пароль
   */
  is(): boolean {
    return this.props.type === 'password'
  }

  /**
   * Toggles the visibility of the password value.
   *
   * Переключает видимость значения пароля.
   */
  readonly toggle = (): void => {
    if (this.is()) {
      this.visibility.toggle()
    }
  }
}
