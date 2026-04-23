import { renderToString } from 'vue/server-renderer'
import { createApp } from './main'
import { random, ServerStorage } from '@dxtmisha/functional-basic'

export default {
  async fetch(request: Request) {
    const { app, router } = createApp()

    const url = new URL(request.url).pathname

    if (router) {
      await router.push(url)
      await router.isReady()
    }

    ServerStorage.get('test' + random(100, 1000), () => ({}))

    const appHtml = await renderToString(app)

    return new Response(appHtml, {
      headers: {
        'Content-Type': 'text/html;charset=UTF-8'
      }
    })
  }
}
