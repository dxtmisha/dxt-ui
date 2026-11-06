import { isArray } from './isArray'
import { isObject } from './isObject'

/**
 * Returns the first array entry or the first own enumerable string-keyed object value.
 * Non-object inputs are returned unchanged; empty collections and omitted inputs return undefined.
 *
 * Возвращает первый элемент массива или первое собственное перечисляемое значение объекта со строковым ключом.
 * Необъектные значения возвращаются без изменений; для пустых коллекций и отсутствующего аргумента возвращается undefined.
 * @param value input value / входное значение
 * @returns first entry or original non-object input; undefined if unavailable / первый элемент или исходное необъектное значение; undefined при отсутствии результата
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
