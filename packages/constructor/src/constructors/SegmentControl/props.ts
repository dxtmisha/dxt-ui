import { defaultsTabsNavigation, type TabsNavigationPropsBasic } from '../TabsNavigation'

type SegmentControlPropsToken = {
  // :type [!] System label / Системная метка
  scrollable?: boolean
  divider?: boolean
  // :type [!] System label / Системная метка
}

export type SegmentControlPropsBasic = TabsNavigationPropsBasic

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
  ...{
    // :default [!] System label / Системная метка
    // :default [!] System label / Системная метка
  }
}
