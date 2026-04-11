import { describe, it, expect, beforeEach, vi, afterEach } from 'vitest'
import { ServerStorage } from '../ServerStorage'
import * as isDomRuntimeModule from '../../functions/isDomRuntime'

vi.mock('../../functions/isDomRuntime', () => ({
  isDomRuntime: vi.fn()
}))

describe('ServerStorage', () => {
  const consoleErrorSpy = vi.spyOn(console, 'error').mockImplementation(() => {})

  beforeEach(() => {
    // Reset static state of ServerStorage before each test
    // Use reflect to reset protected static properties
    // @ts-ignore
    ServerStorage.storage = {}
    // @ts-ignore
    ServerStorage.listener = undefined
    consoleErrorSpy.mockClear()
  })

  afterEach(() => {
    vi.clearAllMocks()
  })

  describe('Browser Environment', () => {
    beforeEach(() => {
      vi.mocked(isDomRuntimeModule.isDomRuntime).mockReturnValue(true)
    })

    it('should set and get values correctly', () => {
      const value = { a: 1 }
      ServerStorage.set('test', () => value)
      expect(ServerStorage.get('test', () => ({}))).toBe(value)
    })

    it('should use default value factory if key is missing', () => {
      const defaultValue = { default: true }
      const factory = vi.fn().mockReturnValue(defaultValue)

      const result = ServerStorage.get('missing', factory)

      expect(result).toBe(defaultValue)
      expect(factory).toHaveBeenCalled()
      expect(ServerStorage.get('missing', () => ({}))).toBe(defaultValue)
    })
  })

  describe('Server Environment (SSR)', () => {
    beforeEach(() => {
      vi.mocked(isDomRuntimeModule.isDomRuntime).mockReturnValue(false)
    })

    it('should log error and fallback to static storage if not initialized', () => {
      const value = 'ssr-fallback'
      ServerStorage.set('test', () => value)

      expect(consoleErrorSpy).toHaveBeenCalledWith(expect.stringContaining('[ServerStorage] Not initialized'))
      expect(ServerStorage.get('test', () => '')).toBe(value)
    })

    it('should use listener context after init', () => {
      const context: Record<string, any> = {}
      ServerStorage.init(() => context)

      const value = 'ssr-value'
      ServerStorage.set('key', () => value)

      expect(context['__dxt_server_storage__']['key']).toBe(value)
      expect(ServerStorage.get('key', () => '')).toBe(value)
      expect(consoleErrorSpy).not.toHaveBeenCalled()
    })

    it('should isolate data between different contexts', () => {
      const context1 = { id: 1 }
      const context2 = { id: 2 }
      let currentContext: Record<string, any> = context1

      ServerStorage.init(() => currentContext)

      // Set value in first context
      currentContext = context1
      ServerStorage.set('user', () => 'Alice')

      // Switch to second context
      currentContext = context2
      expect(ServerStorage.get('user', () => 'Unknown')).toBe('Unknown')
      ServerStorage.set('user', () => 'Bob')

      // Verify isolation
      currentContext = context1
      expect(ServerStorage.get('user', () => 'Unknown')).toBe('Alice')

      currentContext = context2
      expect(ServerStorage.get('user', () => 'Unknown')).toBe('Bob')
    })

    it('should log error if context is undefined', () => {
      ServerStorage.init(() => undefined as any)

      const value = 'no-context'
      ServerStorage.set('test', () => value)

      expect(consoleErrorSpy).toHaveBeenCalledWith(expect.stringContaining('[ServerStorage] Context is undefined'))
      expect(ServerStorage.get('test', () => '')).toBe(value)
    })
  })
})
