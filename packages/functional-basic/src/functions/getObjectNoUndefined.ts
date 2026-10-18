import { isObject } from './isObject'

/**
 * Removes from the object all properties belonging to the exception type.
 *
 * Удаляет из объекта все свойства, принадлежащие к типу исключения.
 * @param data collection for processing / коллекция для обработки
 * @param exception exception value / значение для исключения
 * @returns object without exception values / объект без исключенных значений
 */
export function getObjectNoUndefined<V>(
  data: readonly V[],
  exception?: unknown
): Record<number, V>

/**
 * Removes from the object all properties belonging to the exception type.
 *
 * Удаляет из объекта все свойства, принадлежащие к типу исключения.
 * @param data object for processing / объект для обработки
 * @param exception exception value / значение для исключения
 * @returns object without exception values / объект без исключенных значений
 */
export function getObjectNoUndefined<T extends Record<PropertyKey, unknown>>(
  data: T,
  exception?: unknown
): T

/**
 * Removes from the object all properties belonging to the exception type.
 *
 * Удаляет из объекта все свойства, принадлежащие к типу исключения.
 * @param data object for processing / объект для обработки
 * @param exception exception value / значение для исключения
 * @returns object without exception values / объект без исключенных значений
 */
export function getObjectNoUndefined<T extends Record<PropertyKey, unknown>>(
  data: unknown,
  exception: unknown = undefined
): T {
  const returnData: Record<PropertyKey, unknown> = {}

  if (isObject(data)) {
    for (const [key, value] of Object.entries(data)) {
      if (!Object.is(value, exception) && value !== exception) {
        returnData[key] = value
      }
    }
  }

  return returnData as T
}
