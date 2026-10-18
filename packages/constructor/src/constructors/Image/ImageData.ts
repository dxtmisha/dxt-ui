// ai-none

import { computed, type ComputedRef, onUnmounted, watch } from 'vue'
import {
  computedAsync,
  type ConstrEmit,
  ErrorCenter,
  Icons,
  isString,
  skipFrame
} from '@dxtmisha/functional'

import { ClientOnlyInclude } from '../../classes/ClientOnlyInclude'

import { ImageFile } from './ImageFile'
import type { ImageLazy } from './ImageLazy'
import { ImagePdf } from './ImagePdf'
import { ImageSource } from './ImageSource'
import type { ImageType } from './ImageType'
import { ImageUint8Array } from './ImageUint8Array'

import { type ImageEventItem, type ImageItem, ImageTypeValue } from './basicTypes'
import { type ImageEmits } from './types'
import { type ImageProps } from './props'

import { CONSTRUCTOR_ERROR_GROUP } from '../../types/errorTypes'

/** Regular expression for removing the font icon prefix / Регулярное выражение для удаления префикса шрифтовой иконки */
const REGEX_ICON_PREFIX = /^(?:(?:filled|outlined|round|sharp|two-tone|material)-|\$)/

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
   * @param lazy class for working with lazy loading / класс для работы с ленивой загрузкой
   * @param emits the function is called when an event is triggered / функция вызывается, когда срабатывает событие
   */
  constructor(
    protected readonly props: ImageProps,
    protected readonly clientOnly: ClientOnlyInclude,
    protected readonly type: ImageType,
    protected readonly lazy: ImageLazy,
    protected readonly emits?: ConstrEmit<ImageEmits>
  ) {
    this.image = computedAsync<ImageEventItem>(
      () => this.init(),
      () => this.initSsr()
    )

    watch(this.image, this.onLoad)

    onUnmounted(() => this.uint8Array?.reset())
  }

  /**
   * Text for font icons and compressed flags, or the loaded source for a PDF.
   *
   * Текст для шрифтовых иконок и сжатых флагов либо загруженный источник PDF.
   */
  readonly text = computed<string | undefined>(() => {
    const type = this.type.item.value

    if (type === ImageTypeValue.pdf) {
      const image = this.image.value

      if (isString(image)) {
        return image
      }
    }

    const value = this.props.value

    if (
      type === ImageTypeValue.flagCompressed
      && value
    ) {
      return String(value)
        .replace('f-', '')
        .toUpperCase()
    }

    if (
      type
      && isString(value)
      && [
        'filled',
        'outlined',
        'round',
        'sharp',
        'two-tone',
        'material'
      ].indexOf(type) !== -1
    ) {
      return value.replace(REGEX_ICON_PREFIX, '')
    }

    return undefined
  })

  /**
   * Checks if there are values.
   *
   * Проверяет, есть ли значения.
   * @returns true if the value is not undefined / true, если значение не является undefined
   */
  is(): this is { readonly image: ComputedRef<NonNullable<ImageEventItem>> } {
    return this.image.value !== undefined
  }

  /**
   * Checks if the value is a link, that is, a type of string.
   *
   * Проверяет, является ли значение ссылкой, то есть видом строки.
   * @returns true if the value is a string link / true, если значение является строковой ссылкой
   */
  isLink(): this is { readonly image: ComputedRef<string> } {
    return this.is() && typeof this.image.value === 'string'
  }

  /**
   * Checks if the value is an image object.
   *
   * Проверяет, является ли значение объектом изображения.
   * @returns true if the value is an image object / true, если значение является объектом изображения
   */
  isImage(): this is { readonly image: ComputedRef<ImageItem> } {
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
          if (isString(image) || image instanceof File) {
            await skipFrame()
            return await ImagePdf.get(image)
          }

          break
        case ImageTypeValue.array:
          if (ImageUint8Array.is(image)) {
            return await this.getUint8Array().createImage(image)
          }

          break
        case ImageTypeValue.image:
        case ImageTypeValue.file:
          try {
            if (
              !this.clientOnly.isRender()
              || this.lazy.isLazy()
            ) {
              return this.initSsr()
            }

            if (isString(image) || image instanceof File) {
              return await ImageFile.createImage(
                ImageSource.getName(image) ?? image
              )
            }
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
   * Initial image data for server-side rendering (SSR) and deferred loading.
   *
   * Начальные данные изображения для серверного рендеринга (SSR) и отложенной загрузки.
   * @returns initial image data / начальные данные изображения
   */
  protected initSsr(): ImageEventItem {
    const image = this.props.value

    if (image) {
      switch (this.type.item.value) {
        case ImageTypeValue.image:
        case ImageTypeValue.file:
          if (isString(image) && (!this.props.lazy || this.props.tagImg)) {
            return ImageSource.getName(image) ?? image
          }

          return undefined
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
