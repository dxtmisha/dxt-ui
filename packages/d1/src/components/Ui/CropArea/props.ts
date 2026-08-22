import { type CropAreaPropsBasic, defaultsCropArea } from '@dxtmisha/constructor/CropArea'

export const propsValues = {
  // :values [!] System label / Системная метка
  // :values [!] System label / Системная метка
}

type PropsToken = {
  // :type [!] System label / Системная метка
  readonly?: boolean
  disabled?: boolean
  disabledTop?: boolean
  disabledRight?: boolean
  disabledBottom?: boolean
  disabledLeft?: boolean
  // :type [!] System label / Системная метка
}

/**
 * Type describing incoming properties/ Тип, описывающий входящие свойства
 */
export type CropAreaProps = CropAreaPropsBasic & PropsToken

/**
 * Default value for property/ Значение по умолчанию для свойства
 */
export const defaults: object = {
  ...defaultsCropArea,
  ...{
    // :default [!] System label / Системная метка
    // :default [!] System label / Системная метка
  }
}
