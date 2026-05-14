import { type DividerPropsBasic, defaultsDivider } from '@dxtmisha/constructor/Divider'

export const propsValues = {
  // :values [!] System label / Системная метка
  size: ['sm', 'md', 'lg'],
  margin: ['sm', 'md', 'lg', 'none']
  // :values [!] System label / Системная метка
}

type PropsToken = {
  // :type [!] System label / Системная метка
  size?: 'sm' | 'md' | 'lg'
  margin?: 'sm' | 'md' | 'lg' | 'none'
  // :type [!] System label / Системная метка
}

/**
 * Type describing incoming properties/ Тип, описывающий входящие свойства
 */
export type DividerProps = DividerPropsBasic & PropsToken

/**
 * Default value for property/ Значение по умолчанию для свойства
 */
export const defaults: object = {
  ...defaultsDivider,
  ...{
    // :default [!] System label / Системная метка
    size: 'sm',
    margin: 'none'
    // :default [!] System label / Системная метка
  }
}
