import type { ConstrBind, NumberOrString } from '@dxtmisha/functional'

import type { IconPropsBasic, IconValue } from '../Icon'

import type { DropzonePropsBasic } from './props'

/**
 * Dropzone component dependency registration /
 * Регистрация зависимости компонента Dropzone
 */
export type DropzoneComponentInclude = {
  /** Dropzone component configuration / Конфигурация компонента Dropzone */
  dropzone?: object
}

/**
 * Props for embedding Dropzone inside another component /
 * Свойства для встраивания Dropzone внутри другого компонента
 */
export type DropzonePropsInclude<
  Icon extends IconPropsBasic = IconPropsBasic,
  Dropzone extends DropzonePropsBasic = DropzonePropsBasic
> = {
  /** Dropzone label / Метка области загрузки */
  dropzoneLabel?: NumberOrString

  /** Dropzone description / Описание области загрузки */
  dropzoneDescription?: string | number

  /** Dropzone icon / Иконка области загрузки */
  dropzoneIcon?: IconValue<Icon>

  /** Bound attributes passed directly to Dropzone / Атрибуты привязки, передаваемые напрямую в Dropzone */
  dropzoneAttrs?: ConstrBind<Dropzone>
}
