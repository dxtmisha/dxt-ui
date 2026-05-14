import { isArray } from './isArray'
import { isObject } from './isObject'

/**
 * Возвращает первый элемент массива или объекта
 *
 * Returns the first element of an array or object
 * @param value Входное значение
 * @returns Первый элемент массива или объекта
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
