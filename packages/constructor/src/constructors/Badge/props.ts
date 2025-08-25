import type { IconPropsBasic, IconPropsInclude } from '../Icon'
import type { LabelNumberProps } from '../../types/labelTypes'

interface BadgePropsToken {
  // :type [!] System label / Системная метка
  selected?: boolean
  hide?: boolean
  dot?: boolean
  overlap?: 'rectangular' | 'circular' | 'static'
  vertical?: 'top' | 'center' | 'bottom'
  horizontal?: 'right' | 'center' | 'left'
  // :type [!] System label / Системная метка
}

export interface BadgePropsBasic<
  Icon extends IconPropsBasic = IconPropsBasic
> extends IconPropsInclude<Icon>,
  LabelNumberProps {
}

/**
 * Type describing incoming properties.
 *
 * Тип, описывающий входящие свойства.
 */
export interface BadgeProps extends BadgePropsBasic, BadgePropsToken {
}

/**
 * Default value for property.
 *
 * Значение по умолчанию для свойства.
 */
export const defaultsBadge = {
  ...{
    // :default [!] System label / Системная метка
    overlap: 'rectangular',
    vertical: 'top',
    horizontal: 'right'
    // :default [!] System label / Системная метка
  }
}
