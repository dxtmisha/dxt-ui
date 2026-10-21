// ai-none

import type { ComputedRef, Ref } from 'vue'
import {
  computedAsync,
  ErrorCenter,
  Icons,
  isString,
  skipFrame
} from '@dxtmisha/functional'

import { ImageFile } from './ImageFile'
import type { ImageLazy } from './ImageLazy'
import { ImagePdf } from './ImagePdf'
import { ImageSource } from './ImageSource'
import type { ImageType } from './ImageType'
import type { ImageUint8Array } from './ImageUint8Array'

import { CONSTRUCTOR_ERROR_GROUP } from '../../types/errorTypes'
import { type ImageEventItem, type ImageItem, ImageTypeValue } from './basicTypes'
import { type ImageProps } from './props'

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
   * @param isMounted whether the component is mounted / смонтирован ли компонент
   * @param lazy function returning ImageLazy object / функция, возвращающая объект ImageLazy
   * @param type function returning ImageType object / функция, возвращающая объект ImageType
   * @param uint8Array function returning ImageUint8Array object / функция, возвращающая объект ImageUint8Array
   */
  constructor(
    protected readonly props: ImageProps,
    protected readonly isMounted: Ref<boolean>,
    protected readonly lazy: () => ImageLazy,
    protected readonly type: () => ImageType,
    protected readonly uint8Array: () => ImageUint8Array
  ) {
    this.image = computedAsync<ImageEventItem>(
      () => this.init(),
      () => this.initSsr()
    )
  }

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
    return isString(this.image.value)
  }

  /**
   * Checks if the value is an image object.
   *
   * Проверяет, является ли значение объектом изображения.
   * @returns true if the value is an image object / true, если значение является объектом изображения
   */
  isImage(): this is { readonly image: ComputedRef<ImageItem> } {
    return this.is() && !isString(this.image.value)
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
      switch (this.type().get()) {
        case ImageTypeValue.pdf:
          if (isString(image) || image instanceof File) {
            await skipFrame()
            return await ImagePdf.get(image)
          }

          break
        case ImageTypeValue.array:
          return await this.uint8Array().createImage()
        case ImageTypeValue.image:
        case ImageTypeValue.file:
          try {
            if (
              !this.isMounted.value
              || this.lazy().isLazy()
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
      switch (this.type().get()) {
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
