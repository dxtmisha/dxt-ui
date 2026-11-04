import MagicString, { type SourceMap } from 'magic-string'
import type { PluginCode } from './PluginCode'

/**
 * Class for generating source maps for modified plugin code.
 *
 * Класс для генерации карты исходников (sourcemap) измененного кода плагина.
 */
export class PluginMap {
  /**
   * Constructor.
   *
   * Конструктор.
   * @param code plugin code instance / экземпляр кода плагина
   */
  constructor(
    protected readonly code: PluginCode
  ) {
  }

  /**
   * Generates and returns the source map for the modified code.
   *
   * Генерирует и возвращает карту исходного кода (sourcemap) для измененного кода.
   * @returns source map or null if code was not modified / карта исходников или null, если код не изменялся
   */
  get(): SourceMap | null {
    if (!this.code.isModified()) {
      return null
    }

    return this.makeMagicString().generateMap({
      source: this.code.getId(),
      includeContent: true,
      hires: 'boundary'
    })
  }

  /**
   * Calculates the length of the common prefix between the original and modified code.
   *
   * Вычисляет длину общего префикса между оригинальным и измененным кодом.
   * @param originalCode original code / оригинальный код
   * @param modifiedCode modified code / измененный код
   * @returns common prefix length / длина общего префикса
   */
  protected getPrefixLength(
    originalCode: string,
    modifiedCode: string
  ): number {
    const maxLength = Math.min(originalCode.length, modifiedCode.length)
    let prefixLength = 0

    while (
      prefixLength < maxLength
      && originalCode.charCodeAt(prefixLength) === modifiedCode.charCodeAt(prefixLength)
    ) {
      prefixLength++
    }

    return prefixLength
  }

  /**
   * Calculates the length of the common suffix between the original and modified code.
   *
   * Вычисляет длину общего суффикса между оригинальным и измененным кодом.
   * @param originalCode original code / оригинальный код
   * @param modifiedCode modified code / измененный код
   * @param prefixLength already matched prefix length / длина уже совпавшего префикса
   * @returns common suffix length / длина общего суффикса
   */
  protected getSuffixLength(
    originalCode: string,
    modifiedCode: string,
    prefixLength: number
  ): number {
    const originalLength = originalCode.length
    const modifiedLength = modifiedCode.length
    const maxLength = Math.min(
      originalLength - prefixLength,
      modifiedLength - prefixLength
    )
    let suffixLength = 0

    while (
      suffixLength < maxLength
      && originalCode.charCodeAt(originalLength - 1 - suffixLength) === modifiedCode.charCodeAt(modifiedLength - 1 - suffixLength)
    ) {
      suffixLength++
    }

    return suffixLength
  }

  /**
   * Creates a MagicString instance with the applied modifications.
   *
   * Создает экземпляр MagicString с примененными изменениями.
   * @returns configured MagicString instance / настроенный экземпляр MagicString
   */
  protected makeMagicString(): MagicString {
    const originalCode = this.code.getCode()
    const modifiedCode = this.code.get()
    const magicString = new MagicString(originalCode)

    const prefixLength = this.getPrefixLength(originalCode, modifiedCode)
    const suffixLength = this.getSuffixLength(originalCode, modifiedCode, prefixLength)

    const inserted = modifiedCode.slice(prefixLength, modifiedCode.length - suffixLength)
    const removeEnd = originalCode.length - suffixLength

    if (prefixLength === removeEnd) {
      if (prefixLength === 0) {
        magicString.prepend(inserted)
      } else {
        magicString.appendRight(prefixLength, inserted)
      }
    } else {
      magicString.overwrite(prefixLength, removeEnd, inserted)
    }

    return magicString
  }
}
