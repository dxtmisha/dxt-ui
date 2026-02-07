import type {
  ApiFetch,
  ConstrBind,
  ListRecord,
  ListSelectedList,
  NormalOrPromise
} from '@dxtmisha/functional'

import type { ListPropsBasic } from '../List'
import type { ListItemProps, ListItemPropsBasic } from '../ListItem'
import type { BarsPropsBasic, BarsPropsInclude } from '../Bars'
import type { WindowPropsBasic, WindowPropsInclude } from '../Window'

import type { ModelPropsSelected } from '../../types/modelTypes'
import type { RoleType } from '../../types/roleTypes'

export type MenuPropsToken = {
  // :type [!] System label / Системная метка
  hideList?: boolean
  barsAdaptive?: 'showAlways'
  // :type [!] System label / Системная метка
}

export type MenuPropsBasic<
  List extends ListPropsBasic = ListPropsBasic,
  ListItem extends ListItemPropsBasic = ListItemPropsBasic,
  Bars extends BarsPropsBasic = BarsPropsBasic,
  Window extends WindowPropsBasic = WindowPropsBasic
> = BarsPropsInclude<Bars>
  & WindowPropsInclude<Window>
  & ModelPropsSelected & {
  // Status
    selected?: ListSelectedList
    hideList?: boolean

    // Value
    list?: ListRecord<ListItem>
    liteThreshold?: number
    highlight?: string
    highlightLengthStart?: number
    filterMode?: boolean

    ajax?: string | (() => NormalOrPromise<ListRecord<ListItem>>)
    request?: ApiFetch
    cache?: boolean

    keyLabel?: string
    keyValue?: string

    max?: string | number

    // Style
    tag?: ListItemProps['tag']
    step?: string | number

    listAttrs?: ConstrBind<List>
    itemAttrs?: ConstrBind<ListItem>

    // ARIA
    roleItem?: RoleType

    // Technical
    isSelectedByValue?: boolean
    embedded?: boolean
  }

/**
 * Type describing incoming properties.
 *
 * Тип, описывающий входящие свойства.
 */
export type MenuProps = MenuPropsBasic & MenuPropsToken

/**
 * Default value for property.
 *
 * Значение по умолчанию для свойства.
 */
export const defaultsMenu = {
  liteThreshold: 40,
  barsHide: true,
  barsBackHide: true,
  tag: 'a',
  step: 1,
  autoClose: true,
  roleItem: 'menuitem',
  ...{
    // :default [!] System label / Системная метка
    // :default [!] System label / Системная метка
  }
}
