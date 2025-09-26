import { isObjectNotArray } from './isObjectNotArray'

/**
 * Returns data by their path.
 *
 * Возвращает данные по их пути.
 * @param item object for work/ объект для работы
 * @param path data path/ путь к данным
 */
export function getItemByPath<T extends Record<string, any>>(item: T, path: string): string {
  const paths = path.split('.', 2)
  const column = paths[0]

  if (
    column
    && item?.[column]
    && isObjectNotArray(item[column])
    && paths?.[1]
  ) {
    return getItemByPath(item[column], paths[1])
  }

  return (column && item?.[column]) ?? ''
}
