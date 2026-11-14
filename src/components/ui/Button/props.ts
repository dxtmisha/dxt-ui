import { type ButtonPropsBasic, defaultsButton } from '@dxtmisha/constructor/Button'

export const propsValues = {
  // :values [!] System label / Системная метка
  adaptive: ['iconAlways', 'block', 'auto'],
  textAlign: ['left', 'center', 'right']
  // :values [!] System label / Системная метка
}

type PropsToken = {
  // :type [!] System label / Системная метка
  focus?: boolean
  disabled?: boolean
  selected?: boolean
  readonly?: boolean
  adaptive?: 'iconAlways' | 'block' | 'auto'
  container?: boolean
  inverse?: boolean
  grid?: boolean
  textAlign?: 'left' | 'center' | 'right'
  // :type [!] System label / Системная метка
}

/**
 * Type describing incoming properties/ Тип, описывающий входящие свойства
 */
export type ButtonProps = ButtonPropsBasic & PropsToken

/**
 * Default value for property/ Значение по умолчанию для свойства
 */
export const defaults: object = {
  ...defaultsButton,
  ...{
    // :default [!] System label / Системная метка
    // :default [!] System label / Системная метка
  }
}
