import { type BleedPropsBasic, defaultsBleed } from '@dxtmisha/constructor/Bleed'

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
export type BleedProps = BleedPropsBasic & PropsToken

/**
 * Default value for property/ Значение по умолчанию для свойства
 */
export const defaults: object = {
  ...defaultsBleed,
  ...{
    // :default [!] System label / Системная метка
    // :default [!] System label / Системная метка
  }
}
