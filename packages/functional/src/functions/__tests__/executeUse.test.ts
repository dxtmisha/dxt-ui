/**
 * @vitest-environment jsdom
 */

import { describe, it, expect, vi, beforeEach } from 'vitest'

let elementIdCounter = 0

vi.mock('@dxtmisha/functional-basic', () => ({
  getElementId: () => `mock-id-${++elementIdCounter}`,
  random: (min: number, max: number) => Math.floor(Math.random() * (max - min + 1)) + min
}))

vi.spyOn(console, 'warn').mockImplementation(() => {
})

const {
  ExecuteUseType,
  executeUse,
  executeUseGlobal,
  executeUseProvide,
  executeUseLocal,
  executeUseGlobalInit
} = await import('../executeUse')

describe('executeUse', () => {
  beforeEach(() => {
    vi.clearAllMocks()
  })

  describe('Core Functionality', () => {
    it('returns a factory function that produces a singleton instance (local)', () => {
      const useSharedState = executeUse(() => ({
        timestamp: Date.now(),
        uuid: Math.random().toString(36)
      }), ExecuteUseType.local)

      const firstCall = useSharedState()
      const secondCall = useSharedState()

      expect(firstCall).toBe(secondCall)
      expect(Object.isFrozen(firstCall)).toBe(true)
    })

    it('passes arguments to the initializer only on the first call', () => {
      const initializer = vi.fn((prefix: string) => ({
        id: `${prefix}_${Math.random()}`
      }))

      const useProfile = executeUse(initializer, ExecuteUseType.local)

      const p1 = useProfile('user_123')
      const p2 = useProfile('ignored')

      expect(initializer).toHaveBeenCalledTimes(1)
      expect(initializer).toHaveBeenCalledWith('user_123')
      expect(p1.id).toContain('user_123')
      expect(p1).toBe(p2)
    })
  })

  describe('Singleton Modes', () => {
    it('creates instance once for a local type', () => {
      let instancesCreated = 0
      const useLocal = executeUse(() => {
        instancesCreated++
        return { type: 'local' }
      }, ExecuteUseType.local)

      useLocal()
      useLocal()

      expect(instancesCreated).toBe(1)
    })

    it('registers global methods for batch initialization', () => {
      const globalInitSpy = vi.fn(() => ({ status: 'ready' }))
      const useConfig = executeUse(globalInitSpy, ExecuteUseType.global)

      // Should not be called until executeUseGlobalInit is invoked
      expect(globalInitSpy).not.toHaveBeenCalled()

      executeUseGlobalInit()

      expect(globalInitSpy).toHaveBeenCalledTimes(1)
      expect(useConfig().status).toBe('ready')
    })
  })

  describe('Structural Marker: init()', () => {
    it('provides an init() method that returns the raw frozen data', () => {
      const rawData = { apiEndpoint: 'https://api.example.com', version: 'v1' }
      const useData = executeUse(() => rawData, ExecuteUseType.local)

      const managed = useData()
      const unwrapped = managed.init()

      expect(unwrapped).toEqual(rawData)
      expect(Object.isFrozen(unwrapped)).toBe(true)
      expect((unwrapped as any).init).toBeUndefined()
    })
  })

  describe('destroyExecute', () => {
    it('resets cached singleton allowing re-initialization (local)', () => {
      let callCount = 0
      const useItem = executeUse(() => {
        callCount++
        return { value: callCount }
      }, ExecuteUseType.local)

      const first = useItem()
      expect(first.value).toBe(1)
      expect(callCount).toBe(1)

      // Destroy the cached instance
      first.destroyExecute?.()

      // The next call should re-initialize
      const second = useItem()
      expect(second.value).toBe(2)
      expect(callCount).toBe(2)
      expect(first).not.toBe(second)
    })

    it('is present on local/global items', () => {
      const useLocal = executeUse(() => ({ v: 1 }), ExecuteUseType.local)
      const localItem = useLocal()
      expect(typeof localItem.destroyExecute).toBe('function')
    })
  })

  describe('Lifecycle and Safety', () => {
    it('correctly handles global initialization stack cleaning', () => {
      const spy1 = vi.fn(() => ({}))
      const spy2 = vi.fn(() => ({}))

      executeUse(spy1, ExecuteUseType.global)
      executeUse(spy2, ExecuteUseType.global)

      executeUseGlobalInit()
      expect(spy1).toHaveBeenCalled()
      expect(spy2).toHaveBeenCalled()

      // The second call should not re-init because the stack was cleared
      executeUseGlobalInit()
      expect(spy1).toHaveBeenCalledTimes(1)
    })

    it('freezes the returned item so it cannot be mutated', () => {
      const useData = executeUse(() => ({ count: 0, name: 'test' }), ExecuteUseType.local)
      const item = useData()

      expect(Object.isFrozen(item)).toBe(true)
      expect(() => {
        (item as any).count = 42
      }).toThrow()
    })
  })

  describe('Aliases', () => {
    it('executeUseLocal works as an alias for type local', () => {
      let created = 0
      const useItem = executeUseLocal(() => {
        created++
        return { ok: true }
      })

      useItem()
      useItem()
      expect(created).toBe(1)
      expect(useItem().destroyExecute).toBeDefined()
    })

    it('executeUseGlobal works as an alias for type global', () => {
      const spy = vi.fn(() => ({ data: 'global' }))
      const useShared = executeUseGlobal(spy)

      expect(spy).not.toHaveBeenCalled()
      executeUseGlobalInit()
      expect(spy).toHaveBeenCalledTimes(1)
      expect(useShared().data).toBe('global')
    })

    it('executeUseProvide works as an alias for type provide (via default behavior check)', () => {
      // Since it uses provide/inject, we just check it doesn't have destroyExecute
      // and behaves like a provided type in a simple context.
      // Returns the same if cached locally in this test context?
      // actually provide type in test without a provider will just re-init if not handled, but usually we just check the structure.
      const useItem = executeUseProvide(() => ({ val: 1 }))
      const item = useItem()
      expect(item.val).toBe(1)
      expect(item.destroyExecute).toBeUndefined()
    })
  })
})
