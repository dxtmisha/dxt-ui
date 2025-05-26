import { createRouter, createWebHistory } from 'vue-router'

import MainPage from './pages/MainPage.vue'

import RefColorsPage from './pages/Ref/RefColorsPage.vue'

import ClassesBackgroundsPage from './pages/Classes/ClassesBackgroundsPage.vue'
import ClassesBordersPage from './pages/Classes/ClassesBordersPage.vue'
import ClassesColorsPage from './pages/Classes/ClassesColorsPage.vue'
import ClassesFontsPage from './pages/Classes/ClassesFontsPage.vue'

const routes = [
  { path: '/ref/colors', component: RefColorsPage },

  { path: '/classes/backgrounds', component: ClassesBackgroundsPage },
  { path: '/classes/borders', component: ClassesBordersPage },
  { path: '/classes/colors', component: ClassesColorsPage },
  { path: '/classes/fonts', component: ClassesFontsPage },

  { path: '/', component: MainPage }
]

export const router = createRouter({
  history: createWebHistory(),
  routes
})
