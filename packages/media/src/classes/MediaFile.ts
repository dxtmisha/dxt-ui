import { MediaFiles } from './MediaFiles'

import {
  MediaFileCategory,
  MediaFileGroup,
  type MediaFileItem
} from '../types/fileTypes'

/** Regular expression to strip query parameters and hash / Регулярное выражение для удаления query-параметров и hash */
const REGEX_QUERY_HASH = /[?#].*$/

/**
 * Class for working with file configurations, determining names, extensions, categories, and SVG icons.
 *
 * Класс для работы с конфигурациями файлов, определения имен, расширений, категорий и SVG иконок.
 */
export class MediaFile {
  /**
   * Constructor.
   *
   * Конструктор.
   * @param fileOrExtension file link or file type code / ссылка на файл или код типа файла
   */
  constructor(
    protected readonly fileOrExtension: string = ''
  ) {
  }

  /**
   * Returns the file name without extension.
   *
   * Возвращает имя файла без расширения.
   * @returns file base name / базовое имя файла
   */
  get baseName(): string {
    const fullName = this.name

    if (!fullName) {
      return ''
    }

    const lastDot = fullName.lastIndexOf('.')

    return lastDot > 0 ? fullName.substring(0, lastDot) : fullName
  }

  /**
   * Returns the file category.
   *
   * Возвращает категорию файла.
   * @returns category or undefined / категория или undefined
   */
  get category(): MediaFileCategory | undefined {
    return this.item?.category as MediaFileCategory | undefined
  }

  /**
   * Returns the file extension in lowercase without a dot.
   *
   * Возвращает расширение файла в нижнем регистре без точки.
   * @returns file extension / расширение файла
   */
  get extension(): string {
    const name = this.name

    if (!name) {
      return ''
    }

    const lastDot = name.lastIndexOf('.')

    if (lastDot >= 0) {
      return name.substring(lastDot + 1).toLowerCase()
    }

    return MediaFiles.isLink(this.fileOrExtension) ? '' : name.toLowerCase()
  }

  /**
   * Returns the file item group classification.
   *
   * Возвращает классификацию группы элемента файла.
   * @returns file group or undefined / группа файла или undefined
   */
  get group(): MediaFileGroup | undefined {
    return this.item?.group as MediaFileGroup | undefined
  }

  /**
   * Returns the SVG icon string for the file.
   *
   * Возвращает строку SVG иконки для файла.
   * @returns SVG icon string / строка SVG иконки
   */
  get icon(): string {
    return this.item?.icon ?? ''
  }

  /**
   * Returns the file metadata item from the registry.
   *
   * Возвращает элемент метаданных файла из реестра.
   * @returns file metadata item or undefined / элемент метаданных файла или undefined
   */
  get item(): MediaFileItem | undefined {
    return MediaFiles.get(this.extension)
  }

  /**
   * Returns the full file name.
   *
   * Возвращает полное имя файла.
   * @returns full file name / полное имя файла
   */
  get name(): string {
    if (!this.fileOrExtension) {
      return ''
    }

    if (MediaFiles.isLink(this.fileOrExtension)) {
      const cleanPath = this.fileOrExtension.replace(REGEX_QUERY_HASH, '')
      const lastSlash = Math.max(
        cleanPath.lastIndexOf('/'),
        cleanPath.lastIndexOf('\\')
      )

      return lastSlash >= 0 ? cleanPath.substring(lastSlash + 1) : cleanPath
    }

    return this.fileOrExtension
  }

  /**
   * Checks whether the file is an archive.
   *
   * Проверяет, является ли файл архивом.
   * @returns true if archive / true, если архив
   */
  get isArchive(): boolean {
    return this.category === MediaFileCategory.archive
  }

  /**
   * Checks whether the file is audio.
   *
   * Проверяет, является ли файл аудио.
   * @returns true if audio / true, если аудио
   */
  get isAudio(): boolean {
    return this.category === MediaFileCategory.audio
  }

  /**
   * Checks whether the file is a category-level neutral icon.
   *
   * Проверяет, является ли файл нейтральной иконкой категории.
   * @returns true if category neutral icon / true, если нейтральная иконка категории
   */
  get isCategory(): boolean {
    return this.group === MediaFileGroup.category
  }

  /**
   * Checks whether the file is source code.
   *
   * Проверяет, является ли файл исходным кодом.
   * @returns true if source code / true, если исходный код
   */
  get isCode(): boolean {
    return this.category === MediaFileCategory.code
  }

  /**
   * Checks whether the file is a document.
   *
   * Проверяет, является ли файл документом.
   * @returns true if document / true, если документ
   */
  get isDocument(): boolean {
    return this.category === MediaFileCategory.document
  }

  /**
   * Checks whether the file is an image.
   *
   * Проверяет, является ли файл изображением.
   * @returns true if image / true, если изображение
   */
  get isImage(): boolean {
    return this.category === MediaFileCategory.image
  }

  /**
   * Checks whether the file is a default neutral file icon.
   *
   * Проверяет, является ли файл основной нейтральной иконкой файла.
   * @returns true if neutral file icon / true, если основная нейтральная иконка файла
   */
  get isNeutral(): boolean {
    return this.group === MediaFileGroup.neutral
  }

  /**
   * Checks whether the file is a presentation.
   *
   * Проверяет, является ли файл презентацией.
   * @returns true if presentation / true, если презентация
   */
  get isPresentation(): boolean {
    return this.category === MediaFileCategory.presentation
  }

  /**
   * Checks whether the file is a standard file format or extension.
   *
   * Проверяет, является ли файл обычным форматом или расширением файла.
   * @returns true if standard file / true, если обычный файл
   */
  get isStandard(): boolean {
    return this.group === MediaFileGroup.standard
  }

  /**
   * Checks whether the file is a table or spreadsheet.
   *
   * Проверяет, является ли файл таблицей или электронной таблицей.
   * @returns true if table / true, если таблица
   */
  get isTable(): boolean {
    return this.category === MediaFileCategory.table
  }

  /**
   * Checks whether the file is a video.
   *
   * Проверяет, является ли файл видео.
   * @returns true if video / true, если видео
   */
  get isVideo(): boolean {
    return this.category === MediaFileCategory.video
  }
}
