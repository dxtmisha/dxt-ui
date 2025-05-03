import { computed } from 'vue'
import { GEO_FLAG_ICON_NAME, Icons, isFilled } from '@dxt-ui/functional'

import { ImagePdf } from './ImagePdf'

import { type ImageTypeItem, ImageTypeValue } from './basicTypes'
import type { ImageProps } from './props'

/**
 * Class for working with the image type.
 *
 * Класс для работы с типом изображения.
 */
export class ImageType {
  /**
   * Constructor
   * @param props input data/ входные данные
   */
  constructor(
    protected readonly props: ImageProps
  ) {
  }

  /**
   * Get the image type.
   *
   * Получения тип изображения.
   */
  readonly item = computed<ImageTypeItem>(() => {
    const image = this.props.value

    if (
      image instanceof File
      || isFilled(image)
    ) {
      if (ImagePdf.isPdf(image)) {
        return ImageTypeValue.pdf
      }

      if (image instanceof File) {
        return ImageTypeValue.file
      }

      if (image.match(/\//)) {
        return ImageTypeValue.image
      }

      if (image.match(GEO_FLAG_ICON_NAME)) {
        return ImageTypeValue.icon
      }

      if (image.match(/^#/)) {
        return ImageTypeValue.color
      }

      if (image.match(/^@/)) {
        return ImageTypeValue.public
      }

      if (image.match(/^\$/)) {
        return ImageTypeValue.material
      }

      if (image.match(/^flag-[a-z]{2}$/)) {
        return ImageTypeValue.flag
      }

      const sub = image.match(/^(outlined|round|sharp|material)-/)

      if (sub) {
        return sub[1] as ImageTypeItem
      }

      if (Icons.is(image)) {
        return ImageTypeValue.public
      }

      return ImageTypeValue.outlined
    }

    return undefined
  })
}
