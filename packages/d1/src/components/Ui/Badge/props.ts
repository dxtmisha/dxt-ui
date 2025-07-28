import { type BadgePropsBasic, defaultsBadge } from '@dxt-ui/constructor/Badge'

export const propsValues = {
  // :values [!] System label / Системная метка
  overlap: ['rectangular', 'circular', 'static'],
  vertical: ['top', 'center', 'bottom'],
  horizontal: ['right', 'center', 'left'],
  size: ['sm', 'md', 'lg', 'none']
  // :values [!] System label / Системная метка
}

interface PropsToken {
  // :type [!] System label / Системная метка
  selected?: boolean
  hide?: boolean
  dot?: boolean
  overlap?: 'rectangular' | 'circular' | 'static'
  vertical?: 'top' | 'center' | 'bottom'
  horizontal?: 'right' | 'center' | 'left'
  primary?: boolean
  secondary?: boolean
  outline?: boolean
  size?: 'sm' | 'md' | 'lg' | 'none'
  // :type [!] System label / Системная метка
}

/**
 * Type describing incoming properties/ Тип, описывающий входящие свойства
 */
export interface BadgeProps extends BadgePropsBasic, PropsToken {
}

/**
 * Default value for property/ Значение по умолчанию для свойства
 */
export const defaults: object = {
  ...defaultsBadge,
  ...{
    // :default [!] System label / Системная метка
    overlap: 'rectangular',
    vertical: 'top',
    horizontal: 'right',
    primary: true,
    size: 'md'
    // :default [!] System label / Системная метка
  }
}
