import { describe, expect, it } from 'vitest'
import { isDifferent } from '../isDifferent'
import type { ObjectItem } from '../../types/basicTypes'

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

  describe('Edge cases: undefined, nullish, and Object.is semantics (NaN, +0/-0)', () => {
    it('should return true when properties have different keys even if values are both undefined', () => {
      const firstObject: ObjectItem = { a: undefined, common: 1 }
      const secondObject: ObjectItem = { b: undefined, common: 1 }
      expect(isDifferent(firstObject, secondObject)).toBe(true)
    })

    it('should return false when both objects have matching keys with undefined values', () => {
      const firstObject: ObjectItem = { a: undefined, common: 1 }
      const secondObject: ObjectItem = { a: undefined, common: 1 }
      expect(isDifferent(firstObject, secondObject)).toBe(false)
    })

    it('should return false for identical NaN values using Object.is semantics', () => {
      const firstObject = { value: Number.NaN }
      const secondObject = { value: Number.NaN }
      expect(isDifferent(firstObject, secondObject)).toBe(false)
    })

    it('should return true when comparing +0 and -0 using Object.is semantics', () => {
      const firstObject = { value: +0 }
      const secondObject = { value: -0 }
      expect(isDifferent(firstObject, secondObject)).toBe(true)
    })

    it('should return false if both arguments are the same nullish reference', () => {
      expect(isDifferent(null as unknown as ObjectItem, null as unknown as ObjectItem)).toBe(false)
      expect(isDifferent(undefined as unknown as ObjectItem, undefined as unknown as ObjectItem)).toBe(false)
    })

    it('should return true when comparing an object with null or undefined', () => {
      const validObject: ObjectItem = { a: 1 }
      expect(isDifferent(validObject, null as unknown as ObjectItem)).toBe(true)
      expect(isDifferent(null as unknown as ObjectItem, validObject)).toBe(true)
      expect(isDifferent(validObject, undefined as unknown as ObjectItem)).toBe(true)
      expect(isDifferent(undefined as unknown as ObjectItem, validObject)).toBe(true)
      expect(isDifferent(null as unknown as ObjectItem, undefined as unknown as ObjectItem)).toBe(true)
    })

    it('should distinguish between different falsy values (0, false, empty string, null, undefined)', () => {
      expect(isDifferent<unknown>({ value: 0 }, { value: false })).toBe(true)
      expect(isDifferent<unknown>({ value: 0 }, { value: '' })).toBe(true)
      expect(isDifferent<unknown>({ value: false }, { value: '' })).toBe(true)
      expect(isDifferent<unknown>({ value: null }, { value: undefined })).toBe(true)
    })
  })

  describe('Prototype chain isolation', () => {
    it('should only compare own enumerable properties and ignore inherited prototype properties', () => {
      const prototypeObject = { inheritedKey: 'prototypeValue' }
      const firstObject = Object.create(prototypeObject) as ObjectItem
      firstObject.ownKey = 100

      const secondObject: ObjectItem = { ownKey: 100 }
      expect(isDifferent(firstObject, secondObject)).toBe(false)
    })

    it('should detect difference when an object owns a property that exists only on the prototype of another', () => {
      const prototypeObject = { sharedKey: 'value' }
      const firstObject: ObjectItem = { sharedKey: 'value' }
      const secondObject = Object.create(prototypeObject) as ObjectItem
      expect(isDifferent(firstObject, secondObject)).toBe(true)
    })
  })

  describe('Non-standard data types, arrays, and functions', () => {
    it('should work with arrays representing list items', () => {
      const firstArray = [1, 2, 3] as unknown as ObjectItem
      const secondArray = [1, 2, 3] as unknown as ObjectItem
      const thirdArray = [1, 2, 4] as unknown as ObjectItem

      expect(isDifferent(firstArray, secondArray)).toBe(false)
      expect(isDifferent(firstArray, thirdArray)).toBe(true)
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
