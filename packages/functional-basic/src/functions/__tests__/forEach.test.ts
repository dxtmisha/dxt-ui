import { describe, it, expect, vi } from 'vitest'
import {
  forEach,
  type ForEachData,
  type ForEachKey,
  type ForEachReturn
} from '../forEach'

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

    it('should return an empty array for an empty input array without calling callback', () => {
      const callback = vi.fn(() => 'test')
      const result = forEach([], callback)

      expect(result).toEqual([])
      expect(callback).not.toHaveBeenCalled()
    })

    it('should not enter infinite loop if elements are pushed to array inside callback', () => {
      const data = [1, 2]
      let callCount = 0

      const result = forEach(data, (item) => {
        callCount++
        if (callCount <= 2) {
          data.push(99)
        }
        return item * 10
      })

      expect(callCount).toBe(2)
      expect(result).toEqual([10, 20])
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

      forEach(data, (_, key, collection) => {
        keys.push(key)
        expect(collection).toBe(data)
      })

      expect(keys).toEqual(['alpha'])
    })

    it('should not iterate over inherited prototype properties', () => {
      const prototype = { inherited: 999 }
      const data = Object.create(prototype) as Record<string, number>
      data.own = 1

      const result = forEach(data, item => item)
      expect(result).toEqual([1])
    })

    it('should not iterate over non-enumerable properties on objects', () => {
      const data = { visible: 'yes' }
      Object.defineProperty(data, 'hidden', {
        value: 'no',
        enumerable: false
      })

      const keys: string[] = []
      const result = forEach(data, (value, key) => {
        keys.push(key)
        return value
      })

      expect(keys).toEqual(['visible'])
      expect(result).toEqual(['yes'])
    })

    it('should handle Object.create(null) safely', () => {
      const data = Object.create(null) as Record<string, string>
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
      const objectKey = { id: 1 }
      const symbolKey = Symbol('test')
      const data = new Map<number | object | symbol, string>([
        [42, 'answer'],
        [objectKey, 'objectValue'],
        [symbolKey, 'symbolValue']
      ])

      const receivedKeys: Array<number | object | symbol> = []
      const result = forEach(data, (value, key, collection) => {
        receivedKeys.push(key)
        expect(collection).toBe(data)
        return value
      })

      expect(result).toEqual(['answer', 'objectValue', 'symbolValue'])
      expect(receivedKeys).toEqual([42, objectKey, symbolKey])
    })

    it('should return an empty array for an empty Map without calling callback', () => {
      const callback = vi.fn(() => 'value')
      const result = forEach(new Map(), callback)

      expect(result).toEqual([])
      expect(callback).not.toHaveBeenCalled()
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

    it('should return an empty array for an empty Set without calling callback', () => {
      const callback = vi.fn(() => 'value')
      const result = forEach(new Set(), callback)

      expect(result).toEqual([])
      expect(callback).not.toHaveBeenCalled()
    })
  })

  describe('Undefined handling and ForEachReturn type inference', () => {
    it('should filter out undefined results by default and exclude undefined from return type', () => {
      const data = [1, 2, 3]
      const result = forEach(data, item => (item % 2 === 0 ? item : undefined))
      const typedNumbers: number[] = result
      const returnCheck: ForEachReturn<number | undefined> = result

      expect(typedNumbers).toEqual([2])
      expect(returnCheck).toEqual([2])
    })

    it('should filter out undefined results when saveUndefined is explicitly false', () => {
      const data = [1, 2, 3]
      const result = forEach(data, item => (item % 2 === 0 ? item : undefined), false)
      const typedNumbers: number[] = result

      expect(typedNumbers).toEqual([2])
    })

    it('should include undefined results if saveUndefined is true and preserve undefined in return type', () => {
      const data = [1, 2, 3]
      const result = forEach(data, item => (item % 2 === 0 ? item : undefined), true)
      const typedWithUndefined: Array<number | undefined> = result
      const returnCheck: ForEachReturn<number | undefined, true> = result

      expect(typedWithUndefined).toEqual([undefined, 2, undefined])
      expect(returnCheck).toEqual([undefined, 2, undefined])
    })

    it('should preserve type when saveUndefined is a dynamic boolean', () => {
      const data = [1, 2, 3]
      const flag = Boolean(Math.random() > -1)
      const result = forEach(data, item => (item % 2 === 0 ? item : undefined), flag)
      const typedDynamic: Array<number | undefined> = result

      expect(typedDynamic.length).toBeGreaterThan(0)
    })

    it('should NOT filter out other falsy values (0, false, "", null, NaN)', () => {
      const data = [0, false, '', null, Number.NaN]
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
    it('should return an empty array for an empty Object without calling callback', () => {
      const callback = vi.fn(() => 'value')
      expect(forEach({}, callback)).toEqual([])
      expect(callback).not.toHaveBeenCalled()
    })

    it('should return an empty array for an empty Map without calling callback', () => {
      const callback = vi.fn(() => 'value')
      expect(forEach(new Map(), callback)).toEqual([])
      expect(callback).not.toHaveBeenCalled()
    })

    it('should return an empty array for an empty Set without calling callback', () => {
      const callback = vi.fn(() => 'value')
      expect(forEach(new Set(), callback)).toEqual([])
      expect(callback).not.toHaveBeenCalled()
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

  describe('Collection reference and callback contract', () => {
    it('should provide the exact same collection reference across all collection types', () => {
      const array = [1]
      const map = new Map([['key', 1]])
      const set = new Set([1])
      const object = { a: 1 }

      forEach(array, (_, __, collection) => expect(collection).toBe(array))
      forEach(map, (_, __, collection) => expect(collection).toBe(map))
      forEach(set, (_, __, collection) => expect(collection).toBe(set))
      forEach(object, (_, __, collection) => expect(collection).toBe(object))
    })
  })

  describe('TypeScript exported type tests', () => {
    it('should support interfaces and custom typed objects', () => {
      interface User {
        id: string
        name: string
      }
      const user: User = { id: '100', name: 'Alice' }
      const values = forEach(user, value => value)
      expect(values).toEqual(['100', 'Alice'])
    })

    it('should support numeric keys and PropertyKey in Record objects', () => {
      const data: Record<PropertyKey, string> = {
        0: 'zero',
        1: 'one',
        alpha: 'first'
      }
      const values = forEach(data, value => value)
      expect(values).toEqual(['zero', 'one', 'first'])
    })

    it('should properly type ForEachData and ForEachKey', () => {
      const arrayData: ForEachData<number> = [1, 2]
      const objectData: ForEachData<string> = { a: 'hello' }
      const mapData: ForEachData<boolean> = new Map([['x', true]])
      const setData: ForEachData<number> = new Set([1])

      type ArrayKey = ForEachKey<typeof arrayData>
      type ObjectKey = ForEachKey<typeof objectData>
      type MapKey = ForEachKey<typeof mapData>
      type SetKey = ForEachKey<typeof setData>

      const numberKey: ArrayKey = 0
      const stringKey: ObjectKey = 'a'
      const inferredMapKey: MapKey = 'x'
      const setItemKey: SetKey = 1

      expect(typeof numberKey).toBe('number')
      expect(typeof stringKey).toBe('string')
      expect(typeof inferredMapKey).toBe('string')
      expect(typeof setItemKey).toBe('number')

      expect(forEach(arrayData, item => item)).toEqual([1, 2])
      expect(forEach(objectData, item => item)).toEqual(['hello'])
      expect(forEach(mapData, item => item)).toEqual([true])
      expect(forEach(setData, item => item)).toEqual([1])
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

  describe('Invalid or non-object inputs and immutability', () => {
    it('should return an empty array if data is null or undefined', () => {
      expect(forEach(null as unknown as Record<string, unknown>, () => {})).toEqual([])
      expect(forEach(undefined as unknown as Record<string, unknown>, () => {})).toEqual([])
    })

    it('should return an empty array if data is a primitive (number, string, boolean)', () => {
      expect(forEach(123 as unknown as Record<string, unknown>, () => {})).toEqual([])
      expect(forEach('string' as unknown as Record<string, unknown>, () => {})).toEqual([])
      expect(forEach(true as unknown as Record<string, unknown>, () => {})).toEqual([])
    })

    it('should return an empty array if data is a function', () => {
      expect(forEach((() => {}) as unknown as Record<string, unknown>, () => {})).toEqual([])
    })

    it('should not mutate the original collection during iteration', () => {
      const originalArray = [1, 2, 3]
      const originalObject = { first: 10, second: 20 }

      forEach(originalArray, item => item * 10)
      forEach(originalObject, item => item * 10)

      expect(originalArray).toEqual([1, 2, 3])
      expect(originalObject).toEqual({ first: 10, second: 20 })
    })
  })
})
