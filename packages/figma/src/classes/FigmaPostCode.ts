import { random } from '@dxtmisha/functional-basic'

/**
 * Class for managing the unique code used for verifying messages between the Figma plugin and UI.
 *
 * Класс для управления уникальным кодом, используемым для проверки сообщений между плагином Figma и UI.
 */
export class FigmaPostCode {
  private static code: string = `figma-${random(100_000, 999_999)}`
  private static isEditable: boolean = true

  /**
   * Checks if the provided code matches the current post code.
   *
   * Проверяет, совпадает ли предоставленный код с текущим кодом сообщения.
   * @param code The code to check / Проверяемый код
   */
  static is(code: string): boolean {
    return this.code === code
  }

  /**
   * Returns the current post code.
   *
   * Возвращает текущий код сообщения.
   */
  static get(): string {
    return this.code
  }

  /**
   * Sets a new post code. Can only be called once.
   *
   * Устанавливает новый код сообщения. Можно вызвать только один раз.
   * @param code The new code to set / Новый код для установки
   */
  static set(code: string) {
    if (this.isEditable) {
      this.code = code
      this.isEditable = false
    }
  }
}
