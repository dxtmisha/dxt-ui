import type { ElementOrWindow } from '@dxtmisha/functional-basic'

/**
 * Type describing token properties.
 *
 * Тип, описывающий токен-свойства.
 */
type HeadroomPropsToken = {
  // :type [!] System label / Системная метка
  /** Scroll behavior mode / Режим поведения прокрутки */
  scroll?: 'top' | 'disappears' | 'elevation' | 'border'
  // :type [!] System label / Системная метка
}

/**
 * Type describing basic properties.
 *
 * Тип, описывающий базовые свойства.
 */
export type HeadroomPropsBasic = {
  /** Target scrolling element or window / Элемент или окно для прокрутки */
  element?: ElementOrWindow
  /** Transform threshold in pixels for transformation calculations / Порог трансформации в пикселях */
  transform?: number
}

/**
 * Type describing incoming properties.
 *
 * Тип, описывающий входящие свойства.
 */
export type HeadroomProps = HeadroomPropsBasic & HeadroomPropsToken

/**
 * Default value for property.
 *
 * Значение по умолчанию для свойства.
 */
export const defaultsHeadroom = {
  transform: 0,
  ...{
    // :default [!] System label / Системная метка
    scroll: 'top'
    // :default [!] System label / Системная метка
  }
}
