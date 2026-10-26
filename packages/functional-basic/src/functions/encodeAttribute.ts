import { toString } from './toString'

/** List of special characters to encode / Список специальных символов для кодирования */
const SPECIAL_CHARACTERS = {
  '&': '&amp;',
  '<': '&lt;',
  '>': '&gt;',
  '"': '&quot;',
  '\'': '&#39;'
} as const

/**
 * Checks for special HTML attribute characters (&, <, >, ", ') /
 * Проверяет наличие специальных символов HTML-атрибутов (&, <, >, ", ')
 */
const REGEXP_HAS_SPECIAL_CHARACTERS = /[&<>"']/

/**
 * Matches special HTML attribute characters (&, <, >, ", ') /
 * Регулярное выражение для поиска специальных символов HTML-атрибутов (&, <, >, ", ')
 */
const REGEXP_SPECIAL_CHARACTERS = /[&<>"']/g

/**
 * Encodes special characters in a string for safe use in HTML attributes.
 *
 * Кодирует специальные символы в строке для безопасного использования в HTML-атрибутах.
 * @param text text to encode / текст для кодирования
 * @returns encoded text / закодированный текст
 *
 * @example
 * ```ts
 * encodeAttribute('<div class="box">') // => '&lt;div class=&quot;box&quot;&gt;'
 * encodeAttribute(undefined) // => ''
 * ```
 */
export function encodeAttribute(text?: string | number | null): string {
  const preparedText = toString(text)

  if (
    preparedText.length === 0
    || !REGEXP_HAS_SPECIAL_CHARACTERS.test(preparedText)
  ) {
    return preparedText
  }

  return preparedText.replace(
    REGEXP_SPECIAL_CHARACTERS,
    match => SPECIAL_CHARACTERS[match as keyof typeof SPECIAL_CHARACTERS] ?? match
  )
}
