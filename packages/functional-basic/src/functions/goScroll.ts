import { isDomRuntime } from './isDomRuntime'
import { isString } from './isString'

/**
 * Quick change of scroll at the element to the required element.
 *
 * Быстрое изменение скролла у элемента к нужному элементу.
 * @param target the container element or selector whose scroll position needs to be changed /
 * элемент контейнера или селектор, положение скролла которого надо изменить
 * @param elementTo the element to which you need to scroll /
 * элемент, до которого надо проскроллить
 * @param elementCenter the reference element to center against /
 * элемент, относительно которого надо центрировать
 * @param indent optional padding indent from boundary /
 * дополнительный отступ от границы
 * @returns void / ничего не возвращает
 */
export function goScroll(
  target: string | HTMLElement,
  elementTo?: HTMLElement | null,
  elementCenter?: HTMLElement | null,
  indent: number = 0
): void {
  if (!isDomRuntime() || !elementTo) {
    return
  }

  const container = isString(target)
    ? elementTo.closest<HTMLElement>(target)
    : target

  const containerHeight = container ? (container.clientHeight || container.offsetHeight) : 0

  if (
    !container
    || container.scrollHeight <= containerHeight
  ) {
    return
  }

  const containerRect = container.getBoundingClientRect()
  const targetRect = elementTo.getBoundingClientRect()
  const containerClientTop = containerRect.top + (container.clientTop || 0)

  if (elementCenter) {
    const centerRect = elementCenter.getBoundingClientRect()
    const targetMiddle = targetRect.top + (targetRect.height / 2)
    const centerMiddle = centerRect.top + (centerRect.height / 2)
    const delta = targetMiddle - centerMiddle

    container.scrollTop += delta

    const maxBottom = containerClientTop + containerHeight
    const currentBottom = targetRect.bottom - delta

    if (currentBottom > maxBottom) {
      container.scrollTop += currentBottom - maxBottom
    }

    return
  }

  const topDelta = targetRect.top - containerClientTop
  const bottomDelta = targetRect.bottom - (containerClientTop + containerHeight)

  if (topDelta < 0) {
    container.scrollTop += topDelta - indent
  } else if (bottomDelta > 0) {
    container.scrollTop += bottomDelta + indent
  }
}
