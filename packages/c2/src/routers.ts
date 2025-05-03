import { createRouter, createWebHistory } from 'vue-router'

import MainPage from './pages/MainPage.vue'

import IconPage from './pages/IconPage.vue'
import ImagePage from './pages/ImagePage.vue'
import SkeletonPage from './pages/SkeletonPage.vue'

const routes = [
  { path: '/icon', component: IconPage },
  { path: '/image', component: ImagePage },
  { path: '/skeleton', component: SkeletonPage },
  { path: '/', component: MainPage }
]

export const router = createRouter({
  history: createWebHistory(),
  routes
})
