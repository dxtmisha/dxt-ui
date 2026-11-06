import { afterEach, describe, expect, it, vi } from 'vitest'
import * as vueRouter from 'vue-router'
import type { RouteRecordRaw } from 'vue-router'
import * as functionalBasic from '@dxtmisha/functional-basic'
import { uiCreateSsrRouter } from '../uiCreateSsrRouter'

vi.mock('vue-router', async (importOriginal) => {
  const actual = await importOriginal<typeof import('vue-router')>()
  return {
    ...actual,
    createRouter: vi.fn(actual.createRouter),
    createMemoryHistory: vi.fn(actual.createMemoryHistory),
    createWebHistory: vi.fn(actual.createWebHistory)
  }
})

describe('uiCreateSsrRouter', () => {
  const routes: RouteRecordRaw[] = [
    { path: '/', name: 'home', component: { render: () => null } },
    { path: '/about', name: 'about', component: { render: () => null } }
  ]

  afterEach(() => {
    vi.restoreAllMocks()
    vi.clearAllMocks()
  })

  describe('Standard functional requirements (Happy path)', () => {
    it('should use createMemoryHistory when isDomRuntime() is false (SSR)', () => {
      vi.spyOn(functionalBasic, 'isDomRuntime').mockReturnValue(false)

      const router = uiCreateSsrRouter(routes, {}, '/app-base/')

      expect(vueRouter.createMemoryHistory).toHaveBeenCalledTimes(1)
      expect(vueRouter.createMemoryHistory).toHaveBeenCalledWith('/app-base/')
      expect(vueRouter.createWebHistory).not.toHaveBeenCalled()
      expect(router.getRoutes().map(r => r.name)).toEqual(['home', 'about'])
    })

    it('should use createWebHistory when isDomRuntime() is true (Browser)', () => {
      vi.spyOn(functionalBasic, 'isDomRuntime').mockReturnValue(true)
      const mockHistory = vueRouter.createMemoryHistory('/web-base/')
      vi.mocked(vueRouter.createWebHistory).mockReturnValueOnce(mockHistory)

      const router = uiCreateSsrRouter(routes, {}, '/web-base/')

      expect(vueRouter.createWebHistory).toHaveBeenCalledTimes(1)
      expect(vueRouter.createWebHistory).toHaveBeenCalledWith('/web-base/')
      expect(router.getRoutes().map(r => r.name)).toEqual(['home', 'about'])
    })

    it('should forward custom router options and allow routes parameter to override options.routes', () => {
      vi.spyOn(functionalBasic, 'isDomRuntime').mockReturnValue(false)

      const router = uiCreateSsrRouter(routes, { strict: true })

      expect(vueRouter.createRouter).toHaveBeenCalledWith(
        expect.objectContaining({
          strict: true,
          routes
        })
      )
      expect(router.options.strict).toBe(true)
    })
  })
})

