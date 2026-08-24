import { ref } from 'vue'
import {
  isObject,
  isString,
  resizeImageByMax
} from '@dxtmisha/functional'

import type { FieldEventInclude } from '../../classes/Field/FieldEventInclude'
import type { FieldValueInclude } from '../../classes/Field/FieldValueInclude'

import { ImageFile } from '../Image'
import type { CropAreaCoordinator } from '../CropArea'

import type { InputImageItem, InputImageValue } from './basicTypes'
import type { InputImageProps } from './props'

/**
 * Class for managing image files, loading, resizing, and crop state in InputImage.
 *
 * Класс для управления файлами изображений, загрузкой, изменением размера и состоянием кадрирования в InputImage.
 */
export class InputImageFiles {
  /** Reactive loading indicator state / Реактивное состояние индикатора загрузки */
  readonly loading = ref<boolean>(false)

  /**
   * Constructor.
   *
   * Конструктор.
   * @param props input data / входные данные
   * @param value field value controller / контроллер значения поля
   * @param event field event controller / контроллер событий поля
   */
  constructor(
    protected readonly props: InputImageProps,
    protected readonly value: FieldValueInclude<InputImageItem>,
    protected readonly event?: FieldEventInclude
  ) {
  }

  /**
   * Returns current value object with image source and crop coordinates.
   *
   * Возвращает текущий объект значения с источником изображения и координатами кадрирования.
   * @returns image value object / объект значения изображения
   */
  get(): InputImageValue {
    const raw = this.value.item.value

    if (isString(raw)) {
      return {
        value: raw,
        crop: this.props.crop
      }
    }

    if (isObject(raw)) {
      return {
        value: raw.value,
        crop: raw.crop ?? this.props.crop
      }
    }

    return {}
  }

  /**
   * Returns image source string.
   *
   * Возвращает строку источника изображения.
   * @returns image source string or undefined / строка источника изображения или undefined
   */
  get src(): string | undefined {
    return this.get().value
  }

  /**
   * Returns crop coordinates.
   *
   * Возвращает координаты кадрирования.
   * @returns crop coordinates or undefined / координаты кадрирования или undefined
   */
  get crop(): CropAreaCoordinator | undefined {
    return this.get().crop
  }

  /**
   * Checks whether an image is currently loaded.
   *
   * Проверяет, загружено ли изображение в данный момент.
   * @returns true if image is present / true, если изображение присутствует
   */
  hasImage(): boolean {
    return Boolean(this.src)
  }

  /**
   * Sets image source string and triggers change.
   *
   * Устанавливает строку источника изображения и вызывает событие изменения.
   * @param source image source URL or base64 / URL или base64 источника изображения
   */
  setImage(source?: string): void {
    const updated: InputImageValue = {
      ...this.get(),
      value: source
    }
    this.updateValue(updated)
  }

  /**
   * Sets crop coordinates and triggers change.
   *
   * Устанавливает координаты кадрирования и вызывает событие изменения.
   * @param crop crop coordinates / координаты кадрирования
   */
  setCrop(crop?: CropAreaCoordinator): void {
    const updated: InputImageValue = {
      ...this.get(),
      crop
    }
    this.updateValue(updated)
  }

  /**
   * Asynchronously reads, validates, resizes, and sets the image from a File object.
   *
   * Асинхронно читает, проверяет, изменяет размер и устанавливает изображение из объекта File.
   * @param file selected or dropped file / выбранный или сброшенный файл
   * @returns loaded and resized image source string or undefined / загруженная и масштабированная строка источника изображения или undefined
   */
  async setFile(file?: File): Promise<string | undefined> {
    if (!file) {
      return undefined
    }

    this.loading.value = true

    try {
      const source = await this.processFile(file)
      if (source) {
        const updated: InputImageValue = {
          value: source,
          crop: this.props.crop
        }
        this.updateValue(updated)
        return source
      }
    } finally {
      this.loading.value = false
    }

    return undefined
  }

  /**
   * Clears image and crop coordinates.
   *
   * Очищает изображение и координаты кадрирования.
   */
  clear(): void {
    this.updateValue({})
  }

  /**
   * Updates field value and triggers field input/change events.
   *
   * Обновляет значение поля и вызывает события ввода/изменения поля.
   * @param value new image value / новое значение изображения
   */
  protected updateValue(value: InputImageValue): void {
    this.value.item.value = value
    // this.event?.onInput(undefined, { value })
    // this.event?.onChange(undefined, { value })
  }

  /**
   * Processes a File by reading it as Data URL and resizing down to maxSize if necessary.
   *
   * Обрабатывает File, читая его как Data URL и уменьшая до maxSize при необходимости.
   * @param file file to process / файл для обработки
   * @returns processed data URL string / обработанная строка Data URL
   */
  protected async processFile(file: File): Promise<string> {
    if (!ImageFile.isImage(file)) {
      return ''
    }

    const dataUrl = await ImageFile.getFileResult(file)
    if (!dataUrl) {
      return ''
    }

    const maxSize = this.props.maxSize ?? 1280
    if (maxSize <= 0) {
      return dataUrl
    }

    return new Promise<string>((resolve) => {
      const image = new Image()
      image.onerror = () => resolve(dataUrl)
      image.onload = () => {
        if (image.naturalWidth > maxSize || image.naturalHeight > maxSize) {
          const resized = resizeImageByMax(image, maxSize)
          resolve(resized ?? dataUrl)
        } else {
          resolve(dataUrl)
        }
      }
      image.src = dataUrl
    })
  }
}
