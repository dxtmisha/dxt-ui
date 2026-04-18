import { describe, it, expect, beforeEach, vi } from 'vitest'
import { ApiCache } from '../ApiCache'
import { ApiMethodItem } from '../../types/apiTypes'
import * as isDomRuntimeModule from '../../functions/isDomRuntime'

vi.mock('../../functions/isDomRuntime', () => ({
  isDomRuntime: vi.fn()
}))

describe('ApiCache', () => {
  beforeEach(() => {
    vi.useFakeTimers()
    vi.clearAllMocks()
    ApiCache.reset()
    vi.setSystemTime(new Date(1000))
  })

  // ─────────────────────────────────────────────
  // Initialization
  // ─────────────────────────────────────────────

  describe('init', () => {
    it('should initialize with listeners and custom step age', () => {
      const get = vi.fn()
      const set = vi.fn().mockResolvedValue(true)
      const remove = vi.fn().mockResolvedValue(true)

      ApiCache.init(get, set, remove, 10)

      // Accessing private members via any for testing
      expect((ApiCache as any).getListener).toBe(get)
      expect((ApiCache as any).setListener).toBe(set)
      expect((ApiCache as any).removeListener).toBe(remove)
      expect((ApiCache as any).cacheStepAgeClearOld).toBe(10)
    })
  })

  // ─────────────────────────────────────────────
  // Get and Set
  // ─────────────────────────────────────────────

  describe('set and get', () => {
    it('should store and retrieve data in memory when no listeners are provided', async () => {
      await ApiCache.set('key1', 'value1', 60)
      expect(await ApiCache.get('key1')).toBe('value1')
    })

    it('should return undefined for non-existent key', async () => {
      expect(await ApiCache.get('missing')).toBeUndefined()
    })

    it('should use listeners when provided', async () => {
      const mockItem = { value: 'from-listener', age: 60, cacheAge: 1000 }
      const get = vi.fn().mockResolvedValue(mockItem)
      const set = vi.fn().mockResolvedValue(true)
      const remove = vi.fn().mockResolvedValue(true)

      ApiCache.init(get, set, remove)

      const result = await ApiCache.get('any-key')

      expect(get).toHaveBeenCalledWith('any-key')
      expect(result).toBe('from-listener')

      await ApiCache.set('new-key', 'new-value', 120)
      expect(set).toHaveBeenCalledWith('new-key', {
        value: 'new-value',
        age: 120,
        cacheAge: 1000
      })
    })

    it('should handle complex objects in cache', async () => {
      const complexValue = { a: 1, b: { c: 2 }, d: [3, 4] }
      await ApiCache.set('complex', complexValue)
      expect(await ApiCache.get('complex')).toEqual(complexValue)
    })
  })

  // ─────────────────────────────────────────────
  // Fetch Integration
  // ─────────────────────────────────────────────

  describe('setByFetch and getByFetch', () => {
    const apiFetch = {
      path: 'test/path',
      method: ApiMethodItem.get,
      cache: 3600
    }

    beforeEach(() => {
      vi.mocked(isDomRuntimeModule.isDomRuntime).mockReturnValue(false)
    })

    it('should store and retrieve data using fetch options', async () => {
      await ApiCache.setByFetch(apiFetch, { some: 'data' })
      expect(await ApiCache.getByFetch(apiFetch)).toEqual({ some: 'data' })
    })

    it('should return undefined if cache is disabled in fetch options', async () => {
      const noCacheFetch = { ...apiFetch, cache: undefined }
      await ApiCache.setByFetch(noCacheFetch, { some: 'data' })
      expect(await ApiCache.getByFetch(noCacheFetch)).toBeUndefined()
    })

    it('should return undefined if isDomRuntime is true', async () => {
      vi.mocked(isDomRuntimeModule.isDomRuntime).mockReturnValue(true)
      await ApiCache.setByFetch(apiFetch, { some: 'data' })
      expect(await ApiCache.getByFetch(apiFetch)).toBeUndefined()
    })

    it('should return cached data when enableClientCache is true even in DOM runtime', async () => {
      vi.mocked(isDomRuntimeModule.isDomRuntime).mockReturnValue(true)
      const apiFetchWithCache = { ...apiFetch, enableClientCache: true }
      await ApiCache.setByFetch(apiFetchWithCache, { some: 'data' })
      expect(await ApiCache.getByFetch(apiFetchWithCache)).toEqual({ some: 'data' })
    })

    it('should return undefined when enableClientCache is false and isDomRuntime is true', async () => {
      vi.mocked(isDomRuntimeModule.isDomRuntime).mockReturnValue(true)
      const apiFetchNoCache = { ...apiFetch, enableClientCache: false }
      await ApiCache.setByFetch(apiFetchNoCache, { some: 'data' })
      expect(await ApiCache.getByFetch(apiFetchNoCache)).toBeUndefined()
    })

    it('should work with enableClientCache when isDomRuntime is false', async () => {
      vi.mocked(isDomRuntimeModule.isDomRuntime).mockReturnValue(false)
      const apiFetchWithCache = { ...apiFetch, enableClientCache: true }
      await ApiCache.setByFetch(apiFetchWithCache, { some: 'data' })
      expect(await ApiCache.getByFetch(apiFetchWithCache)).toEqual({ some: 'data' })
    })

    it('should handle POST requests if global is true', async () => {
      const postFetch = {
        path: 'post-path',
        method: ApiMethodItem.post,
        cache: 60,
        global: true
      }
      await ApiCache.setByFetch(postFetch, { success: true })
      expect(await ApiCache.getByFetch(postFetch)).toEqual({ success: true })
    })
  })

  // ─────────────────────────────────────────────
  // Expiration Logic
  // ─────────────────────────────────────────────

  describe('isAge', () => {
    it('should return true if item has no age limit', () => {
      const item = { value: 'test', cacheAge: 1000 }
      expect((ApiCache as any).isAge(item)).toBe(true)
    })

    it('should return true if item is within age limit', () => {
      vi.setSystemTime(new Date(1500))
      const item = { value: 'test', age: 1, cacheAge: 1000 } // age 1s = 1000ms. limit = 1000 + 1000 = 2000. 1500 < 2000.
      expect((ApiCache as any).isAge(item)).toBe(true)
    })

    it('should return false if item is expired', () => {
      vi.setSystemTime(new Date(3000))
      const item = { value: 'test', age: 1, cacheAge: 1000 } // limit = 2000. 3000 > 2000.
      expect((ApiCache as any).isAge(item)).toBe(false)
    })
  })

  // ─────────────────────────────────────────────
  // Removal and Key Generation
  // ─────────────────────────────────────────────

  describe('remove', () => {
    it('should remove item from memory', async () => {
      await ApiCache.set('key', 'val')
      expect(await ApiCache.get('key')).toBe('val')
      await ApiCache.remove('key')
      expect(await ApiCache.get('key')).toBeUndefined()
    })

    it('should call removeListener if provided', async () => {
      const remove = vi.fn().mockResolvedValue(true)
      ApiCache.init(vi.fn(), vi.fn().mockResolvedValue(true), remove)
      await ApiCache.remove('some-key')
      expect(remove).toHaveBeenCalledWith('some-key')
    })
  })

  describe('generateKey', () => {
    it('should generate consistent keys for same fetch options', () => {
      const fetch1 = { path: 'a', method: ApiMethodItem.get, cache: 10 }
      const fetch2 = { path: 'a', method: ApiMethodItem.get, cache: 20 }

      const key1 = (ApiCache as any).generateKey(fetch1)
      const key2 = (ApiCache as any).generateKey(fetch2)

      expect(key1).toBe(key2)
    })

    it('should generate different keys for different paths', () => {
      const key1 = (ApiCache as any).generateKey({ path: 'a', method: ApiMethodItem.get })
      const key2 = (ApiCache as any).generateKey({ path: 'b', method: ApiMethodItem.get })
      expect(key1).not.toBe(key2)
    })

    it('should include request data in key generation', () => {
      const key1 = (ApiCache as any).generateKey({ path: 'a', method: ApiMethodItem.get, request: { id: 1 } })
      const key2 = (ApiCache as any).generateKey({ path: 'a', method: ApiMethodItem.get, request: { id: 2 } })
      expect(key1).not.toBe(key2)
    })

    it('should include cacheId in key generation when provided', () => {
      const key1 = (ApiCache as any).generateKey({ path: 'a', method: ApiMethodItem.get, cacheId: 'v1' })
      const key2 = (ApiCache as any).generateKey({ path: 'a', method: ApiMethodItem.get, cacheId: 'v2' })
      expect(key1).not.toBe(key2)
      expect(key1).toContain('v1')
      expect(key2).toContain('v2')
    })

    it('should generate same key when cacheId is not provided', () => {
      const key1 = (ApiCache as any).generateKey({ path: 'a', method: ApiMethodItem.get })
      const key2 = (ApiCache as any).generateKey({ path: 'a', method: ApiMethodItem.get, cacheId: undefined })
      expect(key1).toBe(key2)
    })
  })

  describe('reset', () => {
    it('should clear all items and listeners', async () => {
      const get = vi.fn()
      ApiCache.init(get, vi.fn().mockResolvedValue(true), vi.fn().mockResolvedValue(true))
      await ApiCache.set('key', 'val')

      ApiCache.reset()

      expect((ApiCache as any).getListener).toBeUndefined()
      expect(await ApiCache.get('key')).toBeUndefined()
    })
  })

  // ─────────────────────────────────────────────
  // Throttling
  // ─────────────────────────────────────────────

  describe('clearOld throttling', () => {
    it('should only clear old items every cacheStepAgeClearOld calls', async () => {
      ApiCache.init(vi.fn(), vi.fn().mockResolvedValue(true), vi.fn().mockResolvedValue(true), 2)

      // Add an expired item directly
      // @ts-ignore
      ApiCache.getList()['old'] = { value: 'val', age: 10, cacheAge: 0 }

      // Date.now() is 1000. age 10 means it expires at 10010.
      vi.setSystemTime(20000)

      // 1st call: stepAgeClearOld 2 -> 1
      await ApiCache.get('any')
      // @ts-ignore
      expect(ApiCache.getList()['old']).toBeDefined()

      // 2nd call: stepAgeClearOld 1 -> 0
      await ApiCache.get('any')
      // @ts-ignore
      expect(ApiCache.getList()['old']).toBeDefined()

      // 3rd call: stepAgeClearOld 0 -> trigger -> set to 2
      await ApiCache.get('any')
      // @ts-ignore
      expect(ApiCache.getList()['old']).toBeUndefined()
    })
  })
})
