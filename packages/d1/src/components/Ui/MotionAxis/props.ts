import { type MotionAxisPropsBasic, defaultsMotionAxis } from '@dxtmisha/constructor/MotionAxis'

export const propsValues = {
  // :values [!] System label / Системная метка
  axis: ['x', 'y', 'z'],
  direction: ['next', 'back', 'auto']
  // :values [!] System label / Системная метка
}

type PropsToken = {
  // :type [!] System label / Системная метка
  axis?: 'x' | 'y' | 'z'
  direction?: 'next' | 'back' | 'auto'
  // :type [!] System label / Системная метка
}

/**
 * Type describing incoming properties/ Тип, описывающий входящие свойства
 */
export type MotionAxisProps = MotionAxisPropsBasic & PropsToken

/**
 * Default value for property/ Значение по умолчанию для свойства
 */
export const defaults: object = {
  ...defaultsMotionAxis,
  ...{
    // :default [!] System label / Системная метка
    axis: 'x',
    direction: 'auto'
    // :default [!] System label / Системная метка
  }
}
