import type { InputSocialValue } from '../types/socialTypes'

/** Regular expression to match URL protocol and domain / Регулярное выражение для поиска протокола и домена URL */
const REGEX_URL = /^(?:(?:[a-z0-9+.-]+:)?\/\/[^\s/?#]+|www\.[^\s/?#]+|[a-z0-9_.-]+\.[a-z]{2,}(?::\d+)?(?=\/)|[a-z]+:(?!\/\/))/i

/**
 * Trims the value and converts its URL protocol and domain to lowercase while preserving the rest of the string.
 *
 * Обрезает значение и преобразует протокол и домен URL в нижний регистр, сохраняя остальную часть строки.
 * @param value URL, string, number, null, or undefined / ссылка, строка, число, null или undefined
 * @returns trimmed string with URL converted to lowercase / обрезанная строка с URL, преобразованным в нижний регистр
 */
export function toLower(value?: InputSocialValue): string {
  if (value === null || value === undefined) {
    return ''
  }

  return String(value)
    .trim()
    .replace(REGEX_URL, match => match.toLowerCase())
}
