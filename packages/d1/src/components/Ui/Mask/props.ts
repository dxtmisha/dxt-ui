import { type MaskPropsBasic, defaultsMask } from '@dxtmisha/constructor/Mask'

export const propsValues = {
  // :values [!] System label / Системная метка
  align: ['center', 'left', 'right'],
  dir: ['ltr', 'rtl']
  // :values [!] System label / Системная метка
}

export type PropsToken = {
  // :type [!] System label / Системная метка
  visible?: boolean
  visiblePartly?: boolean
  align?: 'center' | 'left' | 'right'
  dir?: 'ltr' | 'rtl'
  // :type [!] System label / Системная метка
}

/**
 * Type describing incoming properties/ Тип, описывающий входящие свойства
 */
export type MaskProps = MaskPropsBasic & PropsToken

/**
 * Default value for property/ Значение по умолчанию для свойства
 */
export const defaults: object = {
  ...defaultsMask,
  ...{
    // :default [!] System label / Системная метка
    visible: true
    // :default [!] System label / Системная метка
  }
}
