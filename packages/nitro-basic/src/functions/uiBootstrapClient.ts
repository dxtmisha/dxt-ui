import { useId } from 'vue'
import { initGetElementId } from '@dxtmisha/functional-basic'

/**
 * Initializes the global unique identifier generator for elements.
 * Uses Vue's `useId` to provide unique IDs during bootstrap.
 *
 * Инициализирует глобальный генератор уникальных идентификаторов для элементов.
 * Использует Vue `useId` для предоставления уникальных идентификаторов во время начальной загрузки.
 */
export function uiBootstrapClient(): void {
  initGetElementId(() => useId())
}
