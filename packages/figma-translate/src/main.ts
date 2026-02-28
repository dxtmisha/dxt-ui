import { createApp } from 'vue'
import App from './App.vue'

const app = createApp(App)

if (import.meta.env.DEV) {
  import('@dxtmisha/d1').then(
    d1 => app
      .use(d1.useVueComponentsPlugin)
      .mount('#app')
  )
} else {
  app.mount('#app')
}
