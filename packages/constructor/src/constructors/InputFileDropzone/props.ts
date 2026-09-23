import type { DropzonePropsBasic, DropzonePropsInclude } from '../Dropzone'
import type { FieldCounterPropsBasic } from '../FieldCounter'
import type { FieldLabelPropsBasic, FieldLabelPropsInclude } from '../FieldLabel'
import type { FieldMessagePropsBasic, FieldMessagePropsInclude } from '../FieldMessage'
import type { IconPropsBasic } from '../Icon'
import type { SkeletonPropsInclude } from '../Skeleton'

import type { EnabledProps } from '../../types/enabledTypes'
import type { TextDropzonePropsInclude } from '../../types/textTypes'

export type InputFileDropzonePropsToken = {
  // :type [!] System label / Системная метка
  // :type [!] System label / Системная метка
}

/** Type describing basic properties / Тип, описывающий базовые свойства */
export type InputFileDropzonePropsBasic<
  Dropzone extends DropzonePropsBasic = DropzonePropsBasic,
  FieldCounter extends FieldCounterPropsBasic = FieldCounterPropsBasic,
  FieldLabel extends FieldLabelPropsBasic = FieldLabelPropsBasic,
  FieldMessage extends FieldMessagePropsBasic = FieldMessagePropsBasic,
  Icon extends IconPropsBasic = IconPropsBasic
> = DropzonePropsInclude<Icon, Dropzone>
  & EnabledProps
  & FieldLabelPropsInclude<FieldLabel, FieldCounter>
  & FieldMessagePropsInclude<FieldMessage, FieldCounter>
  & SkeletonPropsInclude
  & TextDropzonePropsInclude
  & {
    /** Accept file types list (MIME, extensions) / Список допустимых типов (MIME, расширения) */
    accept?: string

    /** Multiple files selection flag / Флаг выбора нескольких файлов */
    multiple?: boolean

    /** Maximum file size in bytes / Максимальный размер файла в байтах */
    maxFileSize?: number
  }

/**
 * Type describing incoming properties.
 *
 * Тип, описывающий входящие свойства.
 */
export type InputFileDropzoneProps = InputFileDropzonePropsBasic & InputFileDropzonePropsToken

/**
 * Default value for property.
 *
 * Значение по умолчанию для свойства.
 */
export const defaultsInputFileDropzone = {
  ...{
    // :default [!] System label / Системная метка
    // :default [!] System label / Системная метка
  }
}
