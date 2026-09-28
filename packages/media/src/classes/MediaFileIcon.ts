import type {
  MediaFileIcons,
  MediaFileItem
} from '../types/fileTypes'

/**
 * Class for storing and managing custom file icons.
 *
 * Класс для хранения и управления кастомными иконками файлов.
 */
export class MediaFileIcon {
  /** Custom icons registry / Реестр кастомных иконок */
  static readonly icons: MediaFileIcons = {}

  /**
   * Checks whether a custom icon is registered for the specified code.
   *
   * Проверяет, зарегистрирована ли кастомная иконка для указанного кода.
   * @param code file code or extension / код файла или расширение
   * @returns true if custom icon exists / true, если кастомная иконка существует
   */
  static has(code: string): boolean {
    return this.toCode(code) in this.icons
  }

  /**
   * Returns a custom icon by file code or extension.
   *
   * Возвращает кастомную иконку по коду файла или расширению.
   * @param code file code or extension / код файла или расширение
   * @returns custom SVG icon string or undefined / кастомная строка SVG иконки или undefined
   */
  static get(code: string): string | undefined {
    return this.icons[this.toCode(code)]
  }

  /**
   * Registers a custom icon for a specific file code or extension.
   *
   * Регистрирует пользовательскую иконку для определенного кода файла или расширения.
   * @param code file code or extension / код файла или расширение
   * @param icon SVG icon string / строка SVG иконки
   */
  static add(code: string, icon: string): void {
    this.icons[this.toCode(code)] = icon
  }

  /**
   * Registers custom icons for multiple file codes or extensions.
   *
   * Регистрирует пользовательские иконки для нескольких кодов файлов или расширений.
   * @param icons dictionary of file codes and SVG icon strings / словарь кодов файлов и строк SVG иконок
   */
  static addList(icons: MediaFileIcons): void {
    for (const [code, icon] of Object.entries(icons)) {
      this.icons[this.toCode(code)] = icon
    }
  }

  /**
   * Converts a file code or extension to normalized code format.
   *
   * Преобразует код файла или расширение в нормализованный формат кода.
   * @param code file code or extension / код файла или расширение
   * @returns normalized code string / нормализованная строка кода
   */
  static toCode(code: string): string {
    return code.trim().toLowerCase()
  }

  /**
   * Applies custom icon to the file item if registered.
   *
   * Применяет кастомную иконку к элементу файла, если она зарегистрирована.
   * @param item file item / элемент файла
   * @returns file item with custom icon applied or undefined / элемент файла с примененной кастомной иконкой или undefined
   */
  static toItem(item?: MediaFileItem): MediaFileItem | undefined {
    if (!item) {
      return undefined
    }

    const customIcon = this.get(item.code)

    if (customIcon) {
      return {
        ...item,
        icon: customIcon
      }
    }

    return { ...item }
  }
}
