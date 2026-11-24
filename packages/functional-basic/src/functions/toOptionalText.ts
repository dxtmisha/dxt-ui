import { isString } from './isString'

/**
 * Converts an optional value to a trimmed string, returning `null` for blank or non-string values and preserving `undefined`.
 *
 * Преобразует необязательное значение в очищенную от пробелов строку, возвращая `null` для пустых или нестроковых значений и сохраняя `undefined`.
 * @param value Raw optional value / Исходное значение
 * @returns Trimmed string, null, or undefined / Очищенная строка, null или undefined
 */
export function toOptionalText(value?: unknown): string | null | undefined {
  if (value === undefined) {
    return undefined
  }

  if (isString(value)) {
    const trimmed = value.trim()
    return trimmed.length > 0 ? trimmed : null
  }

  return null
}
