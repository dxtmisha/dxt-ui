import { isDomRuntime } from './isDomRuntime.ts'

/**
 * Scrolls the container to make the target element visible.
 *
 * Прокручивает контейнер, чтобы целевой элемент стал видимым.
 * @param element container element/ элемент контейнера
 * @param elementTo target element/ целевой элемент
 * @param behavior scroll behavior/ режим прокрутки
 */
export function goScrollTo(
  element?: HTMLElement,
  elementTo?: HTMLElement,
  behavior: ScrollBehavior = 'smooth'
) {
  if (
    !isDomRuntime()
    || !element
    || !elementTo
  ) {
    return
  }

  const containerRect = element.getBoundingClientRect()
  const targetRect = elementTo.getBoundingClientRect()

  element.scrollBy({
    top: targetRect.top - containerRect.top,
    left: targetRect.left - containerRect.left,
    behavior
  })
}
