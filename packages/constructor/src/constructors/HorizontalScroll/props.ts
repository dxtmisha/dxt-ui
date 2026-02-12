type HorizontalScrollPropsToken = {
  // :type [!] System label / Системная метка
  align?: 'left' | 'center' | 'end'
  // :type [!] System label / Системная метка
}

export type HorizontalScrollPropsBasic = {
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
    align: 'left'
    // :default [!] System label / Системная метка
  }
}
