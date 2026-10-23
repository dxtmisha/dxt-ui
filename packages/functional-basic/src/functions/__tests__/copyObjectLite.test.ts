import { describe, it, expect } from 'vitest'
import { copyObjectLite } from '../copyObjectLite'

describe('copyObjectLite', () => {
  describe('Standard functional requirements (Happy path)', () => {
    it('should create a shallow copy of an object', () => {
      const original = { a: 1, b: 'hello', c: true }
      const copy = copyObjectLite(original)

      expect(copy).toEqual(original)
      expect(copy).not.toBe(original)
    })

    it('should merge additional properties from the source object', () => {
      const original = { a: 1, b: 2 }
      const source = { b: 3, c: 4 }
      const copy = copyObjectLite<typeof original, typeof original & typeof source>(original, source)

      expect(copy).toEqual({ a: 1, b: 3, c: 4 })
      expect(copy).not.toBe(original)
      expect(copy).not.toBe(source)
    })

    it('should override properties in value with matching properties from source', () => {
      const original = { theme: 'light', size: 'md', disabled: false }
      const source = { theme: 'dark', disabled: true }
      const copy = copyObjectLite(original, source)

      expect(copy).toEqual({ theme: 'dark', size: 'md', disabled: true })
    })
  })

  describe('Shallow reference semantics and mutation isolation', () => {
    it('should share nested object and array references (shallow copy contract)', () => {
      const nestedObject = { count: 2 }
      const nestedArray = ['x', 'y']
      const original = { a: 1, nested: nestedObject, list: nestedArray }
      const copy = copyObjectLite(original)

      expect(copy).toEqual(original)
      expect(copy).not.toBe(original)
      expect(copy.nested).toBe(original.nested)
      expect(copy.list).toBe(original.list)
    })

    it('should not mutate the original value object or source object during merge', () => {
      const original = { a: 1, b: 2 }
      const source = { b: 20, c: 30 }
      const copy = copyObjectLite<typeof original, { a: number, b: number, c: number }>(original, source)

      copy.a = 100
      copy.b = 200
      copy.c = 300

      expect(original).toEqual({ a: 1, b: 2 })
      expect(source).toEqual({ b: 20, c: 30 })
    })

    it('should safely copy deeply frozen objects into a new extensible top-level object', () => {
      const frozenValue = Object.freeze({ id: 1, label: 'Initial' })
      const frozenSource = Object.freeze({ label: 'Updated', extra: true })

      const copy = copyObjectLite<typeof frozenValue, { id: number, label: string, extra: boolean }>(
        frozenValue,
        frozenSource
      )

      expect(Object.isFrozen(copy)).toBe(false)
      copy.label = 'Mutated on copy'

      expect(copy.label).toBe('Mutated on copy')
      expect(frozenValue.label).toBe('Initial')
      expect(frozenSource.label).toBe('Updated')
    })
  })

  describe('Empty, nullish, and missing inputs', () => {
    it('should handle omitted or undefined source parameter gracefully', () => {
      const original = { a: 1 }

      const copyOmitted = copyObjectLite(original)
      expect(copyOmitted).toEqual({ a: 1 })
      expect(copyOmitted).not.toBe(original)

      const copyUndefined = copyObjectLite(original, undefined)
      expect(copyUndefined).toEqual({ a: 1 })
      expect(copyUndefined).not.toBe(original)
    })

    it('should handle null as source parameter gracefully', () => {
      const original = { a: 1, b: 'text' }
      const copy = copyObjectLite(original, null)

      expect(copy).toEqual({ a: 1, b: 'text' })
      expect(copy).not.toBe(original)
    })

    it('should handle empty objects for both value and source', () => {
      const emptyValue = {}
      const emptySource = {}
      const copy = copyObjectLite(emptyValue, emptySource)

      expect(copy).toEqual({})
      expect(copy).not.toBe(emptyValue)
      expect(copy).not.toBe(emptySource)
    })

    it('should safely return an empty object or source properties when value is null or undefined', () => {
      expect(copyObjectLite(null as unknown as Record<string, unknown>)).toEqual({})
      expect(copyObjectLite(undefined as unknown as Record<string, unknown>)).toEqual({})
      expect(copyObjectLite(null as unknown as Record<string, unknown>, { fallback: 1 })).toEqual({ fallback: 1 })
      expect(copyObjectLite(undefined as unknown as Record<string, unknown>, { fallback: 2 })).toEqual({ fallback: 2 })
    })
  })

  describe('Falsy values, special types, and property preservation', () => {
    it('should preserve falsy values (0, false, empty string, null, undefined, NaN) in both value and source', () => {
      const original = {
        zero: 10,
        booleanFalse: true,
        emptyString: 'non-empty',
        nullValue: 'something',
        undefinedValue: 'defined',
        nanValue: 1
      }
      const source = {
        zero: 0,
        booleanFalse: false,
        emptyString: '',
        nullValue: null,
        undefinedValue: undefined,
        nanValue: NaN
      }

      const copy = copyObjectLite(original, source)

      expect(copy.zero).toBe(0)
      expect(copy.booleanFalse).toBe(false)
      expect(copy.emptyString).toBe('')
      expect(copy.nullValue).toBeNull()
      expect('undefinedValue' in copy).toBe(true)
      expect(copy.undefinedValue).toBeUndefined()
      expect(Number.isNaN(copy.nanValue)).toBe(true)
    })

    it('should preserve functions, Symbols, Dates, RegExps, and BigInts without JSON loss', () => {
      const callback = () => 'result'
      const symbolKey = Symbol('token')
      const dateInstance = new Date('2026-01-01T00:00:00.000Z')
      const regExpInstance = /pattern/gi

      const original = {
        callback,
        dateInstance,
        bigIntValue: 9007199254740991n,
        [symbolKey]: 'symbol-data'
      }
      const source = {
        regExpInstance
      }

      const copy = copyObjectLite<
        typeof original,
        typeof original & typeof source
      >(original, source)

      expect(copy.callback).toBe(callback)
      expect(copy.dateInstance).toBe(dateInstance)
      expect(copy.regExpInstance).toBe(regExpInstance)
      expect(copy.bigIntValue).toBe(9007199254740991n)
      expect(copy[symbolKey]).toBe('symbol-data')
    })

    it('should copy only own enumerable properties and ignore inherited prototype properties', () => {
      const prototypeObject = { inherited: 'from-proto' }
      const instance = Object.create(prototypeObject) as { own: string, inherited?: string }
      instance.own = 'own-prop'

      const copy = copyObjectLite(instance)

      expect(copy).toEqual({ own: 'own-prop' })
      expect('inherited' in copy).toBe(false)
    })

    it('should handle prototype-less objects created via Object.create(null)', () => {
      const nullPrototypeValue = Object.create(null) as Record<string, unknown>
      nullPrototypeValue.first = 1

      const nullPrototypeSource = Object.create(null) as Record<string, unknown>
      nullPrototypeSource.second = 2

      const copy = copyObjectLite(nullPrototypeValue, nullPrototypeSource)

      expect(copy).toEqual({ first: 1, second: 2 })
      expect(Object.getPrototypeOf(copy)).toBe(Object.prototype)
    })
  })

  describe('Multilingual and Unicode support', () => {
    it('should preserve Cyrillic, Vietnamese, CJK, and Emoji keys and values', () => {
      const original = {
        заголовок: 'Привет Мир',
        tiếngViệt: 'Xin chào'
      }
      const source = {
        中文: '你好世界',
        emoji: '🚀 🔥 ✨'
      }

      const copy = copyObjectLite<typeof original, typeof original & typeof source>(original, source)

      expect(copy).toEqual({
        заголовок: 'Привет Мир',
        tiếngViệt: 'Xin chào',
        中文: '你好世界',
        emoji: '🚀 🔥 ✨'
      })
    })
  })

  describe('Determinism and purity', () => {
    it('should produce distinct top-level object instances across repeated calls', () => {
      const original = { key: 'value' }
      const source = { extra: 42 }

      const firstCopy = copyObjectLite(original, source)
      const secondCopy = copyObjectLite(original, source)

      expect(firstCopy).toEqual(secondCopy)
      expect(firstCopy).not.toBe(secondCopy)
    })
  })
})
