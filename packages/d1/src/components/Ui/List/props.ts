import { type ListPropsBasic, defaultsList } from '@dxtmisha/constructor/List'

export const propsValues = {
  // :values [!] System label / Системная метка
  axis: ['x', 'y']
  // :values [!] System label / Системная метка
}

type PropsToken = {
  // :type [!] System label / Системная метка
  focus?: boolean
  axis?: 'x' | 'y'
  divider?: boolean
  // :type [!] System label / Системная метка
}

/**
 * Type describing incoming properties/ Тип, описывающий входящие свойства
 */
export type ListProps = ListPropsBasic & PropsToken

/**
 * Default value for property/ Значение по умолчанию для свойства
 */
export const defaults: object = {
  ...defaultsList,
  ...{
    // :default [!] System label / Системная метка
    axis: 'y'
    // :default [!] System label / Системная метка
  }
}
