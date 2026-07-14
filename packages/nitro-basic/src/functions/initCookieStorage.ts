import type { App } from 'vue'
import { NITRO_APP_COOKIE } from '../types/nitroAppTypes'

/**
 * Inits the cookie storage plugin for the application.
 *
 * Внедряет хранилище cookie в приложение.
 * @param app Vue application instance / Экземпляр приложения Vue
 * @param request HTTP request / HTTP запрос
 */
export function initCookieStorage<T>(
  app: App<T>,
  request: Request
): { cookie: string } {
  const cookie = request.headers.get('Cookie') || ''

  app.provide(NITRO_APP_COOKIE, cookie)

  return {
    cookie
  }
}
