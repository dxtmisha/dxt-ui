/** Arrow position and direction tokens/ Токены позиционирования и направления стрелки */
export type ArrowPropsToken = {
  // :type [!] System label / Системная метка
  /** Arrow position relative to the target/ Позиция стрелки относительно цели */
  position?: 'auto' | 'top' | 'bottom' | 'left' | 'right'
  /** Whether to inverse the arrow orientation/ Инвертировать ли ориентацию стрелки */
  inverse?: boolean
  // :type [!] System label / Системная метка
}

/** Basic properties of the arrow component/ Основные свойства компонента стрелки */
export type ArrowPropsBasic = {
  /** The HTML element or its selector that the arrow points to/ HTML-элемент или его селектор, на который указывает стрелка */
  elementTarget?: HTMLElement | string
}

/**
 * Type describing incoming properties.
 *
 * Тип, описывающий входящие свойства.
 */
export type ArrowProps = ArrowPropsBasic & ArrowPropsToken

/**
 * Default value for property.
 *
 * Значение по умолчанию для свойства.
 */
export const defaultsArrow = {
  ...{
    // :default [!] System label / Системная метка
    position: 'auto'
    // :default [!] System label / Системная метка
  }
}
