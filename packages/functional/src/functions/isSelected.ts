import { isNull } from './isNull'
import { isNumber } from './isNumber'
import { toNumber } from './toNumber'

/**
 * Checks if value is in the array selected or if value equals selected, if selected is a string.
 *
 * Проверяет, есть ли value в массиве selected или равен ли value selected, если selected - строка.
 * @param value input value/ входное значение
 * @param selected array or string for comparison/ массив или строка для сравнения
 */
export function isSelected<T, S>(
  value: T,
  selected: T | T[] | S
): boolean {
  if (isNull(value)) {
    return false
  }

  if (Array.isArray(selected)) {
    return selected.includes(value)
  }

  if (
    isNumber(value)
    && isNumber(selected)
  ) {
    return toNumber(value as number) === toNumber(selected as number)
  }

  return value === selected
}
