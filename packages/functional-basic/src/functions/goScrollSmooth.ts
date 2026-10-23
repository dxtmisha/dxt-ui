import { isDomRuntime } from './isDomRuntime'
import { isFunction } from './isFunction'
import { isObject } from './isObject'

/**
 * Calculates the vertical element offset based on the block alignment option.
 *
 * Вычисляет вертикальное смещение элемента на основе опции выравнивания block.
 * @param rect bounding client rect of the element / границы элемента
 * @param block alignment option / опция выравнивания
 * @returns calculated vertical offset / вычисленное вертикальное смещение
 */
function getElementTop(
  rect: DOMRect,
  block?: ScrollLogicalPosition
): number {
  if (block === 'center') {
    return rect.top + (rect.height / 2) - (window.innerHeight / 2)
  }

  if (block === 'end') {
    return rect.bottom - window.innerHeight
  }

  if (block === 'nearest') {
    if (rect.top < 0) {
      return rect.top
    }

    if (rect.bottom > window.innerHeight) {
      return rect.bottom - window.innerHeight
    }

    return 0
  }

  return rect.top
}

/**
 * Smooth scrolling to the element.
 *
 * Плавная прокрутка до элемента.
 * @param element target element / целевой элемент
 * @param options scroll options / параметры прокрутки
 * @param shift shift from the top / смещение сверху
 * @returns void / ничего не возвращает
 */
export function goScrollSmooth(
  element?: HTMLElement | Element | null,
  options?: ScrollIntoViewOptions,
  shift: number = 0
): void {
  if (
    !isDomRuntime()
    || !isObject(element)
  ) {
    return
  }

  const behavior = options?.behavior || 'smooth'

  if (
    !shift
    && isFunction(element.scrollIntoView)
  ) {
    element.scrollIntoView({
      behavior,
      block: options?.block || 'start',
      inline: options?.inline || 'start'
    })

    return
  }

  if (
    isFunction(element.getBoundingClientRect)
    && isFunction(window.scrollTo)
  ) {
    const currentScrollY = window.scrollY ?? window.pageYOffset ?? 0
    const rect = element.getBoundingClientRect()
    const elementTop = getElementTop(rect, options?.block)
    const top = currentScrollY + elementTop - shift

    window.scrollTo({
      top,
      behavior
    })
  }
}
