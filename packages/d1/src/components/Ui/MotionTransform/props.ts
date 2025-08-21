import { type MotionTransformPropsBasic, defaultsMotionTransform } from '@dxt-ui/constructor/MotionTransform'

export const propsValues = {
  // :values [!] System label / Системная метка
  animationHeadPosition: ['top', 'toBottom'],
  adaptive: ['planeAlways', 'planeSm', 'planeMd', 'planeLg', 'planeXl', 'plane2xl']
  // :values [!] System label / Системная метка
}

interface PropsToken {
  // :type [!] System label / Системная метка
  section?: boolean
  animationHeadPosition?: 'top' | 'toBottom'
  adaptive?: 'planeAlways' | 'planeSm' | 'planeMd' | 'planeLg' | 'planeXl' | 'plane2xl'
  // :type [!] System label / Системная метка
}

/**
 * Type describing incoming properties/ Тип, описывающий входящие свойства
 */
export interface MotionTransformProps extends MotionTransformPropsBasic, PropsToken {
}

/**
 * Default value for property/ Значение по умолчанию для свойства
 */
export const defaults: object = {
  ...defaultsMotionTransform,
  ...{
    // :default [!] System label / Системная метка
    animationHeadPosition: 'top',
    adaptive: 'planeMd'
    // :default [!] System label / Системная метка
  }
}
