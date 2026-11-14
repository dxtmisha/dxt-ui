import { initGetElementId, resetGetElementId } from '@dxtmisha/functional-basic'
import { getContextValue } from './getContextValue'

/**
 * Initializes the global unique identifier generator for elements on the server side.
 * Uses the request context value.
 *
 * Инициализирует глобальный генератор уникальных идентификаторов для элементов на стороне сервера.
 * Использует значение контекста запроса.
 */
export function uiIdServer(): void {
  resetGetElementId()
  initGetElementId(() => {
    const id = getContextValue<{ code: number }>('id')

    if (id) {
      return `ui-${id.code++}`
    }

    return ''
  })
}
