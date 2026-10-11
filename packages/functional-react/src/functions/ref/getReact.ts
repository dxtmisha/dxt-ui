import type { RefOrNormalReact } from '../../types/refTypes'

/**
 * Returns the value of a React ref or the item itself if it is not a ref.
 *
 * Возвращает значение переменной React ref или само значение, если оно не является рефом.
 * @param item React ref or plain value / реактивная переменная React ref или обычное значение
 * @returns extracted value / извлечённое значение
 */
export function getReact<T>(item: RefOrNormalReact<T>): T {
  if (
    item !== null
    && typeof item === 'object'
    && 'current' in item
  ) {
    return item.current as T
  }

  return item as T
}
