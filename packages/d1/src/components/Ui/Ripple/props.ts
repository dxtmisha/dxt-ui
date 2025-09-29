import { type RipplePropsBasic, defaultsRipple } from '@dxtmisha/constructor/Ripple'

export const propsValues = {
  // :values [!] System label / Системная метка
  // :values [!] System label / Системная метка
}

interface PropsToken {
  // :type [!] System label / Системная метка
  // :type [!] System label / Системная метка
}

/**
 * Type describing incoming properties/ Тип, описывающий входящие свойства
 */
export interface RippleProps extends RipplePropsBasic, PropsToken {
}

/**
 * Default value for property/ Значение по умолчанию для свойства
 */
export const defaults: object = {
  ...defaultsRipple,
  ...{
    // :default [!] System label / Системная метка
    // :default [!] System label / Системная метка
  }
}
