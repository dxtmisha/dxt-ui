import { getElement } from './getElement'
import { isNull } from './isNull'

import {
  type ElementOrString,
  type ElementOrWindow,
  type ElementResolved
} from '../types/basicTypes'

/**
 * Returns the value of an element property by its key.
 * If Window is passed, retrieves the property from document.body in DOM runtime.
 *
 * Возвращает значение свойства элемента по его ключу.
 * При передаче Window возвращает значение свойства из document.body в DOM-окружении.
 * @template E element or Window type / тип элемента или Window
 * @template K property key type / тип ключа свойства
 * @template D default value type / тип значения по умолчанию
 * @param element checked element / проверяемый элемент
 * @param property property key to retrieve, or null for the fallback / ключ свойства для получения значения или null для возврата значения по умолчанию
 * @param defaultValue returns this parameter if the value is missing / возвращает этот параметр,
 * если значение отсутствует
 * @returns element value or default value / значение элемента или значение по умолчанию
 */
export function getElementItem<
  E extends ElementOrWindow = HTMLElement,
  K extends keyof ElementResolved<E> = keyof ElementResolved<E>,
  D = undefined
>(
  element?: ElementOrString<E> | null,
  property?: K | string | number | null,
  defaultValue?: D
): ElementResolved<E>[K] | D {
  if (isNull(property)) {
    return defaultValue as ElementResolved<E>[K] | D
  }

  return (getElement(element)?.[property as K] ?? defaultValue) as ElementResolved<E>[K] | D
}
