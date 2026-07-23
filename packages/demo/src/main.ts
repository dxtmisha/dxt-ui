import { uiCreateApp } from '@dxtmisha/nitro-basic/client'

import App from './App.vue'
import { routes } from './router'

import '@dxtmisha/d1/style.css'
import './style.scss'
import { Geo } from '@dxtmisha/functional-basic'

export function createApp() {
  return uiCreateApp(App, {
    api: {
      preparation: async () => {
        console.log(Geo.getLanguage())
      }
    },
    appRouter: {
      routes
    }
  })
}
