import type { ConstrBind } from '@dxt-ui/functional'
import type { ImageProps } from '../Image'

interface IconPropsToken {
  // :type [!] System label / Системная метка
  turn?: boolean
  disabled?: boolean
  hide?: boolean
  asPalette?: boolean
  dir?: boolean
  overlay?: boolean
  dynamic?: boolean
  start?: boolean
  end?: boolean
  high?: boolean
  animationType?: string | 'type1' | 'type2'
  animationShow?: boolean
  // :type [!] System label / Системная метка
}

export interface IconPropsBasic {
  // Status
  active?: boolean

  // Icon
  icon?: string | ConstrBind<ImageProps> | null
  iconActive?: string | ConstrBind<ImageProps> | null

  // Style
  isSkeleton?: boolean
}

/**
 * Type describing incoming properties.
 *
 * Тип, описывающий входящие свойства.
 */
export interface IconProps extends IconPropsBasic, IconPropsToken {
}

/**
 * Default value for property.
 *
 * Значение по умолчанию для свойства.
 */
export const defaultsIcon = {
  ...{
    // :default [!] System label / Системная метка
    animationType: 'type1'
    // :default [!] System label / Системная метка
  }
}
