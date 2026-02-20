import type { AriaByPropsInclude } from '../../types/ariaTypes'
import type { ModelPropsOpen } from '../../types/modelTypes'

export type MotionTransformPropsToken = {
  // :type [!] System label / Системная метка
  section?: boolean
  animationHeadPosition?: 'top' | 'toBottom'
  adaptive?: 'planeAlways'
  // :type [!] System label / Системная метка
}

export type MotionTransformPropsBasic
  = AriaByPropsInclude
    & ModelPropsOpen
    & {
      // Status
      open?: boolean
      inDom?: boolean

      // Value
      ignore?: HTMLElement | string
      ignoreSelector?: string

      // Style
      clickOpen?: boolean
      autoClose?: boolean
      animationShow?: boolean

      tagBody?: string
    }

/**
 * Type describing incoming properties.
 *
 * Тип, описывающий входящие свойства.
 */
export type MotionTransformProps = MotionTransformPropsBasic & MotionTransformPropsToken

/**
 * Default value for property.
 *
 * Значение по умолчанию для свойства.
 */
export const defaultsMotionTransform = {
  clickOpen: true,
  autoClose: true,
  animationShow: true,
  tagBody: 'section',
  ...{
    // :default [!] System label / Системная метка
    animationHeadPosition: 'top'
    // :default [!] System label / Системная метка
  }
}
