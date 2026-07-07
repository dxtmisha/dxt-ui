import type { IconPropsBasic } from '../Icon'
import type { BadgePropsBasic } from '../Badge'
import {
  type TabItemPropsBasic
} from '../TabItem'

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

export type SegmentControlItemPropsBasic<
  Icon extends IconPropsBasic = IconPropsBasic,
  Badge extends BadgePropsBasic = BadgePropsBasic
> = TabItemPropsBasic<Icon, Badge>

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
  ...{
    // :default [!] System label / Системная метка
    // :default [!] System label / Системная метка
  }
}
