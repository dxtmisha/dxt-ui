import { isDomRuntime } from './isDomRuntime'

/**
 * Checks if object is Window.
 *
 * Проверяет, является ли объект Window.
 * @param element selectors for matching or an Element / селектор для сопоставления или Element
 * @returns true if Window / true, если Window
 */
export function isWindow<E>(element: E): element is Extract<E, Window> {
  return isDomRuntime() && element === window
}
