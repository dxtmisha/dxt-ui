// ai-none

import { watch } from 'vue'
import { DesignLifecycleAbstract } from '@dxtmisha/functional'

import type { ImageItem, ImageUint8ArrayType } from './basicTypes'
import type { ImageProps } from './props'

/**
 * Class for working with an image in Uint8Array format.
 *
 * Класс для работы с изображением в формате Uint8Array.
 */
export class ImageUint8Array extends DesignLifecycleAbstract {
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

  /** Active object URL / Активный URL объекта */
  protected src?: string

  /**
   * Constructor for creating a manager for images in Uint8Array format.
   *
   * Конструктор для создания менеджера изображений в формате Uint8Array.
   * @param props input data / входные данные
   */
  constructor(
    protected readonly props: ImageProps
  ) {
    super()

    watch(() => this.props.value, (value) => {
      if (!ImageUint8Array.is(value)) {
        this.reset()
      }
    })
  }

  /** Callback after component unmounting / Обработчик после демонтирования компонента */
  override readonly onUnmounted = (): void => {
    this.reset()
  }

  /**
   * Check if the value is an image in Uint8Array or ArrayBuffer format.
   *
   * Проверяет, является ли значение изображением в формате Uint8Array или ArrayBuffer.
   * @returns true if the value is a Uint8Array or ArrayBuffer / true, если значение является Uint8Array или ArrayBuffer
   */
  is(): boolean {
    return ImageUint8Array.is(this.getValue())
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
   * Create an image from a Uint8Array or ArrayBuffer.
   *
   * Создает изображение из Uint8Array или ArrayBuffer.
   * @returns image object or undefined / объект изображения или undefined
   */
  async createImage(): Promise<ImageItem | undefined> {
    this.reset()

    const value = this.toUint8Array()

    if (!value) {
      return undefined
    }

    const blob = new Blob([value], { type: this.getMimeType(value) })
    this.src = URL.createObjectURL(blob)

    return this.initImage(this.src)
  }

  /**
   * Determines the MIME type of the image by its magic byte signature.
   *
   * Определяет MIME-тип изображения по сигнатуре магических байтов.
   * @param bytes binary image data / бинарные данные изображения
   * @returns detected MIME type or 'image/jpeg' by default / определённый MIME-тип или 'image/jpeg' по умолчанию
   */
  protected getMimeType(bytes: Uint8Array): string {
    if (
      bytes.length >= 4
      && bytes[0] === 0x89
      && bytes[1] === 0x50
      && bytes[2] === 0x4E
      && bytes[3] === 0x47
    ) {
      return 'image/png'
    }

    if (
      bytes.length >= 4
      && bytes[0] === 0x47
      && bytes[1] === 0x49
      && bytes[2] === 0x46
      && bytes[3] === 0x38
    ) {
      return 'image/gif'
    }

    if (
      bytes.length >= 12
      && bytes[0] === 0x52
      && bytes[1] === 0x49
      && bytes[2] === 0x46
      && bytes[3] === 0x46
      && bytes[8] === 0x57
      && bytes[9] === 0x45
      && bytes[10] === 0x42
      && bytes[11] === 0x50
    ) {
      return 'image/webp'
    }

    if (
      bytes.length >= 12
      && bytes[4] === 0x66
      && bytes[5] === 0x74
      && bytes[6] === 0x79
      && bytes[7] === 0x70
      && bytes[8] === 0x61
      && bytes[9] === 0x76
      && bytes[10] === 0x69
      && bytes[11] === 0x66
    ) {
      return 'image/avif'
    }

    if (
      (
        bytes.length >= 4
        && bytes[0] === 0x3C
        && bytes[1] === 0x73
        && bytes[2] === 0x76
        && bytes[3] === 0x67
      )
      || (
        bytes.length >= 5
        && bytes[0] === 0x3C
        && bytes[1] === 0x3F
        && bytes[2] === 0x78
        && bytes[3] === 0x6D
        && bytes[4] === 0x6C
      )
    ) {
      return 'image/svg+xml'
    }

    if (
      bytes.length >= 2
      && bytes[0] === 0x42
      && bytes[1] === 0x4D
    ) {
      return 'image/bmp'
    }

    if (
      bytes.length >= 4
      && bytes[0] === 0x00
      && bytes[1] === 0x00
      && bytes[2] === 0x01
      && bytes[3] === 0x00
    ) {
      return 'image/x-icon'
    }

    return 'image/jpeg'
  }

  /**
   * Returns the source candidate from component properties.
   *
   * Возвращает исходное значение из свойств компонента.
   * @returns source candidate to validate before decoding / исходное значение для проверки перед декодированием
   */
  protected getValue(): ImageProps['value'] {
    return this.props.value
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

  /**
   * Convert an image to a Uint8Array.
   *
   * Преобразует изображение в Uint8Array.
   * @returns image as a Uint8Array or undefined / изображение в формате Uint8Array или undefined
   */
  protected toUint8Array(): Uint8Array<ArrayBuffer> | undefined {
    const value = this.getValue()

    if (value instanceof ArrayBuffer) {
      return new Uint8Array(value)
    }

    if (value instanceof Uint8Array) {
      return value
    }

    return undefined
  }
}
