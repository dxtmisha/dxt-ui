import { d1MakeIcons } from '@dxtmisha/d1/media'
import { FigmaPostCode } from '@dxtmisha/figma'
import { createApp } from 'vue'

import manifest from '../manifest.json'
import App from './App.vue'

import '@dxtmisha/d1/style.css'

d1MakeIcons()
FigmaPostCode.set(manifest.id)

createApp(App).mount('#app')
