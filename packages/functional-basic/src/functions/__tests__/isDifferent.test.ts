import { describe, expect, it } from 'vitest'
import { isDifferent } from '../isDifferent'

describe('isDifferent', () => {
  describe('Standard functional requirements (Happy path)', () => {
    it('should return false for identical object references (O(1) fast-path)', () => {
      const objectItem = { a: 1, b: 2 }
      expect(isDifferent(objectItem, objectItem)).toBe(false)
    })

    it('should return false for distinct objects with identical properties and values', () => {
      const firstObject = { a: 1, b: 'hello', c: true }
      const secondObject = { a: 1, b: 'hello', c: true }
      expect(isDifferent(firstObject, secondObject)).toBe(false)
    })

    it('should return true if properties have different values', () => {
      const firstObject = { a: 1, b: 2 }
      const secondObject = { a: 1, b: 3 }
      expect(isDifferent(firstObject, secondObject)).toBe(true)
    })

    it('should return true if objects have a different number of properties', () => {
      const firstObject = { a: 1, b: 2 }
      const secondObject = { a: 1 }
      expect(isDifferent(firstObject, secondObject)).toBe(true)
    })

    it('should return true if objects have same number of keys but different keys', () => {
      const firstObject = { a: 1, b: 2 }
      const secondObject = { a: 1, c: 2 }
      expect(isDifferent(firstObject, secondObject)).toBe(true)
    })

    it('should return false for empty objects', () => {
      expect(isDifferent({}, {})).toBe(false)
    })

    it('should return false regardless of property insertion order', () => {
      const firstObject = { a: 1, b: 2, c: 3 }
      const secondObject = { c: 3, a: 1, b: 2 }
      expect(isDifferent(firstObject, secondObject)).toBe(false)
    })
  })

  describe('Edge cases: undefined, nullish, and NaN', () => {
    it('should return true when properties have different keys even if values are both undefined', () => {
      // Critical regression test: { a: undefined } and { b: undefined } must not be considered identical
      const firstObject = { a: undefined, common: 1 }
      const secondObject = { b: undefined, common: 1 }
      expect(isDifferent(firstObject, secondObject)).toBe(true)
    })

    it('should return false when both objects have matching keys with undefined values', () => {
      const firstObject = { a: undefined, common: 1 }
      const secondObject = { a: undefined, common: 1 }
      expect(isDifferent(firstObject, secondObject)).toBe(false)
    })

    it('should return false for identical NaN values using Object.is semantics', () => {
      const firstObject = { value: NaN }
      const secondObject = { value: NaN }
      expect(isDifferent(firstObject, secondObject)).toBe(false)
    })

    it('should return false if both arguments are the same nullish reference', () => {
      expect(isDifferent(null as any, null as any)).toBe(false)
      expect(isDifferent(undefined as any, undefined as any)).toBe(false)
    })

    it('should return true when comparing an object with null or undefined', () => {
      const validObject = { a: 1 }
      expect(isDifferent(validObject, null as any)).toBe(true)
      expect(isDifferent(null as any, validObject)).toBe(true)
      expect(isDifferent(validObject, undefined as any)).toBe(true)
      expect(isDifferent(undefined as any, validObject)).toBe(true)
    })

    it('should distinguish between different falsy values (0, false, empty string, null, undefined)', () => {
      expect(isDifferent({ val: 0 }, { val: false as any })).toBe(true)
      expect(isDifferent({ val: 0 }, { val: '' as any })).toBe(true)
      expect(isDifferent({ val: false }, { val: '' as any })).toBe(true)
      expect(isDifferent({ val: null }, { val: undefined as any })).toBe(true)
    })
  })

  describe('Prototype chain isolation', () => {
    it('should only compare own enumerable properties and ignore inherited prototype properties', () => {
      const prototypeObject = { inheritedKey: 'prototypeValue' }
      const firstObject = Object.create(prototypeObject)
      firstObject.ownKey = 100

      const secondObject = { ownKey: 100 }
      expect(isDifferent(firstObject, secondObject)).toBe(false)
    })

    it('should detect difference when an object owns a property that exists only on the prototype of another', () => {
      const prototypeObject = { sharedKey: 'value' }
      const firstObject = { sharedKey: 'value' }
      const secondObject = Object.create(prototypeObject)
      // secondObject does NOT own sharedKey, so keys length differs (1 !== 0)
      expect(isDifferent(firstObject, secondObject)).toBe(true)
    })
  })

  describe('Non-standard data types, arrays, and functions', () => {
    it('should work with arrays representing list items', () => {
      const firstArray = [1, 2, 3]
      const secondArray = [1, 2, 3]
      const thirdArray = [1, 2, 4]

      expect(isDifferent(firstArray as any, secondArray as any)).toBe(false)
      expect(isDifferent(firstArray as any, thirdArray as any)).toBe(true)
    })

    it('should compare function properties by reference', () => {
      const sharedFunction = () => 'test'
      const firstObject = { callback: sharedFunction }
      const secondObject = { callback: sharedFunction }
      const thirdObject = { callback: () => 'test' }

      expect(isDifferent(firstObject, secondObject)).toBe(false)
      expect(isDifferent(firstObject, thirdObject)).toBe(true)
    })

    it('should perform shallow comparison for nested objects (comparing by reference)', () => {
      const sharedNested = { count: 10 }
      const firstObject = { nested: sharedNested }
      const secondObject = { nested: sharedNested }
      const thirdObject = { nested: { count: 10 } }

      expect(isDifferent(firstObject, secondObject)).toBe(false)
      expect(isDifferent(firstObject, thirdObject)).toBe(true)
    })
  })
})
