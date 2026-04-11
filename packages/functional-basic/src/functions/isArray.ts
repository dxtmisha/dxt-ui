/**
 * Checks if the values are arrays.
 *
 * Проверяет, являются ли значения массивами.
 * @param value input value/ входное значение
 */
export function isArray<T, R>(value: T): value is Extract<T, R[]> {
  return Array.isArray(value)
}

const a: string[] | string = ['a', 'v']

if (isArray(a)) {
  console.log('a', a)
}
