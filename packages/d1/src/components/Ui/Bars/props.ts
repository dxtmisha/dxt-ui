import { type BarsPropsBasic, defaultsBars } from '@dxtmisha/constructor/Bars'

export const propsValues = {
  // :values [!] System label / Системная метка
  padding: ['sm', 'md', 'lg', 'ySm', 'yMd', 'yLg', 'none']
  // :values [!] System label / Системная метка
}

type PropsToken = {
  // :type [!] System label / Системная метка
  padding?: 'sm' | 'md' | 'lg' | 'ySm' | 'yMd' | 'yLg' | 'none'
  paddingByIndent?: boolean
  // :type [!] System label / Системная метка
}

/**
 * Type describing incoming properties/ Тип, описывающий входящие свойства
 */
export type BarsProps = BarsPropsBasic & PropsToken

/**
 * Default value for property/ Значение по умолчанию для свойства
 */
export const defaults: object = {
  ...defaultsBars,
  ...{
    // :default [!] System label / Системная метка
    paddingByIndent: true
    // :default [!] System label / Системная метка
  }
}
