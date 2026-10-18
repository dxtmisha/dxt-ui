import { isArray } from './isArray'
import { isObject } from './isObject'

/**
 * Returns the last element of an array or object.
 *
 * Возвращает последний элемент массива или объекта.
 * @param value input value / входное значение
 * @returns last element of the array or object / последний элемент массива или объекта
 */
export function getLast<T>(value: T | readonly T[] | Record<string, T>): T | undefined {
  if (isArray(value)) {
    return value?.[value.length - 1] as T
  }

  if (isObject(value)) {
    const keys = Object.keys(value)
    const lastKey = keys[keys.length - 1]

    return lastKey !== undefined
      ? (value as Record<string, T>)[lastKey]
      : undefined
  }

  return value
}
