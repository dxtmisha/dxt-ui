import { describe, it, expect, vi, beforeEach } from 'vitest'
import { initBasic } from '../initBasic'
import { initServerStorage } from '../initServerStorage'
import { initApiCache } from '../initApiCache'
import { initCookieStorage } from '../initCookieStorage'

vi.mock('../initServerStorage', () => ({ initServerStorage: vi.fn() }))
vi.mock('../initApiCache', () => ({ initApiCache: vi.fn() }))
vi.mock('../initCookieStorage', () => ({ initCookieStorage: vi.fn() }))
vi.mock('nitropack/runtime', () => ({
  useStorage: vi.fn(),
  useEvent: vi.fn()
}))

describe('initBasic', () => {
  const mockNitroApp = {
    hooks: {
      hook: vi.fn()
    }
  } as any

  beforeEach(() => {
    vi.clearAllMocks()
  })

  it('should call initServerStorage and initApiCache immediately', () => {
    const config = {
      api: { cacheStorageKey: 'test-key', cacheStepAgeClearOld: 100 }
    }

    initBasic(mockNitroApp, config)

    expect(initServerStorage).toHaveBeenCalled()
    expect(initApiCache).toHaveBeenCalledWith('test-key', 100)
  })

  it('should register a request hook for initCookieStorage', () => {
    const config = {
      cookie: { age: 3600, sameSite: 'lax' as const }
    }

    initBasic(mockNitroApp, config)

    expect(mockNitroApp.hooks.hook).toHaveBeenCalledWith('request', expect.any(Function))

    // Simulate the hook callback
    const hookCallback = mockNitroApp.hooks.hook.mock.calls.find((call: any) => call[0] === 'request')[1]
    const mockEvent = { path: '/' }

    hookCallback(mockEvent)

    expect(initCookieStorage).toHaveBeenCalledWith(mockEvent, 3600, 'lax')
  })
})
