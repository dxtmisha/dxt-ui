import { getElement } from './getElement'
import {
  type ElementOrString,
  type ElementOrWindow
} from '../types/basicTypes'

/**
 * Checks if an element is still in the DOM tree.
 *
 * Проверяет, находится ли еще элемент в дереве DOM.
 * @param element selectors for matching, an Element, or null / селекторы для сопоставления, Element или null
 * @returns true if in DOM / true, если в DOM
 */
export function isInDom<E extends ElementOrWindow = HTMLElement>(element?: ElementOrString<E> | null): boolean {
  return (element as HTMLElement)?.isConnected
    || Boolean(getElement(element)?.closest('html'))
}
