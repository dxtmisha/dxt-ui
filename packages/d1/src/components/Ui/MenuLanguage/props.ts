import { type MenuLanguagePropsBasic, defaultsMenuLanguage } from '@dxtmisha/constructor/MenuLanguage'

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
export type MenuLanguageProps = MenuLanguagePropsBasic & PropsToken

/**
 * Default value for property/ Значение по умолчанию для свойства
 */
export const defaults: object = {
  ...defaultsMenuLanguage,
  ...{
    // :default [!] System label / Системная метка
    // :default [!] System label / Системная метка
  }
}
