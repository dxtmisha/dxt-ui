import { type AlertLinkPropsBasic, defaultsAlertLink } from '@dxtmisha/constructor/AlertLink'

export const propsValues = {
  // :values [!] System label / Системная метка
  // :values [!] System label / Системная метка
}

type PropsToken = {
  // :type [!] System label / Системная метка
  divider?: boolean
  // :type [!] System label / Системная метка
}

/**
 * Type describing incoming properties/ Тип, описывающий входящие свойства
 */
export type AlertLinkProps = AlertLinkPropsBasic & PropsToken

/**
 * Default value for property/ Значение по умолчанию для свойства
 */
export const defaults: object = {
  ...defaultsAlertLink,
  ...{
    // :default [!] System label / Системная метка
    divider: true
    // :default [!] System label / Системная метка
  }
}
