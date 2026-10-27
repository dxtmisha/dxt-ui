import { MediaFiles } from './MediaFiles'

import {
  MediaFileCategory,
  MediaFileGroup,
  type MediaFileItem
} from '../types/fileTypes'

/** Regular expression to extract MIME type from Data URL / Регулярное выражение для извлечения MIME-типа из Data URL */
const REGEX_DATA_MIME = /^data:([^;,]+)/

/** Regular expression to check URL protocol / Регулярное выражение для проверки протокола URL */
const REGEX_PROTOCOL = /^https?:\/\//i

/** Regular expression to strip URL protocol and domain / Регулярное выражение для удаления протокола и домена URL */
const REGEX_URL_DOMAIN = /^https?:\/\/[^/\\]*/i

/** Regular expression to strip query parameters and hash / Регулярное выражение для удаления query-параметров и hash */
const REGEX_QUERY_HASH = /[?#].*$/

/**
 * Universal file entity parser and configuration manager.
 * Unifies heterogeneous file inputs (File, Blob, Data URL, Blob URL, remote HTTP/HTTPS URLs,
 * local filesystem paths, MIME types, extensions, and category codes) into a standardized interface.
 * Provides lazy memoized resolution of filenames, base names, normalized extensions, MIME types,
 * categories across 16 media classifications, and vector SVG file icons via MediaFiles and MediaFileIcon.
 *
 * Универсальный парсер сущностей файлов и менеджер конфигураций.
 * Унифицирует разнородные входные данные (File, Blob, Data URL, Blob URL, удаленные ссылки HTTP/HTTPS,
 * пути локальной файловой системы, MIME-типы, расширения и коды категорий) в стандартизированный интерфейс.
 * Обеспечивает ленивое мемоизированное определение имен файлов, базовых имен, нормализованных расширений,
 * MIME-типов, категорий по 16 классификациям медиа и векторных SVG-иконок через MediaFiles и MediaFileIcon.
 */
export class MediaFile {
  /** Cached file extension / Кэш расширения файла */
  protected extensionCache?: string

  /** Cached list of file extensions / Кэш списка расширений файла */
  protected extensionsCache?: string[]

  /** Cached file metadata item / Кэш элемента метаданных файла */
  protected itemCache?: MediaFileItem

  /** Cached full file name / Кэш полного имени файла */
  protected nameCache?: string

  /** Cached raw MIME type / Кэш исходного MIME-типа */
  protected rawMimeCache?: string | null

  /** Cached trimmed raw string / Кэш нормализованной исходной строки */
  protected rawStringCache?: string | null

  /**
   * Constructor.
   *
   * Конструктор.
   * @param fileOrExtension file, blob, file link, or file type code / файл, blob, ссылка на файл или код типа файла
   * @param mimeType file MIME type / MIME-тип файла
   */
  constructor(
    protected readonly fileOrExtension: File | Blob | string,
    protected readonly mimeType?: string
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

    if (lastDot > 0) {
      return fullName.substring(0, lastDot)
    }

    return fullName
  }

  /**
   * Returns the Blob or File object if provided.
   *
   * Возвращает объект Blob или File, если он был передан.
   * @returns Blob or File object or undefined / объект Blob или File или undefined
   */
  get blob(): Blob | undefined {
    return this.isBlobInput() ? this.fileOrExtension : undefined
  }

  /**
   * Returns the file category.
   *
   * Возвращает категорию файла.
   * @returns category or undefined / категория или undefined
   */
  get category(): MediaFileCategory | undefined {
    return this.item.category as MediaFileCategory | undefined
  }

  /**
   * Returns the file extension in lowercase without a dot.
   * If initialized with a plain type or category code without a dot (e.g. 'archive' or 'file'),
   * the code itself is returned as the extension for backward compatibility.
   * For paths or links without an extension or category MIME types (e.g. 'audio/*'), returns an empty string.
   *
   * Возвращает расширение файла в нижнем регистре без точки.
   * Если экземпляр инициализирован простым кодом типа или категории без точки (например, 'archive' или 'file'),
   * сам этот код сохраняется и возвращается в качестве расширения для обратной совместимости.
   * Для ссылок и путей без расширения или категорийных MIME-типов (например, 'audio/*') возвращает пустую строку.
   * @returns file extension / расширение файла
   */
  get extension(): string {
    if (this.extensionCache === undefined) {
      this.extensionCache = this.initExtension()
    }

    return this.extensionCache
  }

  /**
   * Returns the list of supported file extensions.
   * If the item has registered extensions in the catalog, returns them.
   * If initialized with a plain type or category code without a dot (e.g. 'archive' or 'file'), falls back to [extension].
   * Returns undefined for links or paths without extensions.
   *
   * Возвращает список поддерживаемых расширений файла.
   * Если элемент имеет зарегистрированные расширения в каталоге, возвращает их список.
   * Если экземпляр инициализирован простым кодом типа или категории без точки (например, 'archive' или 'file'), возвращает [extension].
   * Возвращает undefined для ссылок и путей без расширения.
   * @returns file extensions or undefined / расширения файла или undefined
   */
  get extensions(): string[] | undefined {
    if (this.extensionsCache === undefined) {
      this.extensionsCache = this.initExtensions()
    }

    return this.extensionsCache
  }

  /**
   * Returns the File object if provided.
   *
   * Возвращает объект File, если он был передан.
   * @returns File object or undefined / объект File или undefined
   */
  get file(): File | undefined {
    return this.isFileInput() ? this.fileOrExtension : undefined
  }

  /**
   * Returns the file item group classification.
   *
   * Возвращает классификацию группы элемента файла.
   * @returns file group or undefined / группа файла или undefined
   */
  get group(): MediaFileGroup | undefined {
    return this.item.group as MediaFileGroup | undefined
  }

  /**
   * Returns the SVG icon string for the file.
   *
   * Возвращает строку SVG иконки для файла.
   * @returns SVG icon string / строка SVG иконки
   */
  get icon(): string {
    return this.item.icon ?? ''
  }

  /**
   * Returns the file metadata item from the registry.
   *
   * Возвращает элемент метаданных файла из реестра.
   * @returns file metadata item / элемент метаданных файла
   */
  get item(): MediaFileItem {
    if (this.itemCache === undefined) {
      this.itemCache = this.initItem()
    }

    return this.itemCache
  }

  /**
   * Returns the MIME type of the file.
   *
   * Возвращает MIME-тип файла.
   * @returns MIME type or undefined / MIME-тип или undefined
   */
  get mime(): string | undefined {
    return this.rawMime || this.item.mime
  }

  /**
   * Returns the full file name.
   * If the path or link ends with a trailing slash (e.g. directory or folder path), or if input is a Blob URL, Data URL, or MIME type, returns an empty string.
   *
   * Возвращает полное имя файла.
   * Если путь или ссылка завершается слэшем (например, путь к каталогу или папке), либо если входное значение является Blob URL, Data URL или MIME-типом, возвращает пустую строку.
   * @returns full file name / полное имя файла
   */
  get name(): string {
    if (this.nameCache === undefined) {
      this.nameCache = this.initName()
    }

    return this.nameCache
  }

  /**
   * Checks whether the file is an archive.
   *
   * Проверяет, является ли файл архивом.
   * @returns true if archive / true, если архив
   */
  isArchive(): boolean {
    return this.category === MediaFileCategory.archive
  }

  /**
   * Checks whether the file is audio.
   *
   * Проверяет, является ли файл аудио.
   * @returns true if audio / true, если аудио
   */
  isAudio(): boolean {
    return this.category === MediaFileCategory.audio
  }

  /**
   * Checks whether the file input is a Blob URL.
   *
   * Проверяет, является ли входное значение Blob URL.
   * @returns true if input is a Blob URL / true, если входное значение является Blob URL
   */
  isBlobUrl(): boolean {
    return this.rawString !== undefined
      && this.rawString.startsWith('blob:')
  }

  /**
   * Checks whether the file is a category-level neutral icon.
   *
   * Проверяет, является ли файл нейтральной иконкой категории.
   * @returns true if category neutral icon / true, если нейтральная иконка категории
   */
  isCategoryGroup(): boolean {
    return this.group === MediaFileGroup.category
  }

  /**
   * Checks whether the file is source code.
   *
   * Проверяет, является ли файл исходным кодом.
   * @returns true if source code / true, если исходный код
   */
  isCode(): boolean {
    return this.category === MediaFileCategory.code
  }

  /**
   * Checks whether the file is a configuration file.
   *
   * Проверяет, является ли файл файлом конфигурации.
   * @returns true if configuration file / true, если файл конфигурации
   */
  isConfig(): boolean {
    return this.category === MediaFileCategory.config
  }

  /**
   * Checks whether the file is a database file.
   *
   * Проверяет, является ли файл файлом базы данных.
   * @returns true if database file / true, если файл базы данных
   */
  isDatabase(): boolean {
    return this.category === MediaFileCategory.database
  }

  /**
   * Checks whether the file input is a Data URL.
   *
   * Проверяет, является ли входное значение Data URL.
   * @returns true if input is a Data URL / true, если входное значение является Data URL
   */
  isDataUrl(): boolean {
    return this.rawString !== undefined
      && this.rawString.startsWith('data:')
  }

  /**
   * Checks whether the file is a document.
   *
   * Проверяет, является ли файл документом.
   * @returns true if document / true, если документ
   */
  isDocument(): boolean {
    return this.category === MediaFileCategory.document
  }

  /**
   * Checks whether the file is an executable or installer.
   *
   * Проверяет, является ли файл исполняемым файлом или установщиком.
   * @returns true if executable / true, если исполняемый файл
   */
  isExecutable(): boolean {
    return this.category === MediaFileCategory.executable
  }

  /**
   * Checks whether the file is a folder item.
   *
   * Проверяет, является ли элемент папкой.
   * @returns true if folder / true, если папка
   */
  isFolder(): boolean {
    return this.category === MediaFileCategory.folder
  }

  /**
   * Checks whether the file is a font file.
   *
   * Проверяет, является ли файл шрифтом.
   * @returns true if font file / true, если файл шрифта
   */
  isFont(): boolean {
    return this.category === MediaFileCategory.font
  }

  /**
   * Checks whether the file is an image.
   *
   * Проверяет, является ли файл изображением.
   * @returns true if image / true, если изображение
   */
  isImage(): boolean {
    return this.category === MediaFileCategory.image
  }

  /**
   * Checks whether the file is a default neutral file icon.
   *
   * Проверяет, является ли файл основной нейтральной иконкой файла.
   * @returns true if neutral file icon / true, если основная нейтральная иконка файла
   */
  isNeutral(): boolean {
    return this.group === MediaFileGroup.neutral
  }

  /**
   * Checks whether the file is a presentation.
   *
   * Проверяет, является ли файл презентацией.
   * @returns true if presentation / true, если презентация
   */
  isPresentation(): boolean {
    return this.category === MediaFileCategory.presentation
  }

  /**
   * Checks whether the file is a standard file format or extension.
   *
   * Проверяет, является ли файл обычным форматом или расширением файла.
   * @returns true if standard file / true, если обычный файл
   */
  isStandard(): boolean {
    return this.group === MediaFileGroup.standard
  }

  /**
   * Checks whether the file is a system or generic file.
   *
   * Проверяет, является ли файл системным или общим файлом.
   * @returns true if system file / true, если системный файл
   */
  isSystem(): boolean {
    return this.category === MediaFileCategory.system
  }

  /**
   * Checks whether the file is a table or spreadsheet.
   *
   * Проверяет, является ли файл таблицей или электронной таблицей.
   * @returns true if table / true, если таблица
   */
  isTable(): boolean {
    return this.category === MediaFileCategory.table
  }

  /**
   * Checks whether the file is plain text or markdown.
   *
   * Проверяет, является ли файл простым текстом или markdown.
   * @returns true if plain text / true, если простой текст
   */
  isText(): boolean {
    return this.category === MediaFileCategory.text
  }

  /**
   * Checks whether the file input is a URL with HTTP or HTTPS protocol.
   *
   * Проверяет, является ли входное значение URL с протоколом HTTP или HTTPS.
   * @returns true if input is a URL / true, если входное значение является URL
   */
  isUrl(): boolean {
    return this.rawString !== undefined
      && REGEX_PROTOCOL.test(this.rawString)
  }

  /**
   * Checks whether the file is vector graphics.
   *
   * Проверяет, является ли файл векторной графикой.
   * @returns true if vector graphics / true, если векторная графика
   */
  isVector(): boolean {
    return this.category === MediaFileCategory.vector
  }

  /**
   * Checks whether the file is a video.
   *
   * Проверяет, является ли файл видео.
   * @returns true if video / true, если видео
   */
  isVideo(): boolean {
    return this.category === MediaFileCategory.video
  }

  /**
   * Resets the cached file values.
   *
   * Сбрасывает кэшированные значения файла.
   * @returns current instance / текущий экземпляр
   */
  reset(): this {
    this.extensionCache = undefined
    this.extensionsCache = undefined
    this.itemCache = undefined
    this.nameCache = undefined
    this.rawMimeCache = undefined
    this.rawStringCache = undefined

    return this
  }

  /**
   * Returns the input string cleaned of query parameters, hash fragments, and URL protocol with domain.
   *
   * Возвращает входную строку, очищенную от query-параметров, фрагментов hash и протокола URL с доменом.
   * @returns cleaned string or empty string / очищенная строка или пустая строка
   */
  protected get cleanString(): string {
    const rawString = this.rawString

    if (!rawString) {
      return ''
    }

    if (
      this.isBlobUrl()
      || this.isDataUrl()
    ) {
      return rawString
    }

    return rawString
      .replace(REGEX_QUERY_HASH, '')
      .replace(REGEX_URL_DOMAIN, '')
  }

  /**
   * Returns the explicit or detected MIME type from input.
   *
   * Возвращает явный или определенный MIME-тип из входных данных.
   * @returns raw MIME type or undefined / исходный MIME-тип или undefined
   */
  protected get rawMime(): string | undefined {
    if (this.rawMimeCache === undefined) {
      this.rawMimeCache = this.initRawMime() ?? null
    }

    return this.rawMimeCache ?? undefined
  }

  /**
   * Returns the trimmed string if input is a string, or undefined otherwise.
   *
   * Возвращает обрезанную строку, если входное значение является строкой, либо undefined.
   * @returns trimmed string or undefined / обрезанная строка или undefined
   */
  protected get rawString(): string | undefined {
    if (this.rawStringCache === undefined) {
      this.rawStringCache = typeof this.fileOrExtension === 'string'
        ? this.fileOrExtension.trim()
        : null
    }

    return this.rawStringCache ?? undefined
  }

  /**
   * Checks whether the input is a Blob or File instance.
   *
   * Проверяет, является ли входное значение экземпляром Blob или File.
   * @returns true if input is a Blob or File instance / true, если входное значение является экземпляром Blob или File
   */
  protected isBlobInput(): this is { fileOrExtension: Blob } {
    return typeof Blob !== 'undefined' && this.fileOrExtension instanceof Blob
  }

  /**
   * Checks whether the input is a File instance.
   *
   * Проверяет, является ли входное значение экземпляром File.
   * @returns true if input is a File instance / true, если входное значение является экземпляром File
   */
  protected isFileInput(): this is { fileOrExtension: File } {
    return typeof File !== 'undefined' && this.fileOrExtension instanceof File
  }

  /**
   * Initializes and calculates the file extension.
   * Extracts extension from dotted filenames, resolves primary extension from standard MIME items,
   * and preserves plain type or category codes without dots (e.g. 'archive', 'file') for backward compatibility.
   *
   * Инициализирует и вычисляет расширение файла.
   * Извлекает расширение из имен файлов с точкой, определяет первичное расширение из стандартных MIME-элементов,
   * а также сохраняет простые коды типов и категорий без точки (например, 'archive', 'file') для обратной совместимости.
   * @returns file extension / расширение файла
   */
  protected initExtension(): string {
    const name = this.name

    if (name) {
      const lastDot = name.lastIndexOf('.')

      if (lastDot >= 0) {
        return name.substring(lastDot + 1).toLowerCase()
      }
    }

    if (this.rawMime) {
      const item = MediaFiles.getByMime(this.rawMime)

      if (
        item
        && item.group === MediaFileGroup.standard
      ) {
        return item.extensions?.[0] ?? item.code
      }
    }

    if (!name || this.isFileInput()) {
      return ''
    }

    const cleanedString = this.cleanString

    if (
      cleanedString
      && (
        MediaFiles.isLink(cleanedString)
        || MediaFiles.isMime(cleanedString)
      )
    ) {
      return ''
    }

    return name.toLowerCase()
  }

  /**
   * Initializes and calculates the list of file extensions.
   *
   * Инициализирует и вычисляет список расширений файла.
   * @returns file extensions or undefined / расширения файла или undefined
   */
  protected initExtensions(): string[] | undefined {
    if (this.item.extensions) {
      return [...this.item.extensions]
    }

    if (this.extension) {
      return [this.extension]
    }

    return undefined
  }

  /**
   * Initializes and resolves the file metadata item from the registry.
   *
   * Инициализирует и разрешает элемент метаданных файла из реестра.
   * @returns file metadata item / элемент метаданных файла
   */
  protected initItem(): MediaFileItem {
    if (this.extension) {
      const item = MediaFiles.get(this.extension)

      if (item.group !== MediaFileGroup.neutral) {
        return item
      }
    }

    if (this.rawMime) {
      const mimeItem = MediaFiles.getByMime(this.rawMime)

      if (mimeItem) {
        return mimeItem
      }
    }

    const cleanedString = this.cleanString

    if (cleanedString) {
      return MediaFiles.get(cleanedString)
    }

    return MediaFiles.getNeutral()
  }

  /**
   * Initializes and calculates the full file name.
   * If the path or link ends with a trailing slash (e.g. directory or folder path), or if input is a Blob URL, Data URL, or MIME type, returns an empty string.
   *
   * Инициализирует и вычисляет полное имя файла.
   * Если путь или ссылка завершается слэшем (например, путь к каталогу или папке), либо если входное значение является Blob URL, Data URL или MIME-типом, возвращает пустую строку.
   * @returns full file name / полное имя файла
   */
  protected initName(): string {
    if (
      !this.fileOrExtension
      || this.isBlobUrl()
      || this.isDataUrl()
    ) {
      return ''
    }

    if (this.isFileInput()) {
      return this.fileOrExtension.name
    }

    const cleanedPath = this.cleanString

    if (
      !cleanedPath
      || MediaFiles.isMime(cleanedPath)
    ) {
      return ''
    }

    const lastSlash = Math.max(
      cleanedPath.lastIndexOf('/'),
      cleanedPath.lastIndexOf('\\')
    )

    if (lastSlash >= 0) {
      return this.toDecoded(cleanedPath.substring(lastSlash + 1))
    }

    return this.toDecoded(cleanedPath)
  }

  /**
   * Initializes and detects the raw MIME type from input.
   *
   * Инициализирует и определяет исходный MIME-тип из входных данных.
   * @returns raw MIME type or undefined / исходный MIME-тип или undefined
   */
  protected initRawMime(): string | undefined {
    if (this.mimeType) {
      return this.toMime(this.mimeType)
    }

    if (this.isBlobInput()) {
      const type = this.fileOrExtension.type

      if (type) {
        return this.toMime(type)
      }
    }

    if (this.isDataUrl() && this.rawString) {
      const match = this.rawString.match(REGEX_DATA_MIME)

      if (match?.[1]) {
        return this.toMime(match[1])
      }
    }

    const cleanedString = this.cleanString

    if (
      cleanedString
      && MediaFiles.isMime(cleanedString)
    ) {
      return this.toMime(cleanedString)
    }

    return undefined
  }

  /**
   * Safely decodes a URI component string, returning the original string if decoding fails.
   *
   * Безопасно декодирует строку URI-компонента, возвращая исходную строку при ошибке декодирования.
   * @param value string to decode / строка для декодирования
   * @returns decoded string or original string / декодированная строка или исходная строка
   */
  protected toDecoded(value: string): string {
    if (!value.includes('%')) {
      return value
    }

    try {
      return decodeURIComponent(value)
    } catch {
      return value
    }
  }

  /**
   * Normalizes a MIME type string by trimming whitespace and converting to lowercase.
   *
   * Нормализует строку MIME-типа, удаляя пробелы и преобразуя в нижний регистр.
   * @param mime MIME type to normalize / MIME-тип для нормализации
   * @returns normalized MIME type / нормализованный MIME-тип
   */
  protected toMime(mime: string): string {
    return mime.trim().toLowerCase()
  }
}
