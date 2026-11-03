import { isFilled } from './isFilled'
import { isObject } from './isObject'
import { isPrototypeKey } from './isPrototypeKey'
import { strSplit } from './strSplit'

/**
 * Returns data by their path.
 *
 * Возвращает данные по их пути.
 * @param item object for work / объект для работы
 * @param path data path / путь к данным
 * @returns data by path or undefined / данные по пути или undefined
 */
export function getItemByPath<
  T extends Record<string, unknown>,
  R = string
>(
  item: T | null | undefined,
  path: string
): R | undefined {
  if (
    !item
    || !isFilled(path, true)
  ) {
    return undefined
  }

  const paths = strSplit(path, '.', 2)
  const column = paths[0]

  if (
    !column
    || isPrototypeKey(column)
  ) {
    return undefined
  }

  const value = item[column]
  const restPath = paths[1]

  if (restPath) {
    if (isObject(value)) {
      return getItemByPath(value as Record<string, unknown>, restPath)
    }

    return undefined
  }

  return value as R | undefined
}
