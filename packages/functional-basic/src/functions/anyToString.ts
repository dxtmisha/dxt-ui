import { isArray } from './isArray'
import { isObject } from './isObject'
import { isString } from './isString'

/**
 * Conversion of a value to a string.
 *
 * Преобразование значения в строку.
 * @param value values for conversion / значения для преобразования
 * @param isArrayString if true, then arrays will be converted to strings / если true, то массивы будут преобразованы в строки
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
      return String(value)
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
