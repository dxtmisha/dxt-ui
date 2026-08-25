import type { ConstrBind } from '@dxtmisha/functional'

import type { ImageCropPropsBasic } from './props'
import type { ImageCropEmits } from './types'

/**
 * ImageCrop component dependency registration /
 * Регистрация зависимости компонента ImageCrop
 */
export type ImageCropComponentInclude = {
  /** ImageCrop component configuration / Конфигурация компонента ImageCrop */
  imageCrop?: object
}

/**
 * Props for embedding ImageCrop inside another component /
 * Свойства для встраивания ImageCrop внутри другого компонента
 */
export type ImageCropPropsInclude<
  ImageCrop extends ImageCropPropsBasic = ImageCropPropsBasic
> = {
  /** Bound attributes passed directly to ImageCrop / Атрибуты привязки, передаваемые напрямую в ImageCrop */
  imageCropAttrs?: ConstrBind<ImageCrop>
}

/**
 * Emits interface for ImageCrop inclusion /
 * Интерфейс событий для включения ImageCrop
 */
export type ImageCropEmitsInclude = ImageCropEmits
