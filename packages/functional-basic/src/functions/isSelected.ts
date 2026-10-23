import { isArray } from './isArray'
import { isNull } from './isNull'
import { isNumber } from './isNumber'
import { toNumber } from './toNumber'

/**
 * Checks if a value is selected, comparing against a single target or an array of selected items.
 * Supports intelligent numeric equivalence for numbers and numeric strings.
 *
 * Проверяет, выбрано ли значение, сравнивая его с целевым значением или массивом выбранных элементов.
 * Поддерживает интеллектуальное числовое сравнение для чисел и числовых строк.
 *
 * @param value input value to check / проверяемое входное значение
 * @param selected target value or array of selected values / целевое значение или массив выбранных значений
 * @returns true if selected / true, если выбрано
 */
export function isSelected<T>(
  value: T,
  selected?: unknown
): boolean {
  if (isNull(value)) {
    return false
  }

  if (isArray(selected)) {
    if (selected.includes(value)) {
      return true
    }

    if (isNumber(value)) {
      const numericValue = toNumber(value)
      return selected.some(item => isNumber(item) && toNumber(item) === numericValue)
    }

    return false
  }

  if (
    isNumber(value)
    && isNumber(selected)
  ) {
    return toNumber(value) === toNumber(selected)
  }

  return value === selected
}
