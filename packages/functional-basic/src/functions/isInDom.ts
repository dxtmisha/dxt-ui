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
 * @returns true if in DOM / true, если в DOM
 */
export function isInDom<E extends ElementOrWindow>(element?: ElementOrString<E>): boolean {
  return (element as HTMLElement)?.isConnected
    || Boolean(getElement(element)?.closest('html'))
}
