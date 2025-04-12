import { createRouter, createWebHistory } from 'vue-router'

import MainPage from './pages/MainPage.vue'
import ImagePage from './pages/ImagePage.vue'

const routes = [
  { path: '/image', component: ImagePage },
  { path: '/', component: MainPage }
]

export const router = createRouter({
  history: createWebHistory(),
  routes
})
