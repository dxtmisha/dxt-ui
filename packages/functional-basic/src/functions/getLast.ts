import { isArray } from './isArray'
import { isObject } from './isObject'

/**
 * Returns the last element of an array or object.
 *
 * Возвращает последний элемент массива или объекта.
 * @param value input value / входное значение
 * @returns last element of the array or object / последний элемент массива или объекта
 */
export function getLast<T>(value: T | T[] | Record<string, T>): T | undefined {
  if (isArray(value)) {
    return value?.[value.length - 1] as T
  }

  if (isObject(value)) {
    const values = Object.values(value)
    return values?.[values.length - 1]
  }

  return value
}
