import type { ConstrBind } from '@dxtmisha/functional'

import type { BreadcrumbItemProps } from '../BreadcrumbItem'

/**
 * Type describing token properties of the Breadcrumbs component.
 *
 * Тип, описывающий свойства токенов компонента Breadcrumbs.
 */
type BreadcrumbsPropsToken = {
  // :type [!] System label / Системная метка
  // :type [!] System label / Системная метка
}

/**
 * Type describing basic properties of the Breadcrumbs component.
 *
 * Тип, описывающий базовые свойства компонента Breadcrumbs.
 */
export type BreadcrumbsPropsBasic<
  BreadcrumbItem extends BreadcrumbItemProps = BreadcrumbItemProps
> = {
  /** List of breadcrumb items / Список элементов хлебных крошек */
  list?: ConstrBind<BreadcrumbItem>[]
}

/**
 * Type describing incoming properties.
 *
 * Тип, описывающий входящие свойства.
 */
export type BreadcrumbsProps = BreadcrumbsPropsBasic & BreadcrumbsPropsToken

/**
 * Default value for property.
 *
 * Значение по умолчанию для свойства.
 */
export const defaultsBreadcrumbs = {
  ...{
    // :default [!] System label / Системная метка
    // :default [!] System label / Системная метка
  }
}
