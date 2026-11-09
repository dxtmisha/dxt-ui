import { type ComponentOutletPropsBasic, defaultsComponentOutlet } from '@dxtmisha/constructor/ComponentOutlet'

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
export type ComponentOutletProps = ComponentOutletPropsBasic & PropsToken

/**
 * Default value for property/ Значение по умолчанию для свойства
 */
export const defaults: object = {
  ...defaultsComponentOutlet,
  ...{
    // :default [!] System label / Системная метка
    // :default [!] System label / Системная метка
  }
}
