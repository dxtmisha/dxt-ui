import { isNull } from './isNull'

/**
 * Returns the unit of measurement for a single step relative to the given value.
 *
 * Возвращает единицу измерения одного шага относительно заданного значения.
 * @param min minimum value / минимальное значение
 * @param max maximum value / максимальное значение
 * @returns step value / значение шага
 */
export function getStepValue(
  min?: number | null,
  max?: number | null
): number {
  const minValue = min ?? 0

  if (!isNull(max) && max > minValue) {
    return (max - minValue) / 100
  }

  return 0
}
