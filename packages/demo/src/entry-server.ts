import { renderToString } from '@vue/server-renderer'
import { createApp } from './main'

export async function render(url: string) {
  const { app, router } = createApp()

  // Устанавливаем URL для серверного роутера
  await router.push(url)
  await router.isReady()

  // Рендерим Vue приложение в строку HTML
  const html = await renderToString(app)

  return html
}
