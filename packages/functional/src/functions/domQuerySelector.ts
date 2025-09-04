import { isDomRuntime } from './isDomRuntime.ts'

/**
 * Selects the first element that matches the specified selectors.
 *
 * Выбирает первый элемент, который соответствует указанным селекторам.
 * @param selectors selectors/ селекторы
 */
export function domQuerySelector<E extends Element = Element>(selectors: string): E | undefined {
  if (isDomRuntime()) {
    return document.querySelector<E>(selectors) ?? undefined
  }

  return undefined
}
