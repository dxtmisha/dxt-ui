import { uiCreateServerApp } from '@dxtmisha/nitro-basic'
import { uiCookieStorage, uiServerStorage } from '@dxtmisha/nitro-basic'

import { createApp } from './main'
import template from './templates/main.html?raw'

console.log('Server entry point initialized.')

uiCookieStorage()
uiServerStorage()

export default {
  async fetch(request: Request) {
    const { app, router } = createApp()

    const {
      headers,
      body
    } = await uiCreateServerApp(
      app,
      request,
      router,
      undefined,
      template
    )

    return new Response(body, {
      headers
    })
  }
}
