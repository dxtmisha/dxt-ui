import { isArray } from './isArray'
import { isObject } from './isObject'
import { isString } from './isString'

/**
 * Conversion of a value to a string.
 *
 * Преобразование значения в строку.
 * @param value values for conversion/ значения для преобразования
 */
export function anyToString<V>(value: V): string {
  if (isString(value)) {
    return value.trim()
  }

  if (isArray(value)) {
    return value.join(', ')
  }

  if (isObject(value)) {
    return JSON.stringify(value)
  }

  if (value === true) {
    return '1'
  }

  return value?.toString() ?? ''
}
