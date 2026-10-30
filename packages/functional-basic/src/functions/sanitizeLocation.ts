import { isString } from './isString'

/**
 * Maximum allowed length for a locale tag string /
 * Максимально допустимая длина строки тега локали
 */
const MAX_LOCATION_LENGTH = 64

/**
 * Regular expression for underscore separators in locale codes /
 * Регулярное выражение для разделителей подчеркивания в кодах локали
 */
const REGEXP_UNDERSCORE = /_/g

/**
 * Regular expression for structural validation of URL-safe BCP-47 locale tags /
 * Регулярное выражение для структурной проверки URL-безопасных BCP-47 тегов локали
 */
const REGEXP_SAFE_LOCALE = /^[a-zA-Z]{2,3}(?:-[a-zA-Z0-9]{1,8})*$/

/**
 * Validates and normalizes an external locale code string.
 * Ensures URL safety and ECMA-402 BCP-47 compatibility.
 *
 * Валидирует и нормализует внешнюю строку кода локали.
 * Обеспечивает безопасность для URL и совместимость со стандартом ECMA-402 BCP-47.
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
  ) {
    return undefined
  }

  const normalized = trimmed.replace(REGEXP_UNDERSCORE, '-')

  if (!REGEXP_SAFE_LOCALE.test(normalized)) {
    return undefined
  }

  try {
    return Intl.getCanonicalLocales(normalized)[0]
  } catch {
    return undefined
  }
}
