// ai-none

import type { FieldVisibilityInclude } from '../../classes/Field/FieldVisibilityInclude'
import type { TextInclude } from '../../classes/TextInclude'

import type { IconProps } from '../Icon'
import type { InputProps } from './props'

/**
 * Class for retrieving data to manage the password type.
 *
 * Класс для получения данных для управления типом пароля.
 */
export class InputPassword {
  /**
   * Checks if the input type is password.
   *
   * Проверяет, является ли тип ввода паролем.
   * @param props input properties / входные свойства
   * @returns true if type is password / true, если тип — пароль
   */
  static is(props?: Readonly<InputProps>): boolean {
    return props?.type === 'password'
  }

  /**
   * Constructor
   *
   * Конструктор
   * @param props input data / входные данные
   * @param text function returning object for working with text / функция, возвращающая объект для работы с текстом
   * @param visibility function returning object for working with visualization / функция, возвращающая объект для работы с визуализацией
   */
  constructor(
    protected readonly props: Readonly<InputProps>,
    protected readonly text: () => TextInclude,
    protected readonly visibility: () => FieldVisibilityInclude
  ) {
  }

  /**
   * Returns the icon properties.
   *
   * Возвращает свойства иконки.
   * @returns icon properties or undefined / свойства иконки или undefined
   */
  get icon(): IconProps | undefined {
    if (this.is()) {
      const visible = this.visibility().item.value

      return {
        active: visible,
        icon: this.props.iconVisibility,
        iconActive: this.props.iconVisibilityOff,
        dynamic: true,
        ariaLabel: visible ? this.text().hide : this.text().show
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
    return InputPassword.is(this.props)
  }

  /**
   * Toggles the visibility of the password value.
   *
   * Переключает видимость значения пароля.
   */
  readonly toggle = (): void => {
    if (this.is()) {
      this.visibility().toggle()
    }
  }
}
