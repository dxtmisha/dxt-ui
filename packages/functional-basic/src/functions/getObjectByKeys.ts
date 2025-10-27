/**
 * Returns a new object with keys from the keys list.
 *
 * Возвращает новый объект с ключами из списка keys.
 * @param data object with data/ объект с данными
 * @param keys list of keys/ список ключей
 */
export function getObjectByKeys(
  data: Record<string, any>,
  keys: string[]
) {
  const returnData: Record<string, any> = {}

  keys.forEach((key) => {
    if (
      key in data
      && data[key] !== undefined
    ) {
      returnData[key] = data[key]
    }
  })

  return returnData
}
