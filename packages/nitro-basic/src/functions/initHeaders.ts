import type { App } from 'vue'
import { NITRO_API_HEADERS } from '../types/nitroAppTypes'

/**
 * Initializes the API headers and provides them to the application.
 *
 * Инициализирует заголовки API и предоставляет их приложению.
 * @param app root component of the application / корневой компонент приложения
 */
export function initHeaders<T>(app: App<T>) {
  const headers = new Headers()
  headers.set('Content-Type', 'text/html;charset=UTF-8')

  app.provide(
    NITRO_API_HEADERS,
    headers
  )
}
