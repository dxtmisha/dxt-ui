import { defaultsTabsNavigation, type TabsNavigationPropsBasic } from '../TabsNavigation'
import type { HorizontalScrollPropsBasic } from '../HorizontalScroll'
import type { SegmentControlItemPropsBasic } from '../SegmentControlItem'

/** Design token properties for SegmentControl / Свойства дизайн-токенов для SegmentControl */
type SegmentControlPropsToken = {
  // :type [!] System label / Системная метка
  divider?: boolean
  // :type [!] System label / Системная метка
}

/**
 * Base properties for the SegmentControl component.
 *
 * Базовые свойства компонента SegmentControl.
 */
export type SegmentControlPropsBasic<
  SegmentControlItem extends SegmentControlItemPropsBasic = SegmentControlItemPropsBasic,
  HorizontalScroll extends HorizontalScrollPropsBasic = HorizontalScrollPropsBasic
> = TabsNavigationPropsBasic<SegmentControlItem, HorizontalScroll>

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
  horizontalScrollAlign: 'block' as const,
  horizontalScrollBleed: false,
  ...{
    // :default [!] System label / Системная метка
    // :default [!] System label / Системная метка
  }
}
