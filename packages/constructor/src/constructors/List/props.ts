import type {
  ConstrBind,
  ListRecord,
  ListSelectedItem,
  ListSelectedList
} from '@dxt-ui/functional'
import type { IconPropsBasic, IconValue } from '../Icon'
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
  highlight?: string
  highlightLengthStart?: number
  disabled?: boolean

  // Value
  list?: ListRecord<ListItem>

  keyLabel?: string
  keyValue?: string

  // Style
  tag?: 'div' | 'button' | 'a' | 'span' | string

  itemAttrs?: ConstrBind<ListItem>
  itemManagementAttrs?: ConstrBind<ListItem>
  itemGroupAttrs?: ConstrBind<ListItem>

  iconArrowDown?: IconValue<Icon>
  iconArrowRight?: IconValue<Icon>

  // Technical
  lite?: number
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
