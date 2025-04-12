import { type Ref, ref, watchEffect } from 'vue'
import { Icons, isString, type Undefined } from '@dxt-ui/functional'

import { ImageFile } from './ImageFile'
import { ImagePdf } from './ImagePdf'

import { ImageType } from './ImageType'

import { type ImageEventItem, type ImageItem, ImageTypeValue } from './imageTypes'
import { type ImageProps } from './props'

/**
 * A class for obtaining image or icon data.
 *
 * Класс для получения данных изображения или иконки.
 */
export class ImageData {
  /**
   * Returns images.
   *
   * Возвращает изображения.
   */
  readonly image = ref<ImageEventItem>()

  /**
   * Constructor
   * @param props input data/ входные данные
   * @param type image type/ тип изображения
   */
  constructor(
    protected readonly props: ImageProps,
    protected readonly type: ImageType
  ) {
    watchEffect(async () => {
      this.image.value = await this.init()
    })
  }

  /**
   * Checks if there are values.
   *
   * Проверяет, есть ли значения.
   */
  is(): this is { image: Exclude<ImageEventItem, Undefined> } {
    return this.image.value !== undefined
  }

  /**
   * Checks if the value is a link, that is, a type of string.
   *
   * Проверяет, является ли значение ссылкой, то есть видом строки.
   */
  isLink(): this is { image: Ref<string> } {
    return this.is() && typeof this.image.value === 'string'
  }

  /**
   * Checks if the value is an image object.
   *
   * Проверяет, является ли значение объектом изображения.
   */
  isImage(): this is { image: Ref<ImageItem> } {
    return this.is() && typeof this.image.value !== 'string'
  }

  /**
   * Calculates the image value and returns it.
   *
   * Вычисляет значение изображения и возвращает его.
   */
  protected async init(): Promise<ImageEventItem> {
    const image = this.props.value

    if (image) {
      switch (this.type.item.value) {
        case ImageTypeValue.pdf:
          return await ImagePdf.get(image)
        case ImageTypeValue.image:
        case ImageTypeValue.file:
          try {
            return await ImageFile.createImage(image)
          } catch {
            console.error('ImageData.initImage: ', image)
          }
          break
        case ImageTypeValue.public:
        case ImageTypeValue.icon:
        case ImageTypeValue.flag:
          if (isString(image)) {
            return await Icons.get(image, this.props.url)
          }

          break
      }
    }

    return undefined
  }
}
