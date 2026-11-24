import type { BreadcrumbItemProps, BreadcrumbItemPropsInclude } from '../BreadcrumbItem'
import type { SkeletonPropsInclude } from '../Skeleton'

import type { TextBreadcrumbPropsInclude } from '../../types/textTypes'

/** Token properties generated from properties.json / Токен-свойства, сгенерированные из properties.json */
export type BreadcrumbsPropsToken = {
  // :type [!] System label / Системная метка
  // :type [!] System label / Системная метка
}

/** Base properties for Breadcrumbs component / Базовые свойства для компонента Breadcrumbs */
export type BreadcrumbsPropsBasic<
  BreadcrumbItem extends BreadcrumbItemProps = BreadcrumbItemProps
> = TextBreadcrumbPropsInclude
  & SkeletonPropsInclude
  & BreadcrumbItemPropsInclude<BreadcrumbItem>

/**
 * Type describing incoming properties /
 * Тип, описывающий входящие свойства
 */
export type BreadcrumbsProps = BreadcrumbsPropsBasic & BreadcrumbsPropsToken

/**
 * Default value for property /
 * Значение по умолчанию для свойства
 */
export const defaultsBreadcrumbs: BreadcrumbsProps = {
  ...{
    // :default [!] System label / Системная метка
    // :default [!] System label / Системная метка
  }
}
