import { type InputCodePropsBasic, defaultsInputCode } from '@dxtmisha/constructor/InputCode'
import type { InputCodeItemProps } from '../InputCodeItem'
import type { FieldLabelProps } from '../FieldLabel'
import type { FieldMessageProps } from '../FieldMessage'

export const propsValues = {
  // :values [!] System label / Системная метка
  // :values [!] System label / Системная метка
}

type PropsToken = {
  // :type [!] System label / Системная метка
  validation?: boolean
  // :type [!] System label / Системная метка
}

/**
 * Type describing incoming properties/ Тип, описывающий входящие свойства
 */
export type InputCodeProps = InputCodePropsBasic<
  InputCodeItemProps,
  FieldLabelProps,
  FieldMessageProps
> & PropsToken

/**
 * Default value for property/ Значение по умолчанию для свойства
 */
export const defaults: object = {
  ...defaultsInputCode,
  ...{
    // :default [!] System label / Системная метка
    // :default [!] System label / Системная метка
  }
}
