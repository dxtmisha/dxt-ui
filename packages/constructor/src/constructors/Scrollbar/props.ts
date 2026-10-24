/**
 * Type describing token properties for scrollbar.
 *
 * Тип, описывающий токен-свойства для скроллбара.
 */
export type ScrollbarPropsToken = {
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
 * Type describing basic properties for scrollbar.
 *
 * Тип, описывающий базовые свойства для скроллбара.
 */
export type ScrollbarPropsBasic = {
  /** HTML tag for the scrollbar element / HTML-тег для элемента скроллбара */
  tag?: string
}

/**
 * Type describing incoming properties.
 *
 * Тип, описывающий входящие свойства.
 */
export type ScrollbarProps = ScrollbarPropsBasic & ScrollbarPropsToken

/**
 * Default value for property.
 *
 * Значение по умолчанию для свойства.
 */
export const defaultsScrollbar = {
  tag: 'div',
  ...{
    // :default [!] System label / Системная метка
    // :default [!] System label / Системная метка
  }
}
