import { type BreadcrumbItemPropsBasic, defaultsBreadcrumbItem } from '@dxtmisha/constructor/BreadcrumbItem'

import type { IconProps } from '../Icon'

export const propsValues = {
  // :values [!] System label / Системная метка
  // :values [!] System label / Системная метка
}

type PropsToken = {
  // :type [!] System label / Системная метка
  readonly?: boolean
  back?: boolean
  // :type [!] System label / Системная метка
}

/**
 * Type describing incoming properties/ Тип, описывающий входящие свойства
 */
export type BreadcrumbItemProps = BreadcrumbItemPropsBasic<IconProps> & PropsToken

/**
 * Default value for property/ Значение по умолчанию для свойства
 */
export const defaults: object = {
  ...defaultsBreadcrumbItem,
  iconArrowLeft: 'chevron_left',
  iconArrowRight: 'chevron_right',
  ...{
    // :default [!] System label / Системная метка
    // :default [!] System label / Системная метка
  }
}
