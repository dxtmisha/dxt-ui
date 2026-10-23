import { isArray } from './isArray'
import { isObject } from './isObject'

/**
 * Returns the first element of an array or object.
 *
 * Возвращает первый элемент массива или объекта.
 * @param value input value / входное значение
 * @returns first element of an array or object / первый элемент массива или объекта
 */
export function getFirst<T>(value: T | T[] | Record<string, T>): T | undefined {
  if (isArray(value)) {
    return value?.[0] as T
  }

  if (isObject(value)) {
    return Object.values(value)?.[0]
  }

  return value
}
