import type { ConstrBind } from '@dxtmisha/functional'

import type { IconPropsBasic, IconPropsInclude } from '../Icon'
import type { SkeletonPropsInclude } from '../Skeleton'

import type { DescriptionProps } from '../../types/descriptionTypes'
import type { EnabledProps } from '../../types/enabledTypes'
import type { LabelProps } from '../../types/labelTypes'
import type { ModelPropsFiles } from '../../types/modelTypes'
import type { TextDropzonePropsInclude } from '../../types/textTypes'

type DropzonePropsToken = {
  // :type [!] System label / Системная метка
  disabled?: boolean
  readonly?: boolean
  // :type [!] System label / Системная метка
}

export type DropzonePropsBasic<
  Icon extends IconPropsBasic = IconPropsBasic
> = DescriptionProps
  & EnabledProps
  & IconPropsInclude<Icon>
  & LabelProps
  & ModelPropsFiles
  & SkeletonPropsInclude
  & TextDropzonePropsInclude
  & {
    /** Accepted file types / Принимаемые типы файлов */
    accept?: string
    /** Allow selecting multiple files / Разрешить выбор нескольких файлов */
    multiple?: boolean
    /** Additional attributes for the input element / Дополнительные атрибуты для элемента ввода */
    inputAttrs?: ConstrBind<HTMLInputElement>
  }

/**
 * Type describing incoming properties.
 *
 * Тип, описывающий входящие свойства.
 */
export type DropzoneProps = DropzonePropsBasic & DropzonePropsToken

/**
 * Default value for property.
 *
 * Значение по умолчанию для свойства.
 */
export const defaultsDropzone = {
  ...{
    // :default [!] System label / Системная метка
    // :default [!] System label / Системная метка
  }
}
