import { isNull } from './isNull'

import { type EmptyValue } from '../types/basicTypes'

/**
 * Checks if the field is filled.
 *
 * Проверяет, заполнено ли поле.
 * @param value input value/ входное значение
 */
export function isFilled<T>(value: T): value is Exclude<T, EmptyValue> {
  if (value) {
    switch (typeof value) {
      case 'bigint':
      case 'number':
        return value !== 0
      case 'boolean':
        return value
      case 'function':
      case 'symbol':
        return true
      case 'object':
        if (Array.isArray(value)) {
          return value.length > 0
        }

        return Object.values(value).some(item => !isNull(item))
      case 'string':
        return !['', 'undefined', 'null', '0', 'false', '[]'].includes(value)
      case 'undefined':
        return false
      default:
        return Boolean(value)
    }
  }

  return false
}
