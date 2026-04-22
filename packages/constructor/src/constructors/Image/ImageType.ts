import { computed } from 'vue'
import { Icons, isFilled, isString } from '@dxtmisha/functional'

import { ImagePdf } from './ImagePdf'
import { ImageUint8Array } from './ImageUint8Array'
import { ClientOnlyInclude } from '../../classes/ClientOnlyInclude'

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
   * @param props input data / входные данные
   * @param clientOnly class for working with ClientOnly / класс для работы с ClientOnly
   */
  constructor(
    protected readonly props: ImageProps,
    protected readonly clientOnly: ClientOnlyInclude
  ) {
  }

  /**
   * Get the image type.
   *
   * Получения тип изображения.
   * @returns image type / тип изображения
   */
  readonly item = computed<ImageTypeItem>(() => {
    const image = this.props.value

    if (this.clientOnly.isRender.value) {
      if (image instanceof File) {
        return ImageTypeValue.file
      }

      if (ImageUint8Array.is(image)) {
        return ImageTypeValue.array
      }

      if (ImagePdf.isPdf(image)) {
        return ImageTypeValue.pdf
      }
    }

    if (
      isString(image)
      && isFilled(image)
    ) {
      if (image.match(/\//)) {
        return ImageTypeValue.image
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

      if (image.match(/^f-[a-z]{2}$/)) {
        return ImageTypeValue.flagCompressed
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
