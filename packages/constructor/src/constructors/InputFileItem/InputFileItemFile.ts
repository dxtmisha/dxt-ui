import { computed } from 'vue'
import { isString, toNumber } from '@dxtmisha/functional'
import { MediaFile } from '@dxtmisha/media'

import { ImageFile } from '../Image'

import type { InputFileItemPropsBasic } from './props'

/**
 * Helper class for processing file attributes, preview generation, and size formatting.
 *
 * Вспомогательный класс для обработки атрибутов файла, генерации предпросмотра и форматирования размера.
 */
export class InputFileItemFile {
  /**
   * Media file analysis helper instance.
   *
   * Экземпляр помощника анализа медиа-файла.
   */
  readonly mediaFile = computed<MediaFile | undefined>(() => {
    const source = this.getSource()

    if (source) {
      return new MediaFile(source)
    }

    return undefined
  })

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
    return this.getFile()?.name
      || this.props.value?.name
      || ''
  }

  /**
   * Resolves and returns the raw file size in bytes.
   *
   * Определяет и возвращает исходный размер файла в байтах.
   * @returns file size number / размер файла в байтах
   */
  get size(): number {
    return toNumber(
      this.getFile()?.size
      ?? this.props.value?.size
      ?? 0
    )
  }

  /**
   * Resolves and returns the formatted file size string (e.g., "72 Mb", "1.5 MB", "320 KB").
   *
   * Определяет и возвращает отформатированную строку размера файла (например, "72 Mb", "1.5 MB", "320 KB").
   * @returns formatted size string / отформатированная строка размера
   */
  get sizeFormatted(): string {
    const bytes = this.size
    if (bytes <= 0) {
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
   * Resolves and returns the image URL source.
   *
   * Определяет и возвращает URL-источник изображения.
   * @returns source URL string or undefined / строка URL источника или undefined
   */
  get src(): string | undefined {
    if (isString(this.props.url)) {
      return this.props.url
    }

    if (this.props.value?.value) {
      return this.props.value.value
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

    const file = this.getFile()
    if (file && this.isImage) {
      return file
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
    const file = this.getFile()
    if (file) {
      return ImageFile.isImage(file) || Boolean(this.mediaFile.value?.isImage())
    }

    return Boolean(this.mediaFile.value?.isImage())
  }

  /**
   * Checks whether thumbnail preview should be displayed.
   *
   * Проверяет, должна ли отображаться миниатюра предварительного просмотра.
   * @returns true if thumbnail enabled / true, если миниатюра включена
   */
  get hasThumbnail(): boolean {
    return Boolean(
      this.src
      || this.isImage
      || this.getFile()
    )
  }

  /**
   * Resolves and returns the file object if present.
   *
   * Определяет и возвращает объект файла, если он передан.
   * @returns file instance or undefined / экземпляр файла или undefined
   */
  getFile(): File | undefined {
    return this.props.file ?? this.props.value?.file
  }

  /**
   * Resolves and returns the file source (File object, URL, or name).
   *
   * Определяет и возвращает источник файла (объект File, URL или имя).
   * @returns file source object, string, or undefined / объект источника файла, строка или undefined
   */
  getSource(): File | string | undefined {
    return this.getFile()
      ?? this.src
      ?? (this.name || undefined)
  }
}
