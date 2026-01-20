import { type FieldMessagePropsBasic, defaultsFieldMessage } from '@dxtmisha/constructor/FieldMessage'

import type { FieldCounterProps } from '../FieldCounter'

export const propsValues = {
  // :values [!] System label / Системная метка
  // :values [!] System label / Системная метка
}

export type PropsToken = {
  // :type [!] System label / Системная метка
  // :type [!] System label / Системная метка
}

/**
 * Type describing incoming properties/ Тип, описывающий входящие свойства
 */
export type FieldMessageProps = FieldMessagePropsBasic<FieldCounterProps> & PropsToken

/**
 * Default value for property/ Значение по умолчанию для свойства
 */
export const defaults: object = {
  ...defaultsFieldMessage,
  ...{
    // :default [!] System label / Системная метка
    // :default [!] System label / Системная метка
  }
}
