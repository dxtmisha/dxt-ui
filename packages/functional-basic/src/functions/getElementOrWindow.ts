import { getElement } from './getElement'
import { isWindow } from './isWindow'

import {
  type ElementOrString,
  type ElementOrWindow
} from '../types/basicTypes'

/**
 * Returns window or element.
 *
 * Возвращает окно или элемент.
 * @param element selectors for matching or an Element / селектор для сопоставления или Element
 * @returns window or DOM element, or undefined / окно или DOM-элемент, либо undefined
 */
export function getElementOrWindow<E extends ElementOrWindow>(
  element?: ElementOrString<E>
): E | undefined {
  if (isWindow(element)) {
    return element
  }

  return getElement(element)
}
