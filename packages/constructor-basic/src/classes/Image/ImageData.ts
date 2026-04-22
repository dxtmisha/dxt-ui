import { ErrorCenter, Icons, isString } from '@dxtmisha/functional-basic'

import { ImageFile } from './ImageFile'
import { ImagePdf } from './ImagePdf'
import { type ImageType } from './ImageType'
import { ImageUint8Array } from './ImageUint8Array'

import { type ImageEventItem, ImageTypeValue } from '../../types/imageTypes'

import { CONSTRUCTOR_ERROR_GROUP } from '../../types/errorTypes'

/**
 * Abstract class for managing image data.
 *
 * Абстрактный класс для управления данными изображения.
 */
export abstract class ImageData {
  /**
   * Constructor
   * @param type image type/ тип изображения
   */
  protected constructor(
    protected readonly type: ImageType
  ) {
  }

  /**
   * Checks if there are values.
   *
   * Проверяет, есть ли значения.
   */
  is(): boolean {
    return this.getImage() !== undefined
  }

  /**
   * Checks if the value is a link, that is, a type of string.
   *
   * Проверяет, является ли значение ссылкой, то есть видом строки.
   */
  isLink(): boolean {
    return this.is() && typeof this.getImage() === 'string'
  }

  /**
   * Checks if the value is an image object.
   *
   * Проверяет, является ли значение объектом изображения.
   */
  isImage(): boolean {
    return this.is() && typeof this.getImage() !== 'string'
  }

  /**
   * Returns the image data.
   *
   * Возвращает данные изображения.
   */
  abstract getImage(): ImageEventItem

  /**
   * Returns the value of the image.
   *
   * Возвращает значение изображения.
   */
  protected abstract getValue(): any

  /**
   * Returns whether lazy loading is enabled.
   *
   * Возвращает, включена ли отложенная загрузка.
   */
  protected abstract getLazy(): boolean | undefined

  /**
   * Returns the URL of the image.
   *
   * Возвращает URL изображения.
   */
  protected abstract getUrl(): string | undefined

  /**
   * Calculates the image value and returns it.
   *
   * Вычисляет значение изображения и возвращает его.
   */
  protected async initData(): Promise<ImageEventItem> {
    const image = this.getValue()

    if (image) {
      switch (this.type.getType()) {
        case ImageTypeValue.pdf:
          return await ImagePdf.get(image)
        case ImageTypeValue.array:
          return ImageUint8Array.createImage(image)
        case ImageTypeValue.image:
        case ImageTypeValue.file:
          try {
            if (this.getLazy()) {
              return this.getValue()
            }

            return await ImageFile.createImage(image)
          } catch (error) {
            ErrorCenter.on({
              group: CONSTRUCTOR_ERROR_GROUP,
              code: 'image-error',
              details: {
                image,
                error
              }
            })
          }
          break
        case ImageTypeValue.public:
        case ImageTypeValue.icon:
        case ImageTypeValue.flag:
          if (isString(image)) {
            return await Icons.get(image, this.getUrl())
          }

          break
      }
    }

    return undefined
  }
}
