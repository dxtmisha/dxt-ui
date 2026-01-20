import type { IconPropsBasic } from '../Icon'
import type { BlockPropsBasic } from '../Block'

export type PagePropsToken = {
  // :type [!] System label / Системная метка
  // :type [!] System label / Системная метка
}

export type PagePropsBasic<
  Icon extends IconPropsBasic = IconPropsBasic
> = BlockPropsBasic<Icon>

/**
 * Type describing incoming properties.
 *
 * Тип, описывающий входящие свойства.
 */
export type PageProps = PagePropsBasic & PagePropsToken

/**
 * Default value for property.
 *
 * Значение по умолчанию для свойства.
 */
export const defaultsPage = {
  tag: 'main',
  tagHeader: 'h1',
  ...{
    // :default [!] System label / Системная метка
    // :default [!] System label / Системная метка
  }
}
