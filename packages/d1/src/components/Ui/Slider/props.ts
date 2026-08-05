import { type SliderPropsBasic, defaultsSlider } from '@dxtmisha/constructor/Slider'

export const propsValues = {
  // :values [!] System label / Системная метка
  // :values [!] System label / Системная метка
}

type PropsToken = {
  // :type [!] System label / Системная метка
  disabled?: boolean
  vertical?: boolean
  // :type [!] System label / Системная метка
}

/**
 * Type describing incoming properties/ Тип, описывающий входящие свойства
 */
export type SliderProps = SliderPropsBasic & PropsToken

/**
 * Default value for property/ Значение по умолчанию для свойства
 */
export const defaults: object = {
  ...defaultsSlider,
  ...{
    // :default [!] System label / Системная метка
    // :default [!] System label / Системная метка
  }
}
