import { isDomRuntime } from './isDomRuntime'
import { isFunction } from './isFunction'
import { isObject } from './isObject'

/**
 * Calculates the vertical element offset based on the block alignment option.
 *
 * Вычисляет вертикальное смещение элемента на основе опции выравнивания block.
 * @param rectangle bounding client rectangle of the element / границы элемента
 * @param block alignment option / опция выравнивания
 * @returns calculated vertical offset / вычисленное вертикальное смещение
 */
function getElementTop(
  rectangle: DOMRect,
  block?: ScrollLogicalPosition
): number {
  if (block === 'center') {
    return rectangle.top + (rectangle.height / 2) - (window.innerHeight / 2)
  }

  if (block === 'end') {
    return rectangle.bottom - window.innerHeight
  }

  if (block === 'nearest') {
    if (rectangle.top < 0) {
      return rectangle.top
    }

    if (rectangle.bottom > window.innerHeight) {
      return rectangle.bottom - window.innerHeight
    }

    return 0
  }

  return rectangle.top
}

/**
 * Scrolls an element into view, using a vertical window offset when shift is non-zero.
 * Without a DOM runtime or a target object, no scrolling is performed.
 *
 * Прокручивает к элементу, используя вертикальное смещение окна при ненулевом shift.
 * Без DOM-среды или целевого объекта прокрутка не выполняется.
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
    const rectangle = element.getBoundingClientRect()
    const elementTop = getElementTop(rectangle, options?.block)
    const top = currentScrollY + elementTop - shift

    window.scrollTo({
      top,
      behavior
    })
  }
}
