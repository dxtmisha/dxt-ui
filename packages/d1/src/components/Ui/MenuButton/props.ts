import { type MenuButtonPropsBasic, defaultsMenuButton } from '@dxtmisha/constructor/MenuButton'

import type { IconProps } from '../Icon'
import type { ButtonProps } from '../Button'
import type { MenuProps } from '../Menu'

export const propsValues = {
  // :values [!] System label / Системная метка
  // :values [!] System label / Системная метка
}

type PropsToken = {
  // :type [!] System label / Системная метка
  // :type [!] System label / Системная метка
}

/**
 * Type describing incoming properties/ Тип, описывающий входящие свойства
 */
export type MenuButtonProps = MenuButtonPropsBasic<
  IconProps,
  ButtonProps,
  MenuProps
> & PropsToken

/**
 * Default value for property/ Значение по умолчанию для свойства
 */
export const defaults: object = {
  ...defaultsMenuButton,
  iconArrowDown: 'keyboard_arrow_down',
  ...{
    // :default [!] System label / Системная метка
    // :default [!] System label / Системная метка
  }
}
