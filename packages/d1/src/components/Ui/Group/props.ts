import { type GroupPropsBasic, defaultsGroup } from '@dxtmisha/constructor/Group'

export const propsValues = {
  // :values [!] System label / Системная метка
  // :values [!] System label / Системная метка
}

type PropsToken = {
  // :type [!] System label / Системная метка
  // :type [!] System label / Системная метка
}

/**
 * Type describing incoming properties/ Тип, описывающий входящие свойства
 */
export type GroupProps = GroupPropsBasic & PropsToken

/**
 * Default value for property/ Значение по умолчанию для свойства
 */
export const defaults: object = {
  ...defaultsGroup,
  ...{
    // :default [!] System label / Системная метка
    // :default [!] System label / Системная метка
  }
}
