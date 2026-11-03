import { isArray } from './isArray'
import { isObject } from './isObject'

/**
 * Returns the first element of an array or object.
 *
 * Возвращает первый элемент массива или объекта.
 * @param value input value / входное значение
 * @returns first element of an array or object / первый элемент массива или объекта
 */
export function getFirst<T = undefined>(
  value?: T | readonly T[] | Record<PropertyKey, T>
): T {
  if (isObject(value)) {
    const data = isArray(value) ? value : Object.values(value)

    return data[0] as T
  }

  return value as T
}
