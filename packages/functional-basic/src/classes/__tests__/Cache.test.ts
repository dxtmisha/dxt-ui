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

  describe('key integrity and current callback regressions', () => {
    it.each(['constructor', 'toString', '__proto__', 'hasOwnProperty', 'valueOf'])(
      'supports the synchronous key %s',
      (name) => {
        const cache = new Cache()
        const callback = vi.fn(() => 42)
        expect(cache.get(name, callback)).toBe(42)
        expect(cache.get(name, callback)).toBe(42)
        expect(callback).toHaveBeenCalledTimes(1)
      }
    )

    it.each(['constructor', 'toString', '__proto__', 'hasOwnProperty', 'valueOf'])(
      'supports the asynchronous key %s',
      async (name) => {
        const cache = new Cache()
        const callback = vi.fn(async () => 42)
        expect(await cache.getAsync(name, callback)).toBe(42)
        expect(await cache.getAsync(name, callback)).toBe(42)
        expect(callback).toHaveBeenCalledTimes(1)
      }
    )

    it('uses the current callback when synchronous dependencies change', () => {
      const cache = new Cache()
      const first = vi.fn(() => ({ id: 5 }))
      const second = vi.fn(() => ({ id: 6 }))
      expect(cache.get('user', first, [5])).toEqual({ id: 5 })
      expect(cache.get('user', second, [6])).toEqual({ id: 6 })
      expect(first).toHaveBeenCalledTimes(1)
      expect(second).toHaveBeenCalledTimes(1)
    })

    it('uses the current closure in the documented asynchronous pattern', async () => {
      const cache = new Cache()
      const requests: number[] = []
      const fetchUser = async (identifier: number): Promise<{ id: number }> => await cache.getAsync(
        'user_api',
        async () => {
          requests.push(identifier)
          return { id: identifier }
        },
        [identifier]
      )
      expect(await fetchUser(5)).toEqual({ id: 5 })
      expect(await fetchUser(6)).toEqual({ id: 6 })
      expect(requests).toEqual([5, 6])
    })

    it('does not evaluate a replacement callback while dependencies still match', () => {
      const cache = new Cache()
      const second = vi.fn(() => 'unused')
      expect(cache.get('user', () => 'cached', [1])).toBe('cached')
      expect(cache.get('user', second, [1])).toBe('cached')
      expect(second).not.toHaveBeenCalled()
    })

    it('can retry with a new callback after an initial failure', () => {
      const cache = new Cache()
      const failing = vi.fn((): string => {
        throw new Error('temporary')
      })
      const recovered = vi.fn(() => 'recovered')
      expect(() => cache.get('user', failing, [1])).toThrow('temporary')
      expect(cache.get('user', recovered, [1])).toBe('recovered')
      expect(failing).toHaveBeenCalledTimes(1)
      expect(recovered).toHaveBeenCalledTimes(1)
    })

    it('keeps concurrent computations bound to their own factories', async () => {
      const cache = new Cache()
      let resolveFirst!: (value: string) => void
      const firstResult = new Promise<string>((resolve) => {
        resolveFirst = resolve
      })
      const firstCallback = vi.fn(() => firstResult)
      const secondCallback = vi.fn(async () => 'B')
      const first = cache.getAsync('user', firstCallback, [1])
      expect(await cache.getAsync('user', secondCallback, [2])).toBe('B')
      resolveFirst('A')
      expect(await first).toBe('A')
      expect(await cache.getAsync('user', secondCallback, [2])).toBe('B')
      expect(firstCallback).toHaveBeenCalledTimes(1)
      expect(secondCallback).toHaveBeenCalledTimes(1)
    })
  })
})
