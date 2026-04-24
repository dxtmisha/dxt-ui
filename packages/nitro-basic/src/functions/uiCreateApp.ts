import { createSSRApp } from 'vue'
import type { Router } from 'vue-router'
import { dxtFunctionalPlugin } from '@dxtmisha/functional'

import { uiCreateSsrRouter } from './uiCreateSsrRouter'
import { type NitroAppOptions } from '../types/nitroAppTypes'

/**
 * Creates a Vue SSR application instance and initializes core plugins.
 *
 * Создаёт экземпляр приложения Vue SSR и инициализирует основные плагины.
 * @param appComponent root component of the application/ корневой компонент приложения
 * @param options application configuration options/ опции конфигурации приложения
 */
export function uiCreateApp<A = any>(
  appComponent: A,
  options: NitroAppOptions = {}
) {
  const app = createSSRApp(appComponent as any)
  let router: Router | undefined = undefined

  if (options.router) {
    router = options.router
    app.use(options.router)
  } else if (options.appRouter) {
    const router = uiCreateSsrRouter(
      options.appRouter.routes,
      options.appRouter.options
    )
    app.use(router)
  }

  app.use(dxtFunctionalPlugin, options)

  return { app, router }
}
