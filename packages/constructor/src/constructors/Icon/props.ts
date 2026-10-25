import type { ImagePropsBasic, ImageValue } from '../Image'
import type { SkeletonPropsInclude } from '../Skeleton'

import type { AriaLabelPropsInclude } from '../../types/ariaTypes'
import type { EventClickProps } from '../../types/eventClickTypes'
import type { RoleType } from '../../types/roleTypes'

/**
 * Component token properties.
 *
 * Токен-свойства компонента.
 */
export type IconPropsToken = {
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
  animationType?: 'type1' | 'type2'
  animationShow?: boolean
  // :type [!] System label / Системная метка
}

/**
 * Basic properties for the icon component.
 *
 * Базовые свойства для компонента иконки.
 */
export type IconPropsBasic<
  Image extends ImagePropsBasic = ImagePropsBasic
> = SkeletonPropsInclude
  & AriaLabelPropsInclude
  & EventClickProps
  & {
    // Status
    /** Active state of the icon / Активное состояние иконки */
    active?: boolean

    // Icon
    /** Value of the main icon / Значение основной иконки */
    icon?: ImageValue<Image>
    /** Value of the active icon / Значение активной иконки */
    iconActive?: ImageValue<Image>

    // ARIA
    /** ARIA role for the icon / ARIA-роль для иконки */
    role?: RoleType
    /** Tab index for keyboard navigation / Индекс табуляции для навигации с клавиатуры */
    tabindex?: number | string
  }

/**
 * Type describing incoming properties.
 *
 * Тип, описывающий входящие свойства.
 */
export type IconProps = IconPropsBasic & IconPropsToken

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
