import type { ChipProps } from '../Chip'
import { type ChipGroupPropsBasic, defaultsChipGroup } from '@dxtmisha/constructor/ChipGroup'

export const propsValues = {
  // :values [!] System label / Системная метка
  // :values [!] System label / Системная метка
}

export type PropsToken = {
  // :type [!] System label / Системная метка
  // :type [!] System label / Системная метка
}

/**
 * Type describing incoming properties/ Тип, описывающий входящие свойства
 */
export type ChipGroupProps = ChipGroupPropsBasic<ChipProps> & PropsToken

/**
 * Default value for property/ Значение по умолчанию для свойства
 */
export const defaults: object = {
  ...defaultsChipGroup,
  ...{
    // :default [!] System label / Системная метка
    // :default [!] System label / Системная метка
  }
}
