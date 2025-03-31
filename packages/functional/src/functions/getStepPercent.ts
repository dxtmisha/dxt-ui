/**
 * Returns the unit of measurement for 1 step
 *
 * Возвращает единицу измерения для 1 шага
 * @param min minimum value/ минимальное значение
 * @param max maximum value/ максимальное значение
 */
export function getStepPercent(
  min: number | undefined,
  max: number
): number {
  const minValue = min ?? 0

  if (max > minValue) {
    return 100 / (max - minValue)
  }

  return 0
}
