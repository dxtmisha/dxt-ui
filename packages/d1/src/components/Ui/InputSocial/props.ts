import { type InputSocialPropsBasic, defaultsInputSocial } from '@dxtmisha/constructor/InputSocial'

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
export type InputSocialProps = InputSocialPropsBasic & PropsToken

/**
 * Default value for property/ Значение по умолчанию для свойства
 */
export const defaults: object = {
  ...defaultsInputSocial,
  ...{
    // :default [!] System label / Системная метка
    // :default [!] System label / Системная метка
  }
}
