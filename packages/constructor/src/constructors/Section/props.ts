import type { IconPropsBasic } from '../Icon'
import type { BlockPropsBasic } from '../Block'
import type { HeaderPropsBasic } from '../Header'

export type SectionPropsToken = {
  // :type [!] System label / Системная метка
  // :type [!] System label / Системная метка
}

export type SectionPropsBasic<
  Icon extends IconPropsBasic = IconPropsBasic,
  Header extends HeaderPropsBasic = HeaderPropsBasic
> = BlockPropsBasic<Icon, Header>

/**
 * Type describing incoming properties.
 *
 * Тип, описывающий входящие свойства.
 */
export type SectionProps = SectionPropsBasic & SectionPropsToken

/**
 * Default value for property.
 *
 * Значение по умолчанию для свойства.
 */
export const defaultsSection = {
  area: 'section',
  tag: 'section',
  tagHeader: 'h2',
  ...{
    // :default [!] System label / Системная метка
    // :default [!] System label / Системная метка
  }
}
