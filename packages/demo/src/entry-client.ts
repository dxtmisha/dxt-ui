import { uiBootstrapClient, uiCreateClientApp } from '@dxtmisha/nitro-basic'
import { createApp } from './main'

const { app, router, options } = createApp()

uiBootstrapClient()
uiCreateClientApp(
  app,
  undefined,
  router,
  options
)
