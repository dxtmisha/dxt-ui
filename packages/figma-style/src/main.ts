import { createApp } from 'vue'
import { FigmaPostCode } from '@dxtmisha/figma'

import manifest from '../manifest.json'
import App from './App.vue'

FigmaPostCode.set(manifest.id)

createApp(App).mount('#app')
