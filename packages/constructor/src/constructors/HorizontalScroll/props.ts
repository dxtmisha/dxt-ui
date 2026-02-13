type HorizontalScrollPropsToken = {
  // :type [!] System label / Системная метка
  flush?: boolean
  // :type [!] System label / Системная метка
}

export type HorizontalScrollPropsBasic = {
  // Styles
  flush?: boolean

  // Options
  tag?: string
}

/**
 * Type describing incoming properties.
 *
 * Тип, описывающий входящие свойства.
 */
export type HorizontalScrollProps = HorizontalScrollPropsBasic & HorizontalScrollPropsToken

/**
 * Default value for property.
 *
 * Значение по умолчанию для свойства.
 */
export const defaultsHorizontalScroll = {
  tag: 'div',
  ...{
    // :default [!] System label / Системная метка
    flush: true
    // :default [!] System label / Системная метка
  }
}
