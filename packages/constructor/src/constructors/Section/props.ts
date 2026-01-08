import type { IconPropsBasic } from '../Icon'
import type { BlockPropsBasic } from '../Block'

interface SectionPropsToken {
  // :type [!] System label / Системная метка
  // :type [!] System label / Системная метка
}

export interface SectionPropsBasic<
  Icon extends IconPropsBasic = IconPropsBasic
> extends BlockPropsBasic<Icon> {
}

/**
 * Type describing incoming properties.
 *
 * Тип, описывающий входящие свойства.
 */
export interface SectionProps extends SectionPropsBasic, SectionPropsToken {
}

/**
 * Default value for property.
 *
 * Значение по умолчанию для свойства.
 */
export const defaultsSection = {
  tag: 'section',
  tagHeader: 'h2',
  ...{
    // :default [!] System label / Системная метка
    // :default [!] System label / Системная метка
  }
}
