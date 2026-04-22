import { createSSRApp } from 'vue'
import App from './App.vue'

import { createSSRRouter } from './router'
import './style.scss'

export function createApp() {
  const app = createSSRApp(App)
  const router = createSSRRouter()

  app.use(router)

  return { app, router }
}
