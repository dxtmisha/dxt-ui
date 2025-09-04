import { isDomRuntime } from './isDomRuntime.ts'

/**
 * Selects all elements that match the specified selectors.
 *
 * Выбирает все элементы, которые соответствуют указанным селекторам.
 * @param selectors selectors/ селекторы
 */
export function domQuerySelectorAll<E extends Element = Element>(selectors: string): NodeListOf<E> | undefined {
  if (isDomRuntime()) {
    return document.querySelectorAll<E>(selectors)
  }

  return undefined
}
