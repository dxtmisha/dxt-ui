import { describe, it, expect, vi, beforeEach } from 'vitest'
import { CacheItem } from '../CacheItem'

describe('CacheItem', () => {
  beforeEach(() => {
    vi.useFakeTimers()
  })

  it('should create an instance', () => {
    const item = new CacheItem(() => 'test')
    expect(item).toBeInstanceOf(CacheItem)
  })

  describe('getCache', () => {
    it('should calculate value on the first call', () => {
      const callback = vi.fn().mockReturnValue('computed')
      const item = new CacheItem(callback)

      const result = item.getCache([])

      expect(result).toBe('computed')
      expect(callback).toHaveBeenCalledTimes(1)
    })

    it('should return a cached value if a comparison array is empty and called again', () => {
      const callback = vi.fn().mockReturnValue('computed')
      const item = new CacheItem(callback)

      item.getCache([])
      const result = item.getCache([])

      expect(result).toBe('computed')
      expect(callback).toHaveBeenCalledTimes(1) // Not called again
    })

    it('should recalculate if a comparison array changes length', () => {
      const callback = vi.fn().mockReturnValue('computed')
      const item = new CacheItem(callback)

      item.getCache([])
      item.getCache(['diff'])

      expect(callback).toHaveBeenCalledTimes(2)
    })

    it('should recalculate if comparison array values change', () => {
      let counter = 0
      const callback = vi.fn().mockImplementation(() => `val${++counter}`)
      const item = new CacheItem(callback)

      const res1 = item.getCache(['a', 1])
      const res2 = item.getCache(['a', 2])

      expect(res1).toBe('val1')
      expect(res2).toBe('val2')
      expect(callback).toHaveBeenCalledTimes(2)
    })

    it('should not recalculate if comparison array values are identical', () => {
      const callback = vi.fn().mockReturnValue('computed')
      const item = new CacheItem(callback)

      item.getCache(['a', 1])
      item.getCache(['a', 1])

      expect(callback).toHaveBeenCalledTimes(1)
    })
  })

  describe('getCacheOld', () => {
    it('should return undefined initially', () => {
      const item = new CacheItem(() => 'test')
      expect(item.getCacheOld()).toBeUndefined()
    })

    it('should return undefined after first getCache', () => {
      const item = new CacheItem(() => 'test')
      item.getCache([])
      expect(item.getCacheOld()).toBeUndefined()
    })

    it('should return the previous value after recalculation', () => {
      let counter = 0
      const callback = vi.fn().mockImplementation(() => `val${++counter}`)
      const item = new CacheItem(callback)

      item.getCache([1]) // cache: val1, old: undefined
      item.getCache([2]) // cache: val2, old: val1

      expect(item.getCacheOld()).toBe('val1')
    })
  })

  describe('getCacheAsync', () => {
    it('should calculate value asynchronously on the first call', async () => {
      const callback = vi.fn().mockResolvedValue('computed async')
      const item = new CacheItem(callback)

      const result = await item.getCacheAsync([])

      expect(result).toBe('computed async')
      expect(callback).toHaveBeenCalledTimes(1)
    })

    it('should return the cached value if called again with the same comparison', async () => {
      const callback = vi.fn().mockResolvedValue('computed async')
      const item = new CacheItem(callback)

      await item.getCacheAsync(['test'])
      const result = await item.getCacheAsync(['test'])

      expect(result).toBe('computed async')
      expect(callback).toHaveBeenCalledTimes(1)
    })

    it('should recalculate if a comparison array changes asynchronously', async () => {
      let counter = 0
      const callback = vi.fn().mockImplementation(async () => `val${++counter}`)
      const item = new CacheItem(callback)

      const res1 = await item.getCacheAsync(['a'])
      const res2 = await item.getCacheAsync(['b'])

      expect(res1).toBe('val1')
      expect(res2).toBe('val2')
      expect(callback).toHaveBeenCalledTimes(2)
      expect(item.getCacheOld()).toBe('val1')
    })
  })
})
