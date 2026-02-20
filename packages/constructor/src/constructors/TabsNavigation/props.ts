import type { ConstrBind, ListRecord, ListSelectedList } from '@dxtmisha/functional'

import type { TabItemPropsBasic } from '../TabItem'
import type { HorizontalScrollPropsInclude } from '../HorizontalScroll'

import type { ModelPropsSelected } from '../../types/modelTypes'

type TabsNavigationPropsToken = {
  // :type [!] System label / Системная метка
  divider?: boolean
  // :type [!] System label / Системная метка
}

export type TabsNavigationPropsBasic<
  TabItem extends TabItemPropsBasic = TabItemPropsBasic
> = HorizontalScrollPropsInclude
  & ModelPropsSelected<ListSelectedList>
  & {
  // Status
    selected?: ListSelectedList

    // Value
    list?: ListRecord<TabItem>

    // Style
    tag?: TabItem['tag']

    // Options
    keyLabel?: string
    keyValue?: string

    // Attributes
    itemAttrs?: ConstrBind<TabItem>
  }

/**
 * Type describing incoming properties.
 *
 * Тип, описывающий входящие свойства.
 */
export type TabsNavigationProps = TabsNavigationPropsBasic & TabsNavigationPropsToken

/**
 * Default value for property.
 *
 * Значение по умолчанию для свойства.
 */
export const defaultsTabsNavigation = {
  horizontalScrollFlush: true,
  horizontalScrollAlign: 'left',
  ...{
    // :default [!] System label / Системная метка
    // :default [!] System label / Системная метка
  }
}
