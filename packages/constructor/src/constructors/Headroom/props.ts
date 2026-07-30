import type { HeadroomPropsInclude } from '../../types/headroomTypes'

/**
 * Type describing token properties.
 *
 * Тип, описывающий токен-свойства.
 */
type HeadroomPropsToken = {
  // :type [!] System label / Системная метка
  // :type [!] System label / Системная метка
}

/**
 * Type describing basic properties.
 *
 * Тип, описывающий базовые свойства.
 */
export type HeadroomPropsBasic = HeadroomPropsInclude & {
  /** HTML tag for the element / HTML-тег для элемента */
  tag?: string
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
  tag: 'div',
  transform: 0,
  ...{
    // :default [!] System label / Системная метка
    // :default [!] System label / Системная метка
  }
}
