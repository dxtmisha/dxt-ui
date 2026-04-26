/** @vitest-environment jsdom */
import { describe, it, expect, beforeEach, vi, afterEach } from 'vitest'
import { ServerStorage } from '../ServerStorage'
import { ErrorCenter } from '../ErrorCenter'
import { isDomRuntime } from '../../functions/isDomRuntime'

vi.mock('../../functions/isDomRuntime', () => ({
  isDomRuntime: vi.fn()
}))

describe('ServerStorage', () => {
  const consoleErrorSpy = vi.spyOn(console, 'error').mockImplementation(() => {})
  let errorCenterSpy: ReturnType<typeof vi.spyOn>
  const ssrContext: Record<string, any> = {}

  beforeEach(() => {
    // Spy on the default ErrorCenter instance's on method
    errorCenterSpy = vi.spyOn(ErrorCenter.getItem(), 'on')

    ServerStorage.reset()

    // Clear SSR context
    for (const key in ssrContext) delete ssrContext[key]

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
      const value = { a: 1 }
      ServerStorage.set('test', () => value)
      expect(ServerStorage.get('test')).toBe(value)
    })

    it('should set value without hydration by default', () => {
      ServerStorage.set('noHydrate', () => 'data')
      expect((ServerStorage as any).getStorage().noHydrate.hydration).toBe(false)
    })

    it('should identify existing keys with has()', () => {
      ServerStorage.set('exists', () => true)
      expect(ServerStorage.has('exists')).toBe(true)
      expect(ServerStorage.has('not-exists')).toBe(false)
    })

    it('should remove values correctly', () => {
      ServerStorage.set('to-be-removed', () => 'value')
      expect(ServerStorage.has('to-be-removed')).toBe(true)
      ServerStorage.remove('to-be-removed')
      expect(ServerStorage.has('to-be-removed')).toBe(false)
    })

    it('should use default value factory in get() if key is missing', () => {
      const defaultValue = 'default'
      const factory = vi.fn().mockReturnValue(defaultValue)

      const result = ServerStorage.get('missing', factory)

      expect(result).toBe(defaultValue)
      expect(factory).toHaveBeenCalled()
      expect(ServerStorage.get('missing')).toBe(defaultValue)
    })

    it('should return undefined if key missing and no factory provided', () => {
      expect(ServerStorage.get('missing-no-factory')).toBeUndefined()
    })
  })

  describe('Initialization and Reset', () => {
    it('should initialize once and return early on subsequent calls', () => {
      const firstListener = vi.fn()
      const secondListener = vi.fn()

      const res1 = ServerStorage.init(firstListener)
      const res2 = ServerStorage.init(secondListener)

      expect(res1).toBe(ServerStorage)
      expect(res2).toBe(ServerStorage)

      expect((ServerStorage as any).listener).toBe(firstListener)
    })

    it('should clear all data and listeners on reset()', () => {
      ServerStorage.init(() => ({}))
      ServerStorage.set('test', () => 'val')

      ServerStorage.reset()

      expect((ServerStorage as any).listener).toBeUndefined()
      expect((ServerStorage as any).storage).toBeUndefined()
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
        code: 'context'
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
      expect((ServerStorage as any).hideError).toBe(true)

      ServerStorage.setErrorStatus(false)
      expect((ServerStorage as any).hideError).toBe(false)
    })
  })

  describe('Hydration & Security', () => {
    beforeEach(() => {
      // Setup SSR context for hydration generation tests
      ServerStorage.init(() => ssrContext)
    })

    it('should generate hydration script via toString()', () => {
      vi.mocked(isDomRuntime).mockReturnValue(false)

      ServerStorage.set('theme', () => 'dark', true) // Hydration enabled
      ServerStorage.set('secret', () => 'hidden', false) // Hydration disabled

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
      // Reset listener to simulate fresh client load
      ;(ServerStorage as any).listener = undefined

      // Simulate hydrated script in DOM
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
      // Force reset to ensure getStorageDom is called
      ;(ServerStorage as any).storage = undefined

      const script = document.createElement('script')
      script.id = '__ui:server:storage:id__'
      script.type = 'application/json'
      script.textContent = 'invalid-json'
      document.body.appendChild(script)

      const value = ServerStorage.get('test', () => 'fallback')
      expect(value).toBe('fallback')
      // Check that ErrorCenter was notified of the hydration error
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
      const context1 = {}
      const context2 = {}
      let currentContext = context1

      ServerStorage.init(() => currentContext)

      ServerStorage.set('token', () => 'user1-token')

      currentContext = context2
      expect(ServerStorage.get('token')).toBeUndefined()
      ServerStorage.set('token', () => 'user2-token')

      currentContext = context1
      expect(ServerStorage.get('token')).toBe('user1-token')

      currentContext = context2
      expect(ServerStorage.get('token')).toBe('user2-token')
    })

    it('should warn and return empty object if context is missing', () => {
      ServerStorage.setErrorStatus(false)
      const res = ServerStorage.get('anything', () => 'value')
      expect(res).toBe('value')
      expect(errorCenterSpy).toHaveBeenCalledWith(expect.objectContaining({
        group: 'storage',
        code: 'context'
      }))
    })
  })
})
