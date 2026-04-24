import { renderToString } from 'vue/server-renderer'
import { uiServerStorage } from '@dxtmisha/nitro-basic/ui'
import { createApp } from './main'

uiServerStorage()

export default {
  async fetch(request: Request) {
    const { app, router } = createApp()

    const url = new URL(request.url).pathname

    if (router) {
      await router.push(url)
      await router.isReady()
    }

    const ctx: any = {}
    const appHtml = await renderToString(app, ctx)
    const teleportsHtml = ctx.teleports ? Object.values(ctx.teleports).join('') : ''

    return new Response(`<div id="app">${appHtml}</div>${teleportsHtml}`, {
      headers: {
        'Content-Type': 'text/html;charset=UTF-8'
      }
    })
  }
}
