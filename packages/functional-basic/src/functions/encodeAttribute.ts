import { toString } from './toString'

/** List of special characters to encode / Список специальных символов для кодирования */
const SPECIAL_CHARACTERS: Readonly<Record<string, string>> = {
  '&': '&amp;',
  '<': '&lt;',
  '>': '&gt;',
  '"': '&quot;',
  '\'': '&#39;'
}

/**
 * Encodes special characters in a string for safe use in HTML attributes.
 *
 * Кодирует специальные символы в строке для безопасного использования в HTML-атрибутах.
 * @param text text to encode / текст для кодирования
 * @returns encoded text / закодированный текст
 */
export function encodeAttribute(text: string): string {
  return toString(text).replace(/[&<>"']/g, match => SPECIAL_CHARACTERS[match] ?? match)
}
