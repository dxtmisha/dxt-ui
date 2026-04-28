import { type SectionPropsBasic, defaultsSection } from '@dxtmisha/constructor/Section'
import type { IconProps } from '../Icon'
import type { HeaderProps } from '../Header'

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
export type SectionProps = SectionPropsBasic<IconProps, HeaderProps> & PropsToken

/**
 * Default value for property/ Значение по умолчанию для свойства
 */
export const defaults: object = {
  ...defaultsSection,
  ...{
    // :default [!] System label / Системная метка
    // :default [!] System label / Системная метка
  }
}
