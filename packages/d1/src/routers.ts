import { createRouter, createWebHistory } from 'vue-router'

import MainPage from './pages/MainPage.vue'

import IconPage from './pages/IconPage.vue'
import ImagePage from './pages/ImagePage.vue'
import SkeletonPage from './pages/SkeletonPage.vue'

import RefColorsPage from './pages/Ref/RefColorsPage.vue'
import RefShadowsPage from './pages/Ref/RefShadowsPage.vue'

import ClassesBackgroundsPage from './pages/Classes/ClassesBackgroundsPage.vue'
import ClassesBordersPage from './pages/Classes/ClassesBordersPage.vue'
import ClassesColorsPage from './pages/Classes/ClassesColorsPage.vue'
import ClassesElevationsPage from './pages/Classes/ClassesElevationsPage.vue'
import ClassesFontsPage from './pages/Classes/ClassesFontsPage.vue'
import ClassesMarginsPage from './pages/Classes/ClassesMarginsPage.vue'
import ClassesPaddingsPage from './pages/Classes/ClassesPaddingsPage.vue'

const routes = [
  { path: '/icon', component: IconPage },
  { path: '/image', component: ImagePage },
  { path: '/skeleton', component: SkeletonPage },

  { path: '/ref/colors', component: RefColorsPage },
  { path: '/ref/shadows', component: RefShadowsPage },

  { path: '/classes/backgrounds', component: ClassesBackgroundsPage },
  { path: '/classes/borders', component: ClassesBordersPage },
  { path: '/classes/colors', component: ClassesColorsPage },
  { path: '/classes/elevations', component: ClassesElevationsPage },
  { path: '/classes/fonts', component: ClassesFontsPage },
  { path: '/classes/margins', component: ClassesMarginsPage },
  { path: '/classes/paddings', component: ClassesPaddingsPage },

  { path: '/', component: MainPage }
]

export const router = createRouter({
  history: createWebHistory(),
  routes
})
