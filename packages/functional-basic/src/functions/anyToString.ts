import { isArray } from './isArray'
import { isNull } from './isNull'
import { isObject } from './isObject'
import { isString } from './isString'

/**
 * Conversion of a value to a string.
 * Flat arrays without objects are joined with commas if `isArrayString` is true, otherwise serialized as JSON.
 *
 * Преобразование значения в строку.
 * Плоские массивы без объектов при `isArrayString=true` склеиваются через запятую, иначе сериализуются в JSON.
 * @param value values for conversion / значения для преобразования
 * @param isArrayString if true, arrays without objects are joined with commas; if false, serialized as JSON string / если true, массивы без объектов склеиваются через запятую; если false, сериализуются в JSON-строку
 * @param trim if true, then the resulting string will be trimmed / если true, то результирующая строка будет обрезана
 * @returns string representation of the passed value / строковое представление переданного значения
 */
export function anyToString<V>(
  value: V,
  isArrayString: boolean = true,
  trim: boolean = true
): string {
  if (isString(value)) {
    return trim ? value.trim() : value
  }

  if (isNull(value)) {
    return ''
  }

  if (
    isArray(value)
    && !value.some(item => isObject(item))
    && isArrayString
  ) {
    return value.join(',')
  }

  if (isObject(value)) {
    try {
      return JSON.stringify(value)
    } catch {
      try {
        return String(value)
      } catch {
        return Object.prototype.toString.call(value)
      }
    }
  }

  if (value === true) {
    return '1'
  }

  if (value === false) {
    return '0'
  }

  return value?.toString() ?? ''
}
