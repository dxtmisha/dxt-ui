import { type HeadroomPropsBasic, defaultsHeadroom } from '@dxtmisha/constructor/Headroom'

export const propsValues = {
  // :values [!] System label / Системная метка
  // :values [!] System label / Системная метка
}

type PropsToken = {
  // :type [!] System label / Системная метка
  disappears?: boolean
  // :type [!] System label / Системная метка
}

/**
 * Type describing incoming properties/ Тип, описывающий входящие свойства
 */
export type HeadroomProps = HeadroomPropsBasic & PropsToken

/**
 * Default value for property/ Значение по умолчанию для свойства
 */
export const defaults: object = {
  ...defaultsHeadroom,
  ...{
    // :default [!] System label / Системная метка
    // :default [!] System label / Системная метка
  }
}
