import type { IconPropsBasic } from '../Icon'

import type { DescriptionProps } from '../../types/descriptionTypes'
import { type HeaderPropsBasic, type HeaderPropsInclude } from '../Header'

export type BlockPropsToken = {
  // :type [!] System label / Системная метка
  // :type [!] System label / Системная метка
}

export type BlockPropsBasic<
  Icon extends IconPropsBasic = IconPropsBasic,
  Header extends HeaderPropsBasic = HeaderPropsBasic
> = HeaderPropsInclude<Icon, Header>
  & DescriptionProps & {
    /** Secondary header or headline text/ Вторичный заголовок или текст хедлайна */
    headline?: string

    /** HTML tag for the container/ HTML-тег для контейнера */
    tag?: string
  }

/**
 * Type describing incoming properties.
 *
 * Тип, описывающий входящие свойства.
 */
export type BlockProps = BlockPropsBasic & BlockPropsToken

/**
 * Default value for property.
 *
 * Значение по умолчанию для свойства.
 */
export const defaultsBlock = {
  tag: 'div',
  tagHeader: 'h3',
  ...{
    // :default [!] System label / Системная метка
    // :default [!] System label / Системная метка
  }
}
