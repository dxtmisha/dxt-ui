import type { ImagePropsBasic } from '../Image'
import type { IconValue } from './basicTypes.ts'

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

export interface IconPropsBasic<
  Image extends ImagePropsBasic = ImagePropsBasic
> {
  // Status
  active?: boolean

  // Icon
  icon?: IconValue<Image>
  iconActive?: IconValue<Image>

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
