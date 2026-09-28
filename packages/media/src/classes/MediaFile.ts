import {
  FileSvg,
  fileIcons,
  fileList
} from '../media/fileList'
import {
  MediaFileCategory,
  type MediaFileIcons,
  type MediaFileItem,
  type MediaFileList
} from '../types/fileTypes'

/** Regular expression to strip query parameters and hash / Регулярное выражение для удаления query-параметров и hash */
const REGEX_QUERY_HASH = /[?#].*$/

/**
 * Class for working with file configurations, determining names, extensions, categories, and SVG icons.
 *
 * Класс для работы с конфигурациями файлов, определения имен, расширений, категорий и SVG иконок.
 */
export class MediaFile {
  /** Custom icons registry / Реестр кастомных иконок */
  static readonly icons: MediaFileIcons = {}

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
   * Returns a file metadata item by its code or extension.
   *
   * Возвращает элемент метаданных файла по его коду или расширению.
   * @param code file code or extension / код файла или расширение
   * @returns file metadata item or undefined / элемент метаданных файла или undefined
   */
  static get(code: string): MediaFileItem | undefined {
    const normalizedCode = code.trim().toLowerCase()
    const item = fileList.find(element => element.code === normalizedCode)

    if (item) {
      if (normalizedCode in this.icons) {
        return {
          ...item,
          icon: this.icons[normalizedCode]
        }
      }

      return { ...item }
    }

    return undefined
  }

  /**
   * Returns the list of all file metadata configurations.
   *
   * Возвращает список всех конфигураций метаданных файлов.
   * @returns list of file items / список элементов файлов
   */
  static getList(): MediaFileList {
    return fileList
  }

  /**
   * Registers a custom icon for a specific file code or extension.
   *
   * Регистрирует пользовательскую иконку для определенного кода файла или расширения.
   * @param code file code or extension / код файла или расширение
   * @param icon SVG icon string / строка SVG иконки
   */
  static addIcon(code: string, icon: string): void {
    this.icons[code.trim().toLowerCase()] = icon
  }

  /**
   * Registers custom icons for multiple file codes or extensions.
   *
   * Регистрирует пользовательские иконки для нескольких кодов файлов или расширений.
   * @param icons dictionary of file codes and SVG icon strings / словарь кодов файлов и строк SVG иконок
   */
  static addIcons(icons: MediaFileIcons): void {
    for (const [code, icon] of Object.entries(icons)) {
      this.icons[code.trim().toLowerCase()] = icon
    }
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

    if (MediaFile.isLink(this.fileOrExtension)) {
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
    const ext = this.extension

    if (ext) {
      const item = MediaFile.get(ext)

      if (item?.category) {
        return item.category as MediaFileCategory
      }
    }

    return undefined
  }

  /**
   * Returns the file extension in lowercase without a dot.
   *
   * Возвращает расширение файла в нижнем регистре без точки.
   * @returns file extension / расширение файла
   */
  get extension(): string {
    if (!this.fileOrExtension) {
      return ''
    }

    if (MediaFile.isLink(this.fileOrExtension)) {
      const fileName = this.name
      const lastDot = fileName.lastIndexOf('.')

      return lastDot > 0 ? fileName.substring(lastDot + 1).toLowerCase() : ''
    }

    return this.extractExtensionFromString(this.fileOrExtension)
  }

  /**
   * Returns the SVG icon string for the file.
   *
   * Возвращает строку SVG иконки для файла.
   * @returns SVG icon string / строка SVG иконки
   */
  get icon(): string {
    const ext = this.extension

    return MediaFile.icons[ext]
      ?? fileIcons[ext]
      ?? fileIcons.file
      ?? FileSvg
  }

  /**
   * Returns the file metadata item from the registry.
   *
   * Возвращает элемент метаданных файла из реестра.
   * @returns file metadata item or undefined / элемент метаданных файла или undefined
   */
  get item(): MediaFileItem | undefined {
    return MediaFile.get(this.extension)
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
   * Checks whether the file is a presentation.
   *
   * Проверяет, является ли файл презентацией.
   * @returns true if presentation / true, если презентация
   */
  get isPresentation(): boolean {
    return this.category === MediaFileCategory.presentation
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

  /**
   * Checks whether the specified path is a link or path to a file.
   *
   * Проверяет, является ли указанный путь ссылкой или путем к файлу.
   * @param path file link or path / ссылка или путь к файлу
   * @returns true if path or link / true, если путь или ссылка
   */
  protected static isLink(path: string): boolean {
    return path.includes('/') || path.includes('\\') || path.startsWith('http://') || path.startsWith('https://')
  }

  /**
   * Helper to extract extension from a string filename or extension.
   *
   * Вспомогательный метод для извлечения расширения из строки имени файла или расширения.
   * @param value filename string or extension / строка имени файла или расширение
   * @returns extension without dot / расширение без точки
   */
  protected extractExtensionFromString(value: string): string {
    const cleanValue = value.trim()

    if (!cleanValue) {
      return ''
    }

    const lastDot = cleanValue.lastIndexOf('.')

    if (lastDot >= 0) {
      return cleanValue.substring(lastDot + 1).toLowerCase()
    }

    return cleanValue.toLowerCase()
  }
}
