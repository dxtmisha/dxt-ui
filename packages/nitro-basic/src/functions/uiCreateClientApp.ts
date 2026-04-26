import type { App } from 'vue'
import type { Router } from 'vue-router'
import { dxtFunctionalPlugin } from '@dxtmisha/functional'

import { initClientRouter } from './initClientRouter'
import type { NitroAppOptions } from '../types/nitroAppTypes'

/**
 * Finalizes the initialization and mount of the Vue application on the client side.
 * It waits for the router to be ready to avoid hydration mismatches and then mounts the application
 * to the specified container.
 *
 * Завершает инициализацию и монтирует приложение Vue на стороне клиента.
 * Ожидает готовности роутера для предотвращения ошибок гидратации, после чего монтирует
 * приложение в указанный контейнер.
 *
 * @param app current Vue application instance / текущий экземпляр приложения Vue
 * @param rootContainer selector or element for mounting / селектор или элемент для монтирования
 * @param router instance of Vue Router / экземпляр Vue Router
 * @param options configuration options for the application / параметры конфигурации приложения
 * @param action additional action to perform before mounting / дополнительное действие перед монтированием
 */
export async function uiCreateClientApp<T>(
  app: App<T>,
  rootContainer: string | T = '#app',
  router?: Router | undefined,
  options: NitroAppOptions = {},
  action?: (app: App<T>) => Promise<void> | void
) {
  app.use(dxtFunctionalPlugin, options)

  await initClientRouter(router)

  if (action) {
    await action(app)
  }

  if (rootContainer) {
    app.mount(rootContainer, true)
  }
}
