import { getElement } from './getElement'

import {
  type ElementOrString,
  type ElementOrWindow
} from '../types/basicTypes'

/**
 * Gets a list of attributes of an element.
 *
 * Получает список атрибутов у элемента.
 * @template E element or Window type / тип элемента или Window
 * @param element selector for matching, Element, Window, or null / селектор для сопоставления, Element, Window или null
 * @returns list of attributes / список атрибутов
 */
export function getAttributes<
  E extends ElementOrWindow = HTMLElement
>(
  element?: ElementOrString<E> | null
): Record<string, string | undefined> {
  const attributes: Record<string, string | undefined> = {}
  const item = getElement(element)

  if (item && 'getAttributeNames' in item) {
    for (const name of item.getAttributeNames()) {
      attributes[name] = item.getAttribute(name) ?? undefined
    }
  }

  return attributes
}
