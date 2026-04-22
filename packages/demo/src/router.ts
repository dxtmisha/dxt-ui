import { createRouter, createMemoryHistory, createWebHistory } from 'vue-router'

export function createSSRRouter() {
  return createRouter({
    history: import.meta.env.SSR
      ? createMemoryHistory()
      : createWebHistory(),
    routes: [
      {
        path: '/',
        component: () => import('./views/Home.vue')
      },
      {
        path: '/about',
        component: () => import('./views/About.vue')
      }
    ]
  })
}
