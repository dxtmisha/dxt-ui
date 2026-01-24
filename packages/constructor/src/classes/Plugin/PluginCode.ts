import MagicString from 'magic-string'
import { PluginTool } from './PluginTool'

/**
 * Class for working with plugin code.
 *
 * Класс для работы с кодом плагина.
 */
export class PluginCode {
  protected magicString: MagicString
  protected newCode: string

  /**
   * Constructor
   * @param id file ID / ID файла
   * @param code source code / исходный код
   */
  constructor(
    protected readonly id: string,
    protected readonly code: string
  ) {
    this.magicString = new MagicString(code)
    this.newCode = code
  }

  /**
   * Checks if the file is a Vue component.
   *
   * Проверяет, является ли файл компонентом Vue.
   */
  isVue(): boolean {
    return PluginTool.isVue(this.id)
  }

  /**
   * Checks if the file is a SCSS file.
   *
   * Проверяет, является ли файл SCSS.
   */
  isScss(): boolean {
    return PluginTool.isCss(this.id)
  }

  /**
   * Returns the modified code.
   *
   * Возвращает измененный код.
   */
  get(): string {
    return this.newCode
  }

  /**
   * Returns the file ID.
   *
   * Возвращает ID файла.
   */
  getId(): string {
    return this.id
  }

  /**
   * Returns the original code.
   *
   * Возвращает оригинальный код.
   */
  getCode(): string {
    return this.code
  }

  /**
   * Returns the source map.
   *
   * Возвращает карту кода.
   */
  getMaps() {
    return this.magicString.generateMap({
      source: this.id,
      includeContent: true,
      hires: true
    })
  }

  /**
   * Checks for the presence of code.
   *
   * Проверяет наличие кода.
   * @param pattern search pattern / паттерн поиска
   */
  has(pattern: string | RegExp): boolean {
    if (typeof pattern === 'string') {
      return this.code.includes(pattern)
    }

    return pattern.test(this.code)
  }

  /**
   * Adds code after the <script setup> tag.
   * If the tag is missing, adds it to the beginning of the file.
   *
   * Добавляет код после тега <script setup>.
   * Если тег отсутствует, добавляет в начало файла.
   * @param code code to add / код для добавления
   */
  addAfterScript(code: string): this {
    const regExp = /(<script[^>]*\bsetup\b[^>]*>)/
    const match = this.code.match(regExp)

    if (match) {
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
}
