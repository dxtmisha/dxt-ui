import { readFileSync } from 'node:fs'
import { resolve } from 'node:path'
import { defineEventHandler, getRequestURL } from 'h3'
// Импортируем скомпилированный сервером файл Vue
// В момент разработки TypeScript может ругаться на этот путь, это нормально,
// так как файл появится только после сборки Vite.
import { render } from '../../dist/server/entry-server.js'

export default defineEventHandler(async (event) => {
  const url = getRequestURL(event).pathname

  try {
    // 1. Читаем базовый шаблон HTML (скомпилированный Vite)
    const template = readFileSync(resolve('./dist/client/index.html'), 'utf-8')

    // 2. Рендерим Vue приложение для текущего URL
    const appHtml = await render(url)

    // 3. Вставляем отрендеренный HTML в шаблон
    const finalHtml = template.replace('', appHtml)

    // 4. Отдаем результат
    event.node.res.setHeader('Content-Type', 'text/html; charset=utf-8')
    return finalHtml
  } catch (error) {
    console.error('SSR Error:', error)
    return 'Internal Server Error'
  }
})
