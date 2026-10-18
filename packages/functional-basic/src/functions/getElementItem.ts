import { getElement } from './getElement'

import {
  type ElementOrString,
  type ElementOrWindow
} from '../types/basicTypes'

/**
 * Returns the value of an element property by its key.
 *
 * Возвращает значение свойства элемента по его ключу.
 * @param element checked element / проверяемый элемент
 * @param property property key to retrieve / ключ свойства для получения значения
 * @param defaultValue returns this parameter if the value is missing / возвращает этот параметр,
 * если значение отсутствует
 * @returns element value or default value / значение элемента или значение по умолчанию
 */
export function getElementItem<
  T extends ElementOrWindow,
  K extends keyof T,
  D
>(
  element: ElementOrString<T>,
  property: K | string,
  defaultValue?: D
): T[K] | D | undefined {
  return getElement(element)?.[property as K] ?? defaultValue
}
