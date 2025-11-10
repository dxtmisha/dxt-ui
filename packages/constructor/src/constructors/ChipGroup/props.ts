import type { ConstrBind, ListSelectedList } from '@dxtmisha/functional'

import type { ChipPropsBasic } from '../Chip'
import type { ChipGroupData } from './basicTypes'
import type { ModelPropsSelected } from '../../types/modelTypes'

interface ChipGroupPropsToken {
  // :type [!] System label / Системная метка
  // :type [!] System label / Системная метка
}

export interface ChipGroupPropsBasic<
  Chip extends ChipPropsBasic = ChipPropsBasic
> extends ModelPropsSelected<ListSelectedList> {
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
export interface ChipGroupProps extends ChipGroupPropsBasic, ChipGroupPropsToken {
}

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
