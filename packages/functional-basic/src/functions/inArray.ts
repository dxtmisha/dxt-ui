/**
 * Checks if the value is in the current array.
 *
 * Проверяет, есть ли значение в текущем массиве.
 * @param array array for checking/ массив для проверки
 * @param value value to be checked/ проверяемое значение
 * @returns true if in array / true, если в массиве
 */
export function inArray<T>(array: T[], value: T): boolean {
  return array.includes(value)
}
