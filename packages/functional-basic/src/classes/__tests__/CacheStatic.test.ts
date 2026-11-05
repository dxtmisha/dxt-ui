import { describe, it, expect, vi, beforeEach } from 'vitest'
import { CacheStatic } from '../CacheStatic'
import { ServerStorage } from '../ServerStorage'

describe('CacheStatic', () => {
  beforeEach(() => {
    ServerStorage.reset()
    ServerStorage.setErrorStatus(true)
  })

  describe('getItem', () => {
    it('should use ServerStorage to retrieve the Cache instance', () => {
      const serverStorageSpy = vi.spyOn(ServerStorage, 'get')

      CacheStatic.get('testServerStorage', () => 'value')

      expect(serverStorageSpy).toHaveBeenCalledWith('__ui:cache-static__', expect.any(Function))
      serverStorageSpy.mockRestore()
    })

    it('should isolate cached values when ServerStorage is reset', () => {
      const callback = vi.fn()
        .mockReturnValueOnce('firstContextValue')
        .mockReturnValueOnce('secondContextValue')

      expect(CacheStatic.get('isolatedKey', callback)).toBe('firstContextValue')
      expect(CacheStatic.get('isolatedKey', callback)).toBe('firstContextValue')
      expect(callback).toHaveBeenCalledTimes(1)

      ServerStorage.reset()

      expect(CacheStatic.get('isolatedKey', callback)).toBe('secondContextValue')
      expect(callback).toHaveBeenCalledTimes(2)
    })

    it('keeps separate server contexts isolated without resetting either context', () => {
      const firstContext: Record<string, unknown> = {}
      const secondContext: Record<string, unknown> = {}
      let context = firstContext
      ServerStorage.init(() => context)

      try {
        expect(CacheStatic.get('user', () => 'first')).toBe('first')
        context = secondContext
        expect(CacheStatic.get('user', () => 'second')).toBe('second')
        context = firstContext
        expect(CacheStatic.get('user', () => 'unused')).toBe('first')
      } finally {
        ServerStorage.init(() => undefined)
      }
    })
  })

  describe('get', () => {
    it('should evaluate callback and store the result', () => {
      const callback = vi.fn().mockReturnValue('data')

      const result = CacheStatic.get('staticKey', callback)

      expect(result).toBe('data')
      expect(callback).toHaveBeenCalledTimes(1)
    })

    it('should return a cached value without evaluating the callback again', () => {
      const callback = vi.fn().mockReturnValue('data')

      CacheStatic.get('staticKey2', callback)
      const result = CacheStatic.get('staticKey2', callback)

      expect(result).toBe('data')
      expect(callback).toHaveBeenCalledTimes(1)
    })

    it('should recalculate if a comparison array changes', () => {
      let counter = 0
      const callback = vi.fn().mockImplementation(() => ++counter)

      const resultFirst = CacheStatic.get('staticKeyMulti', callback, [1])
      const resultSecond = CacheStatic.get('staticKeyMulti', callback, [2])

      expect(resultFirst).toBe(1)
      expect(resultSecond).toBe(2)
      expect(callback).toHaveBeenCalledTimes(2)
    })
  })

  describe('getAsync', () => {
    it('should work asynchronously and store the result', async () => {
      const callback = vi.fn().mockResolvedValue('asyncData')

      const result = await CacheStatic.getAsync('asyncKey', callback)

      expect(result).toBe('asyncData')
      expect(callback).toHaveBeenCalledTimes(1)
    })

    it('should return a cached async value', async () => {
      const callback = vi.fn().mockResolvedValue('asyncData2')

      await CacheStatic.getAsync('asyncKey2', callback)
      const result = await CacheStatic.getAsync('asyncKey2', callback)

      expect(result).toBe('asyncData2')
      expect(callback).toHaveBeenCalledTimes(1)
    })

    it('should recalculate async if comparison changes', async () => {
      let counter = 0
      const callback = vi.fn().mockImplementation(async () => ++counter)

      const resultFirst = await CacheStatic.getAsync('asyncKeyMulti', callback, [1])
      const resultSecond = await CacheStatic.getAsync('asyncKeyMulti', callback, [2])

      expect(resultFirst).toBe(1)
      expect(resultSecond).toBe(2)
      expect(callback).toHaveBeenCalledTimes(2)
    })

    it('uses the current asynchronous factory after dependencies change', async () => {
      expect(await CacheStatic.getAsync('user', async () => ({ id: 5 }), [5])).toEqual({ id: 5 })
      expect(await CacheStatic.getAsync('user', async () => ({ id: 6 }), [6])).toEqual({ id: 6 })
    })
  })
})
