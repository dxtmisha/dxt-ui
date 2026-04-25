import { uiCreateServerApp, uiBootstrapServer } from '@dxtmisha/nitro-basic'

import { createApp } from './main'
import template from './templates/main.html?raw'

console.log('Server entry point initialized.')

uiBootstrapServer()

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
      undefined,
      template
    )

    return new Response(body, {
      headers
    })
  }
}
