import { isObjectNotArray } from './isObjectNotArray'

/**
 * Returns a new object with keys from the keys list.
 *
 * Возвращает новый объект с ключами из списка keys.
 * @param data object with data/ объект с данными
 * @param keys list of keys/ список ключей
 */
export function getObjectByKeys<
  T extends Record<string, any>,
  K extends keyof T
>(
  data: T,
  keys: K[]
): Pick<T, K> {
  const returnData = {} as Pick<T, K>

  if (isObjectNotArray(data)) {
    keys.forEach((key) => {
      if (
        key in data
        && data[key] !== undefined
      ) {
        returnData[key] = data[key]
      }
    })
  }

  return returnData
}
