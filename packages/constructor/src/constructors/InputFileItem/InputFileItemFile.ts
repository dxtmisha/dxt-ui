import { computed } from 'vue'
import { GeoIntl, toNumber } from '@dxtmisha/functional'
import { MediaFile } from '@dxtmisha/media'

import type { FieldFileValue } from '../../types/fieldTypes'
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
   * Resolves and returns the image source (File, URL, thumbnail, or prop image), or file icon if not an image.
   *
   * Определяет и возвращает источник изображения (File, URL, миниатюру или свойство image), либо иконку файла, если это не изображение.
   * @returns image source, File instance, icon string, or undefined / источник изображения, экземпляр File, строка иконки или undefined
   */
  get image(): InputFileItemPropsBasic['image'] | File | undefined {
    if (this.props.image) {
      return this.props.image
    }

    if (this.thumbnail) {
      return this.thumbnail
    }

    if (this.isImage()) {
      return this.src ?? this.getFile()
    }

    return this.getIcon()
  }

  /**
   * Resolves and returns the thumbnail source.
   *
   * Определяет и возвращает источник миниатюры.
   * @returns thumbnail source string or undefined / строка источника миниатюры или undefined
   */
  get thumbnail(): string | undefined {
    return this.props.value?.thumbnail
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
   * Resolves and returns the formatted file size string (e.g., "72 MB", "1.5 MB", "320 KB").
   *
   * Определяет и возвращает отформатированную строку размера файла (например, "72 MB", "1.5 MB", "320 KB").
   * @returns formatted size string / отформатированная строка размера
   */
  get sizeFormatted(): string {
    return new GeoIntl().sizeFile(this.size)
  }

  /**
   * Resolves and returns the image URL source.
   *
   * Определяет и возвращает URL-источник изображения.
   * @returns source URL string or undefined / строка URL источника или undefined
   */
  get src(): string | undefined {
    return this.props.value?.value
  }

  /**
   * Checks whether the current file is an image.
   *
   * Проверяет, является ли текущий файл изображением.
   * @returns true if image / true, если изображение
   */
  isImage(): boolean {
    return Boolean(this.mediaFile.value?.isImage())
  }

  /**
   * Resolves and returns file data in FieldFileValue format, taking into account file and value properties.
   *
   * Определяет и возвращает данные файла в формате FieldFileValue, учитывая свойства file и value.
   * @returns file value object or undefined / объект значения файла или undefined
   */
  get(): FieldFileValue | undefined {
    const file = this.getFile()

    if (file) {
      return {
        ...this.props.value,
        file,
        name: file.name || this.props.value?.name,
        size: file.size,
        type: file.type || this.props.value?.type || undefined,
        lastModified: file.lastModified || this.props.value?.lastModified
      }
    }

    if (this.props.value) {
      return { ...this.props.value }
    }

    return undefined
  }

  /**
   * Resolves and returns the file object if present.
   *
   * Определяет и возвращает объект файла, если он передан.
   * @returns file instance or undefined / экземпляр файла или undefined
   */
  readonly getFile = (): File | undefined => {
    return this.props.file ?? this.props.value?.file
  }

  /**
   * Resolves and returns the file icon depending on the file.
   *
   * Определяет и возвращает иконку файла в зависимости от файла.
   * @returns file icon string or undefined / строка иконки файла или undefined
   */
  readonly getIcon = (): string | undefined => {
    return this.mediaFile.value?.icon
  }

  /**
   * Resolves and returns the file source (File object, URL, or name).
   *
   * Определяет и возвращает источник файла (объект File, URL или имя).
   * @returns file source object, string, or undefined / объект источника файла, строка или undefined
   */
  protected getSource(): File | string | undefined {
    return this.thumbnail
      ?? this.getFile()
      ?? this.src
      ?? (this.name || undefined)
  }
}
