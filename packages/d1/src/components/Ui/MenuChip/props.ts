import { type MenuChipPropsBasic, defaultsMenuChip } from '@dxtmisha/constructor/MenuChip'
import type { IconProps } from '../Icon'
import type { ChipProps } from '../Chip'
import type { InputProps } from '../Input'
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
export type MenuChipProps = MenuChipPropsBasic<
  IconProps,
  ChipProps,
  InputProps,
  MenuProps
> & PropsToken

/**
 * Default value for property/ Значение по умолчанию для свойства
 */
export const defaults: object = {
  ...defaultsMenuChip,
  iconArrowDown: 'keyboard_arrow_down',
  iconSearch: 'search',
  menuAttrs: {
    itemAttrs: {
      dense: true
    }
  },
  inputSearchAttrs: {
    fieldAttrs: {
      size: 'sm'
    }
  },
  ...{
    // :default [!] System label / Системная метка
    // :default [!] System label / Системная метка
  }
}
