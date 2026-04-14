import { isFilled } from './isFilled'
import { isObject } from './isObject'
import { strSplit } from './strSplit'

/**
 * Returns data by their path.
 *
 * Возвращает данные по их пути.
 * @param item object for work/ объект для работы
 * @param path data path/ путь к данным
 */
export function getItemByPath<
  T extends Record<string, any>,
  R = string
>(item: T, path: string): R | undefined {
  if (!isFilled(path, true)) {
    return undefined
  }

  const paths = strSplit(path, '.', 2)
  const column = paths[0]

  if (
    column
    && item?.[column]
    && isObject(item[column])
    && paths?.[1]
  ) {
    return getItemByPath(item[column], paths[1])
  }

  return item?.[column] ?? undefined
}
