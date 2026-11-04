import { hasKey } from './hasKey'
import { isObjectNotArray } from './isObjectNotArray'
import { isPrototypeKey } from './isPrototypeKey'

/**
 * Returns a new object with keys from the keys list.
 *
 * Возвращает новый объект с ключами из списка keys.
 * @param data object with data / объект с данными
 * @param keys list of keys / список ключей
 * @returns new object with selected keys / новый объект с выбранными ключами
 */
export function getObjectByKeys<
  T extends Record<string, unknown>,
  K extends keyof T
>(
  data?: T | null,
  keys?: readonly K[] | null
): Pick<T, K> {
  const returnData = {} as Pick<T, K>

  if (isObjectNotArray(data) && keys) {
    const length = keys.length

    for (let index = 0; index < length; index++) {
      const key = keys[index]

      if (
        !isPrototypeKey(key)
        && hasKey(data, key)
        && data[key] !== undefined
      ) {
        returnData[key] = data[key]
      }
    }
  }

  return returnData
}
