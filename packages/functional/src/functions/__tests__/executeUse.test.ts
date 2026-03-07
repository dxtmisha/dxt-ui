/**
 * @vitest-environment jsdom
 */

import { describe, it, expect, vi, beforeEach } from 'vitest'
import { executeUse, executeUseGlobalInit } from '../executeUse'

// Mocking console.warn to suppress Vue lifecycle warnings during tests
// as we are calling composables outside of full component setup in unit tests.
vi.spyOn(console, 'warn').mockImplementation(() => {})

describe('executeUse', () => {
  beforeEach(() => {
    vi.clearAllMocks()
  })

  describe('Core Functionality', () => {
    it('returns a factory function that maintains a single instance', () => {
      const useSharedState = executeUse(() => ({
        timestamp: Date.now(),
        uuid: Math.random().toString(36)
      }), { type: 'local' })

      const firstCall = useSharedState()
      const secondCall = useSharedState()

      expect(firstCall).toBe(secondCall)
      expect(Object.isFrozen(firstCall)).toBe(true)
    })

    it('passes arguments to the initializer only on the first call', () => {
      const initializer = vi.fn((prefix: string) => ({
        id: `${prefix}_${Math.random()}`
      }))

      const useProfile = executeUse(initializer, { type: 'local' })

      const p1 = useProfile('user_123')
      const p2 = useProfile('ignored')

      expect(initializer).toHaveBeenCalledTimes(1)
      expect(initializer).toHaveBeenCalledWith('user_123')
      expect(p1.id).toContain('user_123')
      expect(p1).toBe(p2)
    })
  })

  describe('Singleton Modes', () => {
    it('provides local-only singleton when type is "local"', () => {
      let instancesCreated = 0
      const useLocal = executeUse(() => {
        instancesCreated++
        return { type: 'local' }
      }, { type: 'local' })

      useLocal()
      useLocal()
      
      expect(instancesCreated).toBe(1)
    })

    it('registers global methods for batch initialization', () => {
      const globalInitSpy = vi.fn(() => ({ status: 'ready' }))
      const useConfig = executeUse(globalInitSpy, { type: 'global' })

      // Should not be called until executeUseGlobalInit is invoked
      expect(globalInitSpy).not.toHaveBeenCalled()

      executeUseGlobalInit()

      expect(globalInitSpy).toHaveBeenCalledTimes(1)
      expect(useConfig().status).toBe('ready')
    })
  })

  describe('Structural Marker: init()', () => {
    it('provides an init() method that returns raw data', () => {
      const rawData = { apiEndpoint: 'https://api.example.com', version: 'v1' }
      const useData = executeUse(() => rawData, { type: 'local' })
      
      const managed = useData()
      const unwrapped = managed.init()

      expect(unwrapped).toEqual(rawData)
      expect(Object.isFrozen(unwrapped)).toBe(true)
      expect((unwrapped as any).init).toBeUndefined()
    })
  })

  describe('Lifecycle and Safety', () => {
    it('correctly handles global initialization stack cleaning', () => {
      const spy1 = vi.fn(() => ({}))
      const spy2 = vi.fn(() => ({}))

      executeUse(spy1, { type: 'global' })
      executeUse(spy2, { type: 'global' })

      executeUseGlobalInit()
      expect(spy1).toHaveBeenCalled()
      expect(spy2).toHaveBeenCalled()

      // Second call should not re-init because stack was cleared
      executeUseGlobalInit()
      expect(spy1).toHaveBeenCalledTimes(1)
    })
  })
})
