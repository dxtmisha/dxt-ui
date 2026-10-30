import { hasKey } from './hasKey'
import { isDomRuntime } from './isDomRuntime'
import { isFunction } from './isFunction'
import { isString } from './isString'
import { ErrorCenter } from '../classes/ErrorCenter'

/**
 * Matches floating-point numbers /
 * Регулярное выражение для сопоставления чисел с плавающей точкой
 */
const REGEXP_FLOAT = /^[+-]?(?:0|[1-9]\d*)\.\d+$/

/**
 * Matches integer numbers /
 * Регулярное выражение для сопоставления целых чисел
 */
const REGEXP_INT = /^[+-]?(?:0|[1-9]\d*)$/

/**
 * Transforms a string into the corresponding data type.
 * Based on the string content, it may be transformed into undefined, null, boolean, object, number, or function.
 *
 * Преобразует строку в соответствующий тип данных.
 * В зависимости от содержания строки, она может быть преобразована в undefined, null, boolean, объект, число или функцию.
 * @param value input value to transform / входное значение для преобразования
 * @param isFunctionCheck flag to check for function in global window / флаг проверки функции в объекте window
 * @returns transformed value / преобразованное значение
 *
 * @example
 * transformation('true') // true
 * transformation('12.5') // 12.5
 * transformation('{"a":1}') // { a: 1 }
 * transformation('null') // null
 */
export function transformation<T = unknown>(value?: unknown, isFunctionCheck: boolean = false): T {
  if (isString(value)) {
    const stringValue = value.trim()

    switch (stringValue) {
      case '':
        return value as T
      case 'undefined':
        return undefined as T
      case 'null':
        return null as T
      case 'true':
        return true as T
      case 'false':
        return false as T
      default: {
        const isJsonCandidate = (
          (stringValue.startsWith('{') && stringValue.endsWith('}'))
          || (stringValue.startsWith('[') && stringValue.endsWith(']'))
        )

        if (isJsonCandidate) {
          try {
            return JSON.parse(stringValue) as T
          } catch (error) {
            ErrorCenter.on({
              group: 'transformation',
              code: 'error',
              details: error
            })
          }
        } else if (REGEXP_FLOAT.test(stringValue)) {
          const parsedFloat = parseFloat(stringValue)

          if (Number.isFinite(parsedFloat)) {
            return parsedFloat as T
          }
        } else if (REGEXP_INT.test(stringValue)) {
          const parsedInteger = parseInt(stringValue, 10)

          if (Number.isSafeInteger(parsedInteger)) {
            return parsedInteger as T
          }
        } else if (isFunctionCheck && isDomRuntime()) {
          const windowRecord = window as unknown as Record<string, unknown>

          if (
            hasKey(windowRecord, stringValue)
            && isFunction(windowRecord[stringValue])
          ) {
            return windowRecord[stringValue] as T
          }
        }
      }
    }
  }

  return value as T
}
