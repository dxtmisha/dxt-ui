import { getElement } from './getElement'

import {
  type ElementOrString,
  type ElementOrWindow
} from '../types/basicTypes'

/**
 * Gets a list of attributes of an element.
 *
 * Получает список атрибутов у элемента.
 * @param element selector for matching or an Element / селектор для сопоставления или Element
 * @returns list of attributes / список атрибутов
 */
export function getAttributes<E extends ElementOrWindow>(
  element?: ElementOrString<E>
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
