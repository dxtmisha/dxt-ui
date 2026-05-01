import type { AreaProps } from '../../types/areaTypes'
import type { CaptionProps } from '../../types/captionTypes'
import type { LabelProps } from '../../types/labelTypes'
import type { IconPropsBasic, IconPropsInclude } from '../Icon'

type HeaderPropsToken = {
  // :type [!] System label / Системная метка
  tag?: string | 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6'
  // :type [!] System label / Системная метка
}

export type HeaderPropsBasic<
  Icon extends IconPropsBasic = IconPropsBasic
> = LabelProps
  & CaptionProps
  & IconPropsInclude<Icon>
  & AreaProps

/**
 * Type describing incoming properties.
 *
 * Тип, описывающий входящие свойства.
 */
export type HeaderProps = HeaderPropsBasic & HeaderPropsToken

/**
 * Default value for property.
 *
 * Значение по умолчанию для свойства.
 */
export const defaultsHeader = {
  area: 'header',
  ...{
    // :default [!] System label / Системная метка
    tag: 'h3'
    // :default [!] System label / Системная метка
  }
}
