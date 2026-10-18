import { getElement } from './getElement'
import { isFilled } from './isFilled'
import { isNull } from './isNull'

import { ServerStorage } from '../classes/ServerStorage'

import {
  type ElementOrString,
  type ElementOrWindow
} from '../types/basicTypes'

/** Server storage key / Ключ серверного хранилища */
const SERVER_STORAGE_KEY = '__ui:getElementId__'

/**
 * Listener that returns the current request context /
 * Слушатель, возвращающий контекст текущего запроса
 */
let listener: (() => string | number) | undefined

/**
 * Returns the next ID.
 *
 * Возвращает следующий ID.
 * @returns next ID / следующий ID
 */
const getNextId = (): string => {
  const contextId = listener?.()

  if (
    !isNull(contextId)
    && contextId !== ''
  ) {
    return String(contextId)
  }

  const id = ServerStorage.get<{ id: number }>(SERVER_STORAGE_KEY, () => ({ id: 100000 }))

  return `id-${id.id++}`
}

/**
 * Returns the identifier (ID) of the element or creates it if the element has no ID.
 * When passing the Window object, the identifier is retrieved from or assigned to document.body.
 *
 * Возвращает идентификатор (ID) элемента или создает его, если у элемента нет ID.
 * При передаче объекта Window идентификатор получается или назначается для document.body.
 * @param element element from which you obtain an ID / элемент, с которого получаете ID
 * @param selector selector for matching / селектор для сопоставления
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
 * @warning Initialization is mandatory for correct functioning of SSR on both server and client sides. /
 * Инициализация обязательна для корректной работы SSR как на стороне сервера, так и на стороне клиента.
 * @example
 * ```typescript
 * import { useId } from 'vue'
 * import { initGetElementId } from '@dxtmisha/functional-basic'
 *
 * initGetElementId(() => useId())
 * ```
 */
export function initGetElementId(newListener: () => string | number): void {
  if (!listener) {
    listener = newListener
  }
}

/**
 * Resets the getElementId listener.
 *
 * Сбрасывает слушатель getElementId.
 */
export function resetGetElementId(): void {
  listener = undefined
}
