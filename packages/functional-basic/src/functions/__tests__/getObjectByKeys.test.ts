import { describe, it, expect } from 'vitest'
import { getObjectByKeys } from '../getObjectByKeys'

describe('getObjectByKeys', () => {
  describe('Standard functional requirements (Happy path)', () => {
    it('should return a new object with only the specified keys', () => {
      const data = { a: 1, b: 2, c: 3 }
      expect(getObjectByKeys(data, ['a', 'c'])).toEqual({ a: 1, c: 3 })
    })

    it('should return all properties when all keys are specified', () => {
      const data = { first: 'alpha', second: 'beta' }
      expect(getObjectByKeys(data, ['first', 'second'])).toEqual({
        first: 'alpha',
        second: 'beta'
      })
    })

    it('should handle duplicate keys in the keys list without issues', () => {
      const data = { a: 10, b: 20 }
      expect(getObjectByKeys(data, ['a', 'a', 'b'])).toEqual({ a: 10, b: 20 })
    })

    it('should ignore inherited properties on the prototype chain and only include own properties', () => {
      const prototypeObject = { inheritedKey: 'fromPrototype' }
      const data = Object.create(prototypeObject) as {
        inheritedKey: string
        ownKey: string
      }
      data.ownKey = 'fromOwn'

      expect(getObjectByKeys(data, ['inheritedKey', 'ownKey'])).toEqual({
        ownKey: 'fromOwn'
      })
      // @ts-expect-error testing runtime exclusion of Object.prototype methods
      expect(getObjectByKeys({ ownKey: 'value' }, ['ownKey', 'toString', 'valueOf'])).toEqual({
        ownKey: 'value'
      })
    })

    it('should ignore prototype pollution keys (__proto__, constructor, prototype) even if present as own properties', () => {
      const data = Object.defineProperty(
        { safeKey: 'safeValue', constructor: 'maliciousConstructor', prototype: 'maliciousPrototype' },
        '__proto__',
        {
          value: { polluted: true },
          enumerable: true,
          configurable: true,
          writable: true
        }
      ) as Record<string, unknown>

      expect(
        getObjectByKeys(data, ['safeKey', '__proto__', 'constructor', 'prototype'])
      ).toEqual({
        safeKey: 'safeValue'
      })
    })
  })

  describe('Boundary values and falsy property values', () => {
    it('should ignore keys whose values are explicitly undefined in the source object', () => {
      const data = { name: 'Alice', age: undefined, role: 'Admin' }
      expect(getObjectByKeys(data, ['name', 'age', 'role'])).toEqual({
        name: 'Alice',
        role: 'Admin'
      })
    })

    it('should include keys whose values are null, 0, -0, false, empty string, NaN, or Infinity', () => {
      const data = {
        nullValue: null,
        zero: 0,
        negativeZero: -0,
        booleanFalse: false,
        emptyString: '',
        notANumber: Number.NaN,
        positiveInfinity: Number.POSITIVE_INFINITY,
        negativeInfinity: Number.NEGATIVE_INFINITY
      }
      const keys: (keyof typeof data)[] = [
        'nullValue',
        'zero',
        'negativeZero',
        'booleanFalse',
        'emptyString',
        'notANumber',
        'positiveInfinity',
        'negativeInfinity'
      ]

      expect(getObjectByKeys(data, keys)).toEqual({
        nullValue: null,
        zero: 0,
        negativeZero: -0,
        booleanFalse: false,
        emptyString: '',
        notANumber: Number.NaN,
        positiveInfinity: Number.POSITIVE_INFINITY,
        negativeInfinity: Number.NEGATIVE_INFINITY
      })
    })
  })

  describe('Empty, missing keys, and non-plain-object inputs', () => {
    it('should ignore keys that do not exist in the source object', () => {
      const data = { x: 10, y: 20 }
      // @ts-expect-error testing runtime behavior with non-existent key
      expect(getObjectByKeys(data, ['x', 'z'])).toEqual({ x: 10 })
    })

    it('should return an empty object if no matching keys are found', () => {
      const data = { a: 1, b: 2 }
      // @ts-expect-error testing runtime behavior when none of the keys exist
      expect(getObjectByKeys(data, ['c', 'd'])).toEqual({})
    })

    it('should return an empty object if an empty array of keys is provided', () => {
      const data = { a: 1, b: 2 }
      expect(getObjectByKeys(data, [])).toEqual({})
    })

    it('should return an empty object if the source object is empty', () => {
      const data: Record<string, unknown> = {}
      expect(getObjectByKeys(data, ['a'])).toEqual({})
    })

    it('should return an empty object when data is an array, null, undefined, or primitive', () => {
      // @ts-expect-error testing runtime guard for array input
      expect(getObjectByKeys(['a', 'b'], [0])).toEqual({})
      // @ts-expect-error testing runtime guard for null input
      expect(getObjectByKeys(null, ['a'])).toEqual({})
      // @ts-expect-error testing runtime guard for undefined input
      expect(getObjectByKeys(undefined, ['a'])).toEqual({})
      // @ts-expect-error testing runtime guard for numeric primitive
      expect(getObjectByKeys(42, ['toString'])).toEqual({})
      // @ts-expect-error testing runtime guard for string primitive
      expect(getObjectByKeys('hello', ['length'])).toEqual({})
      // @ts-expect-error testing runtime guard for boolean primitive
      expect(getObjectByKeys(false, ['valueOf'])).toEqual({})
    })
  })

  describe('Multilingual and Unicode support', () => {
    it('should correctly pick Cyrillic, Vietnamese, CJK, and Emoji keys', () => {
      const data = {
        'имя': 'Иван',
        'возраст': 30,
        'tiêu_đề': 'Học tiếng Việt',
        '你好': '世界',
        '🚀': 'launch'
      }

      expect(getObjectByKeys(data, ['имя', 'tiêu_đề', '🚀'])).toEqual({
        'имя': 'Иван',
        'tiêu_đề': 'Học tiếng Việt',
        '🚀': 'launch'
      })
    })
  })

  describe('Statefulness, immutability, and reference isolation', () => {
    it('should return a new object reference and not mutate the input object or keys array', () => {
      const data = { a: 1, b: 2, c: 3 }
      const keys: (keyof typeof data)[] = ['a', 'b']
      const result = getObjectByKeys(data, keys)

      expect(result).not.toBe(data)
      expect(data).toEqual({ a: 1, b: 2, c: 3 })
      expect(keys).toEqual(['a', 'b'])
    })

    it('should preserve shallow references for nested objects and arrays', () => {
      const nestedObject = { deep: true }
      const nestedArray = [1, 2, 3]
      const data = {
        nestedObject,
        nestedArray,
        ignored: 'skip'
      }

      const result = getObjectByKeys(data, ['nestedObject', 'nestedArray'])
      expect(result.nestedObject).toBe(nestedObject)
      expect(result.nestedArray).toBe(nestedArray)
    })
  })
})
