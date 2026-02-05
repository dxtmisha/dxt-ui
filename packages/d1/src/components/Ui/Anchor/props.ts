import { type AnchorPropsBasic, defaultsAnchor } from '@dxtmisha/constructor/Anchor'

import type { IconProps } from '../Icon'
import type { TooltipProps } from '../Tooltip'

export const propsValues = {
  // :values [!] System label / Системная метка
  // :values [!] System label / Системная метка
}

export type PropsToken = {
  // :type [!] System label / Системная метка
  // :type [!] System label / Системная метка
}

/**
 * Type describing incoming properties/ Тип, описывающий входящие свойства
 */
export type AnchorProps = AnchorPropsBasic<IconProps, TooltipProps> & PropsToken

/**
 * Default value for property/ Значение по умолчанию для свойства
 */
export const defaults: object = {
  ...defaultsAnchor,
  iconLink: 'link',
  iconTag: 'tag',
  iconContentCopy: 'content_copy',
  ...{
    // :default [!] System label / Системная метка
    // :default [!] System label / Системная метка
  }
}
