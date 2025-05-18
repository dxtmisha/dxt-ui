import { createRouter, createWebHistory } from 'vue-router'

import MainPage from './pages/MainPage.vue'

import ButtonPage from './pages/ButtonPage.vue'
import IconPage from './pages/IconPage.vue'
import ImagePage from './pages/ImagePage.vue'
import ProgressPage from './pages/ProgressPage.vue'
import RipplePage from './pages/RipplePage.vue'
import SkeletonPage from './pages/SkeletonPage.vue'

const routes = [
  { path: '/button', component: ButtonPage },
  { path: '/icon', component: IconPage },
  { path: '/image', component: ImagePage },
  { path: '/progress', component: ProgressPage },
  { path: '/ripple', component: RipplePage },
  { path: '/skeleton', component: SkeletonPage },
  { path: '/', component: MainPage }
]

export const router = createRouter({
  history: createWebHistory(),
  routes
})
