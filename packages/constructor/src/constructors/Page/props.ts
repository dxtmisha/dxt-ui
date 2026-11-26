import type { BlockPropsBasic } from '../Block'
import type { HeaderPropsBasic } from '../Header'
import type { IconPropsBasic } from '../Icon'

/** Token properties generated from properties.json / Токен-свойства, сгенерированные из properties.json */
export type PagePropsToken = {
  // :type [!] System label / Системная метка
  // :type [!] System label / Системная метка
}

/** Base properties for Page component / Базовые свойства для компонента Page */
export type PagePropsBasic<
  Icon extends IconPropsBasic = IconPropsBasic,
  Header extends HeaderPropsBasic = HeaderPropsBasic
> = BlockPropsBasic<Icon, Header>

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
export const defaultsPage: PageProps = {
  area: 'page',
  tag: 'main',
  tagHeader: 'h1',
  ...{
    // :default [!] System label / Системная метка
    // :default [!] System label / Системная метка
  }
}
