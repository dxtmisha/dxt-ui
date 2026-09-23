import { type InputFileDropzonePropsBasic, defaultsInputFileDropzone } from '@dxtmisha/constructor/InputFileDropzone'

import type { DropzoneProps } from '../Dropzone'
import type { FieldCounterProps } from '../FieldCounter'
import type { FieldLabelProps } from '../FieldLabel'
import type { FieldMessageProps } from '../FieldMessage'
import type { IconProps } from '../Icon'

export const propsValues = {
  // :values [!] System label / Системная метка
  // :values [!] System label / Системная метка
}

type PropsToken = {
  // :type [!] System label / Системная метка
  disabled?: boolean
  readonly?: boolean
  // :type [!] System label / Системная метка
}

/**
 * Type describing incoming properties/ Тип, описывающий входящие свойства
 */
export type InputFileDropzoneProps = InputFileDropzonePropsBasic<
  DropzoneProps,
  FieldCounterProps,
  FieldLabelProps,
  FieldMessageProps,
  IconProps
> & PropsToken

/**
 * Default value for property/ Значение по умолчанию для свойства
 */
export const defaults: object = {
  ...defaultsInputFileDropzone,
  ...{
    // :default [!] System label / Системная метка
    // :default [!] System label / Системная метка
  }
}
