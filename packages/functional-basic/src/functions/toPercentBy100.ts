import { toPercent } from './toPercent'

/**
 * Converts values to percentages (three-digit)
 *
 * Преобразует значения в проценты (трёхзначный)
 * @param maxValue maximum value/ максимальное значение
 * @param value current value/ текущее значение
 */
export function toPercentBy100(maxValue: number, value: number): number {
  return toPercent(maxValue, value) * 100
}
