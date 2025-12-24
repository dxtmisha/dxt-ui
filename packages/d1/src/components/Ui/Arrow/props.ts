import { type ArrowPropsBasic, defaultsArrow } from '@dxtmisha/constructor/Arrow'

export const propsValues = {
  // :values [!] System label / Системная метка
  size: ['sm', 'md', 'lg']
  // :values [!] System label / Системная метка
}

interface PropsToken {
  // :type [!] System label / Системная метка
  size?: 'sm' | 'md' | 'lg'
  // :type [!] System label / Системная метка
}

/**
 * Type describing incoming properties/ Тип, описывающий входящие свойства
 */
export interface ArrowProps extends ArrowPropsBasic, PropsToken {
}

/**
 * Default value for property/ Значение по умолчанию для свойства
 */
export const defaults: object = {
  ...defaultsArrow,
  ...{
    // :default [!] System label / Системная метка
    size: 'md'
    // :default [!] System label / Системная метка
  }
}
