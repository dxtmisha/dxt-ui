import type { RouteRecordRaw } from 'vue-router'

import DemoHome from './pages/DemoHome.vue'
import DemoImage from './pages/DemoImage.vue'

export const routes: RouteRecordRaw[] = [
  {
    path: '/',
    name: 'home',
    component: DemoHome
  },
  {
    path: '/image',
    name: 'image',
    component: DemoImage
  }
]
