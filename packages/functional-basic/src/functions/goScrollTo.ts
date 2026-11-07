import { isDomRuntime } from './isDomRuntime'
import { isFunction } from './isFunction'
import { isObject } from './isObject'

/**
 * Returns the numeric client property value from an element or 0 if unavailable.
 *
 * Возвращает числовое значение client-свойства у элемента или 0 при его отсутствии.
 * @param element target element / целевой элемент
 * @param property property name / имя свойства
 * @returns numeric property value / числовое значение свойства
 */
function getClientValue(
  element: Element | HTMLElement,
  property: 'clientTop' | 'clientLeft'
): number {
  return (property in element && typeof element[property] === 'number')
    ? element[property]
    : 0
}

/**
 * Scrolls the container to make the target element visible.
 *
 * Прокручивает контейнер, чтобы целевой элемент стал видимым.
 * @param container container element / элемент контейнера
 * @param elementTo target element / целевой элемент
 * @param behavior scroll behavior / режим прокрутки
 * @returns void / ничего не возвращает
 */
export function goScrollTo(
  container?: HTMLElement | Element | null,
  elementTo?: HTMLElement | Element | null,
  behavior: ScrollBehavior = 'smooth'
): void {
  if (
    !isDomRuntime()
    || !isObject(container)
    || !isObject(elementTo)
  ) {
    return
  }

  if (
    !isFunction(container.getBoundingClientRect)
    || !isFunction(elementTo.getBoundingClientRect)
  ) {
    return
  }

  const containerRectangle = container.getBoundingClientRect()
  const targetRectangle = elementTo.getBoundingClientRect()

  const clientTop = getClientValue(container, 'clientTop')
  const clientLeft = getClientValue(container, 'clientLeft')

  const deltaTop = targetRectangle.top - (containerRectangle.top + clientTop)
  const deltaLeft = targetRectangle.left - (containerRectangle.left + clientLeft)

  if (isFunction(container.scrollBy)) {
    container.scrollBy({
      top: deltaTop,
      left: deltaLeft,
      behavior
    })
  } else if ('scrollTop' in container && 'scrollLeft' in container) {
    container.scrollTop += deltaTop
    container.scrollLeft += deltaLeft
  }
}
