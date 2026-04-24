import type { Router } from 'vue-router'
import { getRequestUrl } from './getRequestUrl'

/**
 * Initializes the router for the application.
 *
 * Инициализирует маршрутизатор в приложении.
 * @param request HTTP request / HTTP запрос
 * @param router Vue router instance / Экземпляр маршрутизатора Vue
 */
export async function initRouter(
  request: Request,
  router: Router | undefined
): Promise<void> {
  if (router) {
    await router.push(getRequestUrl(request))
    await router.isReady()
  }
}
