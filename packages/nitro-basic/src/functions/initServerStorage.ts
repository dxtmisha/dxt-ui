import { useEvent } from 'nitropack/runtime'
import { ServerStorage } from '@dxtmisha/functional-basic'

/**
 * Initializes ServerStorage for Nitro.
 *
 * Инициализирует ServerStorage для Nitro.
 */
export function initServerStorage() {
  ServerStorage.init(() => {
    try {
      return useEvent().context
    } catch {
      return {}
    }
  })
}
