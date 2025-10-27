import { isDomRuntime } from './isDomRuntime'

/**
 * Checks if object is Window.
 *
 * Проверяет, является ли объект Window.
 * @param element selectors for matching or an Element/ селекторов для сопоставления или Element
 */
export function isWindow<E>(element: E): element is Extract<E, Window> {
  return isDomRuntime() && element === window
}
