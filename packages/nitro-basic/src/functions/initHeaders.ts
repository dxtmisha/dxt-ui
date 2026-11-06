import type { App } from 'vue'
import { NITRO_API_HEADERS } from '../types/nitroAppTypes'

/**
 * Initializes the API headers and provides them to the application.
 *
 * Инициализирует заголовки API и предоставляет их приложению.
 * @param app Vue application instance / Экземпляр приложения Vue
 * @returns object containing the initialized Headers instance / объект с инициализированным экземпляром Headers
 */
export function initHeaders<T>(app: App<T>): { headers: Headers } {
  const headers = new Headers()
  headers.set('Content-Type', 'text/html;charset=UTF-8')

  app.provide(NITRO_API_HEADERS, headers)

  return {
    headers
  }
}
