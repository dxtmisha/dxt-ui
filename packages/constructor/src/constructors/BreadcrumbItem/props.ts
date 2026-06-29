import type { IconLitePropsInclude, IconPropsBasic } from '../Icon'
import type { SkeletonPropsInclude } from '../Skeleton'

import type { EnabledProps } from '../../types/enabledTypes'
import type { EventClickProps } from '../../types/eventClickTypes'
import type { LabelProps } from '../../types/labelTypes'

type BreadcrumbItemPropsToken = {
  // :type [!] System label / Системная метка
  readonly?: boolean
  back?: boolean
  // :type [!] System label / Системная метка
}

export type BreadcrumbItemPropsBasic<
  Icon extends IconPropsBasic = IconPropsBasic
> = LabelProps
  & IconLitePropsInclude<Icon>
  & EnabledProps
  & EventClickProps
  & SkeletonPropsInclude
  & {
    /** Left arrow icon / Иконка стрелки влево */
    iconArrowLeft?: string
    /** Right arrow icon / Иконка стрелки вправо */
    iconArrowRight?: string
  }

/**
 * Type describing incoming properties.
 *
 * Тип, описывающий входящие свойства.
 */
export type BreadcrumbItemProps = BreadcrumbItemPropsBasic & BreadcrumbItemPropsToken

/**
 * Default value for property.
 *
 * Значение по умолчанию для свойства.
 */
export const defaultsBreadcrumbItem = {
  ...{
    // :default [!] System label / Системная метка
    // :default [!] System label / Системная метка
  }
}
