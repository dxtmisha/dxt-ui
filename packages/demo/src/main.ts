import { uiCreateApp } from '@dxtmisha/nitro-basic'

import App from './App.vue'
import { routes } from './router'

import '@dxtmisha/d1/style.css'

export function createApp() {
  return uiCreateApp(App, {
    appRouter: {
      routes
    }
  })
}
