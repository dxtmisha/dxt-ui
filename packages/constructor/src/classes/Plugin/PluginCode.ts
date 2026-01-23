import MagicString from 'magic-string'
import { PluginTool } from './PluginTool'

/**
 * Class for working with plugin code.
 *
 * Класс для работы с кодом плагина.
 */
export class PluginCode {
  protected magicString: MagicString

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
  }

  /**
   * Checks if the file is a Vue component.
   *
   * Проверяет, является ли файл компонентом Vue.
   */
  isVue(): boolean {
    return PluginTool.isVue(this.id)
  }

  isScss(): boolean {
    return PluginTool.isCss(this.id)
  }

  /**
   * Returns the modified code.
   *
   * Возвращает измененный код.
   */
  get(): string {
    return this.magicString.toString()
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
    const match = this.code.match(/<script[^>]*\bsetup\b[^>]*>/)

    if (match?.index !== undefined) {
      this.magicString.appendRight(match.index + match[0].length, code)
    } else {
      this.magicString.prepend(`<script setup>\r\n${code}</script>`)
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
    this.magicString.prepend(code)

    return this
  }
}
