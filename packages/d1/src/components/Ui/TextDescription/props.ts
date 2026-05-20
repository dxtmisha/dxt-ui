import { type TextDescriptionPropsBasic, defaultsTextDescription } from '@dxtmisha/constructor/TextDescription'

export const propsValues = {
  // :values [!] System label / Системная метка
  size: ['xs', 'sm', 'md']
  // :values [!] System label / Системная метка
}

type PropsToken = {
  // :type [!] System label / Системная метка
  size?: 'xs' | 'sm' | 'md'
  // :type [!] System label / Системная метка
}

/**
 * Type describing incoming properties/ Тип, описывающий входящие свойства
 */
export type TextDescriptionProps = TextDescriptionPropsBasic & PropsToken

/**
 * Default value for property/ Значение по умолчанию для свойства
 */
export const defaults: object = {
  ...defaultsTextDescription,
  ...{
    // :default [!] System label / Системная метка
    size: 'md'
    // :default [!] System label / Системная метка
  }
}
