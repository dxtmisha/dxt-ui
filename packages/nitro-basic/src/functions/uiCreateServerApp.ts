import type { App } from 'vue'
import type { Router } from 'vue-router'
import type { SSRContext } from 'vue/server-renderer'
import { Geo, MetaStatic } from '@dxtmisha/functional-basic'

import { useHeaders } from '../composables/useHeaders'

import { initCookieStorage } from './initCookieStorage'
import { initRouter } from './initRouter'
import { initServerStorage } from './initServerStorage'
import { initScriptsJson } from './initScriptsJson'
import { initSsrApp } from './initSsrApp'

/**
 * Initializes server and cookie storage.
 *
 * Инициализирует серверное и cookie хранилище.
 * @param app root component of the application/ корневой компонент приложения
 * @param request application configuration options/ опции конфигурации приложения
 */
export async function uiCreateServerApp<T>(
  app: App<T>,
  request: Request,
  router?: Router | undefined,
  context: SSRContext = {}
) {
  initCookieStorage(app, request)
  initServerStorage(app)

  await initRouter(request, router)

  const rendered = await initSsrApp(app, context)

  return {
    headers: useHeaders(),
    lang: Geo.getStandard(),
    scriptsJson: initScriptsJson(),
    meta: MetaStatic.toString(),

    ...rendered
  }
}
