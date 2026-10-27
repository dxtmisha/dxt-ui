import type {
  MediaFileIcons,
  MediaFileItem,
  MediaFileItemReturn
} from '../types/fileTypes'

/** Regular expression to strip leading and trailing dots and spaces / Регулярное выражение для удаления начальных и конечных точек и пробелов */
const REGEX_TRIM_DOTS = /^[\s.]+|[\s.]+$/g

/**
 * Class for storing, managing, and resolving custom file vector icons.
 * Maintains a prototype-isolated in-memory registry of custom SVG markup,
 * provides fluent method chaining for registration and reset operations,
 * and defensively applies icons to file metadata items with hierarchical fallback.
 *
 * Класс для хранения, управления и разрешения пользовательских векторных иконок файлов.
 * Поддерживает изолированный от прототипа реестр SVG-разметки в памяти,
 * предоставляет цепочечные вызовы методов для регистрации и сброса,
 * а также безопасно применяет иконки к метаданным файлов с иерархическим фолбэком.
 */
export class MediaFileIcon {
  /** Indicator whether custom icons are registered / Признак наличия зарегистрированных иконок */
  protected static hasCustomIcons: boolean = false

  /** Custom icons registry / Реестр кастомных иконок */
  protected static iconList: MediaFileIcons = /* #__PURE__ */ Object.create(null)

  /**
   * Protected constructor.
   *
   * Защищенный конструктор.
   */
  protected constructor() {}

  /**
   * Returns a dictionary of all registered custom icons.
   *
   * Возвращает словарь всех зарегистрированных кастомных иконок.
   * @returns readonly dictionary of custom icons / словарь кастомных иконок только для чтения
   */
  static get icons(): Readonly<MediaFileIcons> {
    return Object.assign(Object.create(null), this.iconList)
  }

  /**
   * Checks whether a custom icon is registered for the specified code.
   *
   * Проверяет, зарегистрирована ли кастомная иконка для указанного кода.
   * @param code file code or extension / код файла или расширение
   * @returns true if custom icon exists / true, если кастомная иконка существует
   */
  static has(code: string): boolean {
    return Object.hasOwn(this.iconList, this.toCode(code))
  }

  /**
   * Returns a custom icon by file code or extension.
   *
   * Возвращает кастомную иконку по коду файла или расширению.
   * @param code file code or extension / код файла или расширение
   * @returns custom SVG icon string or undefined / кастомная строка SVG иконки или undefined
   */
  static get(code: string): string | undefined {
    const normalizedCode = this.toCode(code)

    return Object.hasOwn(this.iconList, normalizedCode) ? this.iconList[normalizedCode] : undefined
  }

  /**
   * Registers a custom icon for a specific file code or extension.
   *
   * Регистрирует пользовательскую иконку для определенного кода файла или расширения.
   * @param code file code or extension / код файла или расширение
   * @param icon SVG icon string / строка SVG иконки
   * @returns class constructor for method chaining / конструктор класса для цепочечных вызовов
   */
  static add(code: string, icon: string): typeof MediaFileIcon {
    const normalizedCode = this.toCode(code)

    if (
      normalizedCode
      && typeof icon === 'string'
      && icon.trim()
    ) {
      this.iconList[normalizedCode] = icon.trim()
      this.hasCustomIcons = true
    }

    return this
  }

  /**
   * Registers custom icons for multiple file codes or extensions.
   *
   * Регистрирует пользовательские иконки для нескольких кодов файлов или расширений.
   * @param icons dictionary of file codes and SVG icon strings / словарь кодов файлов и строк SVG иконок
   * @returns class constructor for method chaining / конструктор класса для цепочечных вызовов
   */
  static addList(icons: MediaFileIcons): typeof MediaFileIcon {
    if (
      !icons
      || typeof icons !== 'object'
      || Array.isArray(icons)
    ) {
      return this
    }

    for (const [code, icon] of Object.entries(icons)) {
      this.add(code, icon)
    }

    return this
  }

  /**
   * Removes a custom icon by file code or extension.
   *
   * Удаляет кастомную иконку по коду файла или расширению.
   * @param code file code or extension / код файла или расширение
   * @returns true if icon was removed / true, если иконка была удалена
   */
  static remove(code: string): boolean {
    const normalizedCode = this.toCode(code)

    if (Object.hasOwn(this.iconList, normalizedCode)) {
      delete this.iconList[normalizedCode]

      for (const remainingCode in this.iconList) {
        if (Object.hasOwn(this.iconList, remainingCode)) {
          return true
        }
      }

      this.hasCustomIcons = false

      return true
    }

    return false
  }

  /**
   * Resets all registered custom icons.
   *
   * Сбрасывает все зарегистрированные пользовательские иконки.
   * @returns class constructor for method chaining / конструктор класса для цепочечных вызовов
   */
  static reset(): typeof MediaFileIcon {
    this.iconList = Object.create(null)
    this.hasCustomIcons = false

    return this
  }

  /**
   * Converts a file code or extension to normalized code format.
   *
   * Преобразует код файла или расширение в нормализованный формат кода.
   * @param code file code or extension / код файла или расширение
   * @returns normalized code string / нормализованная строка кода
   */
  static toCode(code: string): string {
    if (
      typeof code !== 'string'
      || !code
    ) {
      return ''
    }

    return code
      .split(';')[0]
      .replace(REGEX_TRIM_DOTS, '')
      .toLowerCase()
  }

  /**
   * Applies custom icon to the file item if registered.
   *
   * Применяет кастомную иконку к элементу файла, если она зарегистрирована.
   * @param item file item / элемент файла
   * @returns file item with custom icon applied or undefined / элемент файла с примененной кастомной иконкой или undefined
   */
  static toItem<T extends MediaFileItem | undefined = undefined>(
    item?: T
  ): MediaFileItemReturn<T> {
    if (!item) {
      return undefined as MediaFileItemReturn<T>
    }

    const fileItem: MediaFileItem = { ...item }

    if (Array.isArray(fileItem.extensions)) {
      fileItem.extensions = [...fileItem.extensions]
    }

    const customIcon = this.find(fileItem)

    if (customIcon) {
      fileItem.icon = customIcon
    }

    return fileItem as MediaFileItemReturn<T>
  }

  /**
   * Finds a custom icon for the file item by its code, extensions, MIME type, or category.
   *
   * Находит кастомную иконку для элемента файла по его коду, расширениям, MIME-типу или категории.
   * @param item file item / элемент файла
   * @returns custom SVG icon string or undefined / кастомная строка SVG иконки или undefined
   */
  protected static find(item: MediaFileItem): string | undefined {
    if (!this.hasCustomIcons) {
      return undefined
    }

    let customIcon = this.get(item.code)

    if (customIcon) {
      return customIcon
    }

    if (item.extensions) {
      for (const extension of item.extensions) {
        customIcon = this.get(extension)

        if (customIcon) {
          return customIcon
        }
      }
    }

    if (item.mime) {
      customIcon = this.get(item.mime)

      if (customIcon) {
        return customIcon
      }
    }

    if (item.category) {
      return this.get(item.category)
    }

    return undefined
  }
}
