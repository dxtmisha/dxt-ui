import type {
  ApiFetch,
  ConstrBind,
  ListRecord,
  ListSelectedList,
  NormalOrPromise
} from '@dxt-ui/functional'

import type { ListPropsBasic } from '../List'
import type { ListItemProps, ListItemPropsBasic } from '../ListItem'
import type { BarsPropsBasic, BarsPropsInclude } from '../Bars'
import type { WindowPropsBasic, WindowPropsInclude } from '../Window'
import type { ModelProps } from '../../types/modelTypes'

interface MenuPropsToken {
  // :type [!] System label / Системная метка
  hideList?: boolean
  barsAdaptive?: 'showAlways'
  // :type [!] System label / Системная метка
}

export interface MenuPropsBasic<
  List extends ListPropsBasic = ListPropsBasic,
  ListItem extends ListItemPropsBasic = ListItemPropsBasic,
  Bars extends BarsPropsBasic = BarsPropsBasic,
  Window extends WindowPropsBasic = WindowPropsBasic
> extends BarsPropsInclude<Bars>,
  WindowPropsInclude<Window>,
  ModelProps {
  // Status
  selected?: ListSelectedList
  highlightLengthStart?: number

  // Value
  list?: ListRecord<ListItem>
  liteThreshold?: number

  ajax?: string | (() => NormalOrPromise<ListRecord<ListItem>>)
  request?: ApiFetch
  cache?: boolean

  keyLabel?: string
  keyValue?: string

  // Style
  tag?: ListItemProps['tag']

  listAttrs?: ConstrBind<List>
  itemAttrs?: ConstrBind<ListItem>

  // Technical
  isSelectedByValue?: boolean
}

/**
 * Type describing incoming properties.
 *
 * Тип, описывающий входящие свойства.
 */
export interface MenuProps extends MenuPropsBasic, MenuPropsToken {
}

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
  autoClose: true,
  ...{
    // :default [!] System label / Системная метка
    // :default [!] System label / Системная метка
  }
}
