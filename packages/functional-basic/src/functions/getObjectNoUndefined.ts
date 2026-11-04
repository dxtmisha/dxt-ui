import { isObject } from './isObject'

/**
 * Removes from the object all properties belonging to the exception type.
 *
 * Удаляет из объекта все свойства, принадлежащие к типу исключения.
 * @param data collection or object for processing / коллекция или объект для обработки
 * @param exception exception value / значение для исключения
 * @returns object without exception values / объект без исключенных значений
 */
export function getObjectNoUndefined<
  T = Record<PropertyKey, unknown>,
  R = T extends readonly (infer V)[] ? Record<number, V> : T extends Record<PropertyKey, unknown> ? T : Record<PropertyKey, unknown>
>(
  data?: T,
  exception: unknown = undefined
): R {
  const returnData: Record<PropertyKey, unknown> = {}

  if (isObject(data)) {
    for (const [key, value] of Object.entries(data)) {
      if (!Object.is(value, exception) && value !== exception) {
        returnData[key] = value
      }
    }
  }

  return returnData as R
}
