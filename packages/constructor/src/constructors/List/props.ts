import type {
  ConstrBind,
  ListRecord,
  ListSelectedItem,
  ListSelectedList
} from '@dxtmisha/functional'
import type { IconPropsBasic, IconValue } from '../Icon'
import type { RoleType } from '../../types/roleTypes'
import type { ListItemPropsBasic } from '../ListItem'

interface ListPropsToken {
  // :type [!] System label / Системная метка
  axis?: 'x' | 'y'
  divider?: boolean
  // :type [!] System label / Системная метка
}

export interface ListPropsBasic<
  Icon extends IconPropsBasic = IconPropsBasic,
  ListItem extends ListItemPropsBasic = ListItemPropsBasic
> {
  // Status
  focus?: ListSelectedItem
  selected?: ListSelectedList
  disabled?: boolean
  lite?: boolean

  // Value
  list?: ListRecord<ListItem>
  liteThreshold?: number
  highlight?: string
  highlightLengthStart?: number
  filterMode?: boolean

  keyLabel?: string
  keyValue?: string

  max?: string | number

  // Style
  tag?: 'div' | 'button' | 'a' | 'span' | string

  axis?: 'x' | 'y'
  divider?: boolean

  itemAttrs?: ConstrBind<ListItem>
  itemManagementAttrs?: ConstrBind<ListItem>
  itemGroupAttrs?: ConstrBind<ListItem>
  itemMenuAttrs?: ConstrBind<ListItem>

  iconArrowDown?: IconValue<Icon>
  iconArrowRight?: IconValue<Icon>

  // ARIA
  roleItem?: RoleType

  // Technical
  control?: boolean
}

/**
 * Type describing incoming properties.
 *
 * Тип, описывающий входящие свойства.
 */
export interface ListProps extends ListPropsBasic, ListPropsToken {
}

/**
 * Default value for property.
 *
 * Значение по умолчанию для свойства.
 */
export const defaultsList = {
  keyLabel: 'label',
  keyValue: 'value',
  tag: 'div',
  ...{
    // :default [!] System label / Системная метка
    axis: 'y'
    // :default [!] System label / Системная метка
  }
}
