import { createRouter, createWebHistory } from 'vue-router'

import MainPage from './pages/MainPage.vue'

import ColorsPage from './pages/ColorsPage.vue'
import FontsPage from './pages/FontsPage.vue'

const routes = [
  { path: '/colors', component: ColorsPage },
  { path: '/fonts', component: FontsPage },
  { path: '/', component: MainPage }
]

export const router = createRouter({
  history: createWebHistory(),
  routes
})
