import { describe, it, expect, vi, beforeEach, afterEach } from 'vitest'
import { CacheItem } from '../CacheItem'

describe('CacheItem', () => {
  beforeEach(() => {
    vi.useFakeTimers()
  })

  afterEach(() => {
    vi.useRealTimers()
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
      expect(callback).toHaveBeenCalledTimes(1)
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
      const callback = vi.fn().mockImplementation(() => `value-${++counter}`)
      const item = new CacheItem(callback)

      const resultFirst = item.getCache(['a', 1])
      const resultSecond = item.getCache(['a', 2])

      expect(resultFirst).toBe('value-1')
      expect(resultSecond).toBe('value-2')
      expect(callback).toHaveBeenCalledTimes(2)
    })

    it('should not recalculate if comparison array values are identical', () => {
      const callback = vi.fn().mockReturnValue('computed')
      const item = new CacheItem(callback)

      item.getCache(['a', 1])
      item.getCache(['a', 1])

      expect(callback).toHaveBeenCalledTimes(1)
    })

    it('should treat different object references as different comparisons', () => {
      const callback = vi.fn().mockReturnValue('computed')
      const item = new CacheItem(callback)

      item.getCache([{}])
      item.getCache([{}])

      expect(callback).toHaveBeenCalledTimes(2)
    })

    it('should treat the same object reference as an identical comparison', () => {
      const callback = vi.fn().mockReturnValue('computed')
      const item = new CacheItem(callback)
      const sharedObject = { key: 'value' }

      item.getCache([sharedObject])
      item.getCache([sharedObject])

      expect(callback).toHaveBeenCalledTimes(1)
    })

    it('should clone comparison array to avoid external mutation side effects', () => {
      let counter = 0
      const callback = vi.fn().mockImplementation(() => ++counter)
      const item = new CacheItem(callback)
      const externalDependencies: number[] = [1, 2]

      expect(item.getCache(externalDependencies)).toBe(1)

      externalDependencies[0] = 99
      expect(item.getCache(externalDependencies)).toBe(2)
      expect(callback).toHaveBeenCalledTimes(2)
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

    it('should return the previous value after recalculation and update across multiple recalculations', () => {
      let counter = 0
      const callback = vi.fn().mockImplementation(() => `value-${++counter}`)
      const item = new CacheItem(callback)

      item.getCache([1])
      expect(item.getCacheOld()).toBeUndefined()

      item.getCache([2])
      expect(item.getCacheOld()).toBe('value-1')

      item.getCache([3])
      expect(item.getCacheOld()).toBe('value-2')
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
      const callback = vi.fn().mockImplementation(async () => `value-${++counter}`)
      const item = new CacheItem(callback)

      const resultFirst = await item.getCacheAsync(['a'])
      const resultSecond = await item.getCacheAsync(['b'])

      expect(resultFirst).toBe('value-1')
      expect(resultSecond).toBe('value-2')
      expect(callback).toHaveBeenCalledTimes(2)
      expect(item.getCacheOld()).toBe('value-1')
    })

    it('should update getCacheOld after async recalculation', async () => {
      let counter = 0
      const callback = vi.fn().mockImplementation(() => `value-${++counter}`)
      const item = new CacheItem(callback)

      await item.getCacheAsync([1])
      await item.getCacheAsync([2])

      expect(item.getCacheOld()).toBe('value-1')
    })
  })
})
