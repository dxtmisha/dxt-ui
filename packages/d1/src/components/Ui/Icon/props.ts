import { type IconPropsBasic, defaultsIcon } from '@dxtmisha/constructor/Icon'
import type { ImageProps } from '../Image'

export const propsValues = {
  // :values [!] System label / Системная метка
  animationType: ['type1', 'type2'],
  size: ['auto', 'x', 'xs', 'sm', 'md', 'lg', 'xl', '2xl', '3xl', '4xl', '5xl', '6xl', '7xl', '8xl', '9xl'],
  rounded: ['auto', 'sm', 'md', 'lg', 'xl', 'full']
  // :values [!] System label / Системная метка
}

export type PropsToken = {
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
  square?: boolean
  circle?: boolean
  rect?: boolean
  size?: 'auto' | 'x' | 'xs' | 'sm' | 'md' | 'lg' | 'xl' | '2xl' | '3xl' | '4xl' | '5xl' | '6xl' | '7xl' | '8xl' | '9xl'
  inverse?: boolean
  rounded?: 'auto' | 'sm' | 'md' | 'lg' | 'xl' | 'full'
  // :type [!] System label / Системная метка
}

/**
 * Type describing incoming properties/ Тип, описывающий входящие свойства
 */
export type IconProps = IconPropsBasic<ImageProps> & PropsToken

/**
 * Default value for property/ Значение по умолчанию для свойства
 */
export const defaults: object = {
  ...defaultsIcon,
  ...{
    // :default [!] System label / Системная метка
    animationType: 'type1',
    square: true,
    size: 'auto',
    rounded: 'auto'
    // :default [!] System label / Системная метка
  }
}
