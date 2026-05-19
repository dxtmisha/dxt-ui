import type { RouteRecordRaw } from 'vue-router'

import DemoHomePage from './pages/DemoHomePage.vue'

import DemoApiPage from './pages/DemoApiPage.vue'

import DemoActionsPage from './pages/components/DemoActionsPage.vue'
import DemoBadgePage from './pages/components/DemoBadgePage.vue'
import DemoButtonPage from './pages/components/DemoButtonPage.vue'
import DemoCheckboxPage from './pages/components/DemoCheckboxPage.vue'
import DemoClientOnlyPage from './pages/components/DemoClientOnlyPage.vue'
import DemoIconPage from './pages/components/DemoIconPage.vue'
import DemoImagePage from './pages/components/DemoImagePage.vue'
import DemoInputPage from './pages/components/DemoInputPage.vue'
import DemoMaskPage from './pages/components/DemoMaskPage.vue'
import DemoMotionTransformPage from './pages/components/DemoMotionTransformPage.vue'
import DemoPageAreaPage from './pages/components/DemoPageAreaPage.vue'
import DemoProgressPage from './pages/components/DemoProgressPage.vue'
import DemoRadioPage from './pages/components/DemoRadioPage.vue'
import DemoSnackbarPage from './pages/components/DemoSnackbarPage.vue'
import DemoSwitchPage from './pages/components/DemoSwitchPage.vue'
import DemoTabsPage from './pages/components/DemoTabsPage.vue'

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
    path: '/component-badge',
    name: 'component-badge',
    component: DemoBadgePage
  },
  {
    path: '/component-button',
    name: 'component-button',
    component: DemoButtonPage
  },
  {
    path: '/component-checkbox',
    name: 'component-checkbox',
    component: DemoCheckboxPage
  },
  {
    path: '/component-client-only',
    name: 'component-client-only',
    component: DemoClientOnlyPage
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
    path: '/component-input',
    name: 'component-input',
    component: DemoInputPage
  },
  {
    path: '/component-mask',
    name: 'component-mask',
    component: DemoMaskPage
  },
  {
    path: '/component-motion-transform',
    name: 'component-motion-transform',
    component: DemoMotionTransformPage
  },
  {
    path: '/component-page-area',
    name: 'component-page-area',
    component: DemoPageAreaPage
  },
  {
    path: '/component-progress',
    name: 'component-progress',
    component: DemoProgressPage
  },
  {
    path: '/component-radio',
    name: 'component-radio',
    component: DemoRadioPage
  },
  {
    path: '/component-snackbar',
    name: 'component-snackbar',
    component: DemoSnackbarPage
  },
  {
    path: '/component-switch',
    name: 'component-switch',
    component: DemoSwitchPage
  },
  {
    path: '/component-tabs',
    name: 'component-tabs',
    component: DemoTabsPage
  }
]
