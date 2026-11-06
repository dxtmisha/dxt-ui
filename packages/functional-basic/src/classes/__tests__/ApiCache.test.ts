import { describe, it, expect, vi, beforeEach, afterEach } from 'vitest'
import { ApiCache } from '../ApiCache'
import { type ApiCacheItem, type ApiFetch, ApiMethodItem } from '../../types/apiTypes'
import { ErrorCenter } from '../ErrorCenter'
import * as isDomRuntimeModule from '../../functions/isDomRuntime'

describe('ApiCache', () => {
  beforeEach(() => {
    ApiCache.reset()
    vi.useFakeTimers()
    vi.spyOn(ErrorCenter, 'on').mockImplementation(() => {})
  })

  afterEach(() => {
    vi.restoreAllMocks()
    vi.useRealTimers()
  })

  describe('Basic in-memory operations (get, set, remove, reset)', () => {
    it('should set and get values from in-memory cache', async () => {
      await ApiCache.set('test-key', { data: 123 }, 60)
      const result = await ApiCache.get<{ data: number }>('test-key')

      expect(result).toEqual({ data: 123 })
    })

    it('should return undefined for non-existent keys and not collide with Object.prototype keys', async () => {
      expect(await ApiCache.get('missing-key')).toBeUndefined()
      expect(await ApiCache.get('toString')).toBeUndefined()
      expect(await ApiCache.get('constructor')).toBeUndefined()
      await expect(ApiCache.remove('toString')).resolves.toBeUndefined()
    })

    it('should correctly store and retrieve falsy values (0, false, empty string, null)', async () => {
      await ApiCache.set('zero-key', 0, 60)
      await ApiCache.set('false-key', false, 60)
      await ApiCache.set('empty-key', '', 60)
      await ApiCache.set('null-key', null, 60)

      expect(await ApiCache.get<number>('zero-key')).toBe(0)
      expect(await ApiCache.get<boolean>('false-key')).toBe(false)
      expect(await ApiCache.get<string>('empty-key')).toBe('')
      expect(await ApiCache.get<null>('null-key')).toBeNull()
    })

    it('should remove an item from in-memory cache via remove()', async () => {
      await ApiCache.set('removable-key', 'to-be-removed', 60)
      expect(await ApiCache.get<string>('removable-key')).toBe('to-be-removed')

      await ApiCache.remove('removable-key')
      expect(await ApiCache.get<string>('removable-key')).toBeUndefined()
    })

    it('should safely handle remove() on a non-existent key', async () => {
      await expect(ApiCache.remove('non-existent')).resolves.toBeUndefined()
    })

    it('should clear all in-memory items and listeners on reset()', async () => {
      const getListener = vi.fn(async () => undefined)
      const setListener = vi.fn(async () => true)
      const removeListener = vi.fn(async () => true)

      ApiCache.init(getListener, setListener, removeListener, 5)
      await ApiCache.set('key-1', 'val-1', 60)

      ApiCache.reset()

      expect(await ApiCache.get('key-1')).toBeUndefined()
      expect(getListener).not.toHaveBeenCalled()
    })
  })

  describe('TTL & expiration boundaries', () => {
    it('should expire items after their age in seconds has elapsed', async () => {
      await ApiCache.set('expiring-key', 'temporary-value', 1)

      vi.advanceTimersByTime(1000)
      expect(await ApiCache.get<string>('expiring-key')).toBe('temporary-value')

      vi.advanceTimersByTime(1)
      expect(await ApiCache.get<string>('expiring-key')).toBeUndefined()
    })

    it('should use default age of 24 hours (86400 seconds) when age is omitted', async () => {
      await ApiCache.set('default-ttl-key', 'day-value')

      vi.advanceTimersByTime(86_400 * 1000)
      expect(await ApiCache.get<string>('default-ttl-key')).toBe('day-value')

      vi.advanceTimersByTime(1)
      expect(await ApiCache.get<string>('default-ttl-key')).toBeUndefined()
    })

    it('should treat items with age 0 as non-expiring', async () => {
      await ApiCache.set('permanent-key', 'forever', 0)

      vi.advanceTimersByTime(100_000_000)

      const result = await ApiCache.get<string>('permanent-key')
      expect(result).toBe('forever')
    })
  })

  describe('External storage listeners (init)', () => {
    it('should delegate get, set, and remove to custom listeners when initialized', async () => {
      const getListener = vi.fn(async (_key: string): Promise<ApiCacheItem | undefined> => ({
        value: 'listener-value',
        age: 60,
        cacheAge: Date.now()
      }))
      const setListener = vi.fn(async (_key: string, _value: ApiCacheItem): Promise<boolean> => true)
      const removeListener = vi.fn(async (_key: string): Promise<boolean> => true)

      ApiCache.init(getListener, setListener, removeListener)

      await ApiCache.set('custom-key', 'new-value', 10)
      expect(setListener).toHaveBeenCalledWith(
        'custom-key',
        expect.objectContaining({ value: 'new-value', age: 10 })
      )

      const result = await ApiCache.get<string>('custom-key')
      expect(getListener).toHaveBeenCalledWith('custom-key')
      expect(result).toBe('listener-value')

      await ApiCache.remove('custom-key')
      expect(removeListener).toHaveBeenCalledWith('custom-key')
    })

    it('should omit value from in-memory fallback when setListener returns true', async () => {
      const noopGet = undefined as unknown as (key: string) => Promise<ApiCacheItem | undefined>
      const setListener = vi.fn(async (): Promise<boolean> => true)
      const noopRemove = undefined as unknown as (key: string) => Promise<boolean>

      ApiCache.init(noopGet, setListener, noopRemove)

      await ApiCache.set('external-key', 'stored-externally')
      const result = await ApiCache.get<string>('external-key')

      expect(result).toBeUndefined()
    })

    it('should read external storage after the in-memory fallback expires', async () => {
      const getListener = vi.fn(async (): Promise<ApiCacheItem | undefined> => undefined)
      const setListener = vi.fn(async (): Promise<boolean> => false)
      const removeListener = vi.fn(async (): Promise<boolean> => true)

      ApiCache.init(getListener, setListener, removeListener)

      await ApiCache.set('fallback-key', false, 1)
      expect(await ApiCache.get<boolean>('fallback-key')).toBe(false)
      expect(getListener).not.toHaveBeenCalled()

      vi.advanceTimersByTime(1001)
      getListener.mockResolvedValueOnce({ value: true, age: 1, cacheAge: Date.now() })

      expect(await ApiCache.get<boolean>('fallback-key')).toBe(true)
      expect(getListener).toHaveBeenCalledWith('fallback-key')
    })

    it('should report listener failures to ErrorCenter and fall back gracefully on get, set, and remove', async () => {
      const errorCenterSpy = vi.spyOn(ErrorCenter, 'on')
      const getError = new Error('External get failed')
      const setError = new Error('External set failed')
      const removeError = new Error('External remove failed')

      const getListener = vi.fn(async (): Promise<ApiCacheItem | undefined> => {
        throw getError
      })
      const setListener = vi.fn(async (): Promise<boolean> => {
        throw setError
      })
      const removeListener = vi.fn(async (): Promise<boolean> => {
        throw removeError
      })

      ApiCache.init(getListener, setListener, removeListener)

      await expect(ApiCache.get('missing-external')).resolves.toBeUndefined()
      expect(errorCenterSpy).toHaveBeenCalledWith({
        group: 'api',
        code: 'cacheGet',
        details: getError
      })

      await expect(ApiCache.set('fallback-local', 'stored-locally', 60)).resolves.toBeUndefined()
      expect(errorCenterSpy).toHaveBeenCalledWith({
        group: 'api',
        code: 'cacheSet',
        details: setError
      })
      expect(await ApiCache.get<string>('fallback-local')).toBe('stored-locally')

      await expect(ApiCache.remove('fallback-local')).resolves.toBeUndefined()
      expect(errorCenterSpy).toHaveBeenCalledWith({
        group: 'api',
        code: 'cacheRemove',
        details: removeError
      })
      expect(await ApiCache.get<string>('fallback-local')).toBeUndefined()
    })
  })

  describe('Fetch options integration (getByFetch, setByFetch) & SSR isomorphism', () => {
    it('should cache and retrieve by fetch options in SSR (non-DOM runtime)', async () => {
      vi.spyOn(isDomRuntimeModule, 'isDomRuntime').mockReturnValue(false)

      const fetchOptions: ApiFetch = {
        path: '/api/v1/items',
        method: ApiMethodItem.get,
        request: { page: 1 },
        cache: 60,
        cacheId: 'group-1'
      }

      await ApiCache.setByFetch(fetchOptions, 'cached-payload')
      const result = await ApiCache.getByFetch<string>(fetchOptions)

      expect(result).toBe('cached-payload')
    })

    it('should generate distinct keys for different cacheId or request parameters, while ignoring unrelated options', async () => {
      vi.spyOn(isDomRuntimeModule, 'isDomRuntime').mockReturnValue(false)

      const baseFetch: ApiFetch = {
        path: '/api/v1/resource',
        method: ApiMethodItem.get,
        cache: 60,
        cacheId: 'v1'
      }

      await ApiCache.setByFetch(baseFetch, 'first-payload')

      // Different timeout/headers should still hit the same cache entry
      const sameKeyFetch: ApiFetch = {
        ...baseFetch,
        timeout: 5000,
        headers: { 'X-Test': '1' }
      }
      expect(await ApiCache.getByFetch<string>(sameKeyFetch)).toBe('first-payload')

      // Different cacheId should miss
      const differentCacheIdFetch: ApiFetch = {
        ...baseFetch,
        cacheId: 'v2'
      }
      expect(await ApiCache.getByFetch<string>(differentCacheIdFetch)).toBeUndefined()
    })

    it('should disable client-side caching in DOM runtime unless enableClientCache is true', async () => {
      vi.spyOn(isDomRuntimeModule, 'isDomRuntime').mockReturnValue(true)

      expect(await ApiCache.getByFetch({ path: 'test' })).toBeUndefined()

      await ApiCache.setByFetch({ path: 'test', cache: 60 }, 'should-not-cache')
      expect(await ApiCache.getByFetch({ path: 'test', cache: 60 })).toBeUndefined()

      const clientCacheFetch: ApiFetch = {
        path: 'test',
        cache: 60,
        enableClientCache: true
      }

      await ApiCache.setByFetch(clientCacheFetch, 'browser-cached-value')
      expect(await ApiCache.getByFetch<string>(clientCacheFetch)).toBe('browser-cached-value')
    })
  })

  describe('Amortized background cleanup (clearOld) & error handling', () => {
    it('should clean up other expired items after stepAgeClearOld retrievals', async () => {
      const noopGet = undefined as unknown as (key: string) => Promise<ApiCacheItem | undefined>
      const noopSet = undefined as unknown as (key: string, value: ApiCacheItem) => Promise<boolean>
      const removeListener = vi.fn(async (): Promise<boolean> => true)

      ApiCache.init(noopGet, noopSet, removeListener, 1)

      await ApiCache.set('expired-item', 'old', 1)
      await ApiCache.set('current-item', 'old', 1)
      await ApiCache.set('valid-item', 'fresh', 60)

      vi.advanceTimersByTime(1500)

      // First get: stepAgeClearOld 1 -> 0 (does not clear yet)
      await ApiCache.get('valid-item')
      expect(removeListener).not.toHaveBeenCalled()

      // Second get: stepAgeClearOld 0 -> -1 (triggers cleanup)
      expect(await ApiCache.get('current-item')).toBeUndefined()

      await Promise.resolve()
      await Promise.resolve()

      expect(removeListener).toHaveBeenCalledWith('expired-item')
      expect(removeListener).not.toHaveBeenCalledWith('current-item')
      expect(removeListener).not.toHaveBeenCalledWith('valid-item')
    })

    it('should catch errors thrown during clearOld and forward them to ErrorCenter', async () => {
      const noopGet = undefined as unknown as (key: string) => Promise<ApiCacheItem | undefined>
      const noopSet = undefined as unknown as (key: string, value: ApiCacheItem) => Promise<boolean>
      const removeListener = vi.fn(async (): Promise<boolean> => {
        throw new Error('Storage removal failure')
      })
      const errorCenterSpy = vi.spyOn(ErrorCenter, 'on')

      ApiCache.init(noopGet, noopSet, removeListener, 1)

      await ApiCache.set('expired-key', 'value', 1)
      vi.advanceTimersByTime(1200)

      await ApiCache.get('any-key')
      await ApiCache.get('any-key')

      await Promise.resolve()
      await Promise.resolve()
      await Promise.resolve()

      expect(errorCenterSpy).toHaveBeenCalledWith(
        expect.objectContaining({
          group: 'api',
          code: 'cacheClear',
          details: expect.any(Error)
        })
      )
    })
  })
})
