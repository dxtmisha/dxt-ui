/**
 * Checks if the element is an input field or editable.
 *
 * Проверяет, является ли элемент полем ввода или редактируемым.
 * @param element element to check/ проверяемый элемент
 */
export const isInput = (element: HTMLElement | EventTarget | null): boolean => {
  if (element instanceof HTMLElement) {
    const tagName = element.tagName.toLowerCase()

    return Boolean(
      tagName === 'input'
      || tagName === 'textarea'
      || tagName === 'select'
      || element.isContentEditable
      || element.getAttribute('contenteditable') === 'true'
    )
  }

  return false
}
