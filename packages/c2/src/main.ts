import { createApp } from 'vue'
import './style.scss'

import App from './App.vue'
import { router } from './routers'

import { c2MakeIcons } from './library/media'

c2MakeIcons()

createApp(App)
  .use(router)
  .mount('#app')
