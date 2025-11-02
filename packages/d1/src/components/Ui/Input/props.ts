import { type InputPropsBasic, defaultsInput } from '@dxtmisha/constructor/Input'

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
export interface InputProps extends InputPropsBasic, PropsToken {
}

/**
 * Default value for property/ Значение по умолчанию для свойства
 */
export const defaults: object = {
  ...defaultsInput,
  iconVisibility: 'visibility',
  iconVisibilityOff: 'visibility_off',
  ...{
    // :default [!] System label / Системная метка
    // :default [!] System label / Системная метка
  }
}
