import type { LabelProps } from '../../types/labelTypes'

import type { ButtonPropsBasic, ButtonPropsInclude } from '../Button'
import type { IconPropsBasic } from '../Icon'
import type { MenuPropsBasic, MenuPropsInclude } from '../Menu'

import type { MenuButtonPropsTool } from './basicTypes'
import type { FieldSelectLiteProps } from '../../types/fieldTypes'

type MenuButtonPropsToken = {
  // :type [!] System label / Системная метка
  // :type [!] System label / Системная метка
}

export type MenuButtonPropsBasic<
  Icon extends IconPropsBasic = IconPropsBasic,
  Button extends ButtonPropsBasic = ButtonPropsBasic,
  Menu extends MenuPropsBasic = MenuPropsBasic
> = LabelProps
  & ButtonPropsInclude<Button>
  & FieldSelectLiteProps
  & MenuPropsInclude<Menu>
  & MenuButtonPropsTool<Icon>

/**
 * Type describing incoming properties.
 *
 * Тип, описывающий входящие свойства.
 */
export type MenuButtonProps = MenuButtonPropsBasic & MenuButtonPropsToken

/**
 * Default value for property.
 *
 * Значение по умолчанию для свойства.
 */
export const defaultsMenuButton = {
  labelSeparator: ':',
  hideLabelValue: true,
  hideValueIcon: true,
  ...{
    // :default [!] System label / Системная метка
    // :default [!] System label / Системная метка
  }
}
