import { type BreadcrumbsPropsBasic, defaultsBreadcrumbs } from '@dxtmisha/constructor/Breadcrumbs'
import type { BreadcrumbItemProps } from '../BreadcrumbItem'

export const propsValues = {
  // :values [!] System label / Системная метка
  // :values [!] System label / Системная метка
}

type PropsToken = {
  // :type [!] System label / Системная метка
  // :type [!] System label / Системная метка
}

/**
 * Type describing incoming properties/ Тип, описывающий входящие свойства
 */
export type BreadcrumbsProps = BreadcrumbsPropsBasic<BreadcrumbItemProps> & PropsToken

/**
 * Default value for property/ Значение по умолчанию для свойства
 */
export const defaults: object = {
  ...defaultsBreadcrumbs,
  ...{
    // :default [!] System label / Системная метка
    // :default [!] System label / Системная метка
  }
}
