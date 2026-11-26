import type { IconPropsBasic } from '../Icon'
import type { BadgePropsBasic } from '../Badge'
import type { ProgressPropsBasic } from '../Progress'
import {
  defaultsTabItem,
  type TabItemPropsBasic
} from '../TabItem'

/** Design token properties for SegmentControlItem / Свойства дизайн-токенов для SegmentControlItem */
type SegmentControlItemPropsToken = {
  // :type [!] System label / Системная метка
  focus?: boolean
  open?: boolean
  selected?: boolean
  readonly?: boolean
  disabled?: boolean
  adaptive?: 'iconAlways' | 'auto'
  container?: boolean
  // :type [!] System label / Системная метка
}

/**
 * Basic properties type for SegmentControlItem component /
 * Базовый тип свойств для компонента SegmentControlItem
 */
export type SegmentControlItemPropsBasic<
  Icon extends IconPropsBasic = IconPropsBasic,
  Badge extends BadgePropsBasic = BadgePropsBasic,
  Progress extends ProgressPropsBasic = ProgressPropsBasic
> = TabItemPropsBasic<Icon, Badge, Progress>

/**
 * Type describing incoming properties.
 *
 * Тип, описывающий входящие свойства.
 */
export type SegmentControlItemProps = SegmentControlItemPropsBasic & SegmentControlItemPropsToken

/**
 * Default value for property.
 *
 * Значение по умолчанию для свойства.
 */
export const defaultsSegmentControlItem = {
  ...defaultsTabItem,
  ...{
    // :default [!] System label / Системная метка
    // :default [!] System label / Системная метка
  }
}
