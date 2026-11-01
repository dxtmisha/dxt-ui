import { getElement } from './getElement'
import { isDomRuntime } from './isDomRuntime'
import { isFunction } from './isFunction'
import {
  type ElementOrString,
  type ElementOrWindow
} from '../types/basicTypes'

/**
 * Checks if an element is visible (not hidden by CSS and is in the DOM).
 * An element can be off-screen and still be considered visible.
 *
 * Проверяет, является ли элемент видимым (не скрыт через CSS и находится в DOM).
 * Элемент может находиться за пределами экрана и при этом считаться видимым.
 * @template E element or Window type / тип элемента или Window
 * @param elementSelectors selectors for matching, an Element, or null / селекторы для сопоставления, Element или null
 * @returns true if the element is visible, otherwise false / true, если элемент является видимым, иначе false
 */
export function isElementVisible<E extends ElementOrWindow = HTMLElement>(
  elementSelectors?: ElementOrString<E> | null
): boolean {
  if (!isDomRuntime()) {
    return false
  }

  const element = getElement(elementSelectors)

  if (!element) {
    return false
  }

  if (
    'isConnected' in element
    && element.isConnected === false
  ) {
    return false
  }

  if (isFunction(element.checkVisibility)) {
    return element.checkVisibility({
      checkOpacity: true,
      checkVisibilityCSS: true
    })
  }

  const style = window.getComputedStyle(element)

  if (!style) {
    return false
  }

  return style.display !== 'none'
    && style.visibility !== 'hidden'
    && style.visibility !== 'collapse'
    && style.opacity !== '0'
    && (
      !(
        'offsetWidth' in element
        && 'offsetHeight' in element
      )
      || element.offsetWidth !== 0
      || element.offsetHeight !== 0
    )
}
