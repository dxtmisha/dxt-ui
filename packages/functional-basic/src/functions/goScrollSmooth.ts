import { isDomRuntime } from './isDomRuntime'

/**
 * Smooth scrolling to the element.
 *
 * Плавная прокрутка до элемента.
 * @param element target element / целевой элемент
 * @param options scroll options / параметры прокрутки
 * @param shift shift from the top / смещение сверху
 */
export function goScrollSmooth<E extends HTMLElement>(
  element: E,
  options?: ScrollIntoViewOptions,
  shift: number = 0
): void {
  if (!isDomRuntime()) {
    return
  }

  const behavior = options?.behavior || 'smooth'

  if ('scrollIntoView' in element && !shift) {
    element.scrollIntoView({
      behavior,
      block: options?.block || 'start',
      inline: options?.inline || 'start'
    })

    return
  }

  if (
    'getBoundingClientRect' in element
    && 'scrollTo' in window
  ) {
    const top = (window?.scrollY || window.pageYOffset) + element.getBoundingClientRect().top - shift

    window.scrollTo({
      top,
      behavior
    })
  }
}
