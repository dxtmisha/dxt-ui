import { getElement } from './getElement'
import {
  type ElementOrString,
  type ElementOrWindow
} from '../types/basicTypes'

/**
 * Checks if an element is still in the DOM tree.
 *
 * Проверяет, находится ли еще элемент в дереве DOM.
 * @param element selectors for matching or an Element/ селекторов для сопоставления или Element
 */
export function isInDom<E extends ElementOrWindow>(element?: ElementOrString<E>): boolean {
  return Boolean(getElement(element)?.closest('html'))
}
