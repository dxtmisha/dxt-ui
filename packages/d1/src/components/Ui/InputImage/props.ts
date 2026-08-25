import { type InputImagePropsBasic, defaultsInputImage } from '@dxtmisha/constructor/InputImage'

import type { ActionsProps } from '../Actions'
import type { DropzoneProps } from '../Dropzone'
import type { FieldCounterProps } from '../FieldCounter'
import type { FieldLabelProps } from '../FieldLabel'
import type { FieldMessageProps } from '../FieldMessage'
import type { IconProps } from '../Icon'
import type { ImageCropProps } from '../ImageCrop'

export const propsValues = {
  // :values [!] System label / Системная метка
  size: ['sm', 'md', 'lg']
  // :values [!] System label / Системная метка
}

type PropsToken = {
  // :type [!] System label / Системная метка
  disabled?: boolean
  readonly?: boolean
  size?: 'sm' | 'md' | 'lg'
  // :type [!] System label / Системная метка
}

/**
 * Type describing incoming properties/ Тип, описывающий входящие свойства
 */
export type InputImageProps = InputImagePropsBasic<
  ActionsProps,
  DropzoneProps,
  FieldCounterProps,
  FieldLabelProps,
  FieldMessageProps,
  IconProps,
  ImageCropProps
> & PropsToken

/**
 * Default value for property/ Значение по умолчанию для свойства
 */
export const defaults: object = {
  ...defaultsInputImage,
  iconUpload: 'edit',
  iconClose: 'close',
  ...{
    // :default [!] System label / Системная метка
    size: 'md'
    // :default [!] System label / Системная метка
  }
}
