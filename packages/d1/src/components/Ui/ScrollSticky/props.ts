import { type ScrollStickyPropsBasic, defaultsScrollSticky } from '@dxtmisha/constructor/ScrollSticky'

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
export type ScrollStickyProps = ScrollStickyPropsBasic & PropsToken

/**
 * Default value for property/ Значение по умолчанию для свойства
 */
export const defaults: object = {
  ...defaultsScrollSticky,
  ...{
    // :default [!] System label / Системная метка
    // :default [!] System label / Системная метка
  }
}
