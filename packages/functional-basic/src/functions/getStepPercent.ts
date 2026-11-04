/**
 * Returns the unit of measurement for 1 step.
 *
 * Возвращает единицу измерения для 1 шага.
 * @param min minimum value / минимальное значение
 * @param max maximum value / максимальное значение
 * @returns step value in percent / значение шага в процентах
 */
export function getStepPercent(
  min?: number | null,
  max?: number | null
): number {
  const minValue = min ?? 0

  if (max !== undefined && max !== null && max > minValue) {
    const diff = max - minValue
    if (!Number.isFinite(diff) || diff === 0) {
      return 0
    }
    return 100 / diff
  }

  return 0
}
