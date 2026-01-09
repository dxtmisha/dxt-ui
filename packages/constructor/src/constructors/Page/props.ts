import type { IconPropsBasic } from '../Icon'
import type { BlockPropsBasic } from '../Block'

interface PagePropsToken {
  // :type [!] System label / Системная метка
  // :type [!] System label / Системная метка
}

export interface PagePropsBasic<
  Icon extends IconPropsBasic = IconPropsBasic
> extends BlockPropsBasic<Icon> {
}

/**
 * Type describing incoming properties.
 *
 * Тип, описывающий входящие свойства.
 */
export interface PageProps extends PagePropsBasic, PagePropsToken {
}

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
