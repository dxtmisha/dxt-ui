import { getElement } from './getElement'
import { isDomRuntime } from './isDomRuntime'
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
 * @param elementSelectors selectors for matching or an Element/ селекторов для сопоставления или Element
 * @returns true if the element is visible, otherwise false/ true, если элемент является видимым, иначе false
 */
export function isElementVisible<E extends ElementOrWindow>(
  elementSelectors?: ElementOrString<E>
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

  const style = window.getComputedStyle(element)

  return style.display !== 'none'
    && style.visibility !== 'hidden'
    && style.opacity !== '0'
    && element.offsetWidth !== 0
    && element.offsetHeight !== 0
}
