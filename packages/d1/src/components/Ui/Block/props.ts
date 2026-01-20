import { type BlockPropsBasic, defaultsBlock } from '@dxtmisha/constructor/Block'
import type { IconProps } from '../Icon'

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
export type BlockProps = BlockPropsBasic<IconProps> & PropsToken

/**
 * Default value for property/ Значение по умолчанию для свойства
 */
export const defaults: object = {
  ...defaultsBlock,
  ...{
    // :default [!] System label / Системная метка
    // :default [!] System label / Системная метка
  }
}
