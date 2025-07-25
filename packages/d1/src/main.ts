import { createApp } from 'vue'
import './style.scss'

import App from './App.vue'
import { router } from './routers'

createApp(App)
  .use(router)
  .mount('#app')
