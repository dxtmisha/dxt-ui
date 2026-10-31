import { isArray } from './isArray'
import { isObject } from './isObject'

/**
 * Returns the last element of an array or object.
 *
 * Возвращает последний элемент массива или объекта.
 * @param value input value / входное значение
 * @returns last element of the array or object / последний элемент массива или объекта
 */
export function getLast<T = undefined>(
  value?: T | readonly T[] | Record<PropertyKey, T>
): T {
  if (isObject(value)) {
    const data = isArray(value) ? value : Object.values(value)

    return data[data.length - 1] as T
  }

  return value as T
}
