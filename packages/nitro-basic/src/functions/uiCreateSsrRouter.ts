// export:none

import {
  createRouter,
  createMemoryHistory,
  createWebHistory,
  type RouteRecordRaw
} from 'vue-router'
import { isDomRuntime } from '@dxtmisha/functional-basic'

import type { NitroAppRouterOptions } from '../types/nitroAppTypes'

/**
 * Creates a router instance for SSR or client-side runtime.
 *
 * Создаёт экземпляр маршрутизатора для SSR или клиентской среды.
 * @param routes list of routes for the router/ список маршрутов для маршрутизатора
 * @param options router options/ опции маршрутизатора
 */
export function uiCreateSsrRouter(
  routes: RouteRecordRaw[],
  options: NitroAppRouterOptions = {}
) {
  return createRouter({
    ...options,
    history: isDomRuntime()
      ? createWebHistory()
      : createMemoryHistory(),
    routes
  })
}
