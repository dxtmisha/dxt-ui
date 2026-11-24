/**
 * Converts an offset parameter to a non-negative integer.
 *
 * Преобразует параметр смещения выборки к неотрицательному целому числу.
 * @param offset Requested offset / Запрошенное смещение
 * @returns Non-negative integer offset / Неотрицательное целочисленное смещение
 */
export function toOffset(offset?: number): number {
  if (offset === undefined || !Number.isFinite(offset)) {
    return 0
  }

  return Math.max(0, Math.trunc(offset))
}
