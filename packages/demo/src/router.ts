import type { RouteRecordRaw } from 'vue-router'

import DemoHomePage from './pages/DemoHomePage.vue'

import DemoApiPage from './pages/DemoApiPage.vue'

import DemoActionsPage from './pages/components/DemoActionsPage.vue'
import DemoButtonPage from './pages/components/DemoButtonPage.vue'
import DemoIconPage from './pages/components/DemoIconPage.vue'
import DemoImagePage from './pages/components/DemoImagePage.vue'
import DemoProgressPage from './pages/components/DemoProgressPage.vue'
import DemoSnackbarPage from './pages/components/DemoSnackbarPage.vue'

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
    path: '/component-actions',
    name: 'component-actions',
    component: DemoActionsPage
  },
  {
    path: '/component-button',
    name: 'component-button',
    component: DemoButtonPage
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
  },
  {
    path: '/component-snackbar',
    name: 'component-snackbar',
    component: DemoSnackbarPage
  }
]
