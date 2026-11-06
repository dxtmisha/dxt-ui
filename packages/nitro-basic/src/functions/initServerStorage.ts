import type { App } from 'vue'
import { NITRO_APP_STORAGE } from '../types/nitroAppTypes'

/**
 * Initializes the server storage plugin for the application.
 *
 * Внедряет серверное хранилище в приложение.
 * @param app Vue application instance / Экземпляр приложения Vue
 * @returns object containing the server storage container / объект с контейнером серверного хранилища
 */
export function initServerStorage<T>(app: App<T>): { storage: Record<string, any> } {
  const data = { storage: {} }

  app.provide(NITRO_APP_STORAGE, data)

  return {
    storage: data
  }
}
