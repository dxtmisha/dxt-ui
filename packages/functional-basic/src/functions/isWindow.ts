import { isDomRuntime } from './isDomRuntime'

/**
 * Checks if object is Window.
 *
 * Проверяет, является ли объект Window.
 * @param element value to check / проверяемое значение
 * @returns true if Window / true, если Window
 */
export function isWindow<E = unknown>(element?: E): element is E & Window {
  return isDomRuntime() && element === window
}
