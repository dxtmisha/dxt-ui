import { describe, it, expect, vi } from 'vitest'
import { CacheStatic } from '../CacheStatic'

describe('CacheStatic', () => {
  describe('get', () => {
    it('should evaluate callback and store the result', () => {
      const callback = vi.fn().mockReturnValue('data')

      const result = CacheStatic.get('staticKey', callback)

      expect(result).toBe('data')
      expect(callback).toHaveBeenCalledTimes(1)
    })

    it('should return a cached value globally without evaluating the callback again', () => {
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
})
