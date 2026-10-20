import { isDomRuntime } from './isDomRuntime'

/**
 * Checks if the element is an input field or editable.
 *
 * Проверяет, является ли элемент полем ввода или редактируемым.
 * @param element element to check / проверяемый элемент
 * @param includeDisabled if true, include disabled and readOnly elements / если true, включать элементы с disabled и readOnly
 * @returns true if input element / true, если элемент ввода
 */
export function isInput(
  element?: HTMLElement | EventTarget | null,
  includeDisabled?: boolean
): element is HTMLElement {
  if (
    !isDomRuntime()
    || !(element instanceof HTMLElement)
  ) {
    return false
  }

  const tagName = element.tagName.toLowerCase()

  return Boolean(
    tagName === 'input'
    || tagName === 'textarea'
    || tagName === 'select'
    || element.isContentEditable
    || element.contentEditable === 'true'
    || element.getAttribute('contenteditable') === 'true'
    || element.getAttribute('contenteditable') === ''
  )
  && (
    Boolean(includeDisabled)
    || (
      !(element as HTMLInputElement).readOnly
      && !(element as HTMLInputElement).disabled
    )
  )
}
