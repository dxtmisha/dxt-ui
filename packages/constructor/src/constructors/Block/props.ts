import type { NumberOrString } from '@dxtmisha/functional'
import type { IconPropsBasic } from '../Icon'

import type { AreaPropsInclude } from '../../types/areaTypes'
import type { DescriptionProps } from '../../types/descriptionTypes'
import type { HeaderPropsBasic, HeaderPropsInclude } from '../Header'

/** Token properties generated from properties.json / Токен-свойства, сгенерированные из properties.json */
export type BlockPropsToken = {
  // :type [!] System label / Системная метка
  // :type [!] System label / Системная метка
}

/** Base properties for Block component / Базовые свойства для компонента Block */
export type BlockPropsBasic<
  Icon extends IconPropsBasic = IconPropsBasic,
  Header extends HeaderPropsBasic = HeaderPropsBasic
> = HeaderPropsInclude<Icon, Header>
  & DescriptionProps
  & AreaPropsInclude & {
    /** Secondary header or headline text / Вторичный заголовок или текст хедлайна */
    headline?: NumberOrString

    /** HTML tag for the container / HTML-тег для контейнера */
    tag?: string
  }

/**
 * Type describing incoming properties /
 * Тип, описывающий входящие свойства
 */
export type BlockProps = BlockPropsBasic & BlockPropsToken

/**
 * Default value for property /
 * Значение по умолчанию для свойства
 */
export const defaultsBlock: BlockProps = {
  area: 'block',
  tag: 'div',
  tagHeader: 'h3',
  ...{
    // :default [!] System label / Системная метка
    // :default [!] System label / Системная метка
  }
}
