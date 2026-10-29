import { isFunction } from './isFunction'
import { isObject } from './isObject'

/**
 * Checks if the object has the specified own property.
 *
 * Проверяет, есть ли у объекта указанное собственное свойство.
 * @param object object to check / объект для проверки
 * @param key property key / ключ свойства
 * @returns true if the object has the own property / true, если у объекта есть собственное свойство
 */
export function hasKey<
  K extends PropertyKey = PropertyKey,
  T extends object = Record<K, unknown>
>(
  object: unknown,
  key: K
): object is T & Record<K, unknown> {
  return Boolean(
    (isObject(object) || isFunction(object))
    && Object.hasOwn(object, key)
  )
}
