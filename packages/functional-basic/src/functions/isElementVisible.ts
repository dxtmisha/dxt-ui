import { getElement } from './getElement'
import { isDomRuntime } from './isDomRuntime'
import { isFunction } from './isFunction'
import {
  type ElementOrString,
  type ElementOrWindow
} from '../types/basicTypes'

/**
 * Checks layout visibility using native checkVisibility or a style and dimension fallback.
 * The fallback also rejects opacity: 0 on ordinary parentElement ancestors.
 * An element can be off-screen and still be considered visible.
 *
 * Проверяет видимость в раскладке через нативный checkVisibility или фолбэк стилей и размеров.
 * Фолбэк также учитывает opacity: 0 у обычных предков по parentElement.
 * Элемент может находиться за пределами экрана и при этом считаться видимым.
 * @template E element or Window type / тип элемента или Window
 * @param elementSelectors selector, Element, Window resolved to body, or null / селектор, Element, Window с преобразованием в body или null
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

  const isVisible = style.display !== 'none'
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

  if (!isVisible) {
    return false
  }

  let parentElement = element.parentElement

  while (parentElement) {
    if (window.getComputedStyle(parentElement).opacity === '0') {
      return false
    }

    parentElement = parentElement.parentElement
  }

  return true
}
