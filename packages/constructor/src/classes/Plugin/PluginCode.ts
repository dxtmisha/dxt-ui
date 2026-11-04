import { PluginTool } from './PluginTool'

/**
 * Class for working with and transforming source code in the Vite plugin.
 *
 * Класс для работы с исходным кодом и его трансформации в плагине Vite.
 */
export class PluginCode {
  /** Modified source code / Измененный исходный код */
  protected newCode: string

  /**
   * Constructor.
   *
   * Конструктор.
   * @param id file ID / ID файла
   * @param code source code / исходный код
   */
  constructor(
    protected readonly id: string,
    protected readonly code: string
  ) {
    this.newCode = code
  }

  /**
   * Checks if the code has been modified compared to the original.
   *
   * Проверяет, был ли код изменен по сравнению с оригиналом.
   * @returns true if code was modified / true, если код был изменен
   */
  isModified(): boolean {
    return this.newCode !== this.code
  }

  /**
   * Checks if the file is a SCSS file.
   *
   * Проверяет, является ли файл SCSS.
   * @returns true if file is a SCSS file / true, если файл является SCSS
   */
  isScss(): boolean {
    return PluginTool.isCss(this.id)
  }

  /**
   * Checks if the file is a Vue component.
   *
   * Проверяет, является ли файл компонентом Vue.
   * @returns true if file is a Vue component / true, если файл является компонентом Vue
   */
  isVue(): boolean {
    return PluginTool.isVue(this.id)
  }

  /**
   * Checks for the presence of code.
   *
   * Проверяет наличие кода.
   * @param pattern search pattern / паттерн поиска
   * @param flags search flags / флаги поиска
   * @returns true if pattern is found / true, если паттерн найден
   */
  has(
    pattern: string | RegExp,
    flags: string = 'i'
  ): boolean {
    if (typeof pattern === 'string') {
      return this.code.includes(pattern)
    }

    return (new RegExp(pattern, flags)).test(this.code)
  }

  /**
   * Returns the modified code.
   *
   * Возвращает измененный код.
   * @returns modified code string / строка измененного кода
   */
  get(): string {
    return this.newCode
  }

  /**
   * Returns the original code.
   *
   * Возвращает оригинальный код.
   * @returns original code string / строка оригинального кода
   */
  getCode(): string {
    return this.code
  }

  /**
   * Returns the file ID.
   *
   * Возвращает ID файла.
   * @returns file ID / ID файла
   */
  getId(): string {
    return this.id
  }

  /**
   * Sets the modified code value.
   *
   * Устанавливает новое значение измененного кода.
   * @param code new code value / новое значение кода
   * @returns current instance / текущий экземпляр
   */
  set(code: string): this {
    this.newCode = code

    return this
  }

  /**
   * Adds code after the <script setup> tag.
   * If the tag is missing, adds it to the beginning of the file.
   *
   * Добавляет код после тега <script setup>.
   * Если тег отсутствует, добавляет в начало файла.
   * @param code code to add / код для добавления
   * @returns current instance / текущий экземпляр
   */
  addAfterScript(code: string): this {
    const regExp = /(<script[^>]*\bsetup\b[^>]*>)/

    if (regExp.test(this.code)) {
      this.newCode = this.newCode.replace(regExp, `$1${code}`)
    } else {
      this.newCode = `<script setup>\r\n${code}</script>${this.newCode}`
    }

    return this
  }

  /**
   * Adds code to the beginning of the file.
   *
   * Добавляет код в начало файла.
   * @param code code to add / код для добавления
   * @returns current instance / текущий экземпляр
   */
  addStart(code: string): this {
    this.newCode = `${code}${this.newCode}`

    return this
  }

  /**
   * Adds code to the beginning of the file if it is missing.
   *
   * Добавляет код в начало файла, если он отсутствует.
   * @param code code to add / код для добавления
   * @param pattern search pattern / паттерн поиска
   * @returns current instance / текущий экземпляр
   */
  addStartIfNone(
    code: string,
    pattern?: string | RegExp
  ): this {
    if (!this.has(pattern ?? code)) {
      this.addStart(code)
    }

    return this
  }

  /**
   * Replaces the found fragment with new code in newCode.
   *
   * Заменяет найденный фрагмент на новый код в newCode.
   * @param pattern search pattern / паттерн поиска
   * @param replacement replacement string or callback / строка или функция замены
   * @returns current instance / текущий экземпляр
   */
  replace(
    pattern: string | RegExp,
    replacement: string | ((substring: string, ...args: string[]) => string)
  ): this {
    this.newCode = this.newCode.replace(pattern, replacement as string)

    return this
  }
}
