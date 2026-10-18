import { describe, it, expect, vi } from 'vitest'
import { forEach } from '../forEach'

describe('forEach', () => {
  describe('Array iteration', () => {
    it('should iterate over an array and return transformed results', () => {
      const data = [1, 2, 3]
      const callback = vi.fn((item: number) => item * 2)
      const result = forEach(data, callback)

      expect(result).toEqual([2, 4, 6])
      expect(callback).toHaveBeenCalledTimes(3)
    })

    it('should pass correct arguments (item, index, array) to callback', () => {
      const data = ['a', 'b']
      const calls: Array<[string, number, readonly string[]]> = []

      forEach(data, (item, index, collection) => {
        calls.push([item, index, collection])
      })

      expect(calls).toEqual([
        ['a', 0, data],
        ['b', 1, data]
      ])
    })

    it('should support readonly arrays without TypeScript errors', () => {
      const data = [10, 20] as const
      const result = forEach(data, item => item + 1)
      expect(result).toEqual([11, 21])
    })

    it('should return an empty array for an empty input array', () => {
      const result = forEach([], () => 'test')
      expect(result).toEqual([])
    })
  })

  describe('Object iteration', () => {
    it('should iterate over an object and return transformed results', () => {
      const data = { a: 1, b: 2 }
      const callback = vi.fn((item: number) => item * 2)
      const result = forEach(data, callback)

      expect(result).toEqual([2, 4])
      expect(callback).toHaveBeenCalledTimes(2)
    })

    it('should pass key as string and object reference to callback', () => {
      const data = { alpha: 100 }
      const keys: string[] = []

      forEach(data, (_, key) => {
        keys.push(key)
      })

      expect(keys).toEqual(['alpha'])
    })

    it('should not iterate over inherited prototype properties', () => {
      const prototype = { inherited: 999 }
      const data = Object.create(prototype)
      data.own = 1

      const result = forEach(data, item => item)
      expect(result).toEqual([1])
    })

    it('should handle Object.create(null) safely', () => {
      const data = Object.create(null)
      data.key = 'value'

      const result = forEach(data, item => item)
      expect(result).toEqual(['value'])
    })
  })

  describe('Map iteration', () => {
    it('should iterate over a Map with string keys', () => {
      const data = new Map([['a', 1], ['b', 2]])
      const callback = vi.fn((item: number) => item * 2)
      const result = forEach(data, callback)

      expect(result).toEqual([2, 4])
      expect(callback).toHaveBeenCalledTimes(2)
    })

    it('should correctly support non-string Map keys (number, object, symbol)', () => {
      const objKey = { id: 1 }
      const symKey = Symbol('test')
      const data = new Map<number | object | symbol, string>([
        [42, 'answer'],
        [objKey, 'objectValue'],
        [symKey, 'symbolValue']
      ])

      const receivedKeys: Array<number | object | symbol> = []
      const result = forEach(data, (value, key, collection) => {
        receivedKeys.push(key)
        expect(collection).toBe(data)
        return value
      })

      expect(result).toEqual(['answer', 'objectValue', 'symbolValue'])
      expect(receivedKeys).toEqual([42, objKey, symKey])
    })
  })

  describe('Set iteration', () => {
    it('should iterate over a Set', () => {
      const data = new Set([1, 2])
      const callback = vi.fn((item: number) => item * 2)
      const result = forEach(data, callback)

      expect(result).toEqual([2, 4])
      expect(callback).toHaveBeenCalledTimes(2)
    })

    it('should pass item as both value and key in Set iteration with correct key types', () => {
      const data = new Set(['x', 'y'])
      const pairs: Array<[string, string]> = []

      forEach(data, (item, key, collection) => {
        pairs.push([item, key])
        expect(collection).toBe(data)
      })

      expect(pairs).toEqual([
        ['x', 'x'],
        ['y', 'y']
      ])

      const numberSet = new Set([100, 200])
      const numberKeys: number[] = []

      forEach(numberSet, (_, key) => {
        numberKeys.push(key)
      })

      expect(numberKeys).toEqual([100, 200])
    })
  })

  describe('Undefined handling and falsy values', () => {
    it('should filter out undefined results by default', () => {
      const data = [1, 2, 3]
      const result = forEach(data, item => (item % 2 === 0 ? item : undefined))
      expect(result).toEqual([2])
    })

    it('should include undefined results if saveUndefined is true', () => {
      const data = [1, 2, 3]
      const result = forEach(data, item => (item % 2 === 0 ? item : undefined), true)
      expect(result).toEqual([undefined, 2, undefined])
    })

    it('should NOT filter out other falsy values (0, false, "", null, NaN)', () => {
      const data = [0, false, '', null, NaN]
      const result = forEach(data, item => item)

      expect(result).toHaveLength(5)
      expect(result[0]).toBe(0)
      expect(result[1]).toBe(false)
      expect(result[2]).toBe('')
      expect(result[3]).toBeNull()
      expect(Number.isNaN(result[4])).toBe(true)
    })
  })

  describe('Empty collections and boundary conditions', () => {
    it('should return an empty array for an empty Object', () => {
      expect(forEach({}, () => 'val')).toEqual([])
    })

    it('should return an empty array for an empty Map', () => {
      expect(forEach(new Map(), () => 'val')).toEqual([])
    })

    it('should return an empty array for an empty Set', () => {
      expect(forEach(new Set(), () => 'val')).toEqual([])
    })

    it('should iterate over sparse arrays and filter out undefined results unless saveUndefined is true', () => {
      // eslint-disable-next-line no-sparse-arrays
      const sparseArray = [10, , 30]
      const result = forEach(sparseArray, item => item)
      expect(result).toEqual([10, 30])

      const resultWithUndefined = forEach(sparseArray, item => item, true)
      expect(resultWithUndefined).toEqual([10, undefined, 30])
    })
  })

  describe('Multilingual and Unicode support', () => {
    it('should support Cyrillic, Vietnamese and emoji in object keys and values', () => {
      const data = {
        'привет': 'мир',
        'tiếng việt': 'chào bạn',
        '🚀': 'starship'
      }
      const pairs: string[] = []
      const result = forEach(data, (value, key) => {
        pairs.push(`${key}:${value}`)
        return `${key}=${value}`
      })

      expect(pairs).toEqual([
        'привет:мир',
        'tiếng việt:chào bạn',
        '🚀:starship'
      ])
      expect(result).toEqual([
        'привет=мир',
        'tiếng việt=chào bạn',
        '🚀=starship'
      ])
    })
  })

  describe('Invalid or non-object inputs', () => {
    it('should return an empty array if data is null or undefined', () => {
      expect(forEach(null as any, () => {})).toEqual([])
      expect(forEach(undefined as any, () => {})).toEqual([])
    })

    it('should return an empty array if data is a primitive (number, string, boolean)', () => {
      expect(forEach(123 as any, () => {})).toEqual([])
      expect(forEach('string' as any, () => {})).toEqual([])
      expect(forEach(true as any, () => {})).toEqual([])
    })

    it('should return an empty array if data is a function', () => {
      expect(forEach((() => {}) as any, () => {})).toEqual([])
    })
  })
})
