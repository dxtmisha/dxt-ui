import type { Router } from 'vue-router'

/**
 * Waits for the initialization and readiness of the server-side router.
 * This ensures that all components and initial hooks are resolved before the application is rendered into HTML.
 *
 * Ожидает инициализацию и готовность роутера на стороне сервера.
 * Это гарантирует, что все компоненты и начальные хуки разрешены до того, как приложение будет отрисовано в HTML.
 * @param router instance of Vue Router / экземпляр Vue Router
 */
export async function initClientRouter(
  router: Router | undefined
): Promise<void> {
  if (router) {
    await router.isReady()
  }
}
