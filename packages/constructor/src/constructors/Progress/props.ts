import type { AriaLabelPropsInclude, AriaLivePropsInclude } from '../../types/ariaTypes'

export type ProgressPropsToken = {
  // :type [!] System label / Системная метка
  point?: boolean
  linear?: boolean
  circular?: boolean
  indeterminate?: 'type1' | 'type2' | 'type3'
  position?: 'top' | 'bottom' | 'static'
  dense?: boolean
  inverse?: boolean
  // :type [!] System label / Системная метка
}

export type ProgressPropsBasic = AriaLabelPropsInclude
  & AriaLivePropsInclude & {
  // Status
    visible?: boolean

    // Value
    value?: number | string
    max?: number | string

    // Style
    linear?: boolean
    circular?: boolean
    point?: boolean

    delay?: number | string
    delayHide?: number | string
  }

/**
 * Type describing incoming properties.
 *
 * Тип, описывающий входящие свойства.
 */
export type ProgressProps = ProgressPropsBasic & ProgressPropsToken

/**
 * Default value for property.
 *
 * Значение по умолчанию для свойства.
 */
export const defaultsProgress = {
  max: 100,
  delay: 360,
  delayHide: 200,
  ariaLive: 'polite',
  ...{
    // :default [!] System label / Системная метка
    linear: true,
    indeterminate: 'type1',
    position: 'top'
    // :default [!] System label / Системная метка
  }
}
