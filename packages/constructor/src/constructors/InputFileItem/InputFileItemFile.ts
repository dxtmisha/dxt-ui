import {
  isFilled,
  isNumber,
  isString,
  toNumber
} from '@dxtmisha/functional'

import { ImageFile } from '../Image'

import type { InputFileItemPropsBasic } from './props'

/** Regular expression to test image file extension / Регулярное выражение для проверки расширения файла изображения */
const REGEX_IMAGE_EXTENSION = /\.(?:avif|bmp|gif|ico|jpe?g|png|svg|webp)$/i

/**
 * Helper class for processing file attributes, preview generation, and size formatting.
 *
 * Вспомогательный класс для обработки атрибутов файла, генерации предпросмотра и форматирования размера.
 */
export class InputFileItemFile {
  /**
   * Constructor.
   *
   * Конструктор.
   * @param props input data / входные данные
   */
  constructor(
    protected readonly props: InputFileItemPropsBasic
  ) {
  }

  /**
   * Resolves and returns the file name.
   *
   * Определяет и возвращает имя файла.
   * @returns file name string / строка с именем файла
   */
  get name(): string {
    const customName = this.props.name ?? this.props.label
    if (isFilled(customName)) {
      return String(customName)
    }

    if (this.props.file?.name) {
      return this.props.file.name
    }

    if (this.props.item?.name) {
      return this.props.item.name
    }

    return ''
  }

  /**
   * Resolves and returns the raw file size in bytes.
   *
   * Определяет и возвращает исходный размер файла в байтах.
   * @returns file size number or undefined / размер файла в байтах или undefined
   */
  get size(): number | undefined {
    if (isNumber(this.props.size)) {
      return this.props.size
    }

    if (isString(this.props.size) && !Number.isNaN(Number(this.props.size))) {
      return toNumber(this.props.size)
    }

    if (this.props.file?.size) {
      return this.props.file.size
    }

    if (isNumber(this.props.item?.size)) {
      return this.props.item.size
    }

    return undefined
  }

  /**
   * Resolves and returns the formatted file size string (e.g., "72 Mb", "1.5 MB", "320 KB").
   *
   * Определяет и возвращает отформатированную строку размера файла (например, "72 Mb", "1.5 MB", "320 KB").
   * @returns formatted size string / отформатированная строка размера
   */
  get sizeFormatted(): string {
    if (isString(this.props.size) && Number.isNaN(Number(this.props.size))) {
      return this.props.size
    }

    const bytes = this.size
    if (bytes === undefined || bytes < 0) {
      return ''
    }

    if (bytes < 1024) {
      return `${bytes} B`
    }

    const kilobytes = bytes / 1024
    if (kilobytes < 1024) {
      return `${kilobytes < 10 ? kilobytes.toFixed(1) : Math.round(kilobytes)} KB`
    }

    const megabytes = kilobytes / 1024
    if (megabytes < 1024) {
      return `${megabytes < 10 ? megabytes.toFixed(1) : Math.round(megabytes)} Mb`
    }

    const gigabytes = megabytes / 1024
    return `${gigabytes.toFixed(1)} GB`
  }

  /**
   * Resolves and returns the image or thumbnail URL source.
   *
   * Определяет и возвращает URL-источник изображения или миниатюры.
   * @returns source URL string or undefined / строка URL источника или undefined
   */
  get src(): string | undefined {
    if (isString(this.props.src)) {
      return this.props.src
    }

    if (isString(this.props.url)) {
      return this.props.url
    }

    if (isString(this.props.thumbnail)) {
      return this.props.thumbnail
    }

    if (this.props.item?.src) {
      return this.props.item.src
    }

    if (this.props.item?.url) {
      return this.props.item.url
    }

    return undefined
  }

  /**
   * Value for passing to the Image component.
   *
   * Значение для передачи в компонент Image.
   * @returns Image source string, File instance, or undefined / Строка источника, экземпляр File или undefined
   */
  get imageValue(): string | File | undefined {
    const directSrc = this.src
    if (directSrc) {
      return directSrc
    }

    if (this.props.file && this.isImage) {
      return this.props.file
    }

    return undefined
  }

  /**
   * Checks whether the current file is an image.
   *
   * Проверяет, является ли текущий файл изображением.
   * @returns true if image / true, если изображение
   */
  get isImage(): boolean {
    if (this.props.file) {
      return ImageFile.isImage(this.props.file)
    }

    const source = this.src ?? this.name
    if (source) {
      return REGEX_IMAGE_EXTENSION.test(source)
    }

    return false
  }

  /**
   * Checks whether thumbnail preview should be displayed.
   *
   * Проверяет, должна ли отображаться миниатюра предварительного просмотра.
   * @returns true if thumbnail enabled / true, если миниатюра включена
   */
  get hasThumbnail(): boolean {
    if (this.props.thumbnail === false) {
      return false
    }

    return Boolean(
      this.props.thumbnail
      || this.src
      || this.isImage
      || this.props.file
    )
  }
}
