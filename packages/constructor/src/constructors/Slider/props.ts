import type { SliderPropsInclude } from './basicTypes'

type SliderPropsToken = {
  // :type [!] System label / Системная метка
  // :type [!] System label / Системная метка
}

export type SliderPropsBasic = SliderPropsInclude & {
  ripple?: boolean
  appearance?: string
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
export const defaultsSlider: SliderPropsBasic = {
  min: 0,
  max: 100,
  step: 1,
  minimumDistance: 0,
  ripple: true,
  ...{
    // :default [!] System label / Системная метка
    // :default [!] System label / Системная метка
  }
}
