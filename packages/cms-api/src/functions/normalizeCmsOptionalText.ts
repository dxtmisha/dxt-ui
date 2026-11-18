import { isNull } from '@dxtmisha/functional-basic'

/**
 * Normalizes optional CMS string fields, converting blank strings to null.
 *
 * Нормализует необязательные строковые поля CMS, преобразуя пустые строки в null.
 * @param value Raw optional string or null / Исходная строка, null или undefined
 * @returns Trimmed string, null, or undefined / Очищенная строка, null или undefined
 */
export function normalizeCmsOptionalText(value?: string | null): string | null | undefined {
  if (value === undefined) {
    return undefined
  }

  if (isNull(value)) {
    return null
  }

  const trimmed = value.trim()
  return trimmed.length > 0 ? trimmed : null
}
