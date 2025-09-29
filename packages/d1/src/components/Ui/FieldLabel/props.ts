import { type FieldLabelPropsBasic, defaultsFieldLabel } from '@dxtmisha/constructor/FieldLabel'

import type { FieldCounterProps } from '../FieldCounter'
import type { ProgressProps } from '../Progress'

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
export interface FieldLabelProps extends FieldLabelPropsBasic<FieldCounterProps, ProgressProps>, PropsToken {
}

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
