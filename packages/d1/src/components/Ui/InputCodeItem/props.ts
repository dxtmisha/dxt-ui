import { type InputCodeItemPropsBasic, defaultsInputCodeItem } from '@dxtmisha/constructor/InputCodeItem'

export const propsValues = {
  // :values [!] System label / Системная метка
  size: ['sm', 'md', 'lg', 'display']
  // :values [!] System label / Системная метка
}

type PropsToken = {
  // :type [!] System label / Системная метка
  disabled?: boolean
  success?: boolean
  error?: boolean
  hide?: boolean
  size?: 'sm' | 'md' | 'lg' | 'display'
  // :type [!] System label / Системная метка
}

/**
 * Type describing incoming properties/ Тип, описывающий входящие свойства
 */
export type InputCodeItemProps = InputCodeItemPropsBasic & PropsToken

/**
 * Default value for property/ Значение по умолчанию для свойства
 */
export const defaults: object = {
  ...defaultsInputCodeItem,
  ...{
    // :default [!] System label / Системная метка
    size: 'md'
    // :default [!] System label / Системная метка
  }
}
