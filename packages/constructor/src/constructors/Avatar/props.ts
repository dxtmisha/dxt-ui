import type { LabelProps } from '../../types/labelTypes'
import type { AriaLabelPropsInclude } from '../../types/ariaTypes'
import type { EventClickProps } from '../../types/eventClickTypes'

import type { ImagePropsBasic, ImagePropsInclude } from '../Image'
import type { BadgePropsBasic, BadgePropsInclude } from '../Badge'
import type { SkeletonPropsInclude } from '../Skeleton'

/**
 * Type describing tokens for properties.
 *
 * Тип, описывающий токены свойств.
 */
type AvatarPropsToken = {
  // :type [!] System label / Системная метка
  focus?: boolean
  disabled?: boolean
  readonly?: boolean
  // :type [!] System label / Системная метка
}

/**
 * Interface describing basic properties for the Avatar component.
 *
 * Интерфейс, описывающий основные свойства компонента аватара.
 */
export type AvatarPropsBasic<
  Image extends ImagePropsBasic = ImagePropsBasic,
  Badge extends BadgePropsBasic = BadgePropsBasic
> = LabelProps
  & ImagePropsInclude<Image>
  & BadgePropsInclude<Badge>
  & SkeletonPropsInclude
  & AriaLabelPropsInclude
  & EventClickProps
  & {
    /** Whether to shorten the text / Нужно ли сокращать текст */
    reduction?: boolean

    /** Tabindex property / Свойство tabindex */
    tabindex?: string | number
  }

/**
 * Type describing incoming properties.
 *
 * Тип, описывающий входящие свойства.
 */
export type AvatarProps = AvatarPropsBasic & AvatarPropsToken

/**
 * Default value for property.
 *
 * Значение по умолчанию для свойства.
 */
export const defaultsAvatar = {
  reduction: true,
  tabindex: '0',
  ...{
    // :default [!] System label / Системная метка
    // :default [!] System label / Системная метка
  }
}
