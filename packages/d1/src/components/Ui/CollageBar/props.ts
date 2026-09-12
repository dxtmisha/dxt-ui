import { type CollageBarPropsBasic, defaultsCollageBar } from '@dxtmisha/constructor/CollageBar'

import type { IconProps } from '../Icon'
import type { ButtonProps } from '../Button'

export const propsValues = {
  // :values [!] System label / Системная метка
  position: ['top', 'bottom', 'static']
  // :values [!] System label / Системная метка
}

type PropsToken = {
  // :type [!] System label / Системная метка
  selected?: boolean
  position?: 'top' | 'bottom' | 'static'
  // :type [!] System label / Системная метка
}

/**
 * Type describing incoming properties/ Тип, описывающий входящие свойства
 */
export type CollageBarProps = CollageBarPropsBasic<IconProps, ButtonProps> & PropsToken

/**
 * Default value for property/ Значение по умолчанию для свойства
 */
export const defaults: object = {
  ...defaultsCollageBar,
  ...{
    // :default [!] System label / Системная метка
    position: 'static'
    // :default [!] System label / Системная метка
  }
}
