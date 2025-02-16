import { isNull } from './isNull'

/**
 * Checks if value is in the array selected or if value equals selected, if selected is a string.
 *
 * Проверяет, есть ли value в массиве selected или равен ли value selected, если selected - строка.
 * @param value input value/ входное значение
 * @param selected array or string for comparison/ массив или строка для сравнения
 */
export function isSelected<T>(
  value: T,
  selected: T | T[]
): boolean {
  if (isNull(value)) {
    return false
  }

  if (Array.isArray(selected)) {
    return selected.includes(value)
  }

  return value === selected
}
