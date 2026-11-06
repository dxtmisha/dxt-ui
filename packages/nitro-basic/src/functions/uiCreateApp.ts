import { type App, type Component, createSSRApp } from 'vue'
import type { Router } from 'vue-router'

import { uiCreateSsrRouter } from './uiCreateSsrRouter'
import { type NitroAppOptions } from '../types/nitroAppTypes'

/**
 * Creates a Vue SSR application instance and initializes core plugins.
 *
 * Создаёт экземпляр приложения Vue SSR и инициализирует основные плагины.
 * @param appComponent root component of the application / корневой компонент приложения
 * @param options application configuration options / опции конфигурации приложения
 * @returns object containing the Vue app, router, and options / объект с экземпляром приложения Vue, роутером и опциями
 */
export function uiCreateApp<A extends Component = Component>(
  appComponent: A,
  options: NitroAppOptions = {}
): {
  app: App<Element>
  router: Router | undefined
  options: NitroAppOptions
} {
  const app = createSSRApp(appComponent)
  let router: Router | undefined = undefined

  if (options.router) {
    router = options.router
    app.use(options.router)
  } else if (options.appRouter) {
    router = uiCreateSsrRouter(
      options.appRouter.routes,
      options.appRouter.options,
      options.appRouter.base
    )

    app.use(router)
  }

  app.runWithContext(() => {
    app.provide('__ui-teleport-ssr-body__', options.teleportBody ?? '#teleports')
  })

  return {
    app,
    router,
    options
  }
}
