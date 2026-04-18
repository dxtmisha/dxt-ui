/**
 * List of special characters to encode/
 * Список специальных символов для кодирования
 */
const list: Record<string, string> = {
  '<': '&lt;',
  '>': '&gt;',
  '&': '&amp;'
}

/**
 * Encodes special characters in a string for safe use in HTML attributes.
 *
 * Кодирует специальные символы в строке для безопасного использования в HTML-атрибутах.
 * @param text text to encode / текст для кодирования
 * @returns encoded text / закодированный текст
 */
export function encodeLiteAttribute(text: string): string {
  return String(text).replace(/[<>]/g, match => list?.[match] ?? match)
}
