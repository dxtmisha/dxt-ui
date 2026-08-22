import { type ImageCropPropsBasic, defaultsImageCrop } from '@dxtmisha/constructor/ImageCrop'

import type { CropAreaProps } from '../CropArea'
import type { ImageProps } from '../Image'

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
export type ImageCropProps = ImageCropPropsBasic<
  ImageProps,
  CropAreaProps
> & PropsToken

/**
 * Default value for property/ Значение по умолчанию для свойства
 */
export const defaults: object = {
  ...defaultsImageCrop,
  ...{
    // :default [!] System label / Системная метка
    // :default [!] System label / Системная метка
  }
}
