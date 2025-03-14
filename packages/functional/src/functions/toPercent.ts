/**
 * Converts values to percentages
 *
 * Преобразует значения в проценты
 * @param maxValue maximum value/ максимальное значение
 * @param value current value/ текущее значение
 */
export function toPercent(maxValue: number, value: number): number {
  return 1 / maxValue * value
}
