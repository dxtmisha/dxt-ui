import { type ListMenuPropsBasic, defaultsListMenu } from '@dxtmisha/constructor/ListMenu'

export const propsValues = {
  // :values [!] System label / Системная метка
  axis: ['x', 'y']
  // :values [!] System label / Системная метка
}

type PropsToken = {
  // :type [!] System label / Системная метка
  open?: boolean
  axis?: 'x' | 'y'
  divider?: boolean
  // :type [!] System label / Системная метка
}

/**
 * Type describing incoming properties/ Тип, описывающий входящие свойства
 */
export type ListMenuProps = ListMenuPropsBasic & PropsToken

/**
 * Default value for property/ Значение по умолчанию для свойства
 */
export const defaults: object = {
  ...defaultsListMenu,
  ...{
    // :default [!] System label / Системная метка
    // :default [!] System label / Системная метка
  }
}
