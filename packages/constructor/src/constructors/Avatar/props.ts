import type { LabelProps } from '../../types/labelTypes'

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
  ...{
    // :default [!] System label / Системная метка
    // :default [!] System label / Системная метка
  }
}
