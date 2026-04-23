import { type ComputedRef, type Ref, watch } from 'vue'
import {
  computedAsync,
  type ConstrEmit,
  ErrorCenter,
  Icons,
  isString,
  sleep,
  type Undefined
} from '@dxtmisha/functional'

import { ClientOnlyInclude } from '../../classes/ClientOnlyInclude'

import { ImageFile } from './ImageFile'
import { ImagePdf } from './ImagePdf'
import { ImageUint8Array } from './ImageUint8Array'

import { ImageType } from './ImageType'

import { type ImageEventItem, type ImageItem, ImageTypeValue } from './basicTypes'
import { type ImageEmits } from './types'
import { type ImageProps } from './props'

import { CONSTRUCTOR_ERROR_GROUP } from '../../types/errorTypes'

/**
 * A class for obtaining image or icon data.
 *
 * Класс для получения данных изображения или иконки.
 */
export class ImageData {
  /** Image data / Данные изображения */
  readonly image: ComputedRef<ImageEventItem>

  /**
   * Constructor
   * @param props input data / входные данные
   * @param clientOnly class for working with ClientOnly / класс для работы с ClientOnly
   * @param type image type / тип изображения
   * @param emits the function is called when an event is triggered / функция вызывается, когда срабатывает событие
   */
  constructor(
    protected readonly props: ImageProps,
    protected readonly clientOnly: ClientOnlyInclude,
    protected readonly type: ImageType,
    protected readonly emits?: ConstrEmit<ImageEmits>
  ) {
    this.image = computedAsync<ImageEventItem>(
      () => this.init(),
      () => this.initSsr()
    )

    if (emits) {
      watch(this.image, (image) => {
        if (typeof image === 'object') {
          emits('load', {
            type: this.type.item.value,
            image
          })
        }
      })
    }
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
   * Data initialization.
   *
   * Инициализация данных.
   */
  protected async init(): Promise<ImageEventItem> {
    const image = this.props.value

    if (image) {
      switch (this.type.item.value) {
        case ImageTypeValue.pdf:
          await sleep(320)
          return await ImagePdf.get(image)
        case ImageTypeValue.array:
          return ImageUint8Array.createImage(image)
        case ImageTypeValue.image:
        case ImageTypeValue.file:
          try {
            if (
              !this.clientOnly.is()
              || this.props.lazy
            ) {
              return image
            }

            return await ImageFile.createImage(image)
          } catch {
            ErrorCenter.on({
              group: CONSTRUCTOR_ERROR_GROUP,
              code: 'image-data'
            })
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

  /**
   * Data initialization for server-side rendering (SSR).
   *
   * Инициализация данных для серверного рендеринга (SSR).
   */
  protected initSsr(): ImageEventItem {
    const image = this.props.value

    if (image) {
      switch (this.type.item.value) {
        case ImageTypeValue.image:
        case ImageTypeValue.file:
          return image
        case ImageTypeValue.public:
        case ImageTypeValue.icon:
        case ImageTypeValue.flag:
          if (isString(image)) {
            return Icons.getAsync(image, this.props.url)
          }

          break
      }
    }

    return undefined
  }
}
