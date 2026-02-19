import type { MotionAxisSelectedValue } from './basicTypes'

type MotionAxisPropsToken = {
  // :type [!] System label / Системная метка
  axis?: 'x' | 'y' | 'z'
  direction?: 'next' | 'back' | 'auto'
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
  ...{
    // :default [!] System label / Системная метка
    axis: 'x',
    direction: 'auto'
    // :default [!] System label / Системная метка
  }
}
