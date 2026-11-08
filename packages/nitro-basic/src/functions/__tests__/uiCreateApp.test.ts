import { describe, expect, it, vi } from 'vitest'
import { inject } from 'vue'
import { createMemoryHistory, createRouter } from 'vue-router'
import { uiCreateApp } from '../uiCreateApp'

describe('uiCreateApp', () => {
  const RootComponent = { render: () => null }

  describe('Standard functional requirements (Happy path)', () => {
    it('should create SSR app without router when neither router nor appRouter is passed, and provide default teleportBody "#teleports"', () => {
      const { app, router, options } = uiCreateApp(RootComponent)

      expect(app).toBeDefined()
      expect(router).toBeUndefined()
      expect(options).toEqual({})

      app.runWithContext(() => {
        expect(inject('__ui-teleport-ssr-body__')).toBe('#teleports')
      })
    })

    it('should use pre-created options.router when provided', () => {
      const customRouter = createRouter({
        history: createMemoryHistory(),
        routes: [{ path: '/', component: RootComponent }]
      })

      const { app, router } = uiCreateApp(RootComponent, {
        router: customRouter,
        teleportBody: '#custom-modals'
      })

      expect(router).toBe(customRouter)
      app.runWithContext(() => {
        expect(inject('__ui-teleport-ssr-body__')).toBe('#custom-modals')
      })
    })

    it('should create SSR router via uiCreateSsrRouter when options.appRouter is provided', () => {
      const { app, router } = uiCreateApp(RootComponent, {
        appRouter: {
          routes: [
            { path: '/', name: 'index', component: RootComponent },
            { path: '/docs', name: 'docs', component: RootComponent }
          ],
          options: { strict: true },
          base: '/v1/'
        }
      })

      expect(router).toBeDefined()
      expect(router?.getRoutes().map(r => r.name)).toEqual(['index', 'docs'])
      expect(app).toBeDefined()
    })

    it('should prioritize options.router over options.appRouter if both are supplied', () => {
      const explicitRouter = createRouter({
        history: createMemoryHistory(),
        routes: [{ path: '/explicit', name: 'explicit', component: RootComponent }]
      })
      const useSpy = vi.spyOn(explicitRouter, 'install')

      const { router } = uiCreateApp(RootComponent, {
        router: explicitRouter,
        appRouter: {
          routes: [{ path: '/ignored', name: 'ignored', component: RootComponent }]
        }
      })

      expect(router).toBe(explicitRouter)
      expect(useSpy).toHaveBeenCalledTimes(1)
    })
  })
})
