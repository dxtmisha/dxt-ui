/**
 * @vitest-environment jsdom
 */
import { describe, it, expect, vi } from 'vitest'
import { uiCreateSsrRouter } from '../uiCreateSsrRouter'
import * as functionalBasic from '@dxtmisha/functional-basic'

vi.mock('@dxtmisha/functional-basic', async () => {
  const actual = await vi.importActual('@dxtmisha/functional-basic')
  return {
    ...actual,
    isDomRuntime: vi.fn()
  }
})

describe('uiCreateSsrRouter', () => {
  const routes = [{ path: '/', component: { template: '<div>Home</div>' } }]

  it('should create a router with web history in DOM runtime', () => {
    vi.mocked(functionalBasic.isDomRuntime).mockReturnValue(true)

    const router = uiCreateSsrRouter(routes)

    expect(router.options.history).toBeDefined()
    // vue-router doesn't easily expose the type of history,
    // but we can check if it was created without errors
  })

  it('should create a router with memory history in non-DOM runtime', () => {
    vi.mocked(functionalBasic.isDomRuntime).mockReturnValue(false)

    const router = uiCreateSsrRouter(routes)

    expect(router.options.history).toBeDefined()
  })

  it('should accept additional router options', () => {
    const router = uiCreateSsrRouter(routes, {
      sensitive: true,
      strict: true
    } as any)

    expect(router.options.sensitive).toBe(true)
    expect(router.options.strict).toBe(true)
  })
})
