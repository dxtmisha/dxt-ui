import { Ref, ref, watchEffect } from 'vue'
import { isString } from '../../functions/isString'

import { Icons } from '../../classes/Icons'
import { ImageFile } from './ImageFile'
import { ImagePdf } from './ImagePdf'

import { ImageType } from './ImageType'
import { ImageTypeValue } from './typesBasic'

import type { Undefined } from '../../types/basic'
import type { ImageProps } from './props'
import type { ImageEventItem, ImageItem } from './typesBasic'

/**
 * A class for obtaining image or icon data.<br>
 * Класс для получения данных изображения или иконки.
 */
export class ImageData {
  /**
   * Returns images.<br>
   * Возвращает изображения.
   */
  readonly image = ref<ImageEventItem>()

  /**
   * Constructor
   * @param props input data /<br>входные данные
   * @param type image type /<br>тип изображения
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
   * Checks if there are values.<br>
   * Проверяет, есть ли значения.
   */
  is(): this is { image: Exclude<ImageEventItem, Undefined> } {
    return this.image.value !== undefined
  }

  /**
   * Checks if the value is a link, that is, a type of string.<br>
   * Проверяет, является ли значение ссылкой, то есть видом строки.
   */
  isLink(): this is { image: Ref<string> } {
    return this.is() && typeof this.image.value === 'string'
  }

  /**
   * Checks if the value is an image object.<br>
   * Проверяет, является ли значение объектом изображения.
   */
  isImage(): this is { image: Ref<ImageItem> } {
    return this.is() && typeof this.image.value !== 'string'
  }

  /**
   * Calculates the image value and returns it.<br>
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
