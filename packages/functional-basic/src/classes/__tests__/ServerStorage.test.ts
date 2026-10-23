/** @vitest-environment jsdom */
import { describe, it, expect, beforeEach, vi, afterEach, type MockInstance } from 'vitest'
import { ServerStorage } from '../ServerStorage'
import { ErrorCenter } from '../ErrorCenter'
import { isDomRuntime } from '../../functions/isDomRuntime'

vi.mock('../../functions/isDomRuntime', () => ({
  isDomRuntime: vi.fn()
}))

describe('ServerStorage', () => {
  const consoleErrorSpy = vi.spyOn(console, 'error').mockImplementation(() => {})
  let errorCenterSpy: MockInstance
  const ssrContext: Record<string, unknown> = {}

  beforeEach(() => {
    errorCenterSpy = vi.spyOn(ErrorCenter.getItem(), 'on')

    ServerStorage.reset()
    ServerStorage.setErrorStatus(false)

    for (const key in ssrContext) {
      delete ssrContext[key]
    }

    consoleErrorSpy.mockClear()
    if (typeof document !== 'undefined' && document.body) {
      document.body.innerHTML = ''
    }
  })

  afterEach(() => {
    vi.clearAllMocks()
  })

  describe('Core API', () => {
    beforeEach(() => {
      vi.mocked(isDomRuntime).mockReturnValue(true)
    })

    it('should set and get values correctly', () => {
      const value = { count: 1 }
      ServerStorage.set('test', () => value)
      expect(ServerStorage.get('test')).toBe(value)
    })

    it('should set value without hydration by default', () => {
      ServerStorage.set('noHydrate', () => 'data')
      // @ts-expect-error: intentionally inspecting protected static getStorage
      const storage = ServerStorage.getStorage()
      expect(storage.noHydrate?.hydration).toBe(false)
    })

    it('should identify existing keys with has()', () => {
      ServerStorage.set('exists', () => true)
      expect(ServerStorage.has('exists')).toBe(true)
      expect(ServerStorage.has('not-exists')).toBe(false)
    })

    it('should remove values correctly and ignore removing non-existent keys', () => {
      ServerStorage.set('to-be-removed', () => 'value')
      expect(ServerStorage.has('to-be-removed')).toBe(true)

      ServerStorage.remove('to-be-removed')
      expect(ServerStorage.has('to-be-removed')).toBe(false)

      expect(() => ServerStorage.remove('non-existent')).not.toThrow()
    })

    it('should use default value factory in get() if key is missing', () => {
      const defaultValue = 'default'
      const factory = vi.fn().mockReturnValue(defaultValue)

      const result = ServerStorage.get('missing', factory)

      expect(result).toBe(defaultValue)
      expect(factory).toHaveBeenCalledTimes(1)
      expect(ServerStorage.get('missing')).toBe(defaultValue)
    })

    it('should return undefined if key is missing and no factory is provided', () => {
      expect(ServerStorage.get('missing-no-factory')).toBeUndefined()
    })
  })

  describe('Initialization and Reset', () => {
    it('should initialize once and return early on subsequent calls', () => {
      const firstListener = vi.fn()
      const secondListener = vi.fn()

      const resultFirst = ServerStorage.init(firstListener)
      const resultSecond = ServerStorage.init(secondListener)

      expect(resultFirst).toBe(ServerStorage)
      expect(resultSecond).toBe(ServerStorage)

      // @ts-expect-error: intentionally testing protected static listener property
      expect(ServerStorage.listener).toBe(firstListener)
    })

    it('should clear all data and listeners on reset()', () => {
      ServerStorage.init(() => ({}))
      ServerStorage.set('test', () => 'storedValue')

      ServerStorage.reset()

      // @ts-expect-error: intentionally testing protected static listener property
      expect(ServerStorage.listener).toBeUndefined()
      // @ts-expect-error: intentionally testing protected static storage property
      expect(ServerStorage.storage).toBeUndefined()
    })
  })

  describe('Error Handling', () => {
    beforeEach(() => {
      vi.mocked(isDomRuntime).mockReturnValue(false)
    })

    it('should notify ErrorCenter if context is missing and hideError is false', () => {
      ServerStorage.setErrorStatus(false)
      ServerStorage.get('missing-context-test')

      expect(errorCenterSpy).toHaveBeenCalledWith(expect.objectContaining({
        group: 'storage',
        code: 'context',
        details: { status: 'get:missing-context-test' }
      }))
    })

    it('should NOT notify ErrorCenter if context is missing and hideError is true', () => {
      ServerStorage.setErrorStatus(true)
      ServerStorage.get('hidden-error-test')

      expect(errorCenterSpy).not.toHaveBeenCalledWith(expect.objectContaining({
        group: 'storage',
        code: 'context'
      }))
    })

    it('should update error status via setErrorStatus()', () => {
      ServerStorage.setErrorStatus(true)
      // @ts-expect-error: intentionally testing protected static hideError property
      expect(ServerStorage.hideError).toBe(true)

      ServerStorage.setErrorStatus(false)
      // @ts-expect-error: intentionally testing protected static hideError property
      expect(ServerStorage.hideError).toBe(false)
    })

    it('should not initialize fallback storage on has() when context is missing', () => {
      ServerStorage.setErrorStatus(true)
      expect(ServerStorage.has('any-key')).toBe(false)
      // @ts-expect-error: intentionally testing protected static storage property
      expect(ServerStorage.storage).toBeUndefined()
    })
  })

  describe('Hydration & Security', () => {
    beforeEach(() => {
      ServerStorage.init(() => ssrContext)
    })

    it('should generate hydration script via toString()', () => {
      vi.mocked(isDomRuntime).mockReturnValue(false)

      ServerStorage.set('theme', () => 'dark', true)
      ServerStorage.set('secret', () => 'hidden', false)

      const html = ServerStorage.toString()
      expect(html).toContain('type="application/json"')
      expect(html).toContain('{"theme":"dark"}')
      expect(html).not.toContain('secret')
      expect(html).not.toContain('hidden')
    })

    it('should escape </script> tags in hydration JSON', () => {
      vi.mocked(isDomRuntime).mockReturnValue(false)

      const dangerousValue = { html: '</div></script><script>alert(1)</script>' }
      ServerStorage.set('xss', () => dangerousValue, true)

      const html = ServerStorage.toString()
      expect(html).not.toContain('</script><script>')
      expect(html).toContain('<\\/script>')
    })

    it('should restore data on client via getStorageDom()', () => {
      vi.mocked(isDomRuntime).mockReturnValue(true)
      // @ts-expect-error: intentionally resetting protected static listener to simulate client load
      ServerStorage.listener = undefined

      const script = document.createElement('script')
      script.id = '__ui:server:storage:id__'
      script.type = 'application/json'
      script.textContent = JSON.stringify({ 'hydrated-key': 'hydrated-value' })
      document.body.appendChild(script)

      expect(ServerStorage.get('hydrated-key')).toBe('hydrated-value')
      expect(ServerStorage.has('hydrated-key')).toBe(true)
    })

    it('should handle JSON parse errors gracefully in hydration', () => {
      vi.mocked(isDomRuntime).mockReturnValue(true)
      // @ts-expect-error: intentionally resetting protected static storage
      ServerStorage.storage = undefined

      const script = document.createElement('script')
      script.id = '__ui:server:storage:id__'
      script.type = 'application/json'
      script.textContent = 'invalid-json'
      document.body.appendChild(script)

      const value = ServerStorage.get('test', () => 'fallback')
      expect(value).toBe('fallback')
      expect(errorCenterSpy).toHaveBeenCalledWith(expect.objectContaining({
        group: 'hydration',
        code: 'error'
      }))
    })
  })

  describe('SSR Isolation', () => {
    beforeEach(() => {
      vi.mocked(isDomRuntime).mockReturnValue(false)
    })

    it('should isolate data per context listener', () => {
      const contextFirst: Record<string, unknown> = {}
      const contextSecond: Record<string, unknown> = {}
      let currentContext = contextFirst

      ServerStorage.init(() => currentContext)

      ServerStorage.set('token', () => 'user1-token')

      currentContext = contextSecond
      expect(ServerStorage.get('token')).toBeUndefined()
      ServerStorage.set('token', () => 'user2-token')

      currentContext = contextFirst
      expect(ServerStorage.get('token')).toBe('user1-token')

      currentContext = contextSecond
      expect(ServerStorage.get('token')).toBe('user2-token')
    })

    it('should warn and use fallback storage if context is missing', () => {
      ServerStorage.setErrorStatus(false)
      const result = ServerStorage.get('anything', () => 'value')
      expect(result).toBe('value')
      expect(errorCenterSpy).toHaveBeenCalledWith(expect.objectContaining({
        group: 'storage',
        code: 'context'
      }))
    })
  })
})
