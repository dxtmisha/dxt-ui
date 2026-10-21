import type { NumberOrString } from '../types/basicTypes'
import { toNumber } from './toNumber'

/**
 * Converts a value to a positive finite number (> 0), or returns default value (0) if invalid.
 *
 * Преобразует значение в конечное положительное число (> 0) или возвращает значение по умолчанию (0), если невалидно.
 * @param value input value / входное значение
 * @param defaultValue default fallback value if invalid / значение по умолчанию, если невалидно
 * @returns parsed positive number or defaultValue / распарсенное положительное число или defaultValue
 *
 * @example
 * toNumberPositive(15) // 15
 * toNumberPositive('10') // 10
 * toNumberPositive(-5) // 0
 * toNumberPositive('invalid', 1) // 1
 */
export function toNumberPositive(
  value?: NumberOrString | null,
  defaultValue: number = 0
): number {
  const numericValue = toNumber(value ?? undefined)

  return numericValue > 0 ? numericValue : defaultValue
}
