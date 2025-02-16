const INDENT = 0

/**
 * Quick change of scroll at the element to the required element.
 *
 * Быстрое изменение скролла у элемента к нужному элементу.
 * @param selector the selected element, the scroll position of which needs to be changed/
 * выбранный элемент, положение скролла которого надо изменить
 * @param elementTo the element to which you need to scroll/ элемент, до которого надо проскроллить
 * @param elementCenter the element that needs to be centered/ элемент, который надо центрировать
 */
export function goScroll(
  selector: string,
  elementTo: HTMLElement | undefined,
  elementCenter?: HTMLElement
) {
  const element = elementTo?.closest<HTMLElement>(selector)

  if (
    elementTo
    && element
    && element.scrollHeight !== element.offsetHeight
  ) {
    if (elementCenter) {
      const center = elementCenter.getBoundingClientRect()
      const rect = element.getBoundingClientRect()
      const to = elementTo.getBoundingClientRect()

      element.scrollTop = elementTo.offsetTop - (center.top - rect.top) - ((center.height / 2) - (to.height / 2))

      if (element.scrollTop + element.offsetHeight < elementTo.offsetTop + elementTo.offsetHeight) {
        element.scrollTop = elementTo.offsetTop + elementTo.offsetHeight - element.offsetHeight
      }
    } else if (element.scrollTop > elementTo.offsetTop) {
      element.scrollTop = elementTo.offsetTop - INDENT
    } else if (element.scrollTop + element.offsetHeight < elementTo.offsetTop + elementTo.offsetHeight) {
      element.scrollTop = elementTo.offsetTop + elementTo.offsetHeight - element.offsetHeight + INDENT
    }
  }
}
