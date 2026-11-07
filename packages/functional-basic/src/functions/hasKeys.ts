import { isFunction } from './isFunction'
import { isObject } from './isObject'

/**
 * Checks whether an object or function has an own enumerable string-keyed property.
 * Symbol keys, non-enumerable properties, and inherited properties are excluded.
 *
 * Проверяет, есть ли у объекта или функции собственное перечисляемое строковое свойство.
 * Символьные, неперечисляемые и унаследованные свойства не учитываются.
 * @param object object to check / объект для проверки
 * @returns true if an own enumerable string-keyed property exists / true, если есть собственное перечисляемое строковое свойство
 */
export function hasKeys<T extends object = Record<PropertyKey, unknown>>(
  object: unknown
): object is T {
  if (isObject(object) || isFunction(object)) {
    for (const key in object) {
      if (Object.hasOwn(object, key)) {
        return true
      }
    }
  }

  return false
}
