import type { IconPropsBasic } from '../Icon'
import type { BlockPropsBasic } from '../Block'
import type { HeaderPropsBasic } from '../Header'

type GroupPropsToken = {
  // :type [!] System label / Системная метка
  // :type [!] System label / Системная метка
}

export type GroupPropsBasic<
  Icon extends IconPropsBasic = IconPropsBasic,
  Header extends HeaderPropsBasic = HeaderPropsBasic
> = BlockPropsBasic<Icon, Header>

/**
 * Type describing incoming properties.
 *
 * Тип, описывающий входящие свойства.
 */
export type GroupProps = GroupPropsBasic & GroupPropsToken

/**
 * Default value for property.
 *
 * Значение по умолчанию для свойства.
 */
export const defaultsGroup = {
  tag: 'div',
  tagHeader: 'h4',
  ...{
    // :default [!] System label / Системная метка
    // :default [!] System label / Системная метка
  }
}
