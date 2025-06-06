import { type IconPropsBasic, defaultsIcon } from '@dxt-ui/constructor/Icon'

export const propsValues = {
  // :values [!] System label / Системная метка
  animationType: ['type1', 'type2']
  // :values [!] System label / Системная метка
}

interface PropsToken {
  // :type [!] System label / Системная метка
  turn?: boolean
  disabled?: boolean
  hide?: boolean
  asPalette?: boolean
  dir?: boolean
  overlay?: boolean
  dynamic?: boolean
  start?: boolean
  end?: boolean
  high?: boolean
  animationType?: 'type1' | 'type2'
  animationShow?: boolean
  // :type [!] System label / Системная метка
}

/**
 * Type describing incoming properties/ Тип, описывающий входящие свойства
 */
export interface IconProps extends IconPropsBasic, PropsToken {
}

/**
 * Default value for property/ Значение по умолчанию для свойства
 */
export const defaults: object = {
  ...defaultsIcon,
  ...{
    // :default [!] System label / Системная метка
    animationType: 'type1'
    // :default [!] System label / Системная метка
  }
}
