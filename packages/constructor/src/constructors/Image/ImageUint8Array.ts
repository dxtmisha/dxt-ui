import type { ImageUint8ArrayCache, ImageUint8ArrayItem, ImageUint8ArrayType } from './basicTypes'
import type { ImageItem } from '@dxtmisha/constructor-basic'

const cache: ImageUint8ArrayCache = []

/**
 * Class for working with an image in Uint8Array format.
 *
 * Класс для работы с изображением в формате Uint8Array.
 */
export class ImageUint8Array {
  /**
   * Check if the value is an image in Uint8Array or ArrayBuffer format.
   *
   * Проверяет, является ли значение изображением в формате Uint8Array или ArrayBuffer.
   * @param value image/ изображение
   */
  static is(value: unknown): value is ImageUint8ArrayType {
    return value instanceof Uint8Array || value instanceof ArrayBuffer
  }

  /**
   * Create an image from a Uint8Array or ArrayBuffer.
   *
   * Создает изображение из Uint8Array или ArrayBuffer.
   * @param value image/ изображение
   * @param type image type/ тип изображения
   */
  static createImage(
    value: ImageUint8ArrayType,
    type: string = 'image/jpeg'
  ): ImageItem | undefined {
    const cacheItem = this.getCacheItem(value, type)
    const image = new Image()

    if (cacheItem) {
      image.src = cacheItem.src
    } else {
      const blob = new Blob([this.toUint8Array(value)], { type })
      const url = URL.createObjectURL(blob)

      image.src = url
      this.addCacheItem(value, type, url)
    }

    return {
      image,
      src: image.src,
      width: image.naturalWidth,
      height: image.naturalHeight
    }
  }

  /**
   * Convert an image to a Uint8Array.
   *
   * Преобразует изображение в Uint8Array.
   * @param value image/ изображение
   */
  static toUint8Array(value: ImageUint8ArrayType): Uint8Array<ArrayBuffer> {
    if (value instanceof ArrayBuffer) {
      return new Uint8Array(value)
    }

    return value
  }

  /**
   * Get cache item.
   *
   * Получает элемент из кэша.
   * @param value image/ изображение
   * @param type image type/ тип изображения
   */
  protected static getCacheItem(
    value: ImageUint8ArrayType,
    type: string
  ): ImageUint8ArrayItem | undefined {
    return cache.find(item => item.item === value && item.type === type)
  }

  /**
   * Add cache item.
   *
   * Добавляет элемент в кэш.
   * @param value image/ изображение
   * @param type image type/ тип изображения
   * @param src image src/ src изображения
   */
  protected static addCacheItem(
    value: ImageUint8ArrayType,
    type: string,
    src: string
  ): void {
    cache.push({ item: value, type, src })
  }
}
