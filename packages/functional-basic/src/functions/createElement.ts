import { forEach } from './forEach'
import { isDomRuntime } from './isDomRuntime'
import { isObjectNotArray } from './isObjectNotArray'
import { setElementItem } from './setElementItem'

/**
 * In HTML documents, creates an element with the tag that is specified in the argument.
 *
 * В HTML-документах создаёт элемент с тегом, который указан в аргументе.
 * @param parentElement the DOM node's parent Element/ родитель для нового элемента
 * @param tagName A string that specifies the type of element to be created/ строка,
 * указывающая элемент какого типа должен быть создан
 * @param options an object with attributes or a function for processing an element/ объект
 * с атрибутами или функция для обработки элемента
 * @param referenceElement the node before which newNode is inserted/ элемент,
 * перед которым будет вставлен newElement
 */
export function createElement<T extends HTMLElement>(
  parentElement?: HTMLElement,
  tagName = 'div',
  options?: Partial<T> | Record<keyof T, T[keyof T]> | ((element: T) => void),
  referenceElement?: HTMLElement
): T | undefined {
  if (!isDomRuntime()) {
    return undefined
  }

  const element = document.createElement(tagName) as T

  if (typeof options === 'function') {
    options(element)
  } else if (isObjectNotArray(options)) {
    forEach(options as Record<string, any>, (value, key) => {
      setElementItem(element, key as keyof T, value)
    })
  }

  parentElement?.insertBefore<T>(element, referenceElement ?? null)
  return element
}
