import type { ImagePropsBasic, ImageValue } from '../Image'
import type { SkeletonPropsInclude } from '../Skeleton'

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
> extends SkeletonPropsInclude {
  // Status
  active?: boolean

  // Icon
  /** Value of the main icon/ Значение основной иконки */
  icon?: ImageValue<Image>
  /** Value of the active icon/ Значение активной иконки */
  iconActive?: ImageValue<Image>
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
