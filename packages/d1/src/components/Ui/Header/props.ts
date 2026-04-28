import { type HeaderPropsBasic, defaultsHeader } from '@dxtmisha/constructor/Header'
import type { IconProps } from '../Icon'

export const propsValues = {
  // :values [!] System label / Системная метка
  tag: ['h1', 'h2', 'h3', 'h4', 'h5', 'h6']
  // :values [!] System label / Системная метка
}

type PropsToken = {
  // :type [!] System label / Системная метка
  tag?: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6'
  // :type [!] System label / Системная метка
}

/**
 * Type describing incoming properties/ Тип, описывающий входящие свойства
 */
export type HeaderProps = HeaderPropsBasic<IconProps> & PropsToken

/**
 * Default value for property/ Значение по умолчанию для свойства
 */
export const defaults: object = {
  ...defaultsHeader,
  ...{
    // :default [!] System label / Системная метка
    tag: 'h3'
    // :default [!] System label / Системная метка
  }
}
