import { describe, it, expect, beforeEach, vi } from 'vitest'
import { ApiCache } from '../ApiCache'
import { ApiMethodItem } from '../../types/apiTypes'
import * as isDomRuntimeModule from '../../functions/isDomRuntime'
import * as getCurrentTimeModule from '../../functions/getCurrentTime'

vi.mock('../../functions/isDomRuntime', () => ({
  isDomRuntime: vi.fn()
}))

vi.mock('../../functions/getCurrentTime', () => ({
  getCurrentTime: vi.fn()
}))

describe('ApiCache', () => {
  beforeEach(() => {
    vi.clearAllMocks()
    ApiCache.reset()
    vi.mocked(getCurrentTimeModule.getCurrentTime).mockReturnValue(1000)
  })

  describe('init', () => {
    it('should initialize with listeners', () => {
      const get = vi.fn()
      const set = vi.fn()
      const remove = vi.fn()

      ApiCache.init(get, set, remove)

      expect((ApiCache as any).getListener).toBe(get)
      expect((ApiCache as any).setListener).toBe(set)
      expect((ApiCache as any).removeListener).toBe(remove)
    })
  })

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
      const get = vi.fn().mockReturnValue(mockItem)
      const set = vi.fn()
      const remove = vi.fn()

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
  })

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
  })

  describe('isAge', () => {
    it('should return true if item has no age limit', () => {
      const item = { value: 'test', cacheAge: 1000 }
      expect((ApiCache as any).isAge(item)).toBe(true)
    })

    it('should return true if item is within age limit', () => {
      vi.mocked(getCurrentTimeModule.getCurrentTime).mockReturnValue(1500)
      const item = { value: 'test', age: 1000, cacheAge: 1 } // cacheAge in seconds, so 1000ms base + 1000ms age = 2000ms limit
      expect((ApiCache as any).isAge(item)).toBe(true)
    })

    it('should return false if item is expired', () => {
      vi.mocked(getCurrentTimeModule.getCurrentTime).mockReturnValue(3000)
      const item = { value: 'test', age: 1000, cacheAge: 1 } // limit is 2000ms
      expect((ApiCache as any).isAge(item)).toBe(false)
    })
  })

  describe('remove', () => {
    it('should remove item from memory', async () => {
      await ApiCache.set('key', 'val')
      expect(await ApiCache.get('key')).toBe('val')
      await ApiCache.remove('key')
      expect(await ApiCache.get('key')).toBeUndefined()
    })

    it('should call removeListener if provided', async () => {
      const remove = vi.fn()
      ApiCache.init(vi.fn(), vi.fn(), remove)
      await ApiCache.remove('some-key')
      expect(remove).toHaveBeenCalledWith('some-key')
    })
  })

  describe('generateKey', () => {
    it('should generate consistent keys for same fetch options', () => {
      const fetch1 = { path: 'a', method: ApiMethodItem.get, cache: 10 }
      const fetch2 = { path: 'a', method: ApiMethodItem.get, cache: 20 } // cache value itself doesn't affect key in current implementation

      const key1 = (ApiCache as any).generateKey(fetch1)
      const key2 = (ApiCache as any).generateKey(fetch2)

      expect(key1).toBe(key2)
    })

    it('should generate different keys for different paths', () => {
      const key1 = (ApiCache as any).generateKey({ path: 'a', method: ApiMethodItem.get })
      const key2 = (ApiCache as any).generateKey({ path: 'b', method: ApiMethodItem.get })
      expect(key1).not.toBe(key2)
    })
  })
})
