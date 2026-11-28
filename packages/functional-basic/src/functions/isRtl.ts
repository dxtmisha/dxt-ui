import { getElement } from './getElement'
import { isDomRuntime } from './isDomRuntime'
import {
  ElementDirection,
  type ElementOrString,
  type ElementOrWindow
} from '../types/basicTypes'

/**
 * Checks whether the specified element or document uses right-to-left (RTL) text direction.
 *
 * Проверяет, использует ли указанный элемент или документ направление текста справа налево (RTL).
 * @template E element or Window type / тип элемента или Window
 * @param elementSelectors selector, Element, Window resolved to body, or null / селектор, Element, Window с преобразованием в body или null
 * @returns true if RTL direction is active / true, если активно направление RTL
 */
export function isRtl<E extends ElementOrWindow = HTMLElement>(
  elementSelectors?: ElementOrString<E> | null
): boolean {
  if (!isDomRuntime()) {
    return false
  }

  const element = getElement(elementSelectors)

  if (element) {
    const closestDirection = element.closest('[dir]')
      ?.getAttribute('dir')
      ?.toLowerCase()

    if (
      closestDirection === ElementDirection.rtl
      || closestDirection === ElementDirection.ltr
    ) {
      return closestDirection === ElementDirection.rtl
    }

    if (typeof getComputedStyle === 'function') {
      return getComputedStyle(element).direction === ElementDirection.rtl
    }
  }

  return document.documentElement?.dir?.toLowerCase() === ElementDirection.rtl
    || document.dir?.toLowerCase() === ElementDirection.rtl
}
