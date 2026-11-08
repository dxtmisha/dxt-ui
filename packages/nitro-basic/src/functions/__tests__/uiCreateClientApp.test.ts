import { describe, expect, it, vi } from 'vitest'
import type { App } from 'vue'
import type { Router } from 'vue-router'
import { dxtFunctionalPlugin } from '@dxtmisha/functional'
import { uiCreateClientApp } from '../uiCreateClientApp'

describe('uiCreateClientApp', () => {
  const createMockApp = () => {
    const events: string[] = []
    const app = {
      use: vi.fn(() => {
        events.push('app.use')
        return app
      }),
      mount: vi.fn(() => {
        events.push('app.mount')
      })
    } as unknown as App<Element>

    return { app, events }
  }

  describe('Standard functional requirements (Happy path)', () => {
    it('should register dxtFunctionalPlugin, await router.isReady(), run action, and mount to "#app" with hydration=true', async () => {
      const { app, events } = createMockApp()
      const router = {
        isReady: vi.fn(async () => {
          await new Promise(resolve => setTimeout(resolve, 5))
          events.push('router.isReady')
        })
      } as unknown as Router
      const options = { metaSuffix: ' - DXT' }
      const action = vi.fn(async (passedApp: App<Element>) => {
        expect(passedApp).toBe(app)
        await new Promise(resolve => setTimeout(resolve, 5))
        events.push('action')
      })

      await uiCreateClientApp(app, '#custom-root', router, options, action)

      expect(app.use).toHaveBeenCalledWith(dxtFunctionalPlugin, options)
      expect(router.isReady).toHaveBeenCalledTimes(1)
      expect(action).toHaveBeenCalledWith(app)
      expect(app.mount).toHaveBeenCalledWith('#custom-root', true)
      expect(events).toEqual([
        'app.use',
        'router.isReady',
        'action',
        'app.mount'
      ])
    })

    it('should use default rootContainer "#app" when undefined is passed', async () => {
      const { app } = createMockApp()

      await uiCreateClientApp(app)

      expect(app.mount).toHaveBeenCalledWith('#app', true)
    })
  })

  describe('Boundary and optional parameter conditions', () => {
    it('should skip mounting when rootContainer is an empty string ""', async () => {
      const { app } = createMockApp()

      await uiCreateClientApp(app, '')

      expect(app.use).toHaveBeenCalledTimes(1)
      expect(app.mount).not.toHaveBeenCalled()
    })

    it('should work cleanly without router or action callback', async () => {
      const { app } = createMockApp()

      await uiCreateClientApp(app, '#app', undefined)

      expect(app.mount).toHaveBeenCalledWith('#app', true)
    })
  })
})
