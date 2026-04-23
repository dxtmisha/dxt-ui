import { ServerStorage } from '@dxtmisha/functional-basic'

/**
 * Initializes ServerStorage for Nitro.
 *
 * Инициализирует ServerStorage для Nitro.
 * Use useEvent().context as storage. / Использует useEvent().context в качестве хранилища.
 */
export function initServerStorage(useEvent: () => any) {
  ServerStorage.init(() => {
    try {
      return useEvent().context
    } catch {
      return {}
    }
  })
}
