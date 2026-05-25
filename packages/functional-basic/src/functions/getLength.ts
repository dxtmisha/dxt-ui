import { isObject } from './isObject'

/**
 * Returns the length or size of various data types including Arrays, Objects, Maps, Sets, and Strings.
 * If the value is null, undefined, or an unsupported type (e.g. number, boolean), it returns 0.
 *
 * Возвращает длину или размер различных типов данных, включая массивы, объекты, Map, Set и строки.
 * Если значение равно null, undefined или имеет неподдерживаемый тип (например, число, булево), возвращает 0.
 * @param value input value to measure / входное значение для измерения
 * @returns the length or size of the value / длина или размер значения
 */
export function getLength(value: any): number {
  if (value === null || value === undefined) {
    return 0
  }

  if (typeof value === 'string' || Array.isArray(value)) {
    return value.length
  }

  if (value instanceof Map || value instanceof Set) {
    return value.size
  }

  if (isObject(value)) {
    return Object.keys(value).length
  }

  return 0
}
