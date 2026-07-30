import type { MotionFlipPropsInclude } from './basicTypes'

type MotionFlipPropsToken = {
  // :type [!] System label / Системная метка
  // :type [!] System label / Системная метка
}

export type MotionFlipPropsBasic = MotionFlipPropsInclude

/**
 * Type describing incoming properties.
 *
 * Тип, описывающий входящие свойства.
 */
export type MotionFlipProps = MotionFlipPropsBasic & MotionFlipPropsToken

/**
 * Default value for property.
 *
 * Значение по умолчанию для свойства.
 */
export const defaultsMotionFlip: MotionFlipPropsBasic = {
  disabled: false,
  ...{
    // :default [!] System label / Системная метка
    // :default [!] System label / Системная метка
  }
}
