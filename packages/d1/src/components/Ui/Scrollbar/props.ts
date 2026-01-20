import { type ScrollbarPropsBasic, defaultsScrollbar } from '@dxtmisha/constructor/Scrollbar'

export const propsValues = {
  // :values [!] System label / Системная метка
  // :values [!] System label / Системная метка
}

export type PropsToken = {
  // :type [!] System label / Системная метка
  visible?: boolean
  divider?: boolean
  dividerTop?: boolean
  dividerBottom?: boolean
  dividerHide?: boolean
  inverse?: boolean
  standard?: boolean
  // :type [!] System label / Системная метка
}

/**
 * Type describing incoming properties/ Тип, описывающий входящие свойства
 */
export type ScrollbarProps = ScrollbarPropsBasic & PropsToken

/**
 * Default value for property/ Значение по умолчанию для свойства
 */
export const defaults: object = {
  ...defaultsScrollbar,
  ...{
    // :default [!] System label / Системная метка
    // :default [!] System label / Системная метка
  }
}
