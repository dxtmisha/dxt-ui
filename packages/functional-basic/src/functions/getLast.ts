import { isArray } from './isArray'
import { isObject } from './isObject'

/**
 * Returns the last array element or own enumerable string-keyed object value.
 * Empty collections return undefined; other input values are returned unchanged.
 *
 * Возвращает последний элемент массива или значение собственного перечисляемого строкового свойства объекта.
 * Пустые коллекции возвращают undefined; остальные входные значения возвращаются без изменений.
 * @param value input value / входное значение
 * @returns last item, undefined for an empty collection, or the unchanged input value /
 * последний элемент, undefined для пустой коллекции или неизменённое входное значение
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
