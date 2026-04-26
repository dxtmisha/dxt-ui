import type { App } from 'vue'
import type { Router } from 'vue-router'
import type { SSRContext } from 'vue/server-renderer'
import { Geo, MetaStatic } from '@dxtmisha/functional-basic'
import { dxtFunctionalPlugin } from '@dxtmisha/functional'

import { useHeaders } from '../composables/useHeaders'

import { initApi } from './initApi'
import { initCookieStorage } from './initCookieStorage'
import { initHeaders } from './initHeaders'
import { initServerRouter } from './initServerRouter'
import { initServerStorage } from './initServerStorage'
import { initScriptsJson } from './initScriptsJson'
import { initSsrApp } from './initSsrApp'

import type { NitroAppOptions } from '../types/nitroAppTypes'

/**
 * Initializes the server-side application, including storage, routing, and SSR rendering.
 *
 * Инициализирует серверное приложение, включая хранилища, роутинг и SSR-рендеринг.
 * @param app root component of the application / корневой компонент приложения
 * @param request incoming server request / входящий запрос сервера
 * @param router optional router instance / экземпляр роутера (опционально)
 * @param options configuration options for the application / параметры конфигурации приложения
 * @param action additional action to perform before rendering / дополнительное действие перед рендерингом
 * @param context SSR context for the renderer / контекст SSR для рендерера
 * @param body HTML template for substitution / HTML-шаблон для подстановки
 * @returns rendered application data and metadata / данные отрендеренного приложения и метаданные
 */
export async function uiCreateServerApp<T>(
  app: App<T>,
  request: Request,
  router?: Router | undefined,
  options: NitroAppOptions = {},
  action?: (app: App<T>) => Promise<void> | void,
  context: SSRContext = {},
  body?: string
) {
  initHeaders(app)
  initServerStorage(app)
  initCookieStorage(app, request)

  app.runWithContext(() => {
    initApi(request)
    app.use(dxtFunctionalPlugin, options)
  })

  await initServerRouter(request, router)

  if (action) {
    await action(app)
  }

  const rendered = await initSsrApp(app, context)

  return app.runWithContext(() => {
    const headers = useHeaders()
    const lang = Geo.getStandard()
    const title = MetaStatic.htmlTitle()
    const meta = MetaStatic.html()
    const scriptsJson = initScriptsJson()

    let newBody: string

    if (body) {
      newBody = body
        .replace('<!--ssr-lang-->', lang)
        .replace('<!--ssr-title-->', title)
        .replace('<!--ssr-meta-->', meta)
        .replace('<!--ssr-scriptsJson-->', scriptsJson)
        .replace('<!--ssr-outlet-->', rendered.appHtml)
        .replace('<!--ssr-teleports-->', rendered.teleportsHtml)
    } else {
      newBody = rendered.appHtml
    }

    return {
      headers,
      lang,
      title,
      meta,
      scriptsJson,
      body: newBody,

      ...rendered
    }
  })
}
