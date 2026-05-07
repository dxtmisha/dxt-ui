import { createApp } from 'vue'
import { FigmaPostCode } from '@dxtmisha/figma'
import { d1MakeIcons } from '@dxtmisha/d1/media'

import manifest from '../manifest.json'
import App from './App.vue'

d1MakeIcons()
FigmaPostCode.set(manifest.id)

createApp(App).mount('#app')
