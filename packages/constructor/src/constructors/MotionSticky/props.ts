/**
 * Type describing style tokens.
 *
 * Тип, описывающий токены стиля.
 */
type MotionStickyPropsToken = {
  // :type [!] System label / Системная метка
  // :type [!] System label / Системная метка
}

/**
 * Interface representing incoming properties of the basic component.
 *
 * Интерфейс, представляющий входящие свойства базового компонента.
 */
export type MotionStickyPropsBasic = {
  /** Scroll container element or selector / Элемент контейнера прокрутки или селектор */
  elementScroll?: string | HTMLElement | Window
  /** CSS class to apply when the element becomes sticky / CSS-класс, применяемый, когда элемент становится липким */
  classActivity?: string
  /** HTML tag for the element / HTML-тег для элемента */
  tag?: string
}

/**
 * Type describing incoming properties.
 *
 * Тип, описывающий входящие свойства.
 */
export type MotionStickyProps = MotionStickyPropsBasic & MotionStickyPropsToken

/**
 * Default value for property.
 *
 * Значение по умолчанию для свойства.
 */
export const defaultsMotionSticky = {
  tag: 'div',
  ...{
    // :default [!] System label / Системная метка
    // :default [!] System label / Системная метка
  }
}
