// ai-none

import type { ImageItem, ImageUint8ArrayType } from './basicTypes'
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

  /** Active object URL / Активный URL объекта */
  protected src?: string

  /**
   * Constructor for creating a manager for images in Uint8Array format.
   *
   * Конструктор для создания менеджера изображений в формате Uint8Array.
   * @param props input data / входные данные
   */
  constructor(
    protected readonly props?: ImageProps
  ) {}

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

    this.reset()

    const blob = new Blob([ImageUint8Array.toUint8Array(targetValue)], { type })
    this.src = URL.createObjectURL(blob)

    return this.initImage(this.src)
  }

  /**
   * Resets and revokes the created object URL.
   *
   * Сбрасывает и отзывает созданный URL-адрес объекта.
   */
  reset(): void {
    if (this.src) {
      URL.revokeObjectURL(this.src)
      this.src = undefined
    }
  }

  /**
   * Returns the explicit buffer or the source candidate from component properties.
   *
   * Возвращает явно переданный буфер либо исходное значение из свойств компонента.
   * @param value image / изображение
   * @returns source candidate to validate before decoding / исходное значение для проверки перед декодированием
   */
  protected getValue(value?: ImageUint8ArrayType): ImageProps['value'] {
    return value ?? this.props?.value
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
        resolve({
          image,
          src,
          width: image.naturalWidth,
          height: image.naturalHeight
        })
      }

      image.src = src
    })
  }
}
