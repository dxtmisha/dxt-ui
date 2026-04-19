import { getElement } from './getElement'
import { isFilled } from './isFilled'

import { ServerStorage } from '../classes/ServerStorage'

import {
  type ElementOrString,
  type ElementOrWindow
} from '../types/basicTypes'

/**
 * Listener that returns the current request context/
 * Слушатель, возвращающий контекст текущего запроса
 */
let listener: () => string | number

/**
 * Returns the next ID.
 *
 * Возвращает следующий ID.
 * @returns next ID / следующий ID
 */
const getNextId = () => {
  const contextId = listener?.()

  if (contextId) {
    return `id-server-${contextId}`
  }

  const id = ServerStorage.get<{ id: number }>('__ui:getElementId__', () => ({ id: 100000 }))

  return `id-${id.id++}`
}

/**
 * Returns the identifier (ID) of the element or creates it if the element has no ID.
 *
 * Возвращает идентификатор (ID) элемента или создает его, если у элемента нет ID.
 * @param element element from which you obtain an ID / элемент, с которого получаете ID
 * @param selector selectors for matching / селекторов для сопоставления
 * @returns element ID / идентификатор элемента
 */
export function getElementId<E extends ElementOrWindow>(
  element?: ElementOrString<E>,
  selector?: string
): string {
  if (element) {
    const item = getElement(element)

    if (item) {
      if (!isFilled(item.id)) {
        item.setAttribute('id', getNextId())
      }

      return selector ? `#${item.id}${selector}`.trim() : item.id
    }
  }

  return getNextId()
}

/**
 * Initializes the getElementId function with a listener.
 *
 * Инициализирует функцию getElementId слушателем.
 * @param newListener listener that returns the current request context / слушатель, возвращающий контекст текущего запроса
 * @warning Initialization is mandatory for correct functioning of SSR on both server and client sides./
 * Инициализация обязательна для корректной работы SSR как на стороне сервера, так и на стороне клиента.
 * @example
 * ```typescript
 * import { useId } from 'vue'
 * import { initGetElementId } from '@dxtmisha/functional-basic'
 *
 * initGetElementId(() => useId())
 * ```
 */
export function initGetElementId(newListener: () => string | number) {
  if (!listener) {
    listener = newListener
  }
}
