import type { ConstrBind } from '@dxtmisha/functional'

import type { TextDropzonePropsInclude } from '../../types/textTypes'

import type { InputFileDropzonePropsBasic } from './props'

/**
 * InputFileDropzone component dependency registration.
 *
 * Регистрация зависимости компонента InputFileDropzone.
 */
export type InputFileDropzoneComponentInclude = {
  /** InputFileDropzone component configuration / Конфигурация компонента InputFileDropzone */
  inputFileDropzone?: object
}

/**
 * Props for embedding InputFileDropzone inside another component.
 *
 * Свойства для встраивания InputFileDropzone внутри другого компонента.
 */
export type InputFileDropzonePropsInclude<
  Dropzone extends InputFileDropzonePropsBasic = InputFileDropzonePropsBasic
> = TextDropzonePropsInclude & {
  /** Accept file types list (MIME, extensions) / Список допустимых типов (MIME, расширения) */
  accept?: string

  /** Multiple files selection flag / Флаг выбора нескольких файлов */
  multiple?: boolean

  /** Maximum file size in bytes / Максимальный размер файла в байтах */
  maxFileSize?: number

  /** Bound attributes passed directly to InputFileDropzone / Атрибуты привязки, передаваемые напрямую в InputFileDropzone */
  inputFileDropzoneAttrs?: ConstrBind<Dropzone>
}
