import { describe, it, expect, vi } from 'vitest'
import { uiCreateApp } from '../uiCreateApp'
import { defineComponent } from 'vue'

describe('uiCreateApp', () => {
  const RootComponent = defineComponent({
    template: '<div><router-view /></div>'
  })

  it('should create a Vue app instance', () => {
    const { app } = uiCreateApp(RootComponent)
    expect(app).toBeDefined()
    expect(app.config.globalProperties).toBeDefined()
  })

  it('should initialize router if appRouter options are provided', () => {
    const { app } = uiCreateApp(RootComponent, {
      appRouter: {
        routes: [{ path: '/', component: { template: 'Home' } }]
      }
    })

    // Check if router is installed by looking at globalProperties
    expect(app.config.globalProperties.$router).toBeDefined()
  })

  it('should use provided router instance', () => {
    const mockRouter = {
      install: vi.fn(),
      options: { history: {}, routes: [] }
    } as any

    const { app: _ } = uiCreateApp(RootComponent, {
      router: mockRouter
    })

    expect(mockRouter.install).toHaveBeenCalled()
  })
})
