import { createApp } from 'vue'
import { FigmaPostCode } from '@dxtmisha/figma'
import { d1MakeIcons } from '@dxtmisha/d1/media'

import './media/translate/translate'
import './media/responseData/responseData'

import manifest from '../manifest.json'
import App from './App.vue'

import { makeIcons } from './media/icons'

d1MakeIcons()
makeIcons()
FigmaPostCode.set(manifest.id)

createApp(App)
  .mount('#app')
