import type { ConstrBind, ListRecord, ListSelectedList } from '@dxtmisha/functional'
import type { TabItemPropsBasic } from '../TabItem'
import type { HorizontalScrollPropsInclude } from '../HorizontalScroll'

type TabsNavigationPropsToken = {
  // :type [!] System label / Системная метка
  scrollable?: boolean
  divider?: boolean
  // :type [!] System label / Системная метка
}

export type TabsNavigationPropsBasic<
  TabItem extends TabItemPropsBasic = TabItemPropsBasic
> = HorizontalScrollPropsInclude
  & {
    // Status
    'selected'?: ListSelectedList

    // Value
    'list'?: ListRecord<TabItem>

    // Style
    'tag'?: TabItem['tag']

    // Options
    'keyLabel'?: string
    'keyValue'?: string

    // Attributes
    'itemAttrs'?: ConstrBind<TabItem>

    // Event
    'modelSelected'?: boolean
    'onUpdate:selected'?: (value: boolean) => void
    'onUpdate:modelSelected'?: (value: boolean) => void
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
