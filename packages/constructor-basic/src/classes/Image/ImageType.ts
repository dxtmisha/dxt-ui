import { Icons, isFilled, isString } from '@dxtmisha/functional-basic'

import { ImagePdf } from './ImagePdf'
import { ImageUint8Array } from './ImageUint8Array'

import { type ImageTypeItem, ImageTypeValue } from '../../types/imageTypes'

/**
 * Abstract class for defining the image type.
 *
 * Абстрактный класс для определения типа изображения.
 */
export abstract class ImageType {
  /**
   * Returns the image type.
   *
   * Возвращает тип изображения.
   */
  abstract getType(): ImageTypeItem

  /**
   * Returns the value of the image.
   *
   * Возвращает значение изображения.
   */
  protected abstract getValue(): string | any

  /**
   * Initializes the image type based on the value.
   *
   * Инициализирует тип изображения на основе значения.
   */
  protected initType(): ImageTypeItem {
    const value = this.getValue()

    if (value instanceof File) {
      return ImageTypeValue.file
    }

    if (ImageUint8Array.is(value)) {
      return ImageTypeValue.array
    }

    if (
      isString(value)
      && isFilled(value)
    ) {
      if (ImagePdf.isPdf(value)) {
        return ImageTypeValue.pdf
      }

      if (value.match(/\//)) {
        return ImageTypeValue.image
      }

      if (value.match(/^#/)) {
        return ImageTypeValue.color
      }

      if (value.match(/^@/)) {
        return ImageTypeValue.public
      }

      if (value.match(/^\$/)) {
        return ImageTypeValue.material
      }

      if (value.match(/^flag-[a-z]{2}$/)) {
        return ImageTypeValue.flag
      }

      if (value.match(/^f-[a-z]{2}$/)) {
        return ImageTypeValue.flagCompressed
      }

      const sub = value.match(/^(outlined|round|sharp|material)-/)

      if (sub) {
        return sub[1] as ImageTypeItem
      }

      if (Icons.is(value)) {
        return ImageTypeValue.public
      }

      return ImageTypeValue.outlined
    }

    return undefined
  }
}
