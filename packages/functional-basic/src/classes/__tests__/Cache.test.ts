import { describe, it, expect, vi } from 'vitest'
import { Cache } from '../Cache'

describe('Cache', () => {
  it('should create an independent instance', () => {
    const cacheFirst = new Cache()
    const cacheSecond = new Cache()

    expect(cacheFirst).toBeInstanceOf(Cache)
    expect(cacheFirst).not.toBe(cacheSecond)
  })

  describe('get', () => {
    it('should evaluate callback and store a result for a new key', () => {
      const cache = new Cache()
      const callback = vi.fn().mockReturnValue('data')

      const result = cache.get('myKey', callback)

      expect(result).toBe('data')
      expect(callback).toHaveBeenCalledTimes(1)
    })

    it('should return the cached value for the same key without evaluating callback again', () => {
      const cache = new Cache()
      const callback = vi.fn().mockReturnValue('data')

      cache.get('myKey', callback)
      const result = cache.get('myKey', callback)

      expect(result).toBe('data')
      expect(callback).toHaveBeenCalledTimes(1)
    })

    it('should store different values for different keys and isolate separate Cache instances', () => {
      const cacheFirst = new Cache()
      const cacheSecond = new Cache()
      const callbackFirst = vi.fn().mockReturnValue('data1')
      const callbackSecond = vi.fn().mockReturnValue('data2')
      const callbackIsolated = vi.fn().mockReturnValue('isolatedData')

      const resultFirst = cacheFirst.get('key1', callbackFirst)
      const resultSecond = cacheFirst.get('key2', callbackSecond)
      const resultIsolated = cacheSecond.get('key1', callbackIsolated)

      expect(resultFirst).toBe('data1')
      expect(resultSecond).toBe('data2')
      expect(resultIsolated).toBe('isolatedData')
      expect(callbackFirst).toHaveBeenCalledTimes(1)
      expect(callbackIsolated).toHaveBeenCalledTimes(1)
    })

    it('should recalculate if a comparison array changes for the same key', () => {
      const cache = new Cache()
      let counter = 0
      const callback = vi.fn().mockImplementation(() => ++counter)

      const resultFirst = cache.get('myKey', callback, [1])
      const resultSecond = cache.get('myKey', callback, [2])

      expect(resultFirst).toBe(1)
      expect(resultSecond).toBe(2)
      expect(callback).toHaveBeenCalledTimes(2)
    })

    it('should not recalculate if comparison array is identical across calls', () => {
      const cache = new Cache()
      const callback = vi.fn().mockReturnValue('cachedResult')

      const resultFirst = cache.get('myKey', callback, ['dep1', 42])
      const resultSecond = cache.get('myKey', callback, ['dep1', 42])

      expect(resultFirst).toBe('cachedResult')
      expect(resultSecond).toBe('cachedResult')
      expect(callback).toHaveBeenCalledTimes(1)
    })

    it('should not recalculate if comparison array is undefined and called again', () => {
      const cache = new Cache()
      const callback = vi.fn().mockReturnValue('data')

      cache.get('myKey', callback)
      const result = cache.get('myKey', callback)

      expect(result).toBe('data')
      expect(callback).toHaveBeenCalledTimes(1)
    })

    it('should distinguish between undefined and null in comparison array', () => {
      const cache = new Cache()
      let counter = 0
      const callback = vi.fn().mockImplementation(() => ++counter)

      const resultFirst = cache.get('key', callback, [undefined])
      const resultSecond = cache.get('key', callback, [null])

      expect(resultFirst).toBe(1)
      expect(resultSecond).toBe(2)
      expect(callback).toHaveBeenCalledTimes(2)
    })
  })

  describe('getAsync', () => {
    it('should evaluate callback and store a result asynchronously', async () => {
      const cache = new Cache()
      const callback = vi.fn().mockResolvedValue('async data')

      const result = await cache.getAsync('myKeyAsync', callback)

      expect(result).toBe('async data')
      expect(callback).toHaveBeenCalledTimes(1)
    })

    it('should return the cached value asynchronously without evaluating the callback again', async () => {
      const cache = new Cache()
      const callback = vi.fn().mockResolvedValue('async data')

      await cache.getAsync('myKeyAsync', callback)
      const result = await cache.getAsync('myKeyAsync', callback)

      expect(result).toBe('async data')
      expect(callback).toHaveBeenCalledTimes(1)
    })

    it('should recalculate asynchronously if a comparison array changes', async () => {
      const cache = new Cache()
      let counter = 0
      const callback = vi.fn().mockImplementation(async () => ++counter)

      const resultFirst = await cache.getAsync('myKeyAsync', callback, ['a'])
      const resultSecond = await cache.getAsync('myKeyAsync', callback, ['b'])

      expect(resultFirst).toBe(1)
      expect(resultSecond).toBe(2)
      expect(callback).toHaveBeenCalledTimes(2)
    })

    it('should handle synchronous return values inside getAsync', async () => {
      const cache = new Cache()
      const callback = vi.fn().mockReturnValue('sync value in async')

      const result = await cache.getAsync('syncInAsync', callback)

      expect(result).toBe('sync value in async')
      expect(callback).toHaveBeenCalledTimes(1)
    })
  })
})
