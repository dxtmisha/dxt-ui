import { type TextLabelPropsBasic, defaultsTextLabel } from '@dxtmisha/constructor/TextLabel'

export const propsValues = {
  // :values [!] System label / Системная метка
  size: ['xs', 'sm', 'md', 'lg']
  // :values [!] System label / Системная метка
}

type PropsToken = {
  // :type [!] System label / Системная метка
  size?: 'xs' | 'sm' | 'md' | 'lg'
  // :type [!] System label / Системная метка
}

/**
 * Type describing incoming properties/ Тип, описывающий входящие свойства
 */
export type TextLabelProps = TextLabelPropsBasic & PropsToken

/**
 * Default value for property/ Значение по умолчанию для свойства
 */
export const defaults: object = {
  ...defaultsTextLabel,
  ...{
    // :default [!] System label / Системная метка
    size: 'md'
    // :default [!] System label / Системная метка
  }
}
