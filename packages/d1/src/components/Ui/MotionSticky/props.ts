import { type MotionStickyPropsBasic, defaultsMotionSticky } from '@dxtmisha/constructor/MotionSticky'

export const propsValues = {
  // :values [!] System label / Системная метка
  // :values [!] System label / Системная метка
}

type PropsToken = {
  // :type [!] System label / Системная метка
  // :type [!] System label / Системная метка
}

/**
 * Type describing incoming properties/ Тип, описывающий входящие свойства
 */
export type MotionStickyProps = MotionStickyPropsBasic & PropsToken

/**
 * Default value for property/ Значение по умолчанию для свойства
 */
export const defaults: object = {
  ...defaultsMotionSticky,
  ...{
    // :default [!] System label / Системная метка
    // :default [!] System label / Системная метка
  }
}
