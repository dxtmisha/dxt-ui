import { describe, expect, it } from 'vitest'
import { hasKey } from '../hasKey'

describe('hasKey', () => {
  describe('Standard functional requirements (Happy path)', () => {
    it('should return true for existing own properties in plain objects', () => {
      expect(hasKey({ name: 'Alice' }, 'name')).toBe(true)
      expect(hasKey({ count: 42 }, 'count')).toBe(true)
    })

    it('should return false for missing keys in objects', () => {
      expect(hasKey({ name: 'Alice' }, 'age')).toBe(false)
      expect(hasKey({}, 'missing')).toBe(false)
    })

    it('should narrow object type in TypeScript when property exists', () => {
      const data: unknown = { id: 123, title: 'Item' }

      if (hasKey(data, 'title')) {
        expect(typeof data.title).toBe('string')
        expect(data.title).toBe('Item')
      } else {
        expect.unreachable('Should have narrowed data to Record<"title", unknown>')
      }
    })
  })

  describe('Falsy and special property values', () => {
    it('should return true for own properties whose values are falsy', () => {
      expect(hasKey({ zero: 0 }, 'zero')).toBe(true)
      expect(hasKey({ flag: false }, 'flag')).toBe(true)
      expect(hasKey({ empty: '' }, 'empty')).toBe(true)
      expect(hasKey({ nothing: null }, 'nothing')).toBe(true)
      expect(hasKey({ missing: undefined }, 'missing')).toBe(true)
      expect(hasKey({ notANumber: NaN }, 'notANumber')).toBe(true)
    })
  })

  describe('Prototype inheritance and security (Prototype pollution guard)', () => {
    it('should return false for inherited Object.prototype properties', () => {
      expect(hasKey({}, 'toString')).toBe(false)
      expect(hasKey({}, 'valueOf')).toBe(false)
      expect(hasKey({}, 'constructor')).toBe(false)
      expect(hasKey({}, '__proto__')).toBe(false)
      expect(hasKey({}, 'hasOwnProperty')).toBe(false)
      expect(hasKey({}, 'isPrototypeOf')).toBe(false)
    })

    it('should return true if a prototype property is explicitly overridden as an own property', () => {
      expect(hasKey({ toString: 'custom' }, 'toString')).toBe(true)
      expect(hasKey({ valueOf: 1 }, 'valueOf')).toBe(true)
      expect(hasKey({ constructor: 'overridden' }, 'constructor')).toBe(true)
      expect(hasKey({ hasOwnProperty: () => false }, 'hasOwnProperty')).toBe(true)
    })

    it('should work correctly with null-prototype objects (Object.create(null))', () => {
      const dictionary = Object.create(null) as Record<string, string>
      dictionary.foo = 'bar'

      expect(hasKey(dictionary, 'foo')).toBe(true)
      expect(hasKey(dictionary, 'missing')).toBe(false)
      expect(hasKey(dictionary, 'toString')).toBe(false)
    })

    it('should distinguish own instance fields from prototype methods on class instances', () => {
      class SampleEntity {
        public ownField = 'value'
        public inheritedMethod(): string {
          return this.ownField
        }
      }

      const instance = new SampleEntity()
      expect(hasKey(instance, 'ownField')).toBe(true)
      expect(hasKey(instance, 'inheritedMethod')).toBe(false)
    })
  })

  describe('Key types (Symbols, Numbers, Arrays, and Unicode)', () => {
    it('should support symbol keys', () => {
      const symbolKey = Symbol('test')
      expect(hasKey({ [symbolKey]: 'value' }, symbolKey)).toBe(true)
      expect(hasKey({}, symbolKey)).toBe(false)
    })

    it('should support numeric keys and array indices', () => {
      expect(hasKey({ 0: 'first', 1: 'second' }, 0)).toBe(true)
      expect(hasKey({ 0: 'first', 1: 'second' }, 2)).toBe(false)
      expect(hasKey(['a', 'b', 'c'], 0)).toBe(true)
      expect(hasKey(['a', 'b', 'c'], 1)).toBe(true)
      expect(hasKey(['a', 'b', 'c'], 10)).toBe(false)
      expect(hasKey(['a', 'b', 'c'], 'length')).toBe(true)
    })

    it('should support multilingual, Unicode, and empty string keys', () => {
      const unicodeObject = {
        '': 'emptyKey',
        'ключ': 'значение',
        'khóa': 'giá trị',
        '🚀': 'rocket'
      }

      expect(hasKey(unicodeObject, '')).toBe(true)
      expect(hasKey(unicodeObject, 'ключ')).toBe(true)
      expect(hasKey(unicodeObject, 'khóa')).toBe(true)
      expect(hasKey(unicodeObject, '🚀')).toBe(true)
    })
  })

  describe('Functions, primitives, and nullish inputs', () => {
    it('should support functions with own properties', () => {
      const callback = () => {}
      callback.customProperty = 'test'

      expect(hasKey(callback, 'customProperty')).toBe(true)
      expect(hasKey(callback, 'missing')).toBe(false)
    })

    it('should safely return false for null and undefined without throwing', () => {
      expect(hasKey(null, 'foo')).toBe(false)
      expect(hasKey(undefined, 'foo')).toBe(false)
    })

    it('should safely return false for primitive non-objects including strings', () => {
      expect(hasKey('hello', '0')).toBe(false)
      expect(hasKey('hello', 0)).toBe(false)
      expect(hasKey('hello', 'length')).toBe(false)
      expect(hasKey(123, 'toString')).toBe(false)
      expect(hasKey(0, 'valueOf')).toBe(false)
      expect(hasKey(true, 'foo')).toBe(false)
      expect(hasKey(false, 'foo')).toBe(false)
      expect(hasKey(Symbol('symbol'), 'description')).toBe(false)
      expect(hasKey(BigInt(100), 'foo')).toBe(false)
    })
  })
})
