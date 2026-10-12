// ai-none

import { type ComputedRef, onMounted, onUnmounted, type Ref, watch } from 'vue'
import {
  computedAsync,
  type ConstrEmit,
  ErrorCenter,
  Icons,
  isString,
  type Undefined
} from '@dxtmisha/functional'

import { ClientOnlyInclude } from '../../classes/ClientOnlyInclude'

import { ImageFile } from './ImageFile'
import { ImagePdf } from './ImagePdf'
import { ImageType } from './ImageType'
import { ImageUint8Array } from './ImageUint8Array'

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

  /** Manager for working with images in Uint8Array format / Менеджер для работы с изображениями в формате Uint8Array */
  protected uint8Array?: ImageUint8Array

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
      watch(
        this.image,
        this.onLoad
      )
      onMounted(this.onLoad)
    }

    onUnmounted(() => this.uint8Array?.reset())
  }

  /**
   * Checks if there are values.
   *
   * Проверяет, есть ли значения.
   * @returns true if the value is not undefined / true, если значение не является undefined
   */
  is(): this is { image: Exclude<ImageEventItem, Undefined> } {
    return this.image.value !== undefined
  }

  /**
   * Checks if the value is a link, that is, a type of string.
   *
   * Проверяет, является ли значение ссылкой, то есть видом строки.
   * @returns true if the value is a string link / true, если значение является строковой ссылкой
   */
  isLink(): this is { image: Ref<string> } {
    return this.is() && typeof this.image.value === 'string'
  }

  /**
   * Checks if the value is an image object.
   *
   * Проверяет, является ли значение объектом изображения.
   * @returns true if the value is an image object / true, если значение является объектом изображения
   */
  isImage(): this is { image: Ref<ImageItem> } {
    return this.is() && typeof this.image.value !== 'string'
  }

  /**
   * Emits load event when image data is loaded.
   *
   * Вызывает событие load при загрузке данных изображения.
   * @param image image event item / элемент события изображения
   */
  readonly onLoad = (image: ImageEventItem = this.image.value): void => {
    if (typeof image === 'object') {
      this.emits?.('load', {
        type: this.type.item.value,
        image
      })
    }
  }

  /**
   * Getting the instance for working with Uint8Array images.
   *
   * Получение экземпляра для работы с изображениями Uint8Array.
   * @returns ImageUint8Array instance / экземпляр ImageUint8Array
   */
  protected getUint8Array(): ImageUint8Array {
    if (!this.uint8Array) {
      this.uint8Array = new ImageUint8Array(this.props)
    }

    return this.uint8Array
  }

  /**
   * Data initialization.
   *
   * Инициализация данных.
   * @returns initialized image event item / инициализированный элемент события изображения
   */
  protected async init(): Promise<ImageEventItem> {
    const image = this.props.value

    if (image) {
      switch (this.type.item.value) {
        case ImageTypeValue.pdf:
          await new Promise(resolve => requestAnimationFrame(resolve))

          return await ImagePdf.get(image)
        case ImageTypeValue.array:
          return await this.getUint8Array().createImage(image)
        case ImageTypeValue.image:
        case ImageTypeValue.file:
          try {
            if (
              !this.clientOnly.isRender()
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
   * @returns initialized image event item for SSR / инициализированный элемент события изображения для SSR
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
