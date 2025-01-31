/**
 * Преобразует значение в массив.
 * Если переданное значение уже является массивом, возвращается оно само.
 * В противном случае значение оборачивается в массив.
 *
 * Converts a value to an array.
 * If the value is already an array, it returns it as is.
 * Otherwise, it wraps the value in an array.
 *
 * @param value - Значение, которое необходимо преобразовать в массив.
 *
 * The value to be converted into an array.
 * @returns Массив, содержащий переданное значение.
 *
 * An array containing the provided value.
 */
export function toArray<T>(value: T): T extends any[] ? T : [T] {
  return (Array.isArray(value) ? value : [value]) as T extends any[] ? T : [T]
}
