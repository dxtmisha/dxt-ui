// ai-none

import { onUnmounted } from 'vue'

import type { ImageItem, ImageUint8ArrayItem, ImageUint8ArrayType } from './basicTypes'
import type { ImageProps } from './props'

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
   * @param value image / изображение
   * @returns true if the value is a Uint8Array or ArrayBuffer / true, если значение является Uint8Array или ArrayBuffer
   */
  static is(value: unknown): value is ImageUint8ArrayType {
    return value instanceof Uint8Array || value instanceof ArrayBuffer
  }

  /**
   * Convert an image to a Uint8Array.
   *
   * Преобразует изображение в Uint8Array.
   * @param value image / изображение
   * @returns image as a Uint8Array / изображение в формате Uint8Array
   */
  static toUint8Array(value: ImageUint8ArrayType): Uint8Array<ArrayBuffer> {
    if (value instanceof ArrayBuffer) {
      return new Uint8Array(value)
    }

    return value
  }

  /** Cached image data / Кэшированные данные изображения */
  protected cacheItem?: ImageUint8ArrayItem

  /**
   * Constructor for creating a manager for images in Uint8Array format.
   *
   * Конструктор для создания менеджера изображений в формате Uint8Array.
   * @param props input data / входные данные
   */
  constructor(
    protected readonly props?: ImageProps
  ) {
    onUnmounted(() => this.reset())
  }

  /**
   * Create an image from a Uint8Array or ArrayBuffer.
   *
   * Создает изображение из Uint8Array или ArrayBuffer.
   * @param value image / изображение
   * @param type image type / тип изображения
   * @returns image object or undefined / объект изображения или undefined
   */
  async createImage(
    value?: ImageUint8ArrayType,
    type: string = 'image/jpeg'
  ): Promise<ImageItem | undefined> {
    const targetValue = this.getValue(value)

    if (!ImageUint8Array.is(targetValue)) {
      return undefined
    }

    const cache = this.getCache(targetValue, type)

    if (cache) {
      return cache
    }

    this.reset()

    const item = this.setCache(targetValue, type)

    return this.initImage(item.src)
  }

  /**
   * Resets the cache and revokes created object URL.
   *
   * Сбрасывает кэш и отзывает созданный URL-адрес объекта.
   */
  reset(): void {
    if (this.cacheItem) {
      URL.revokeObjectURL(this.cacheItem.src)
      this.cacheItem = undefined
    }
  }

  /**
   * Returns the cached image item if it matches the value and type.
   *
   * Возвращает кэшированный элемент изображения, если он соответствует значению и типу.
   * @param value image / изображение
   * @param type image type / тип изображения
   * @returns cached image item or undefined / кэшированный элемент изображения или undefined
   */
  protected getCache(
    value: ImageUint8ArrayType,
    type: string
  ): ImageItem | undefined {
    if (
      this.cacheItem
      && this.cacheItem.item === value
      && this.cacheItem.type === type
    ) {
      return this.cacheItem.image
    }

    return undefined
  }

  /**
   * Returns the image value.
   *
   * Возвращает значение изображения.
   * @param value image / изображение
   * @returns image value or undefined / значение изображения или undefined
   */
  protected getValue(value?: ImageUint8ArrayType): ImageUint8ArrayType | undefined {
    return value ?? (this.props?.value as ImageUint8ArrayType)
  }

  /**
   * Sets cached item by creating a new Blob and object URL.
   *
   * Устанавливает кэшированный элемент, создавая новый Blob и URL-адрес объекта.
   * @param value image / изображение
   * @param type image type / тип изображения
   * @returns cached item / кэшированный элемент
   */
  protected setCache(
    value: ImageUint8ArrayType,
    type: string
  ): ImageUint8ArrayItem {
    const blob = new Blob([ImageUint8Array.toUint8Array(value)], { type })
    const url = URL.createObjectURL(blob)

    this.cacheItem = {
      item: value,
      type,
      src: url
    }

    return this.cacheItem
  }

  /**
   * Initializes and loads the image element by its source URL.
   *
   * Инициализирует и загружает элемент изображения по его исходному URL.
   * @param src source URL / URL-источник
   * @returns image item or undefined / элемент изображения или undefined
   */
  protected initImage(src: string): Promise<ImageItem | undefined> {
    return new Promise((resolve) => {
      const image = new Image()

      image.onerror = () => resolve(undefined)
      image.onload = () => {
        const item: ImageItem = {
          image,
          src,
          width: image.naturalWidth,
          height: image.naturalHeight
        }

        if (this.cacheItem) {
          this.cacheItem.image = item
        }

        resolve(item)
      }

      image.src = src
    })
  }
}
