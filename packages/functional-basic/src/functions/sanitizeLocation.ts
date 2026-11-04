import { isString } from './isString'

/**
 * Maximum allowed length for a locale tag string /
 * Максимально допустимая длина строки тега локали
 */
const MAX_LOCATION_LENGTH = 64

/**
 * Regular expression for URL-safe locale codes with hyphen or underscore separators /
 * Регулярное выражение для URL-безопасных кодов локали с дефисом или подчёркиванием
 */
const REGEXP_SAFE_LOCALE = /^[a-zA-Z]{2,3}(?:[-_][a-zA-Z0-9]{1,8})*$/

/**
 * Trims and validates an external locale code for use in URLs.
 * Preserves the original casing and separators.
 *
 * Убирает крайние пробелы и проверяет внешний код локали для использования в URL.
 * Сохраняет исходный регистр и разделители.
 * @param code candidate locale code / проверяемый код локали
 * @returns valid locale code or undefined / валидный код локали или undefined
 */
export function sanitizeLocation(code?: unknown): string | undefined {
  if (!isString(code)) {
    return undefined
  }

  const trimmed = code.trim()

  if (
    !trimmed
    || trimmed.length > MAX_LOCATION_LENGTH
    || !REGEXP_SAFE_LOCALE.test(trimmed)
  ) {
    return undefined
  }

  return trimmed
}
