import { isNull } from './isNull'

import { type EmptyValue } from '../types/basicTypes'

/**
 * Checks if the field is filled.
 *
 * Проверяет, заполнено ли поле.
 * @param value input value/ входное значение
 * @param zeroTrue if true, '0' is considered filled/ если true, то '0' считается заполненным
 */
export function isFilled<T>(
  value: T,
  zeroTrue?: boolean
): value is Exclude<T, EmptyValue> {
  if (value) {
    if (
      zeroTrue
      && value === '0'
    ) {
      return true
    }

    switch (typeof value) {
      case 'function':
      case 'symbol':
        return true
      case 'object':
        if (Array.isArray(value)) {
          return value.length > 0
        }

        if (
          value instanceof Map
          || value instanceof Set
        ) {
          return value.size > 0
        }

        return Object.values(value).some(item => !isNull(item))
      case 'string':
        return !['', 'undefined', 'null', '0', 'false', '[]'].includes(value.trim())
      default:
        return Boolean(value)
    }
  }

  return false
}
