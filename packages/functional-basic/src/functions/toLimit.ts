/** Default number of records per page / Количество записей на странице по умолчанию */
const DEFAULT_LIMIT = 20

/** Maximum allowed number of records per page / Максимально допустимое количество записей на странице */
const MAX_LIMIT = 200

/**
 * Clamps and converts a limit parameter to a positive integer within `[1, maxLimit]`.
 * Ensures `maxLimit` and `defaultLimit` remain valid positive integers within the allowed bounds.
 *
 * Ограничивает и преобразует параметр лимита к положительному целому числу в диапазоне `[1, maxLimit]`.
 * Гарантирует, что `maxLimit` и `defaultLimit` остаются валидными положительными целыми числами в допустимых границах.
 * @param limit Requested limit / Запрошенное количество записей
 * @param defaultLimit Default limit when omitted or non-finite / Лимит по умолчанию, если не задан
 * @param maxLimit Maximum allowed limit / Максимально допустимый лимит
 * @returns Clamped integer limit / Ограниченный целочисленный лимит
 */
export function toLimit(
  limit?: number,
  defaultLimit: number = DEFAULT_LIMIT,
  maxLimit: number = MAX_LIMIT
): number {
  const safeMax = Number.isFinite(maxLimit)
    ? Math.max(1, Math.trunc(maxLimit))
    : MAX_LIMIT

  const rawLimit = limit !== undefined && Number.isFinite(limit)
    ? limit
    : (Number.isFinite(defaultLimit) ? defaultLimit : DEFAULT_LIMIT)

  return Math.min(Math.max(1, Math.trunc(rawLimit)), safeMax)
}
