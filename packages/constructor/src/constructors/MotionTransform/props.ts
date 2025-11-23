import type { roleType } from '../../types/roleTypes'

interface MotionTransformPropsToken {
  // :type [!] System label / Системная метка
  section?: boolean
  animationHeadPosition?: 'top' | 'toBottom'
  adaptive?: 'planeAlways'
  // :type [!] System label / Системная метка
}

export interface MotionTransformPropsBasic {
  // Status
  'open'?: boolean
  'inDom'?: boolean

  // Value
  'ignore'?: HTMLElement | string
  'ignoreSelector'?: string

  // Style
  'clickOpen'?: boolean
  'autoClose'?: boolean
  'animationShow'?: boolean

  'tagBody'?: string

  // Event
  'modelOpen'?: boolean
  'onUpdate:open'?: (value: boolean) => void
  'onUpdate:modelOpen'?: (value: boolean) => void

  // ARIA
  'role'?: roleType
  'ariaLabelledby'?: string
  'ariaDescribedby'?: string
}

/**
 * Type describing incoming properties.
 *
 * Тип, описывающий входящие свойства.
 */
export interface MotionTransformProps extends MotionTransformPropsBasic, MotionTransformPropsToken {
}

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
