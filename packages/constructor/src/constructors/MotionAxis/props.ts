import type { ModelPropsSelected } from '../../types/modelTypes'
import type { MotionAxisSelectedValue } from './basicTypes'

type MotionAxisPropsToken = {
  // :type [!] System label / Системная метка
  axis?: 'x' | 'y' | 'z'
  direction?: 'next' | 'back' | 'auto'
  // :type [!] System label / Системная метка
}

export type MotionAxisPropsBasic
  = ModelPropsSelected<MotionAxisSelectedValue>
    & {
      // Status
      selected?: MotionAxisSelectedValue

      // Style
      animationHeight?: boolean

      // Options
      inDom?: boolean
      inDomSlide?: string[]
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
