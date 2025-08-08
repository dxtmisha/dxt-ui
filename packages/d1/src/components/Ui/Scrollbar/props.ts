import { type ScrollbarPropsBasic, defaultsScrollbar } from '@dxt-ui/constructor/Scrollbar'

export const propsValues = {
  // :values [!] System label / Системная метка
  // :values [!] System label / Системная метка
}

interface PropsToken {
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
export interface ScrollbarProps extends ScrollbarPropsBasic, PropsToken {
}

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
