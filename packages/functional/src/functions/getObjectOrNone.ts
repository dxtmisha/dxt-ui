import { isObjectNotArray } from './isObjectNotArray'

/**
 * Returns the object if the object’s values are set.
 *
 * Возвращает объект, если заданы значения объекта.
 * @param value let’s assume that this is an object/ предположим, что это объект
 */
export function getObjectOrNone<T>(value: T): T & Record<string, any> {
  return isObjectNotArray(value) ? value : {} as T & Record<string, any>
}
