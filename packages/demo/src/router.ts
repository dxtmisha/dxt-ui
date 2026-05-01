import type { RouteRecordRaw } from 'vue-router'

import DemoHomePage from './pages/DemoHomePage.vue'

import DemoApiPage from './pages/DemoApiPage.vue'

import DemoIconPage from './pages/components/DemoIconPage.vue'
import DemoImagePage from './pages/components/DemoImagePage.vue'
import DemoProgressPage from './pages/components/DemoProgressPage.vue'

export const routes: RouteRecordRaw[] = [
  {
    path: '/',
    name: 'home',
    component: DemoHomePage
  },
  {
    path: '/test-api',
    name: 'test-api',
    component: DemoApiPage
  },
  {
    path: '/component-icon',
    name: 'component-icon',
    component: DemoIconPage
  },
  {
    path: '/component-image',
    name: 'component-image',
    component: DemoImagePage
  },
  {
    path: '/component-progress',
    name: 'component-progress',
    component: DemoProgressPage
  }
]
