import { isDomRuntime } from './isDomRuntime'

/**
 * Checks for an HTMLElement representing input, textarea, select, or editable content.
 * By default, elements with a truthy disabled or readOnly property are excluded.
 *
 * Проверяет, является ли HTMLElement полем input, textarea, select или редактируемым содержимым.
 * По умолчанию элементы с истинным свойством disabled или readOnly исключаются.
 * @param element element to check / проверяемый элемент
 * @param includeDisabled if true, include disabled and readOnly elements / если true, включать элементы с disabled и readOnly
 * @returns true if input element / true, если элемент ввода
 */
export function isInput(
  element?: unknown,
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
