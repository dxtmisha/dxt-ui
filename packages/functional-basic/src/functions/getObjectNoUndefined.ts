import { isObject } from './isObject'
import { isPrototypeKey } from './isPrototypeKey'

/**
 * Creates an object without values matching the exception or prototype pollution keys.
 * Only own enumerable string-keyed properties are copied; array indices become object keys.
 *
 * Создаёт объект без значений, совпадающих с исключением, и ключей загрязнения прототипа.
 * Копируются только собственные перечисляемые строковые свойства; индексы массива становятся ключами объекта.
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
      if (!isPrototypeKey(key) && !Object.is(value, exception) && value !== exception) {
        returnData[key] = value
      }
    }
  }

  return returnData as R
}
