interface ScrollbarPropsToken {
  // :type [!] System label / Системная метка
  visible?: boolean
  divider?: boolean
  dividerTop?: boolean
  dividerBottom?: boolean
  inverse?: boolean
  // :type [!] System label / Системная метка
}

export interface ScrollbarPropsBasic {
  // Style
  tag?: string
}

/**
 * Type describing incoming properties.
 *
 * Тип, описывающий входящие свойства.
 */
export interface ScrollbarProps extends ScrollbarPropsBasic, ScrollbarPropsToken {
}

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
