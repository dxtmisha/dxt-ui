type HorizontalScrollPropsToken = {
  // :type [!] System label / Системная метка
  flush?: boolean
  align?: string | 'block' | 'center' | 'left' | 'right'
  // :type [!] System label / Системная метка
}

export type HorizontalScrollPropsBasic = {
  /** Styles/ Стили */
  /** Whether the scroll area is flush with the edges/ Прилегает ли область прокрутки к краям */
  flush?: boolean

  /** Options/ Опции */
  /** HTML tag for the scroll element/ HTML-тег для элемента прокрутки */
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
    flush: true,
    align: 'stretch'
    // :default [!] System label / Системная метка
  }
}
