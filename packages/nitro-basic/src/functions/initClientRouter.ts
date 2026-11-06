import type { Router } from 'vue-router'

/**
 * Waits for the initialization and readiness of the Vue router.
 * This ensures that all components and initial hooks are resolved before the application is mounted or rendered.
 *
 * Ожидает инициализацию и готовность роутера Vue.
 * Это гарантирует, что все компоненты и начальные хуки разрешены до того, как приложение будет смонтировано или отрисовано.
 * @param router instance of Vue Router / экземпляр Vue Router
 * @returns promise resolved when the router is ready / промис, разрешающийся после готовности роутера
 */
export async function initClientRouter(
  router?: Router
): Promise<void> {
  if (router) {
    await router.isReady()
  }
}
