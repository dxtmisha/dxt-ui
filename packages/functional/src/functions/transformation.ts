import { isDomRuntime } from './isDomRuntime'
import { type FunctionArgs } from '../types/basicTypes'

/**
 * Преобразует строку в соответствующий тип данных.
 * В зависимости от содержания строки, она может быть преобразована в
 * `undefined`, `null`, `true`, `false`, объект, число или функцию.
 *
 * Transforms a string into the corresponding data type.
 * Based on the string content, it may be transformed into `undefined`,
 * `null`, `true`, `false`, object, number, or function.
 *
 * @param value - Значение, которое необходимо преобразовать
 *
 * The value to be transformed
 * @param isFunction - Флаг, который указывает, необходимо ли проверять функцию
 * в глобальном объекте window
 *
 * A flag that indicates whether to check for a function in the global window object
 * @returns Преобразованное значение
 *
 * The transformed value
 */
export function transformation(value: any, isFunction = false): any {
  if (typeof value === 'string') {
    const item = value.trim()

    switch (item) {
      case 'undefined':
        return undefined
      case 'null':
        return null
      case 'true':
        return true
      case 'false':
        return false
      default:
        if (/^[{[]/.exec(item)) {
          try {
            return JSON.parse(item)
          } catch (e) {
            console.error('transformation: JSON error', e)
          }
        } else if (/^[0-9]+\.[0-9.]+$/.exec(item)) {
          return parseFloat(item)
        } else if (/^[0-9]+$/.exec(item)) {
          return parseInt(item, 10)
        } else if (
          isFunction
          && isDomRuntime()
          && typeof window?.[item as any] === 'function'
        ) {
          return window[item as any] as any as FunctionArgs<any, any>
        }
    }
  }

  return value
}
