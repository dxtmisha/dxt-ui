import type { MotionAxisSelectedValue } from './basicTypes'

type MotionAxisPropsToken = {
  // :type [!] System label / Системная метка
  // :type [!] System label / Системная метка
}

export type MotionAxisPropsBasic = {
  // Status
  'selected'?: MotionAxisSelectedValue

  // Style
  'animationHeight'?: boolean

  // Options
  'inDom'?: boolean
  'inDomSlide'?: string[]

  // Event
  'modelSelected'?: MotionAxisSelectedValue
  'onUpdate:selected'?: (value: MotionAxisSelectedValue) => void
  'onUpdate:modelSelected'?: (value: MotionAxisSelectedValue) => void
}

/**
 * Type describing incoming properties.
 *
 * Тип, описывающий входящие свойства.
 */
export type MotionAxisProps = MotionAxisPropsBasic & MotionAxisPropsToken

/**
 * Default value for property.
 *
 * Значение по умолчанию для свойства.
 */
export const defaultsMotionAxis = {
  // TODO: Location for a user-defined default value / Место для пользовательского значения по умолчанию
  ...{
    // :default [!] System label / Системная метка
    // :default [!] System label / Системная метка
  }
}
