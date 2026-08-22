import type { ModelProps } from '../../types/modelTypes'
import type { CropAreaCoordinator, CropAreaPropsBasic, CropAreaPropsInclude } from '../CropArea'
import type { ImagePropsBasic, ImagePropsInclude } from '../Image'

/** Type describing token properties / Тип, описывающий свойства токенов */
type ImageCropPropsToken = {
  // :type [!] System label / Системная метка
  disabled?: boolean
  readonly?: boolean
  // :type [!] System label / Системная метка
}

/** Type describing basic properties / Тип, описывающий базовые свойства */
export type ImageCropPropsBasic<
  Image extends ImagePropsBasic = ImagePropsBasic,
  CropArea extends CropAreaPropsBasic = CropAreaPropsBasic
> = CropAreaPropsInclude<CropArea>
  & ImagePropsInclude<Image>
  & ModelProps<any>
  & {
    /** Initial or current crop coordinates [top, right, bottom, left] / Начальные или текущие координаты кадрирования [сверху, справа, снизу, слева] */
    value?: CropAreaCoordinator

    /** Alternative text for image / Альтернативный текст для изображения */
    alt?: string
  }

/**
 * Type describing incoming properties.
 *
 * Тип, описывающий входящие свойства.
 */
export type ImageCropProps = ImageCropPropsBasic & ImageCropPropsToken

/**
 * Default value for property.
 *
 * Значение по умолчанию для свойства.
 */
export const defaultsImageCrop = {
  ...{
    // :default [!] System label / Системная метка
    // :default [!] System label / Системная метка
  }
}
