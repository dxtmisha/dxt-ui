import { isDomRuntime } from './isDomRuntime'
import { isNull } from './isNull'
import { isString } from './isString'
import { isWindow } from './isWindow'

import {
  type ElementOrString,
  type ElementOrWindow
} from '../types/basicTypes'

/**
 * Returns the first Element in the document that matches the specified selector or the element itself.
 * If Window is passed, returns document.body in DOM runtime.
 * In non-DOM environments (SSR), returns undefined for selector strings, or returns the provided element reference as-is.
 * Returns undefined if the element is not found, or if null/undefined is provided.
 *
 * Возвращает первый Element документа, который соответствует указанному селектору или сам элемент.
 * При передаче Window возвращает document.body в DOM-окружении.
 * В средах без DOM (SSR) возвращает undefined для строковых селекторов или сам переданный элемент без изменений.
 * Возвращает undefined, если элемент не найден или передан null/undefined.
 * @template E element or Window type / тип элемента или Window
 * @template R resolved element type / тип разрешённого элемента
 * @param element selector for matching, Element, Window, or null / селектор для сопоставления, Element, Window или null
 * @returns found element or undefined / найденный элемент или undefined
 */
export function getElement<
  E extends ElementOrWindow = HTMLElement,
  R extends (E extends Window ? HTMLElement : Exclude<E, Window>) = E extends Window ? HTMLElement : Exclude<E, Window>
>(
  element?: ElementOrString<E> | null
): R | undefined {
  if (isNull(element)) {
    return undefined
  }

  if (!isDomRuntime()) {
    return isString(element) ? undefined : element as unknown as R
  }

  if (isString(element)) {
    return document.querySelector<R>(element) ?? undefined
  }

  if (isWindow(element)) {
    return (document.body ?? undefined) as R | undefined
  }

  return element as unknown as R
}
