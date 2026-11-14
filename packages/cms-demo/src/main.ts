import { uiCreateApp } from '@dxtmisha/nitro-basic'

import App from './App.vue'
import { routes } from './router'

import './style.scss'

export function createApp() {
  return uiCreateApp(App, {
    appRouter: {
      routes
    }
  })
}
