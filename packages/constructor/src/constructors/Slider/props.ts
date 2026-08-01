import type { SliderMarksValue } from './basicTypes'

type SliderPropsToken = {
  // :type [!] System label / Системная метка
  vertical?: boolean
  disabled?: boolean
  drop?: boolean
  // :type [!] System label / Системная метка
}

export type SliderPropsBasic = {
  // Values
  value?: number | number[]
  modelValue?: number | number[]
  marks?: SliderMarksValue
  marksInit?: boolean
  translation?: any[] | Record<string, any>
  keyText?: string
  keyValue?: string

  // Input
  step?: number
  min?: number
  max?: number
  multiple?: boolean
  minimumDistance?: number

  // Status
  readonly?: boolean

  // Options
  palette?: string
  color?: string
  appearance?: 'basic' | 'drop'
  magnet?: boolean
  ripple?: boolean
}

/**
 * Type describing incoming properties.
 *
 * Тип, описывающий входящие свойства.
 */
export type SliderProps = SliderPropsBasic & SliderPropsToken

/**
 * Default value for property.
 *
 * Значение по умолчанию для свойства.
 */
export const defaultsSlider: SliderProps = {
  marksInit: true,
  keyText: 'text',
  keyValue: 'value',
  step: 1,
  min: 0,
  max: 100,
  minimumDistance: 1,
  appearance: 'basic',
  ripple: true,
  ...{
    // :default [!] System label / Системная метка
    // :default [!] System label / Системная метка
  }
}
