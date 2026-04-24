import type { App } from 'vue'
import { renderToString, type SSRContext } from 'vue/server-renderer'

/**
 * Renders the Vue application to a string and extracts context data.
 *
 * Рендерит приложение Vue в строку и извлекает данные контекста.
 * @param app Vue application instance / Экземпляр приложения Vue
 * @param context SSR context / Контекст SSR
 */
export async function initSsrApp<T>(
  app: App<T>,
  context: SSRContext = {}
) {
  const appHtml = await renderToString(app, context)
  const teleportsHtml = context.teleports
    ? Object.values(context.teleports).join('')
    : ''

  return {
    appHtml,
    teleportsHtml,
    context
  }
}
