import { createApp } from 'vue'
import { FigmaPostCode } from '@dxtmisha/figma'

import './media/translate/translate'
import './media/responseData/responseData'

import manifest from '../manifest.json'
import App from './App.vue'

FigmaPostCode.set(manifest.id)

createApp(App)
  .mount('#app')
