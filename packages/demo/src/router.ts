import type { RouteRecordRaw } from 'vue-router'

import DemoHome from './pages/DemoHome.vue'

import DemoApi from './pages/DemoApi.vue'

import DemoImage from './pages/components/DemoImage.vue'

export const routes: RouteRecordRaw[] = [
  {
    path: '/',
    name: 'home',
    component: DemoHome
  },
  {
    path: '/test-api',
    name: 'test-api',
    component: DemoApi
  },
  {
    path: '/component-image',
    name: 'component-image',
    component: DemoImage
  }
]
