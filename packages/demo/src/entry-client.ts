import { uiCreateClientApp } from '@dxtmisha/nitro-basic'
import { createApp } from './main'

const { app, router } = createApp()

uiCreateClientApp(
  app,
  undefined,
  router
)
