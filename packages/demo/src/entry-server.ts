import { uiCreateServerApp } from '@dxtmisha/nitro-basic'
import { createApp } from './main'

export default {
  async fetch(request: Request) {
    const { app, router } = createApp()

    const {
      appHtml,
      teleportsHtml
    } = await uiCreateServerApp(
      app,
      request,
      router
    )

    return new Response(`<div id="app">${appHtml}</div>${teleportsHtml}`, {
      headers: {
        'Content-Type': 'text/html;charset=UTF-8'
      }
    })
  }
}
