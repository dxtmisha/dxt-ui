/**
 * Converts values to percentages
 *
 * Преобразует значения в проценты
 * @param maxValue maximum value/ максимальное значение
 * @param value current value/ текущее значение
 * @returns percentage value / значение в процентах
 */
export function toPercent(maxValue: number, value: number): number {
  if (maxValue === 0) {
    return value
  }

  return 1 / maxValue * value
}
