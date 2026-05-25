import type { LabelProps } from '../../types/labelTypes'

import type { ChipPropsBasic, ChipPropsInclude } from '../Chip'
import type { IconPropsBasic } from '../Icon'
import type { MenuPropsBasic, MenuPropsInclude } from '../Menu'

import type { FieldSelectLiteProps } from '../../types/fieldTypes'
import type { MenuButtonPropsTool } from '../MenuButton'

type MenuChipPropsToken = {
  // :type [!] System label / Системная метка
  // :type [!] System label / Системная метка
}

export type MenuChipPropsBasic<
  Icon extends IconPropsBasic = IconPropsBasic,
  Chip extends ChipPropsBasic = ChipPropsBasic,
  Menu extends MenuPropsBasic = MenuPropsBasic
> = LabelProps
  & ChipPropsInclude<Chip>
  & FieldSelectLiteProps
  & MenuPropsInclude<Menu>
  & MenuButtonPropsTool<Icon>

/**
 * Type describing incoming properties.
 *
 * Тип, описывающий входящие свойства.
 */
export type MenuChipProps = MenuChipPropsBasic & MenuChipPropsToken

/**
 * Default value for property.
 *
 * Значение по умолчанию для свойства.
 */
export const defaultsMenuChip = {
  labelSeparator: ':',
  hideLabelValue: true,
  hideValueIcon: true,
  ...{
    // :default [!] System label / Системная метка
    // :default [!] System label / Системная метка
  }
}
