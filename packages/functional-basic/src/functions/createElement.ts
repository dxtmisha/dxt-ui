import { forEach } from './forEach'
import { isDomRuntime } from './isDomRuntime'
import { isFunction } from './isFunction'
import { isObjectNotArray } from './isObjectNotArray'
import { setElementItem } from './setElementItem'

/**
 * In HTML documents, creates an element with the tag that is specified in the argument.
 *
 * В HTML-документах создаёт элемент с тегом, который указан в аргументе.
 *
 * @param parentElement the DOM parent node (Element or DocumentFragment) / родительский узел DOM (Element или DocumentFragment)
 * @param tagName a string that specifies the type of element to be created / строка, указывающая элемент какого типа должен быть создан
 * @param options an object with attributes or a function for processing an element / объект с атрибутами или функция для обработки элемента
 * @param referenceElement the node before which new element is inserted / узел, перед которым будет вставлен новый элемент
 * @returns created element, or undefined in SSR / созданный элемент или undefined при SSR
 *
 * @remarks
 * This function is designed specifically for standard HTML elements via `document.createElement`.
 * For SVG or MathML elements requiring namespaces, use `document.createElementNS` instead.
 *
 * When running on the server, the function always returns `undefined`.
 * If you use it within a component's rendering logic, it may lead to hydration mismatches.
 * It is recommended to call this function only inside lifecycle hooks that run exclusively on the client (e.g., `onMounted` in Vue or `useEffect` in React).
 *
 * Функция предназначена для стандартных HTML-элементов через `document.createElement`.
 * Для элементов SVG или MathML, требующих пространства имён, используйте `document.createElementNS`.
 *
 * При выполнении на сервере функция всегда возвращает `undefined`.
 * Если вы используете её внутри логики рендеринга компонента, это может привести к ошибкам гидратации.
 * Рекомендуется вызывать эту функцию только в хуках жизненного цикла, которые выполняются на клиенте (например, `onMounted` в Vue или `useEffect` в React).
 */
export function createElement<T extends HTMLElement>(
  parentElement?: Element | DocumentFragment,
  tagName = 'div',
  options?: Partial<T> | Record<string, unknown> | ((element: T) => void),
  referenceElement?: Node | null
): T | undefined {
  if (!isDomRuntime()) {
    return undefined
  }

  const element = document.createElement(tagName) as T

  if (isFunction(options)) {
    options(element)
  } else if (isObjectNotArray(options)) {
    forEach(options as Record<string, unknown>, (value, key) => {
      setElementItem(element, key, value)
    })
  }

  parentElement?.insertBefore<T>(element, referenceElement ?? null)
  return element
}
