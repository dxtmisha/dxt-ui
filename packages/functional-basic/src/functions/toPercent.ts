/**
 * Converts a value to a percentage ratio (from 0 to 1) relative to the maximum value.
 *
 * Преобразует значение в процентную долю (от 0 до 1) относительно максимального значения.
 * @param maxValue maximum value / максимальное значение
 * @param value current value / текущее значение
 * @returns percentage ratio / процентная доля
 */
export function toPercent(maxValue: number, value: number): number {
  if (maxValue === 0) {
    return value
  }

  return value / maxValue
}
