import { type FieldLabelPropsBasic, defaultsFieldLabel } from '@dxtmisha/constructor/FieldLabel'
import type { FieldCounterProps } from '../FieldCounter'

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
export type FieldLabelProps = FieldLabelPropsBasic<FieldCounterProps> & PropsToken

/**
 * Default value for property/ Значение по умолчанию для свойства
 */
export const defaults: object = {
  ...defaultsFieldLabel,
  ...{
    // :default [!] System label / Системная метка
    // :default [!] System label / Системная метка
  }
}
