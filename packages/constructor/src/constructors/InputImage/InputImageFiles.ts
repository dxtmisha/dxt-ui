import {
  isObject,
  isString,
  resizeImage
} from '@dxtmisha/functional'

import type { FieldValueInclude } from '../../classes/Field/FieldValueInclude'

import type { CropAreaCoordinator } from '../CropArea'
import { ImageFile } from '../Image'

import type { InputImageItem, InputImageValue } from './basicTypes'
import type { InputImageProps } from './props'

/**
 * Class for managing image files, loading, resizing, and crop state in InputImage.
 *
 * Класс для управления файлами изображений, загрузкой, изменением размера и состоянием кадрирования в InputImage.
 */
export class InputImageFiles {
  /**
   * Constructor.
   *
   * Конструктор.
   * @param props input data / входные данные
   * @param value field value controller / контроллер значения поля
   */
  constructor(
    protected readonly props: InputImageProps,
    protected readonly value: FieldValueInclude<InputImageItem>
  ) {
  }

  /**
   * Returns crop coordinates.
   *
   * Возвращает координаты кадрирования.
   * @returns crop coordinates or undefined / координаты кадрирования или undefined
   */
  get crop(): CropAreaCoordinator | undefined {
    return this.get()?.crop
  }

  /**
   * Returns image source string.
   *
   * Возвращает строку источника изображения.
   * @returns image source string or undefined / строка источника изображения или undefined
   */
  get src(): string | undefined {
    return this.get()?.value
  }

  /**
   * Returns current value object with image source and crop coordinates.
   *
   * Возвращает текущий объект значения с источником изображения и координатами кадрирования.
   * @returns image value object or undefined / объект значения изображения или undefined
   */
  get(): InputImageValue | undefined {
    const raw = this.value.item.value

    if (isString(raw) && raw) {
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

    return undefined
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
   * Sets crop coordinates and triggers change.
   *
   * Устанавливает координаты кадрирования и вызывает событие изменения.
   * @param crop crop coordinates / координаты кадрирования
   */
  setCrop(crop?: CropAreaCoordinator): void {
    this.updateValue({
      ...this.get(),
      crop
    })
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

    const source = await this.processFile(file)

    if (source) {
      this.updateValue({
        value: source,
        crop: this.props.crop
      })

      return source
    }

    return undefined
  }

  /**
   * Asynchronously reads, validates, resizes, and sets the image from a FileList object.
   *
   * Асинхронно читает, проверяет, изменяет размер и устанавливает изображение из объекта FileList.
   * @param files selected or dropped file list / список выбранных или сброшенных файлов
   * @returns loaded and resized image source string or undefined / загруженная и масштабированная строка источника изображения или undefined
   */
  async setFiles(files?: FileList): Promise<string | undefined> {
    if (
      files
      && files.length > 0
    ) {
      return this.setFile(files[0])
    }

    return undefined
  }

  /**
   * Processes a File by reading it as Data URL and resizing down to maxSize if necessary.
   *
   * Обрабатывает File, читая его как Data URL и уменьшая до maxSize при необходимости.
   * @param file file to process / файл для обработки
   * @returns processed data URL string or undefined / обработанная строка Data URL или undefined
   */
  protected async processFile(file: File): Promise<string | undefined> {
    if (!ImageFile.isImage(file)) {
      return undefined
    }

    const dataUrl = await ImageFile.getFileResult(file)

    if (!dataUrl) {
      return undefined
    }

    return resizeImage(dataUrl, this.props.maxSize ?? 1280)
  }

  /**
   * Updates field value and triggers field input/change events.
   *
   * Обновляет значение поля и вызывает события ввода/изменения поля.
   * @param value new image value / новое значение изображения
   */
  protected updateValue(value?: InputImageValue): void {
    this.value.item.value = value
  }
}
