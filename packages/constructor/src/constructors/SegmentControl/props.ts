import { defaultsTabsNavigation, type TabsNavigationPropsBasic } from '../TabsNavigation'
import type { TabItemPropsBasic } from '../TabItem'

type SegmentControlPropsToken = {
  // :type [!] System label / Системная метка
  divider?: boolean
  // :type [!] System label / Системная метка
}

export type SegmentControlPropsBasic<
  TabItem extends TabItemPropsBasic = TabItemPropsBasic
> = TabsNavigationPropsBasic<TabItem>

/**
 * Type describing incoming properties.
 *
 * Тип, описывающий входящие свойства.
 */
export type SegmentControlProps = SegmentControlPropsBasic & SegmentControlPropsToken

/**
 * Default value for property.
 *
 * Значение по умолчанию для свойства.
 */
export const defaultsSegmentControl = {
  ...defaultsTabsNavigation,
  horizontalScrollAlign: true,
  ...{
    // :default [!] System label / Системная метка
    // :default [!] System label / Системная метка
  }
}
