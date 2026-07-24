import { initGetElementId } from '@dxtmisha/functional-basic'

let code = 10_000

/**
 * Initializes the global unique identifier generator for elements on the client side.
 * Uses an incremental counter starting from 10000.
 *
 * Инициализирует глобальный генератор уникальных идентификаторов для элементов на стороне клиента.
 * Использует инкрементный счетчик, начиная с 10000.
 */
export function uiIdClient(): void {
  initGetElementId(() => {
    return `ui-${code++}`
  })
}
