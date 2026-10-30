import { hasKey } from './hasKey'
import { isArray } from './isArray'
import { isNull } from './isNull'

import { type EmptyValue } from '../types/basicTypes'

/** List of empty string token representations / Список строковых представлений пустых значений */
const EMPTY_STRINGS = ['', 'undefined', 'null', '0', 'false', '[]'] as const

/**
 * Checks if the field is filled.
 *
 * Проверяет, заполнено ли поле.
 * @param value input value / входное значение
 * @param zeroTrue if true, '0' is considered filled / если true, то '0' считается заполненным
 * @returns true if filled / true, если заполнено
 */
export function isFilled<T>(
  value?: T,
  zeroTrue?: boolean
): value is Exclude<T, EmptyValue> {
  if (value) {
    switch (typeof value) {
      case 'function':
      case 'symbol':
        return true
      case 'object':
        if (isArray(value)) {
          return value.length > 0
        }

        if (value instanceof RegExp) {
          return true
        }

        if (value instanceof Date) {
          return !Number.isNaN(value.getTime())
        }

        if (
          value instanceof Map
          || value instanceof Set
        ) {
          return value.size > 0
        }

        for (const key in value) {
          if (
            hasKey(value, key)
            && !isNull(value[key])
          ) {
            return true
          }
        }

        return false
      case 'string':
        if (
          zeroTrue
          && value === '0'
        ) {
          return true
        }

        return !(EMPTY_STRINGS as readonly string[]).includes(value.trim())
      default:
        return Boolean(value)
    }
  }

  return false
}
