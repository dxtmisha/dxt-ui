import { isNull } from '@dxtmisha/functional-basic'

/** Default number of records per page / Количество записей на странице по умолчанию */
const DEFAULT_LIST_LIMIT = 20

/** Maximum allowed number of records per page / Максимально допустимое количество записей на странице */
const MAX_LIST_LIMIT = 200

/**
 * Utility class providing static methods for normalizing, escaping, and verifying CMS input values.
 *
 * Вспомогательный класс со статическими методами для нормализации, экранирования и проверки входных значений CMS.
 */
export class CmsVerification {
  /**
   * Escapes SQL LIKE/ILIKE wildcard characters in a CMS search term.
   *
   * Экранирует спецсимволы шаблонов SQL LIKE/ILIKE в поисковой строке CMS.
   * @param value Raw search text / Исходная поисковая строка
   * @returns Escaped LIKE pattern value / Экранированная строка для шаблона LIKE
   */
  static escapeSearchPattern(value: string): string {
    return value.replaceAll('\\', '\\\\').replaceAll('%', '\\%').replaceAll('_', '\\_')
  }

  /**
   * Clamps and normalizes CMS list limit parameter.
   *
   * Ограничивает и нормализует параметр количества записей на странице CMS.
   * @param limit Requested limit / Запрошенное количество записей
   * @param defaultLimit Default limit when omitted or non-finite / Лимит по умолчанию, если не задан
   * @param maxLimit Maximum allowed limit / Максимально допустимый лимит
   * @returns Normalized limit / Нормализованный лимит
   */
  static normalizeLimit(
    limit?: number,
    defaultLimit: number = DEFAULT_LIST_LIMIT,
    maxLimit: number = MAX_LIST_LIMIT
  ): number {
    if (limit === undefined || !Number.isFinite(limit)) {
      return defaultLimit
    }

    const integerLimit = Math.trunc(limit)
    if (integerLimit < 1) {
      return 1
    }

    return Math.min(integerLimit, maxLimit)
  }

  /**
   * Normalizes CMS list offset parameter to a non-negative integer.
   *
   * Нормализует параметр смещения выборки CMS к неотрицательному целому числу.
   * @param offset Requested offset / Запрошенное смещение
   * @returns Non-negative integer offset / Неотрицательное целочисленное смещение
   */
  static normalizeOffset(offset?: number): number {
    if (offset === undefined || !Number.isFinite(offset)) {
      return 0
    }

    return Math.max(0, Math.trunc(offset))
  }

  /**
   * Normalizes optional CMS string fields, converting blank strings to null.
   *
   * Нормализует необязательные строковые поля CMS, преобразуя пустые строки в null.
   * @param value Raw optional string or null / Исходная строка, null или undefined
   * @returns Trimmed string, null, or undefined / Очищенная строка, null или undefined
   */
  static normalizeOptionalText(value?: string | null): string | null | undefined {
    if (value === undefined) {
      return undefined
    }

    if (isNull(value)) {
      return null
    }

    const trimmed = value.trim()
    return trimmed.length > 0 ? trimmed : null
  }
}
