import { uiBootstrapServer, uiCreateServerApp } from '@dxtmisha/nitro-basic'

import { createApp } from './main'
import template from './templates/main.html?raw'

uiBootstrapServer()

export default {
  async fetch(request: Request) {
    const { app, router, options } = createApp()

    const {
      headers,
      body
    } = await uiCreateServerApp(
      app,
      request,
      router,
      options,
      undefined,
      undefined,
      template
    )

    return new Response(body, {
      headers
    })
  }
}
