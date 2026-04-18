import { describe, it, expect, vi } from 'vitest'
import { CacheStatic } from '../CacheStatic'
import { ServerStorage } from '../ServerStorage'

describe('CacheStatic', () => {
  describe('getItem', () => {
    it('should use ServerStorage to retrieve the instance', () => {
      const spy = vi.spyOn(ServerStorage, 'get')
      CacheStatic.get('testServerStorage', () => 'value')
      expect(spy).toHaveBeenCalledWith('__ui:cache-static__', expect.any(Function))
      spy.mockRestore()
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

      const res1 = CacheStatic.get('staticKeyMulti', callback, [1])
      const res2 = CacheStatic.get('staticKeyMulti', callback, [2])

      expect(res1).toBe(1)
      expect(res2).toBe(2)
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

      const res1 = await CacheStatic.getAsync('asyncKeyMulti', callback, [1])
      const res2 = await CacheStatic.getAsync('asyncKeyMulti', callback, [2])

      expect(res1).toBe(1)
      expect(res2).toBe(2)
      expect(callback).toHaveBeenCalledTimes(2)
    })
  })
})
