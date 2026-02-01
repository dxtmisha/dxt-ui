import { type BarsPropsBasic, defaultsBars } from '@dxtmisha/constructor/Bars'
import type { ButtonProps } from '../Button'

export const propsValues = {
  // :values [!] System label / Системная метка
  padding: ['sm', 'md', 'lg', 'ySm', 'yMd', 'yLg', 'none']
  // :values [!] System label / Системная метка
}

export type PropsToken = {
  // :type [!] System label / Системная метка
  padding?: 'sm' | 'md' | 'lg' | 'ySm' | 'yMd' | 'yLg' | 'none'
  paddingByIndent?: boolean
  // :type [!] System label / Системная метка
}

/**
 * Type describing incoming properties/ Тип, описывающий входящие свойства
 */
export type BarsProps = BarsPropsBasic<ButtonProps> & PropsToken

/**
 * Default value for property/ Значение по умолчанию для свойства
 */
export const defaults: object = {
  ...defaultsBars,
  iconBack: 'arrow_back',
  iconClose: 'close',
  ...{
    // :default [!] System label / Системная метка
    paddingByIndent: true
    // :default [!] System label / Системная метка
  }
}
