import type { ConstrBind, ListSelectedList } from '@dxtmisha/functional'

import type { ChipPropsBasic } from '../Chip'
import type { ChipGroupData } from './basicTypes'
import type { ModelPropsSelected } from '../../types/modelTypes'

export type ChipGroupPropsToken = {
  // :type [!] System label / Системная метка
  // :type [!] System label / Системная метка
}

export type ChipGroupPropsBasic<
  Chip extends ChipPropsBasic = ChipPropsBasic
> = ModelPropsSelected<ListSelectedList> & {
  // Status
  readonly?: boolean
  selected?: ListSelectedList

  // Values
  list?: ChipGroupData

  // Styles
  iconWhenSelected?: boolean

  keyLabel?: string
  keyValue?: string

  chipAttrs?: ConstrBind<Chip>
}

/**
 * Type describing incoming properties.
 *
 * Тип, описывающий входящие свойства.
 */
export type ChipGroupProps = ChipGroupPropsBasic & ChipGroupPropsToken

/**
 * Default value for property.
 *
 * Значение по умолчанию для свойства.
 */
export const defaultsChipGroup = {
  readonly: true,
  ...{
    // :default [!] System label / Системная метка
    // :default [!] System label / Системная метка
  }
}
