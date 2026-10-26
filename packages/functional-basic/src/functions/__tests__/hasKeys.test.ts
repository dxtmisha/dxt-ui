import { describe, expect, it } from 'vitest'
import { hasKeys } from '../hasKeys'

describe('hasKeys', () => {
  describe('Standard functional requirements (Happy path)', () => {
    it('should return true for plain objects with own properties', () => {
      expect(hasKeys({ name: 'Alice' })).toBe(true)
      expect(hasKeys({ count: 42 })).toBe(true)
      expect(hasKeys({ first: 1, second: 2 })).toBe(true)
    })

    it('should return false for empty plain objects', () => {
      expect(hasKeys({})).toBe(false)
    })

    it('should narrow object type in TypeScript when keys exist', () => {
      const data: unknown = { id: 123, title: 'Item' }

      if (hasKeys<Record<string, unknown>>(data)) {
        expect(typeof data.title).toBe('string')
        expect(data.title).toBe('Item')
      } else {
        expect.unreachable('Should have narrowed data to Record<string, unknown>')
      }
    })
  })

  describe('Falsy and special property values', () => {
    it('should return true for objects whose own properties have falsy values', () => {
      expect(hasKeys({ zero: 0 })).toBe(true)
      expect(hasKeys({ flag: false })).toBe(true)
      expect(hasKeys({ empty: '' })).toBe(true)
      expect(hasKeys({ nothing: null })).toBe(true)
      expect(hasKeys({ missing: undefined })).toBe(true)
      expect(hasKeys({ notANumber: NaN })).toBe(true)
    })
  })

  describe('Prototype inheritance and security (Prototype pollution guard)', () => {
    it('should return false for objects having only inherited Object.prototype properties', () => {
      expect(hasKeys({})).toBe(false)

      const prototypeObject = { inherited: 'value' }
      const derivedObject = Object.create(prototypeObject)
      expect(hasKeys(derivedObject)).toBe(false)
    })

    it('should return true if inherited property is shadowed by an own property', () => {
      const prototypeObject = { inherited: 'value' }
      const derivedObject = Object.create(prototypeObject)
      derivedObject.ownField = 'custom'

      expect(hasKeys(derivedObject)).toBe(true)
    })

    it('should return true if a standard prototype property is explicitly defined as an own property', () => {
      expect(hasKeys({ toString: 'custom' })).toBe(true)
      expect(hasKeys({ valueOf: 1 })).toBe(true)
      expect(hasKeys({ constructor: 'overridden' })).toBe(true)
      expect(hasKeys({ hasOwnProperty: () => false })).toBe(true)
    })

    it('should work correctly with null-prototype objects (Object.create(null))', () => {
      const emptyDictionary = Object.create(null)
      expect(hasKeys(emptyDictionary)).toBe(false)

      const filledDictionary = Object.create(null)
      filledDictionary.foo = 'bar'
      expect(hasKeys(filledDictionary)).toBe(true)
    })

    it('should distinguish own instance fields from prototype methods on class instances', () => {
      class EmptyClass {
        public method(): string {
          return 'hello'
        }
      }

      class FilledClass {
        public ownField = 'value'
        public method(): string {
          return this.ownField
        }
      }

      expect(hasKeys(new EmptyClass())).toBe(false)
      expect(hasKeys(new FilledClass())).toBe(true)
    })
  })

  describe('Arrays and special keys', () => {
    it('should return false for empty arrays and true for non-empty arrays', () => {
      expect(hasKeys([])).toBe(false)
      expect(hasKeys(['a'])).toBe(true)
      expect(hasKeys([0])).toBe(true)
    })

    it('should support multilingual, Unicode, and empty string keys', () => {
      expect(hasKeys({ '': 'emptyKey' })).toBe(true)
      expect(hasKeys({ ключ: 'значение' })).toBe(true)
      expect(hasKeys({ khóa: 'giá trị' })).toBe(true)
      expect(hasKeys({ '🚀': 'rocket' })).toBe(true)
    })
  })

  describe('Functions, primitives, and nullish inputs', () => {
    it('should return false for plain functions without own properties', () => {
      const plainFunction = () => {}
      expect(hasKeys(plainFunction)).toBe(false)
    })

    it('should return true for functions with own custom properties', () => {
      const functionWithProperty = () => {}
      functionWithProperty.customField = 'value'
      expect(hasKeys(functionWithProperty)).toBe(true)
    })

    it('should safely return false for null and undefined without throwing', () => {
      expect(hasKeys(null)).toBe(false)
      expect(hasKeys(undefined)).toBe(false)
    })

    it('should safely return false for primitive non-objects including strings', () => {
      expect(hasKeys('')).toBe(false)
      expect(hasKeys('hello')).toBe(false)
      expect(hasKeys(123)).toBe(false)
      expect(hasKeys(0)).toBe(false)
      expect(hasKeys(true)).toBe(false)
      expect(hasKeys(false)).toBe(false)
      expect(hasKeys(Symbol('symbol'))).toBe(false)
      expect(hasKeys(BigInt(100))).toBe(false)
    })
  })
})
