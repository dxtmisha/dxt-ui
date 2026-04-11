/** @vitest-environment jsdom */
import { describe, it, expect, beforeEach, vi, afterEach } from 'vitest'
import { ServerStorage } from '../ServerStorage'
import { isDomRuntime } from '../../functions/isDomRuntime'

vi.mock('../../functions/isDomRuntime', () => ({
  isDomRuntime: vi.fn()
}))

describe('ServerStorage', () => {
  const consoleErrorSpy = vi.spyOn(console, 'error').mockImplementation(() => {})
  const ssrContext: Record<string, any> = {}

  beforeEach(() => {
    // Use any cast to safely reset protected static properties in tests
    const storageClass = ServerStorage as any
    storageClass.storage = undefined
    storageClass.listener = undefined

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

    it('should identify existing keys with has()', () => {
      ServerStorage.set('exists', () => true)
      expect(ServerStorage.has('exists')).toBe(true)
      expect(ServerStorage.has('not-exists')).toBe(false)
    })

    it('should use default value factory in get() if key is missing', () => {
      const defaultValue = 'default'
      const factory = vi.fn().mockReturnValue(defaultValue)

      const result = ServerStorage.get('missing', factory)

      expect(result).toBe(defaultValue)
      expect(factory).toHaveBeenCalled()
      expect(ServerStorage.get('missing')).toBe(defaultValue)
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
      const res = ServerStorage.get('anything', () => 'value')
      expect(res).toBe('value')
      expect(consoleErrorSpy).toHaveBeenCalledWith(expect.stringContaining('Context is missing'))
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
      // Check that console.error was called with the message as the first argument
      expect(consoleErrorSpy).toHaveBeenCalledWith(
        expect.stringContaining('Failed to parse storage'),
        expect.anything()
      )
    })
  })
})
