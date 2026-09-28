// ai-none

import { ref } from 'vue'
import {
  isObject,
  isString,
  resizeImage
} from '@dxtmisha/functional'

import type { FieldValueInclude } from '../../classes/Field/FieldValueInclude'

import type { CropAreaCoordinator } from '../CropArea'
import { ImageFile } from '../Image'

import type { FieldFileValue } from '../../types/fieldTypes'
import type { InputImageItem } from './basicTypes'
import type { InputImageProps } from './props'

/**
 * Class for managing image files, loading, resizing, and crop state in InputImage.
 *
 * Класс для управления файлами изображений, загрузкой, изменением размера и состоянием кадрирования в InputImage.
 */
export class InputImageFiles {
  /** Currently loaded or selected file object / Текущий загруженный или выбранный объект файла */
  readonly file = ref<File | undefined>()

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
  get(): FieldFileValue | undefined {
    const raw = this.value.item.value

    if (isString(raw) && raw) {
      return {
        value: raw,
        crop: this.props.crop
      }
    }

    if (isObject(raw)) {
      return raw
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
    const current = this.get()

    if (current) {
      this.updateValue({
        ...current,
        crop
      })
    }
  }

  /**
   * Asynchronously reads, validates, resizes, and sets the image from a File object.
   *
   * Асинхронно читает, проверяет, изменяет размер и устанавливает изображение из объекта File.
   * @param file selected or dropped file / выбранный или сброшенный файл
   * @returns loaded and resized image source string or undefined / загруженная и масштабированная строка источника изображения или undefined
   */
  async setFile(file?: File): Promise<string | undefined> {
    this.file.value = file

    if (!file) {
      return undefined
    }

    const source = await this.processFile(file)

    if (source) {
      const dimensions = await this.getDimensions(source)

      this.updateValue({
        value: source,
        name: file.name,
        type: file.type,
        size: file.size,
        width: dimensions?.width,
        height: dimensions?.height,
        lastModified: file.lastModified,
        crop: this.props.crop,
        file
      })

      return source
    }

    this.file.value = undefined
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
   * Retrieves image dimensions (width and height) from source string.
   *
   * Получает размеры изображения (ширину и высоту) из строки источника.
   * @param source image source string / строка источника изображения
   * @returns object with width and height or undefined / объект с шириной и высотой или undefined
   */
  protected async getDimensions(source: string): Promise<{ width?: number; height?: number } | undefined> {
    const item = await ImageFile.createImage(source)

    if (
      isObject(item)
      && 'width' in item
      && 'height' in item
    ) {
      return {
        width: item.width,
        height: item.height
      }
    }

    return undefined
  }

  /**
   * Processes a File by checking file size, reading it as Data URL and resizing down to maxPixel if necessary.
   *
   * Обрабатывает File, проверяя размер файла, читая его как Data URL и уменьшая до maxPixel при необходимости.
   * @param file file to process / файл для обработки
   * @returns processed data URL string or undefined / обработанная строка Data URL или undefined
   */
  protected async processFile(file: File): Promise<string | undefined> {
    if (!ImageFile.isImage(file)) {
      return undefined
    }

    if (this.props.maxFileSize && file.size > this.props.maxFileSize) {
      return undefined
    }

    const dataUrl = await ImageFile.getFileResult(file)

    if (!dataUrl) {
      return undefined
    }

    return resizeImage(dataUrl, this.props.maxPixel ?? 1280)
  }

  /**
   * Updates field value and triggers field input/change events.
   *
   * Обновляет значение поля и вызывает события ввода/изменения поля.
   * @param value new image value / новое значение изображения
   */
  protected updateValue(value?: FieldFileValue): void {
    this.value.item.value = value
  }
}
