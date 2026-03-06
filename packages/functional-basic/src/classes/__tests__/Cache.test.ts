import { describe, it, expect, vi } from 'vitest'
import { Cache } from '../Cache'

describe('Cache', () => {
  it('should create an instance', () => {
    const cache = new Cache()
    expect(cache).toBeInstanceOf(Cache)
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

    it('should store different values for different keys', () => {
      const cache = new Cache()
      const cb1 = vi.fn().mockReturnValue('data1')
      const cb2 = vi.fn().mockReturnValue('data2')

      const res1 = cache.get('key1', cb1)
      const res2 = cache.get('key2', cb2)

      expect(res1).toBe('data1')
      expect(res2).toBe('data2')
    })

    it('should recalculate if a comparison array changes for the same key', () => {
      const cache = new Cache()
      let counter = 0
      const callback = vi.fn().mockImplementation(() => ++counter)

      const res1 = cache.get('myKey', callback, [1])
      const res2 = cache.get('myKey', callback, [2])

      expect(res1).toBe(1)
      expect(res2).toBe(2)
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

      const res1 = await cache.getAsync('myKeyAsync', callback, ['a'])
      const res2 = await cache.getAsync('myKeyAsync', callback, ['b'])

      expect(res1).toBe(1)
      expect(res2).toBe(2)
      expect(callback).toHaveBeenCalledTimes(2)
    })
  })
})
