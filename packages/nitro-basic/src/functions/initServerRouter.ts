import type { Router } from 'vue-router'
import { getRequestUrl } from './getRequestUrl'

/**
 * Initializes the router for the application on the server.
 *
 * Инициализирует маршрутизатор в приложении на стороне сервера.
 * @param request HTTP request / HTTP запрос
 * @param router Vue router instance / Экземпляр маршрутизатора Vue
 * @returns promise resolved when server navigation is ready / промис, разрешающийся после готовности серверной навигации
 */
export async function initServerRouter(
  request: Request,
  router?: Router
): Promise<void> {
  if (router) {
    await router.push(getRequestUrl(request))
    await router.isReady()
  }
}
