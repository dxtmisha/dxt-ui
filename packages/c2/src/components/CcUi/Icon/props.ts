import { type IconPropsBasic, defaultsIcon } from '@dxt-ui/constructor/Icon'
import type { ImageProps } from '../Image/props.ts'

export const propsValues = {
  // :values [!] System label / Системная метка
  animationType: ['type1', 'type2'],
  size: ['2xs', 'xs', 'sm', 'md', 'lg', 'xl', '2xl', '3xl', '4xl', '5xl', '6xl', '7xl']
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
  animationType?: string | 'type1' | 'type2'
  animationShow?: boolean
  circle?: boolean
  box?: boolean
  rect?: boolean
  round?: boolean
  size?: string | '2xs' | 'xs' | 'sm' | 'md' | 'lg' | 'xl' | '2xl' | '3xl' | '4xl' | '5xl' | '6xl' | '7xl'
  secondary?: boolean
  success?: boolean
  successInverse?: boolean
  error?: boolean
  errorInverse?: boolean
  // :type [!] System label / Системная метка
}

/**
 * Type describing incoming properties/ Тип, описывающий входящие свойства
 */
export interface IconProps extends IconPropsBasic<ImageProps>, PropsToken {
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
