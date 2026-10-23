import { isArray } from './isArray'

/**
 * Converts a value to an array.
 * If the value is already an array, it returns it as is.
 * Otherwise, it wraps the value in an array.
 *
 * Преобразует значение в массив.
 * Если переданное значение уже является массивом, возвращается оно само.
 * В противном случае значение оборачивается в массив.
 * @param value the value to be converted into an array / значение, которое необходимо преобразовать в массив
 * @returns an array containing the provided value / массив, содержащий переданное значение
 */
export function toArray<T>(value: T): T extends unknown[] ? T : [T] {
  return (isArray(value) ? value : [value]) as T extends unknown[] ? T : [T]
}
