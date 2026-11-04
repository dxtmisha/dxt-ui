import { getElement } from './getElement'
import { isWindow } from './isWindow'

import {
  type ElementOrString,
  type ElementOrWindow
} from '../types/basicTypes'

/**
 * Returns the Window object if window is passed, or the first Element matching the specified selector or element itself.
 * Unlike getElement, it preserves and returns the Window object directly without resolving it to document.body.
 *
 * Возвращает объект Window при передаче window, либо первый Element, соответствующий селектору или переданному элементу.
 * В отличие от getElement, сохраняет и возвращает объект Window напрямую, не разрешая его в document.body.
 * @template E element or Window type / тип элемента или Window
 * @param element selector for matching, Element, Window, or null / селектор для сопоставления, Element, Window или null
 * @returns window or DOM element, or undefined / окно или DOM-элемент, либо undefined
 */
export function getElementOrWindow<E extends ElementOrWindow = HTMLElement>(
  element?: ElementOrString<E> | null
): E | undefined {
  if (isWindow(element)) {
    return element as E
  }

  return getElement(element) as E | undefined
}
