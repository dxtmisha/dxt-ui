import { toPercent } from './toPercent'

/**
 * Converts a value to a standard percentage (from 0 to 100) relative to the maximum value.
 *
 * Преобразует значение в стандартные проценты (от 0 до 100) относительно максимального значения.
 * @param maxValue maximum value / максимальное значение
 * @param value current value / текущее значение
 * @returns percentage value (0 to 100) / значение в процентах (от 0 до 100)
 */
export function toPercentBy100(maxValue: number, value: number): number {
  return toPercent(maxValue, value) * 100
}
