import type { App } from 'vue'
import { NITRO_APP_STORAGE } from '../types/nitroAppTypes'

/**
 * Inits the server storage plugin for the application.
 *
 * Внедряет серверное хранилище в приложение.
 * @param app Vue application instance / Экземпляр приложения Vue
 */
export function initServerStorage<T>(app: App<T>) {
  app.provide(NITRO_APP_STORAGE, { storage: {} })
}
