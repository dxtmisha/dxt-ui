/** Default number of records per page / Количество записей на странице по умолчанию */
const DEFAULT_LIST_LIMIT = 20

/** Maximum allowed number of records per page / Максимально допустимое количество записей на странице */
const MAX_LIST_LIMIT = 200

/**
 * Clamps and normalizes CMS list limit parameter.
 *
 * Ограничивает и нормализует параметр количества записей на странице CMS.
 * @param limit Requested limit / Запрошенное количество записей
 * @param defaultLimit Default limit when omitted or non-finite / Лимит по умолчанию, если не задан
 * @param maxLimit Maximum allowed limit / Максимально допустимый лимит
 * @returns Normalized limit / Нормализованный лимит
 */
export function normalizeCmsLimit(
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
