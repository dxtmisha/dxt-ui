import { type TextareaPropsBasic, defaultsTextarea } from '@dxtmisha/constructor/Textarea'

import type { TextareaAutosizeProps } from '../TextareaAutosize'
import type { IconProps } from '../Icon'
import type { FieldProps } from '../Field'
import type { FieldLabelProps } from '../FieldLabel'
import type { FieldMessageProps } from '../FieldMessage'
import type { FieldCounterProps } from '../FieldCounter'
import type { ProgressProps } from '../Progress'

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
export type TextareaProps = TextareaPropsBasic<
  TextareaAutosizeProps,
  IconProps,
  FieldProps,
  FieldLabelProps,
  FieldMessageProps,
  FieldCounterProps,
  ProgressProps
> & PropsToken

/**
 * Default value for property/ Значение по умолчанию для свойства
 */
export const defaults: object = {
  ...defaultsTextarea,
  ...{
    // :default [!] System label / Системная метка
    // :default [!] System label / Системная метка
  }
}
