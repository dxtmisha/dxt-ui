import type { AreaPropsInclude } from '../../types/areaTypes'
import type { CaptionProps } from '../../types/captionTypes'
import type { LabelProps } from '../../types/labelTypes'
import type { IconPropsBasic, IconPropsInclude } from '../Icon'

/** Token properties generated from properties.json / Токен-свойства, сгенерированные из properties.json */
export type HeaderPropsToken = {
  // :type [!] System label / Системная метка
  tag?: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6'
  // :type [!] System label / Системная метка
}

/** Base properties for Header component / Базовые свойства для компонента Header */
export type HeaderPropsBasic<
  Icon extends IconPropsBasic = IconPropsBasic
> = LabelProps
  & CaptionProps
  & IconPropsInclude<Icon>
  & AreaPropsInclude

/**
 * Type describing incoming properties /
 * Тип, описывающий входящие свойства
 */
export type HeaderProps = HeaderPropsBasic & HeaderPropsToken

/**
 * Default value for property /
 * Значение по умолчанию для свойства
 */
export const defaultsHeader: HeaderProps = {
  area: 'header',
  ...{
    // :default [!] System label / Системная метка
    tag: 'h3'
    // :default [!] System label / Системная метка
  }
}
