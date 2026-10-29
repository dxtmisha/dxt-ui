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

    it('should correctly handle keys matching Object.prototype properties', () => {
      expect(ServerStorage.has('toString')).toBe(false)
      expect(ServerStorage.has('valueOf')).toBe(false)

      const value = ServerStorage.get('toString', () => 'custom-to-string')
      expect(value).toBe('custom-to-string')
      expect(ServerStorage.has('toString')).toBe(true)

      ServerStorage.remove('toString')
      expect(ServerStorage.has('toString')).toBe(false)
    })

    it('should support direct non-function values in set() and get()', () => {
      ServerStorage.set('direct-value', 'direct')
      expect(ServerStorage.get('direct-value')).toBe('direct')

      const result = ServerStorage.get('direct-missing', 'fallback-direct')
      expect(result).toBe('fallback-direct')
      expect(ServerStorage.get('direct-missing')).toBe('fallback-direct')
    })

    it('should preserve falsy values (false, 0, empty string, null, NaN) without re-running factory in get()', () => {
      const falsyCases: Array<[string, unknown]> = [
        ['bool-false', false],
        ['num-zero', 0],
        ['empty-str', ''],
        ['null-val', null]
      ]

      for (const [key, falsyValue] of falsyCases) {
        const initialFactory = vi.fn().mockReturnValue(falsyValue)
        const fallbackFactory = vi.fn().mockReturnValue('should-not-be-used')

        expect(ServerStorage.get(key, initialFactory)).toBe(falsyValue)
        expect(initialFactory).toHaveBeenCalledTimes(1)

        expect(ServerStorage.get(key, fallbackFactory)).toBe(falsyValue)
        expect(fallbackFactory).not.toHaveBeenCalled()
      }

      const nanFactory = vi.fn().mockReturnValue(Number.NaN)
      const nanFallback = vi.fn().mockReturnValue(42)
      expect(Number.isNaN(ServerStorage.get('nan-val', nanFactory))).toBe(true)
      expect(Number.isNaN(ServerStorage.get('nan-val', nanFallback))).toBe(true)
      expect(nanFactory).toHaveBeenCalledTimes(1)
      expect(nanFallback).not.toHaveBeenCalled()
    })

    it('should write into explicitly provided storageList in set()', () => {
      const customStorageList = Object.create(null)
      const result = ServerStorage.set('custom-key', 'custom-value', true, customStorageList)

      expect(result).toBe('custom-value')
      expect(customStorageList['custom-key']).toEqual({
        value: 'custom-value',
        hydration: true
      })
      expect(ServerStorage.has('custom-key')).toBe(false)
    })

    it('should handle multilingual and Unicode keys and values (Cyrillic, Vietnamese, CJK, Emoji)', () => {
      const unicodeCases: Array<[string, string]> = [
        ['ключ:привет', 'Привет Мир'],
        ['khóa:tiếng-việt', 'Xin chào Việt Nam'],
        ['键:中文', '你好 世界'],
        ['key:🚀', '🔥 ✨ 🎉']
      ]

      for (const [key, value] of unicodeCases) {
        ServerStorage.set(key, value)
        expect(ServerStorage.has(key)).toBe(true)
        expect(ServerStorage.get(key)).toBe(value)
      }
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

    it('should catch listener exceptions, notify ErrorCenter, and use fallback storage', () => {
      const listenerError = new Error('Listener failed')
      ServerStorage.init(() => {
        throw listenerError
      })

      const value = ServerStorage.get('safe-fallback', () => 'recovered')

      expect(value).toBe('recovered')
      expect(errorCenterSpy).toHaveBeenCalledWith(expect.objectContaining({
        group: 'storage',
        code: 'context',
        details: {
          status: 'get:safe-fallback',
          error: listenerError
        }
      }))
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

    it('should include values initialized via get() with hydration=true in toString()', () => {
      vi.mocked(isDomRuntime).mockReturnValue(false)

      ServerStorage.get('hydrated-via-get', () => ({ ready: true }), true)
      ServerStorage.get('non-hydrated-via-get', () => ({ ready: false }), false)

      const html = ServerStorage.toString()
      expect(html).toContain('{"hydrated-via-get":{"ready":true}}')
      expect(html).not.toContain('non-hydrated-via-get')
    })

    it('should safely ignore non-plain-object JSON payloads (e.g. arrays) in getStorageDom() and remove script element', () => {
      vi.mocked(isDomRuntime).mockReturnValue(true)
      // @ts-expect-error: intentionally resetting protected static storage
      ServerStorage.storage = undefined

      const script = document.createElement('script')
      script.id = '__ui:server:storage:id__'
      script.type = 'application/json'
      script.textContent = JSON.stringify(['unexpected', 'array'])
      document.body.appendChild(script)

      expect(ServerStorage.has('0')).toBe(false)
      expect(ServerStorage.get('fallback-after-array', 'ok')).toBe('ok')
      expect(document.getElementById('__ui:server:storage:id__')).toBeNull()
    })
  })

  describe('SSR Isolation', () => {
    beforeEach(() => {
      vi.mocked(isDomRuntime).mockReturnValue(false)
    })

    it('should not mutate context when has() or remove() is called on empty context', () => {
      const emptyContext: Record<string, unknown> = {}
      ServerStorage.init(() => emptyContext)

      expect(ServerStorage.has('non-existent-key')).toBe(false)
      expect('__ui:server-storage__' in emptyContext).toBe(false)

      ServerStorage.remove('non-existent-key')
      expect('__ui:server-storage__' in emptyContext).toBe(false)
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
