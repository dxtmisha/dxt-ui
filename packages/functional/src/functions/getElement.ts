import { isDomRuntime } from './isDomRuntime'
import { isString } from './isString'
import { isWindow } from './isWindow'

import {
  type ElementOrString,
  type ElementOrWindow
} from '../types/basicTypes'

/**
 * Returns the first Element in the document that matches the specified selector or the element.
 *
 * Возвращает первый Element документа, который соответствует указанному селектору или саму element.
 * @param element selectors for matching or an Element/ селекторов для сопоставления или Element
 */
export function getElement<
  E extends ElementOrWindow,
  R extends Exclude<E, Window>
>(
  element?: ElementOrString<E>
): R | undefined {
  if (!isDomRuntime()) {
    return undefined
  }

  if (isWindow(element)) {
    return document.body as R
  }

  if (isString(element)) {
    return document.querySelector<R>(element) ?? undefined
  }

  return element as (R | undefined)
}
